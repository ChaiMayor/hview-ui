import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import Button from "../src/button.vue";

describe("Button.vue", () => {
  it("create", () => {
    const wrapper = mount(() => <Button type="primary" />);

    expect(wrapper.classes()).toContain("h-button--primary");
  });
});
