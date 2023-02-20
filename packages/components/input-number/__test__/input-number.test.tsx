import { ref } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import InputNumber from "../src/input-number.vue";

describe("InputNumber.vue", () => {
  test("create", async () => {
    const num = ref(1);
    const handleChange = (value: number) => {};

    const wrapper = mount(
      <InputNumber
        v-model={num.value}
        min={1}
        max={10}
        onChange={handleChange}
      />,
    );

    await wrapper.setProps({
      modelValue: 40,
    });

    await wrapper.setProps({
      modelValue: 0,
    });

    wrapper.vm.focusInput();
    expect(wrapper.find("input").exists()).toBe(true);
  });

  test("modelValue", () => {
    const inputText = ref(1);
    const wrapper = mount(<InputNumber modelValue={inputText.value} />);
    expect(wrapper.find("input").element.value).toEqual("1");
  });

  test("size", async () => {
    const wrapper = mount(<InputNumber size="large" />);

    expect(wrapper.classes().includes("large")).toBe(true);
  });

  test("methods", async () => {
    const wrapper = mount(<InputNumber />);
    wrapper.vm.inputGetFocus();
    wrapper.vm.inputGetBlur();
  });

  test("precision", async () => {
    const num = ref(1);
    const wrapper = mount(
      <InputNumber v-model={num.value} precision={2} step={0.1} max={10} />,
    );

    await wrapper.setProps({
      modelValue: 4.1,
    });

    await wrapper.setProps({
      modelValue: 4,
    });
  });

  test("increase and decrease", async () => {
    const num = ref(4);
    const wrapper = mount(<InputNumber v-model={num.value} min={1} max={10} />);
    wrapper.vm.decrease(1);
    wrapper.vm.increase(1);
  });

  test("blur", async () => {
    const num = ref(5);

    const wrapper = mount(
      <InputNumber
        v-model={num.value}
        min={1}
        max={10}
        step={4}
        step-strictly
      />,
    );
    const blur = new FocusEvent("blur", {});

    await wrapper.vm.blurInput(blur, 3);

    await wrapper.vm.blurInput(blur, 5);
  });

  test("HMR", async () => {
    const num = ref(1);

    const wrapper = mount(
      <InputNumber v-model={num.value} min={1} max={10} disabled />,
    );

    await wrapper.setProps({
      disabled: false,
    });
  });

  test("disabled", async () => {
    const num = ref(1);
    const wrapper = mount(
      <InputNumber v-model={num.value} min={1} max={10} disabled />,
    );
    wrapper.vm.decrease(1);
    wrapper.vm.increase(10);

    wrapper.vm.isTriggerLimit(-10);
    wrapper.vm.isTriggerLimit(15);
  });

  test("controls right", async () => {
    const num = ref(1);
    const wrapper = mount(
      <InputNumber
        modelValue={num.value}
        controls-position="right"
        min={1}
        max={10}
      />,
    );

    const decrease = wrapper.find(".h-input-number__decrease");
    decrease.trigger("click");
    const increase = wrapper.find(".h-input-number__increase");
    increase.trigger("click");

    wrapper.vm.inputGetFocus();
    wrapper.vm.inputGetBlur();
  });

  test("click", async () => {
    const num = ref(1);
    const wrapper = mount(<InputNumber modelValue={num.value} />);

    const decrease = wrapper.find(".h-input-number__decrease");
    decrease.trigger("click");
    const increase = wrapper.find(".h-input-number__increase");
    increase.trigger("click");
  });
});
