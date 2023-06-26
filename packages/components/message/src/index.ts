import element from "./message.vue";
import { VNode, createVNode, render } from "vue";

export interface MessageOptions {
  message: string;
  type?: {
    type: "success" | "info" | "warning" | "error";
    default: "info";
  };
  duration?: {
    type: number;
    default: 3000;
  };
  center?: {
    type: boolean;
    default: false;
  };
  dangerouslyUseHTMLString?: {
    type: boolean;
    default: false;
  };
  showClose?: {
    type: boolean;
    default: false;
  };
  offset?: {
    type: number;
    default: 20;
  };
  onClose?: () => void;
}

const instances: VNode[] = [];

export default function message(options: MessageOptions) {
  if (typeof options === "string") {
    options = {
      message: options as string,
    };
  }

  let offset = options.offset || 20;

  instances.forEach((vnode: VNode) => {
    offset += vnode.el.offsetHeight + 20;
  });

  const userClose = options.onClose;
  const opts = {
    ...options,
    offset,
    onClose: () => {
      userClose && userClose();
    },
  };

  //vue2
  // new Vue(render:() => h(element)).mount();

  // vue3写法，动态创建组件需要用虚拟节点
  const div = document.createElement("div");
  // 渲染组件
  const vnode = createVNode(element, opts);
  vnode.props!.onDestroy = () => {
    render(null, div); // render会移除dom，注意：此方法在vue2中无法使用
    instances.pop();
  };
  // 挂载到div上
  render(vnode, div);
  // 加入页面
  document.body.appendChild(div.firstElementChild!);
  instances.push(vnode);
}
