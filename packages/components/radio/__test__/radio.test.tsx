import { ref } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Radio from "../src/radio.vue";
import { OptionsItem } from "../src/radio";

describe("radio.vue", () => {
  test("create", async () => {
    const change = () => {};

    const value = ref<string>("1");
    const options = ref<OptionsItem[]>([
      {
        label: "Option 1",
        id: 1,
      },
      {
        label: "Option 2",
        id: 2,
      },
    ]);

    const wrapper = mount(
      <Radio v-model={value.value} options={options.value} onChange={change} />,
    );

    wrapper.vm.change("Option 1", 1);
    wrapper.vm.inlineStyle();
    expect(wrapper.find(".h-radio-item-button").exists()).toBe(true);
  });

  test("default options", async () => {
    mount(<Radio />);
  });

  test("trigger click", async () => {
    const change = () => {};

    const value = ref<string>("1");
    const options = ref<OptionsItem[]>([
      {
        label: "Option 1",
        id: 1,
      },
      {
        label: "Option 2",
        id: 2,
      },
    ]);

    const wrapper = mount(
      <Radio v-model={value.value} options={options.value} onChange={change} />,
    );

    const radio = wrapper.find(".h-item-radio");
    radio.trigger("click", {
      item: "Option 1",
      index: 1,
    });
  });

  test("inline to false", async () => {
    const value = ref<string>("1");
    const options = ref<OptionsItem[]>([
      {
        label: "Option 1",
        id: 1,
      },
      {
        label: "Option 2",
        id: 2,
      },
    ]);

    mount(
      <Radio v-model={value.value} options={options.value} inline={false} />,
    );
  });
});

// test("disabled", async () => {
//   const change = () => {};

//   const value = ref<string>("2");
//   const options = ref<OptionsItem[]>([
//     {
//       label: "Option 1",
//       id: 1,
//     },
//     {
//       label: "Option 2",
//       id: 2,
//       disabled: false,
//     },
//   ]);

//   const wrapper = mount(
//     <Radio v-model={value.value} options={options.value} onChange={change} />,
//   );

//   wrapper.vm.change("Option 2", 2);
// });
