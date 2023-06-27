import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "../src/card.vue";
import { CardShadow } from "../src/card";

describe("Card.vue", () => {
  test("create", () => {
    const wrapper = mount(Card);
    expect(wrapper.classes()).toContain("h-card");
  });
  test("shadow", () => {
    CardShadow.forEach((shadow) => {
      const wrapper = mount(Card, {
        props: {
          shadow,
        },
      });
      expect(wrapper.classes()).toContain(`h-card--${shadow}`);
    });
  });
  test("bodyStyle", () => {
    const wrapper = mount(Card, {
      props: {
        bodyStyle: {
          padding: "20px",
        },
      },
    });
    expect(wrapper.find(".h-card-body").attributes("style")).toBe(
      "padding: 20px;",
    );
  });
  test("header", () => {
    const wrapper = mount(Card, {
      slots: {
        header: () => "header",
      },
    });
    expect(wrapper.find(".h-card-header").text()).toBe("header");
  });
  test("body", () => {
    const wrapper = mount(Card, {
      slots: {
        default: () => "body",
      },
    });
    expect(wrapper.find(".h-card-body").text()).toBe("body");
  });
});
