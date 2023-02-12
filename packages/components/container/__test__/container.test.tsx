import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import Container from "../src/container.vue";
import Header from "../src/header.vue";
import Main from "../src/main.vue";
import Aside from "../src/aside.vue";
import Footer from "../src/footer.vue";

import { Direction } from "../src/container";

const AXIOM = "Rem is the best girl";

describe("Container.vue", () => {
  test("container render test", async () => {
    const wrapper = mount(() => <Container>{AXIOM}</Container>);
    expect(wrapper.text()).toEqual(AXIOM);
  });

  test("vertical", () => {
    const wrapper = mount(() => (
      <Container>
        <Header />
        <Main />
      </Container>
    ));
    expect(wrapper.classes("h-container-horizontal")).toBe(true);
  });

  test("direction", () => {
    const wrapper = mount({
      data: () => ({ direction: Direction[0] }),
      render() {
        return (
          <Container direction={this.direction}>
            <Header />
            <Main />
          </Container>
        );
      },
    });

    expect(wrapper.vm.$el.classList.contains("h-container-horizontal")).toBe(
      false,
    );
    wrapper.vm.direction = Direction[1];
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$el.classList.contains("h-container-horizontal")).toBe(
        true,
      );
    });
  });

  test("direction", () => {
    const wrapper = mount(() => <Container></Container>);

    expect(wrapper.vm.$el.classList.contains("h-container-horizontal")).toBe(
      false,
    );
  });
});

describe("Header", () => {
  test("create header", () => {
    const wrapper = mount(() => <Header />);
    expect(wrapper.classes()).toContain("h-header");
  });
});

describe("Aside", () => {
  test("aside create", () => {
    const wrapper = mount(() => <Aside />);
    expect(wrapper.classes()).toContain("h-aside");
  });
});

describe("Main", () => {
  test("main create", () => {
    const wrapper = mount(() => <Main />);
    expect(wrapper.classes()).toContain("h-main");
  });
});

describe("Footer", () => {
  test("footer create", () => {
    const wrapper = mount(() => <Footer />);
    expect(wrapper.classes()).toContain("h-footer");
  });
});
