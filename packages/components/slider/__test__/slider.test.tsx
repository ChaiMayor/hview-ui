import { ref } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Slider from "../src/slider.vue";

describe("slider.vue", () => {
  test("create", async () => {
    const val = ref(36);

    const wrapper = mount(<Slider v-model={val.value} />);

    expect(wrapper.find(".h-slider").exists()).toBe(true);
  });
});
