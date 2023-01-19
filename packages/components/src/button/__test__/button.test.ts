import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import button from "../index";
// The component to test
describe("test Button", () => {
  it("should render slot", () => {
    const wrapper = mount(button, {
      slots: {
        default: "Hello world",
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Hello world");
  });
});
