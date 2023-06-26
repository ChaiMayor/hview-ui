import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Alert from "../src/alert.vue";
import { AlertType } from "../src/alert";

describe("Alert.vue", () => {
  test("create", () => {
    const wrapper = mount(Alert);
    const content = wrapper.find(".h-alert");
    expect(content.classes()).toContain("h-alert");
  });

  test("type", () => {
    AlertType.forEach((type) => {
      const wrapper = mount(Alert, {
        props: {
          type,
        },
      });
      const content = wrapper.find(".h-alert");
      expect(content.classes()).toContain(`h-alert--${type}`);
    });
  });

  test("description", () => {
    const wrapper = mount(Alert, {
      props: {
        description: "this is description",
      },
    });
    const content = wrapper.find(".h-alert");
    expect(content.text()).toBe("this is description");
  });

  test("closable", async () => {
    const wrapper = mount(Alert, {
      props: {
        closable: true,
      },
    });
    const closeBtn = wrapper.find(".close-btn");
    const vm = wrapper.vm as any;
    vm.visible = true;
    await closeBtn.trigger("click");
    expect(vm.visible).toBe(false);
  });
});
