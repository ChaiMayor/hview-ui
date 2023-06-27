import { describe, expect, test } from "vitest";
import { ref } from "vue";
import { mount } from "@vue/test-utils";
import Carousel from "../src/carousel.vue";

describe("Carousel.vue", () => {
  test("create", () => {
    const wrapper = mount(Carousel);
    expect(wrapper.classes()).toContain("h-carousel");
  });
});
