import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import Link from "../src/link.vue";
import { LinkType } from "../src/link";

describe("Link.vue", () => {
  it("type", () => {
    LinkType.forEach((type) => {
      const wrapper = mount(Link, {
        props: {
          type,
        },
      });

      expect(wrapper.classes()).toContain(`h-link--${type}`);
    });
  });

  it("disabled", async () => {
    const wrapper = mount(() => <Link disabled />);

    expect(wrapper.classes()).toContain("is-disabled");
  });

  it("underline", async () => {
    const wrapper = mount(() => <Link underline />);

    expect(wrapper.classes()).toContain("is-underline");
  });

  it("icon", async () => {
    const wrapper = mount(() => <Link icon="fuzhi" />);

    expect(wrapper.find(".h-icon-fuzhi").exists());
  });

  it("click", async () => {
    const wrapper = mount(() => <Link />);

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeDefined();
  });

  it("slot", async () => {
    const wrapper = mount({
      setup: () => () => <Link>Hello world</Link>,
    });
    expect(wrapper.text()).toContain("Hello world");
  });

  it("href", async () => {
    const wrapper = mount(() => <Link href="https://www.baidu.com" />);
    expect(wrapper.attributes("href")).toBe("https://www.baidu.com");
  });
});
