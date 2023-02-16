import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// import makeScroll from "@element-plus/test-utils/make-scroll";
// import defineGetter from "@element-plus/test-utils/define-getter";
import Scrollbar from "../src/scrollbar.vue";
import ScrollbarThumb from "../src/scroll-thumb.vue";
import Vertical from "./slot.vue";
import Horizontal from "./horizontal.vue";
import MaxHeight from "./max-height.vue";
import { sleep } from "@hview-plus/test-utils";

describe("Scrollbar", () => {
  test("destroy", async () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: Vertical,
      },
      props: {
        height: 400,
      },
    });

    await wrapper.vm.$nextTick();

    await sleep(200);

    wrapper.unmount();
  });

  test("scrollbar roll to top", async () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: Vertical,
      },
      props: {
        height: 400,
        noresize: true,
      },
    });

    await wrapper.vm.$nextTick();
    const thumb = wrapper.findComponent(ScrollbarThumb);

    thumb.vm.handleDrawScrollVal(50, "moveY");
    wrapper.vm.setScrollTop(50);
    expect(wrapper.find(".h-scrollbar__wrap").attributes("style")).toBe(
      "height: 400px;",
    );
  });

  test("scrollbar roll to left", async () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: Horizontal,
      },
    });
    await wrapper.vm.$nextTick();
    const thumb = wrapper.findComponent(ScrollbarThumb);
    // const wrap = wrapper.find(".h-scrollbar__wrap");

    thumb.vm.handleDrawScrollVal(50, "moveX");
    wrapper.vm.setScrollLeft(50);
    // @ts-ignore
    wrapper.vm.setScrollTumb();
  });

  test("watch height change", async () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: MaxHeight,
      },
      props: {
        height: 100,
      },
    });

    // wrapper.vm.thumbHeight = 10;
    // wrapper.vm.countAllHeight();

    // console.log(wrapper.vm);

    await wrapper.setProps({
      height: 600,
      maxHeight: 600,
    });
  });

  test("watch height change is noresize", async () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: MaxHeight,
      },
      props: {
        height: 100,
        maxHeight: 100,
        noresize: true,
      },
    });

    await wrapper.setProps({
      height: 600,
      maxHeight: 600,
    });
  });

  test("watch max-height", async () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: MaxHeight,
      },
      props: {
        maxHeight: 100,
      },
    });

    await wrapper.setProps({
      maxHeight: 600,
    });
  });

  test("ScrollbarThumb setScrollViewTop", async () => {
    const wrapper = mount(Scrollbar, {
      props: {
        height: 400,
      },
    });

    const thumb = wrapper.findComponent(ScrollbarThumb);
    thumb.vm.$emit("setScrollViewTop", 200);

    await wrapper.vm.$nextTick();

    const wrapEl = wrapper.find(".h-scrollbar__wrap");

    expect(wrapEl.element.scrollTop).toBe(200);
  });

  test("vertical", async () => {
    const outerHeight = 204;
    const innerHeight = 500;
    const wrapper = mount(() => (
      <Scrollbar style={`height: ${outerHeight}px;`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ));

    const scrollDom = wrapper.find(".h-scrollbar__wrap").element;

    // const offsetHeightRestore = defineGetter(
    //   scrollDom,
    //   "offsetHeight",
    //   outerHeight,
    // );
    // const scrollHeightRestore = defineGetter(
    //   scrollDom,
    //   "scrollHeight",
    //   innerHeight,
    // );

    // await makeScroll(scrollDom, "scrollTop", 100);
    // expect(wrapper.find(".is-vertical div").attributes("style")).toContain(
    //   "height: 80px; transform: translateY(50%);",
    // );
    // await makeScroll(scrollDom, "scrollTop", 300);
    // expect(wrapper.find(".is-vertical div").attributes("style")).toContain(
    //   "height: 80px; transform: translateY(150%);",
    // );
    // offsetHeightRestore();
    // scrollHeightRestore();
  });

  test("horizontal", async () => {
    const outerWidth = 204;
    const innerWidth = 500;
    const wrapper = mount(() => (
      <Scrollbar style={`height: 100px; width: ${outerWidth}px;`}>
        <div style={`height: 100px; width: ${innerWidth}px;`}></div>
      </Scrollbar>
    ));

    const scrollDom = wrapper.find(".h-scrollbar__wrap").element;

    // const offsetWidthRestore = defineGetter(
    //   scrollDom,
    //   "offsetWidth",
    //   outerWidth,
    // );
    // const scrollWidthRestore = defineGetter(
    //   scrollDom,
    //   "scrollWidth",
    //   innerWidth,
    // );

    // await makeScroll(scrollDom, "scrollLeft", 100);
    // expect(wrapper.find(".is-horizontal div").attributes("style")).toContain(
    //   "width: 80px; transform: translateX(50%);",
    // );
    // await makeScroll(scrollDom, "scrollLeft", 300);
    // expect(wrapper.find(".is-horizontal div").attributes("style")).toContain(
    //   "width: 80px; transform: translateX(150%);",
    // );
    // offsetWidthRestore();
    // scrollWidthRestore();
  });

  test("both vertical and horizontal", async () => {
    const outerHeight = 204;
    const innerHeight = 500;
    const outerWidth = 204;
    const innerWidth = 500;
    const wrapper = mount(() => (
      <Scrollbar style={`height: ${outerHeight}px; width: ${outerWidth}px;`}>
        <div style={`height: ${innerHeight}px; width: ${innerWidth}px;`}></div>
      </Scrollbar>
    ));

    const scrollDom = wrapper.find(".h-scrollbar__wrap").element;

    // const offsetHeightRestore = defineGetter(
    //   scrollDom,
    //   "offsetHeight",
    //   outerHeight,
    // );
    // const scrollHeightRestore = defineGetter(
    //   scrollDom,
    //   "scrollHeight",
    //   innerHeight,
    // );
    // const offsetWidthRestore = defineGetter(
    //   scrollDom,
    //   "offsetWidth",
    //   outerWidth,
    // );
    // const scrollWidthRestore = defineGetter(
    //   scrollDom,
    //   "scrollWidth",
    //   innerWidth,
    // );

    // await makeScroll(scrollDom, "scrollTop", 100);
    // await makeScroll(scrollDom, "scrollLeft", 100);
    // expect(wrapper.find(".is-vertical div").attributes("style")).toContain(
    //   "height: 80px; transform: translateY(50%);",
    // );
    // expect(wrapper.find(".is-horizontal div").attributes("style")).toContain(
    //   "width: 80px; transform: translateX(50%);",
    // );
    // await makeScroll(scrollDom, "scrollTop", 300);
    // await makeScroll(scrollDom, "scrollLeft", 300);
    // expect(wrapper.find(".is-vertical div").attributes("style")).toContain(
    //   "height: 80px; transform: translateY(150%);",
    // );
    // expect(wrapper.find(".is-horizontal div").attributes("style")).toContain(
    //   "width: 80px; transform: translateX(150%);",
    // );

    // offsetHeightRestore();
    // scrollHeightRestore();
    // offsetWidthRestore();
    // scrollWidthRestore();
  });

  test("should render height props", async () => {
    const outerHeight = 204;
    const innerHeight = 500;
    const wrapper = mount(() => (
      <Scrollbar height={`${outerHeight}px`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ));

    expect(wrapper.find(".h-scrollbar__wrap").attributes("style")).toContain(
      "height: 204px;",
    );
  });

  test("should render max-height props", async () => {
    const outerHeight = 204;
    const wrapper = mount(Scrollbar, {
      props: {
        maxHeight: outerHeight,
      },
    });

    expect(wrapper.props().maxHeight).toBe(204);
  });

  test("should render always props", async () => {
    const outerHeight = 204;
    const innerHeight = 500;
    const wrapper = mount(() => (
      <Scrollbar height={`${outerHeight}px`} always>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ));

    expect(wrapper.find(".h-scrollbar__bar").attributes("style")).toBeFalsy();
  });

  test("should render wrap-style props", async () => {
    const wrapStyle = "background: red;";
    const wrapper = mount(() => <Scrollbar wrap-style={wrapStyle} />);

    expect(wrapper.find(".h-scrollbar__wrap").attributes("style")).toContain(
      wrapStyle,
    );
  });

  test("should render wrap-class props", async () => {
    const wrapClass = "test-wrap-class";
    const wrapper = mount(() => <Scrollbar wrap-class={wrapClass} />);

    expect(wrapper.find(".h-scrollbar__wrap").classes()).toContain(wrapClass);
  });

  test("should render view-style props", async () => {
    const viewStyle = "display: inline-block;";
    const wrapper = mount(() => <Scrollbar view-style={viewStyle} />);

    expect(wrapper.find(".h-scrollbar__view").attributes("style")).toContain(
      viewStyle,
    );
  });

  test("should render view-class props", async () => {
    const viewClass = "test-view-class";
    const wrapper = mount(() => <Scrollbar view-class={viewClass} />);

    expect(wrapper.find(".h-scrollbar__view").classes()).toContain(viewClass);
  });

  test("emit setScrollTop", async () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: Vertical,
      },
      props: {
        height: "400px",
      },
    });

    expect(wrapper.find(".h-scrollbar__thumb").attributes("style")).toBe(
      "height: 0px; top: 0px;",
    );
  });
});

// describe("Scrollbar_thumb", () => {
//   test("should render max-height props", async () => {
//     const outerHeight = 204;
//     const wrapper = mount(ScrollbarThumb, {
//       props: {
//         maxHeight: outerHeight,
//       },
//     });

//     expect(wrapper.props().maxHeight).toBe(204);
//   });

//   test("emit update:isDraw", async () => {
//     const key = "update:isDraw";
//     const wrapper = mount(ScrollbarThumb);

//     wrapper.vm.$emit(key, true);
//     await wrapper.vm.$nextTick();

//     const emitted = wrapper.emitted();

//     expect(emitted[key]).toBeTruthy();
//     expect(emitted[key].length).toBe(1);
//     expect(emitted[key][0]).toEqual([true]);
//   });

//   test("emit setScrollViewTop", async () => {
//     const key = "setScrollViewTop";
//     const val = 20;
//     const wrapper = mount(ScrollbarThumb);

//     wrapper.vm.$emit(key, val);
//     await wrapper.vm.$nextTick();

//     const emitted = wrapper.emitted();

//     expect(emitted[key]).toBeTruthy();
//     expect(emitted[key].length).toBe(1);
//     expect(emitted[key][0]).toEqual([val]);
//   });

//   test("class exist", () => {
//     const wrapper = mount(ScrollbarThumb, {
//       props: {
//         move: "moveX",
//       },
//     });

//     expect(wrapper.classes()).toContain("is-horizontal");
//   });
// });
