import type { VNode, VNodeNormalizedChildren, VNodeChild } from "vue";
import { isVNode } from "vue";
// eslint-disable-next-line vue/prefer-import-from-vue
import { isArray, camelize, hasOwn } from "@vue/shared";

export type RawSlots = Exclude<
  VNodeNormalizedChildren,
  Array<any> | null | string
>;
export type VNodeChildAtom = Exclude<VNodeChild, Array<any>>;
export type FlattenVNodes = Array<VNodeChildAtom | RawSlots>;

// 获取扁平化后的子节点
export const flattedChildren = (
  children: FlattenVNodes | VNode | VNodeNormalizedChildren,
): FlattenVNodes => {
  const vNodes: any = isArray(children) ? children : [children];
  const result: FlattenVNodes = [];

  vNodes.forEach((child: any) => {
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else {
      result.push(child);
      if (isVNode(child) && child.component?.subTree) {
        result.push(...flattedChildren(child.component.subTree));
      }
    }
  });
  return result;
};

// 获取节点的props
export const getNormalizedProps = (node: VNode) => {
  if (!isVNode(node)) {
    console.error("[getNormalizedProps] must be a VNode");
    return {};
  }

  const raw = node.props || {};
  const type = (isVNode(node.type) ? node.type.props : undefined) || {};
  const props: Record<string, any> = {};

  Object.keys(type).forEach((key) => {
    if (hasOwn(type[key], "default")) {
      props[key] = type[key].default;
    }
  });

  Object.keys(raw).forEach((key) => {
    props[camelize(key)] = raw[key];
  });

  return props;
};
