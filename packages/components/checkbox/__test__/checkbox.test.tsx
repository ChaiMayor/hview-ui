import { describe, expect, test } from "vitest";
import { ref } from "vue";
import { mount } from "@vue/test-utils";
import CheckBox from "../src/checkbox.vue";

describe("CheckBox.vue", () => {
  test("create", () => {
    const wrapper = mount(CheckBox);
    expect(wrapper.classes()).toContain("h-checkbox");
  });
  test("disabled", () => {
    const wrapper = mount(CheckBox, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.classes()).toContain(`is-disabled`);
  });
  test("modelValue", async () => {
    const modelValue = ref(false);
    const wrapper = mount(CheckBox, {
      props: {
        modelValue,
      },
    });
    const vm = wrapper.vm as any;
    vm.visible = false;
    const checkbox = wrapper.find(".h-checkbox");
    await checkbox.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeDefined();
  });
  test("change", async () => {
    const modelValue = ref(false);
    const wrapper = mount(CheckBox, {
      props: {
        modelValue,
      },
    });
    const vm = wrapper.vm as any;
    vm.visible = false;
    const checkbox = wrapper.find(".h-checkbox");
    await checkbox.trigger("click");
    expect(wrapper.emitted("change")).toBeDefined();
  });
  test("indeterminate", async () => {
    const modelValue = ref(false);
    const wrapper = mount(CheckBox, {
      props: {
        modelValue,
      },
    });
    const vm = wrapper.vm as any;
    vm.visible = false;
    const checkbox = wrapper.find(".h-checkbox");
    await checkbox.trigger("click");
    expect(wrapper.emitted("change")).toBeDefined();
  });
});
