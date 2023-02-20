import { shallowMount } from "@vue/test-utils";
import Tooltip from "../src/tooltip.vue";
import { describe, it, expect } from "vitest";
import { TooltipType } from "../src/tooltip";
import { sleep } from "@hview-plus/test-utils";

describe("Tooltip", () => {
  it("renders the tooltip with default props", async () => {
    const wrapper = shallowMount(Tooltip, {
      props: {
        content: "Tooltip content",
        placement: TooltipType[4],
      },
      slots: {
        default: "<button>Button with tooltip</button>",
      },
    });

    expect(wrapper.find(".h-tooltip").exists()).toBe(false);

    const button = wrapper.find("button");
    button.trigger("mouseenter");

    expect(wrapper.find(".h-tooltip-show").exists()).toBe(false);

    button.trigger("mouseleave");

    // @ts-ignore
    await wrapper.vm.show(button.element);

    wrapper.unmount();
  });
  it("toggle tooltip placement", async () => {
    const wrapper = shallowMount(Tooltip, {
      props: {
        content: "Tooltip content",
        placement: TooltipType[0],
      },
      slots: {
        default: "<button>Button with tooltip</button>",
      },
    });

    await wrapper.setProps({
      placement: TooltipType[1],
    });
    await wrapper.setProps({
      placement: TooltipType[2],
    });
    await wrapper.setProps({
      placement: TooltipType[3],
    });
    await wrapper.setProps({
      placement: TooltipType[5],
    });
    await wrapper.setProps({
      placement: TooltipType[6],
    });
    await wrapper.setProps({
      placement: TooltipType[7],
    });
    await wrapper.setProps({
      placement: TooltipType[8],
    });
    await wrapper.setProps({
      placement: TooltipType[9],
    });
    await wrapper.setProps({
      placement: TooltipType[10],
    });
    await wrapper.setProps({
      placement: TooltipType[11],
    });
  });
});
