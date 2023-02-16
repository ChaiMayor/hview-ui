import { ref, reactive } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Slider from "../src/slider.vue";
import Runway from "../src/runway.vue";
import Marker from "../src/marker.vue";
import { sleep } from "@hview-plus/test-utils";
import type { CSSProperties } from "vue";

describe("slider.vue", () => {
  test("create", async () => {
    const val = ref(36);

    const wrapper = mount(
      <Slider
        v-model={val.value}
        size="default"
        inputSize="default"
        min={1}
        max={100}
        show-tooltip={false}
      />,
    );

    expect(wrapper.find(".h-slider").exists()).toBe(true);
  });

  test("watch props modelValue change", async () => {
    const val = ref(36);

    const wrapper = mount(<Slider v-model={val.value} />);

    await wrapper.setProps({
      modelValue: 40,
    });

    expect(wrapper.find(".h-slider").exists()).toBe(true);
  });

  test("steps", async () => {
    const val = ref(36);

    const wrapper = mount(<Slider v-model={val.value} step={10} />);

    await wrapper.setProps({
      modelValue: 40,
    });

    expect(wrapper.props("modelValue")).toBe(40);
  });

  test("steps input-number", async () => {
    const val = ref(40);
    const wrapper = mount(<Slider v-model={val.value} step={2} show-input />);

    await wrapper.vm.changeNumberValue(1, 40);
  });

  test("mark support", async () => {
    interface Mark {
      style: CSSProperties;
      label: string;
    }

    type Marks = Record<number, Mark | string>;

    const val = ref([30, 60]);
    const marks = ref<Marks>({
      0: "0°C",
      8: "8°C",
      37: "37°C",
      50: {
        style: {
          color: "#5d80f4",
        },
        label: "50%",
      },
    });

    const wrapper = mount(Slider, {
      modelValue: val.value,
      range: true,
      marks: marks.value,
      showStops: true,
    });
  });

  test("formatTooltip", async () => {
    const val = ref([4, 8]);

    const formatTooltip = (val: number) => {
      return val / 100;
    };

    const wrapper = mount(
      <Slider
        v-model={val.value}
        range={true}
        max={10}
        showStops
        format-tooltip={formatTooltip}
      />,
    );
  });

  test("range select", async () => {
    const val = ref([4, 8]);
    const wrapper = mount(<Slider v-model={val.value} range={true} max={10} />);

    const runway = wrapper.findComponent(Runway);
    // @ts-ignore
    runway.vm.runwayClick(new Event("click"));

    expect(wrapper.findAll(".h-slider__button-wrapper").length).toBe(2);
  });
});

describe("slider-runway.vue", () => {
  test("trigger change click", async () => {
    const value = ref(36);

    const wrapper = mount(<Slider modelValue={value.value} />);

    const runway = wrapper.findComponent(Runway);
    // @ts-ignore
    runway.vm.runwayClick(new Event("click"));
  });
});

describe("slider-marker.vue", () => {
  test("percentage buttonStyle", async () => {
    const value = ref(36);
    const wrapper = mount(<Slider modelValue={value.value} />);
    const marker = wrapper.findComponent(Marker);

    // @ts-ignore
    await marker.find(".h-slider__button").element.onmousedown();

    const mousemove = new MouseEvent("mousemove", {
      screenX: 100,
      screenY: 0,
      clientX: 100,
      clientY: 0,
    });
    document.dispatchEvent(mousemove);
  });

  test("disabled", async () => {
    const value = ref(36);
    const wrapper = mount(Slider, {
      props: {
        modelValue: value.value,
        disabled: true,
      },
      attachTo: document.body,
    });
    const marker = wrapper.findComponent(Marker);
    expect(marker.props("disabled")).toBe(true);

    // @ts-ignore
    await marker.find(".h-slider__button").element.onmousedown();

    const mousemove = new MouseEvent("mousemove", {
      screenX: 100,
      screenY: 0,
      clientX: 100,
      clientY: 0,
    });
    document.dispatchEvent(mousemove);

    const mouseup = new MouseEvent("mouseup", {
      screenX: 100,
      screenY: 0,
      clientX: 100,
      clientY: 0,
    });
    document.dispatchEvent(mouseup);

    const runway = wrapper.findComponent(Runway);
    // @ts-ignore
    runway.vm.runwayClick(new Event("click"));

    await sleep(80);
  });

  test("vertical", async () => {
    const value = ref(36);
    const wrapper = mount(Slider, {
      props: {
        modelValue: value.value,
        vertical: true,
        height: 200,
      },
      attachTo: document.body,
    });
    const marker = wrapper.findComponent(Marker);
    expect(marker.props("vertical")).toBe(true);

    // @ts-ignore
    await marker.find(".h-slider__button").element.onmousedown();

    const mousemove = new MouseEvent("mousemove", {
      screenX: 100,
      screenY: 0,
      clientX: 100,
      clientY: 0,
    });
    document.dispatchEvent(mousemove);

    const mouseup = new MouseEvent("mouseup", {
      screenX: 100,
      screenY: 0,
      clientX: 100,
      clientY: 0,
    });
    document.dispatchEvent(mouseup);

    const runway = wrapper.findComponent(Runway);
    // @ts-ignore
    runway.vm.runwayClick(new Event("click"));

    await sleep(80);

    wrapper.unmount();
  });
});
