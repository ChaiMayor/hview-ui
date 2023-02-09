import type { ExtractPropTypes } from "vue";
export const BreadcrumbProps = {
  // 分隔符
  separator: {
    type: String,
    default: "/",
  },
  // 图标分隔符的图标名
  separatorIcon: {
    type: String,
    default: "",
  },
};

export type BreadcrumbProps = ExtractPropTypes<typeof BreadcrumbProps>;
