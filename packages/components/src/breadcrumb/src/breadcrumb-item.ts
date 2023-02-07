import type { ExtractPropTypes } from "vue";
export const BreadcrumbItemProps = {
  // 路由跳转目标,同vue-router的to属性
  to: {
    type: String || Object,
    default: "",
  },
  // 如果该属性为true，导航将不会留下历史记录
  replace: {
    type: Boolean,
    default: false,
  },
};

export type BreadcrumbItemProps = ExtractPropTypes<typeof BreadcrumbItemProps>;
