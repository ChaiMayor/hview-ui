import { ExtractPropTypes } from "vue";

export const popoverProps = {
  width: {
    type: [String, Number],
  },
  placement: {
    //popover展示出的位置,可选值——top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
    type: [String],
    default: "top",
  },
  modelValue: {
    type: Boolean,
    default: true,
  },
  content: {
    type: [String],
  },
  popperClass: {
    //自定义类，给弹出框添加自定义样式
    type: [String],
  },
  title: {
    type: [String],
  },
  transition: {
    //popover过渡动画设置
    type: String,
    default: "slide-fade",
  },
  // 是否禁用popover
  disabled: {
    type: [Boolean],
    default: false,
  },
  //触发方式：可选值——click,hover,manual,focus
  trigger: {
    type: [String],
    value: ["click", "hover", "manual", "focus"],
    default: "click",
  },
};

export type PopoverProps = ExtractPropTypes<typeof popoverProps>;
