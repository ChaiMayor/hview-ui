import { describe, expect, test } from "vitest";
import { ref } from "vue";
import { mount } from "@vue/test-utils";
import Color from "../src/color.vue";

describe("Color.vue", () => {
  test("create", () => {
    const wrapper = mount(Color);
    expect(wrapper.classes()).toContain("h-color");
  });
});
