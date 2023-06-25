import { describe, expect, test } from "vitest";
import { ref } from "vue";
import { mount } from "@vue/test-utils";
import Input from "../src/input.vue";

describe("Input.vue", () => {
  test("create input", async () => {
    let val = "567";
    const wrapper = mount(
      <Input v-model={val} placeholder="请输入内容"></Input>,
    );

    const input = wrapper.find("input");
    await input.setValue(123);
    await input.trigger("input");
    await input.trigger("focus");
    await input.trigger("blur");

    expect(wrapper.props("modelValue")).toBe("567");
    expect(input.exists()).toBe(true);
  });

  test("create textarea", async () => {
    let val = "567";
    const wrapper = mount(
      <Input v-model={val} type="textarea" placeholder="请输入内容"></Input>,
    );

    await wrapper.vm.clearInput();

    expect(wrapper.find("textarea").exists()).toBe(true);
  });

  test("vm methods", async () => {
    const wrapper = mount(
      <Input modelValue={0} placeholder="请输入内容"></Input>,
    );

    await wrapper.vm.inputGetFocus();
    await wrapper.vm.inputGetBlur();
  });

  test("attach icon", async () => {
    const wrapper = mount(
      <Input
        modelValue={0}
        iconAfter="fuzhi"
        iconBefore="test"
        placeholder="请输入内容"></Input>,
    );

    expect(wrapper.find(".h-icon-fuzhi").exists()).toBe(true);
    expect(wrapper.find(".h-icon-test").exists()).toBe(true);
  });

  test("watch modelValue", async () => {
    const value = ref("123");
    const wrapper = mount(<Input modelValue={value.value}></Input>);

    await wrapper.setProps({
      modelValue: "456",
    });

    await wrapper.setProps({
      modelValue: undefined,
    });
  });
  // 帮我生成一个测试用例
  test("watch clearable", async () => {
    //继续写测试用例
    const wrapper = mount(<Input modelValue={0} clearable></Input>);
    await wrapper.setProps({
      clearable: false,
    });
  });
});
