import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Breadcrumb from "../src/breadcrumb.vue";
import BreadcrumbItem from "../src/breadcrumb-item.vue";

describe("Breadcrumb.vue", () => {
  test("create", () => {
    const wrapper = mount(Breadcrumb);
    expect(wrapper.classes()).toContain("h-breadcrumb");
  });
});

describe("BreadcrumbItem.vue", () => {
  test("create", () => {
    const wrapper = mount(BreadcrumbItem);
    expect(wrapper.classes()).toContain("h-breadcrumb__item");
  });
  // 搁置
  test("separator", () => {
    const wrapper = mount(BreadcrumbItem);
    const content = wrapper.find(".item__separator");
    const spans = content.findAll("span");
    expect(spans[0].text()).toBe("");
  });
});
