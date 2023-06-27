import { describe, expect, test } from "vitest";
import { ref } from "vue";
import { mount } from "@vue/test-utils";
import Switch from "../src/switch.vue";

describe("Switch.vue", () => {
  test("create", () => {
    const wrapper = mount(Switch);
    expect(wrapper.classes()).toContain("h-switch-default");
  });

  test("size", () => {
    const wrapper = mount(Switch, {
      props: {
        size: "large",
      },
    });
    expect(wrapper.classes()).toContain(`h-switch--large`);
  });

  test("disabled", () => {
    const wrapper = mount(Switch, {
      props: {
        disabled: true,
      },
    });
    const switchContent = wrapper.find(".h-switch-content");
    expect(switchContent.classes()).toContain(`is-disabled`);
  });

  test("modelValue", async () => {
    const modelValue = ref(false);
    const wrapper = mount(Switch, {
      props: {
        modelValue,
      },
    });
    const switchCore = wrapper.find(".core");
    const switchContent = wrapper.find(".h-switch-content");
    expect(switchCore.classes()).toContain(`off`);
    await switchContent.trigger("click");
    expect(switchCore.classes()).toContain(`on`);
  });

  test("change", async () => {
    const modelValue = ref(false);
    const wrapper = mount(Switch, {
      props: {
        modelValue,
      },
    });
    const switchContent = wrapper.find(".h-switch-content");
    const vm = wrapper.vm as any;
    vm.visible = false;
    await switchContent.trigger("click");
    expect(wrapper.emitted("change")).toBeDefined();
  });
});
