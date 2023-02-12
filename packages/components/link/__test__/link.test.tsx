import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import Link from "../src/link.vue";
import { LinkType } from "../src/link";

describe("Link.vue", () => {
  it("type", () => {
    const wrapper = mount(Link, {
      props: {
        type: LinkType[1],
      },
    });

    expect(wrapper.classes()).toContain("h-link--success");
  });

  it("disabled", async () => {
    const wrapper = mount(() => <Link disabled />);

    expect(wrapper.classes()).toContain("is-disabled");
  });
});
