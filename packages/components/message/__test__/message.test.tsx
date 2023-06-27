import { describe, expect, test, vi } from "vitest";
import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import Message from "../src/message.vue";
import { MessageType } from "../src/message";

describe("Message.vue", () => {
  test("create", () => {
    const wrapper = mount(Message);
    const message = wrapper.find(".h-message");
    expect(message.classes()).toContain("h-message");
  });
  test("type", () => {
    MessageType.forEach((type) => {
      const wrapper = mount(Message, {
        props: {
          type,
        },
      });
      const message = wrapper.find(".h-message");
      expect(message.classes()).toContain(`h-message--${type}`);
    });
  });
  test("message", () => {
    const wrapper = mount(Message, {
      props: {
        message: "这是一条消息",
      },
    });
    const message = wrapper.find(".h-message");
    expect(message.text()).toContain("这是一条消息");
  });
  test("duration", async () => {
    vi.useFakeTimers();
    const wrapper = mount(Message, {
      props: {
        duration: 1000,
      },
    });
    const vm = wrapper.vm as any;
    await nextTick();
    expect(vm.visible).toBe(true);
    vi.runAllTimers();
    await nextTick();
    expect(vm.visible).toBe(false);
    vi.useRealTimers();
  });
  test("showClose", async () => {
    const wrapper = mount(Message, {
      props: {
        showClose: true,
      },
    });
    const close = wrapper.find(".h-message__closeBtn");
    const vm = wrapper.vm as any;
    vm.visible = true;
    expect(close.exists()).toBe(true);
    await close.trigger("click");
    expect(vm.visible).toBe(false);
  });

  test("HTMLString", () => {
    const wrapper = mount(Message, {
      props: {
        message: "<strong>这是一条消息</strong>",
        dangerouslyUseHTMLString: true,
      },
    });
    const message = wrapper.find(".h-message");
    expect(message.text()).toContain("这是一条消息");
  });

  test("onClose", async () => {
    const onClose = vi.fn();
    const wrapper = mount(Message, {
      props: {
        onClose,
      },
    });

    const rAF = async () => {
      return new Promise((res) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(async () => {
            res(null);
            await nextTick();
          });
        });
      });
    };

    await rAF();
    const vm = wrapper.vm as any;
    vm.visible = false;
    await rAF();

    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
