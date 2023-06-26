import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Avatar from "../src/avatar.vue";
import { AvatarSize, AvatarBorder, AvatarShape } from "../src/avatar";

describe("Avatar.vue", () => {
  test("create", () => {
    const wrapper = mount(Avatar);
    expect(wrapper.classes()).toContain("h-avatar");
  });

  test("size", () => {
    AvatarSize.forEach((size) => {
      const wrapper = mount(Avatar, {
        props: {
          size,
        },
      });
      expect(wrapper.classes()).toContain(`h-avatar--${size}`);
    });
  });

  test("shape", () => {
    AvatarShape.forEach((shape) => {
      const wrapper = mount(Avatar, {
        props: {
          shape,
        },
      });
      expect(wrapper.classes()).toContain(`h-avatar--${shape}`);
    });
  });

  test("border", () => {
    AvatarBorder.forEach((border) => {
      const wrapper = mount(Avatar, {
        props: {
          border,
        },
      });
      expect(wrapper.classes()).toContain(`h-avatar--${border}`);
    });
  });

  test("src", () => {
    const wrapper = mount(Avatar, {
      props: {
        src: "https://avatars.githubusercontent.com/u/48638244?v=4",
      },
    });
    const img = wrapper.find("img");
    expect(img.attributes("src")).toBe(
      "https://avatars.githubusercontent.com/u/48638244?v=4",
    );
  });
});
