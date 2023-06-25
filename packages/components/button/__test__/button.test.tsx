import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import Button from "../src/button.vue";
import { ButtonType, ButtonSize } from "../src/button";

describe("Button.vue", () => {
  it("create", () => {
    // 创建是否正常，每填参数时的样子是什么样
    const wrapper = mount(Button, {
      props: {
        type: ButtonType[1],
      },
    });

    expect(wrapper.classes()).toContain("h-button--primary"); // 没填参数时primary类型的样子
  });

  it("type", () => {
    ButtonType.forEach((type) => {
      const wrapper = mount(Button, {
        props: {
          type,
        },
      });
      expect(wrapper.classes()).toContain(`h-button--${type}`);
    });
  });

  it("icon", () => {
    // 引入icon是否正常
    const wrapper = mount(() => <Button icon="fuzhi" />);

    expect(wrapper.find(".h-icon-fuzhi").exists());
  });

  it("size", () => {
    // 引入大小是否正常
    ButtonSize.forEach((size) => {
      const wrapper = mount(Button, {
        props: {
          size,
        },
      });
      expect(wrapper.classes()).toContain(`h-button--${size}`);
    });
  });

  it("plain", () => {
    // 引入简朴是否正常
    const wrapper = mount(() => <Button plain />);

    expect(wrapper.classes()).toContain("is-plain");
  });

  it("round", () => {
    // 引入圆弧形状是否正常
    const wrapper = mount(() => <Button round />);
    expect(wrapper.classes()).toContain("is-round");
  });

  it("disabled", async () => {
    // 禁用是否正常
    const wrapper = mount(() => <Button disabled />);

    expect(wrapper.classes()).toContain("is-disabled");
    await wrapper.trigger("click"); // 触发点击
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  it("loading slot", () => {
    const wrapper = mount({
      // 测试Button中文本是否正常
      setup: () => () => <Button>Hello world</Button>,
    });
    expect(wrapper.text()).toContain("Hello world"); // 测试Button中文本是否正常
  });
});
