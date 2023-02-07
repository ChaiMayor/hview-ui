import type { InjectionKey } from "vue";
export interface IDescriptionsInject {
  border: boolean;
  column: number;
  direction: "horizontal" | "vertical";
  size: string;
  title: string;
  extra: string;
}

export interface IDescriptionsItemInject {
  label: string;
  span: number;
  width: string | number;
  minWidth: string | number;
  align: string;
  labelAlign: string;
  className: string;
  labelClassName: string;
}
// 注入的key
export const descriptionsKey = "hDescriptions" as any as InjectionKey<IDescriptionsInject>;
