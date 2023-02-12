import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Icon from "../src/icon.vue";

describe("Icon.vue", () => {
  test("render", () => {
    const wrapper = mount(() => <Icon color="#000000" name="fuzhi" />);
    expect(wrapper.find(".i-icon-fuzhi").exists());
  });

  test("dot", () => {
    const wrapper = mount(Icon, {
      props: {
        dot: true,
        badge: "1",
      },
    });
    expect(wrapper.props().dot).toBe(true);
    expect(wrapper.props().badge).toBe("1");
  });
});
