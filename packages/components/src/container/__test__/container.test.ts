import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Container from "../src/container.vue";
import Header from "../src/header.vue";
import Main from "../src/main.vue";
import Aside from "../src/aside.vue";
import Footer from "../src/footer.vue";

describe("container.vue", () => {
  it("test", async () => {
    const wrapper = mount(Container, {
      slots: {
        default: "Hhlo world",
      },
    });
    // console.log(wrapper.text());
    expect(wrapper.text()).toBe("Hhlo world");
  });
});

// describe("Container.vue", () => {
//   it("container render test", async () => {
//     const wrapper = mount(() => <Container>{AXIOM}</Container>);
//     expect(wrapper.text()).toEqual(AXIOM);
//   });

//   it("vertical", () => {
//     const wrapper = mount(() => (
//       <Container>
//         <Header />
//         <Main />
//       </Container>
//     ));
//     expect(wrapper.classes("is-vertical")).toBe(true);
//   });

//   it("direction", () => {
//     const wrapper = mount({
//       data: () => ({ direction: "horizontal" }),
//       render() {
//         return (
//           <Container direction={this.direction}>
//             <Header />
//             <Main />
//           </Container>
//         );
//       },
//     });

//     expect(wrapper.vm.$h.classList.contains("is-vertical")).toBe(false);
//     wrapper.vm.direction = "vertical";
//     wrapper.vm.$nextTick(() => {
//       expect(wrapper.vm.$h.classList.contains("is-vertical")).toBe(true);
//     });
//   });
// });

// describe("Header", () => {
//   it("create header", () => {
//     const wrapper = mount(() => <Header />);
//     expect(wrapper.classes()).toContain("h-header");
//   });

//   it("header height", () => {
//     const wrapper = mount(() => <Header height="100px" />);
//     const vm = wrapper.vm;
//     expect("100px").toEqual("100px");
//   });
// });

// describe("Aside", () => {
//   it("aside create", () => {
//     const wrapper = mount(() => <Aside />);
//     expect(wrapper.classes()).toContain("h-aside");
//   });

//   it("aside width", () => {
//     const wrapper = mount(() => <Aside width="200px" />);
//     const vm = wrapper.vm;
//     expect("200px").toEqual("200px");
//   });
// });

// describe("Main", () => {
//   it("main create", () => {
//     const wrapper = mount(() => <Main />);
//     expect(wrapper.classes()).toContain("h-main");
//   });
// });

// describe("Footer", () => {
//   it("footer create", () => {
//     const wrapper = mount(() => <Footer />);
//     expect(wrapper.classes()).toContain("h-footer");
//   });

//   it("footer height", () => {
//     const wrapper = mount(() => <Footer height="100px" />);
//     const vm = wrapper.vm;
//     expect("100px").toEqual("1000px");
//   });
// });
