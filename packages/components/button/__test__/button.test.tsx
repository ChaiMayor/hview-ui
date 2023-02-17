import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import Button from "../src/button.vue";
import { ButtonType, ButtonSize } from "../src/button";

describe("Button.vue", () => {
  it("create", () => {
    const wrapper = mount(Button, {
      props: {
        type: ButtonType[1],
      },
    });

    expect(wrapper.classes()).toContain("h-button--primary");
  });

  it("icon", () => {
    const wrapper = mount(() => <Button icon="fuzhi" />);

    expect(wrapper.find(".h-icon-fuzhi").exists());
  });

  it("size", () => {
    const wrapper = mount(Button, {
      props: {
        size: ButtonSize[0],
      },
    });

    expect(wrapper.classes()).toContain("h-button--large");
  });

  it("plain", () => {
    const wrapper = mount(() => <Button plain />);

    expect(wrapper.classes()).toContain("is-plain");
  });

  it("round", () => {
    const wrapper = mount(() => <Button round />);
    expect(wrapper.classes()).toContain("is-round");
  });

  it("disabled", async () => {
    const wrapper = mount(() => <Button disabled />);

    expect(wrapper.classes()).toContain("is-disabled");
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  it("loading slot", () => {
    const wrapper = mount({
      setup: () => () => <Button>Hello world</Button>,
    });
    expect(wrapper.text()).toContain("Hello world");
  });
});
