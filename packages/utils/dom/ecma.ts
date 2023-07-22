// 获取里层的元素距离body或html元素之间的距离
export const offsetLeft = (element: HTMLDivElement) => {
  let left = element.offsetLeft;
  let parent: HTMLDivElement = element.offsetParent as HTMLDivElement;
  while (parent !== null) {
    // 如果还有上一层父元素
    left += parent.offsetLeft;
    parent = parent.offsetParent as HTMLDivElement;
  }
  return left;
};

// 获取里层的元素距离body或html元素之间的距离
export const offsetTop = (element: HTMLDivElement) => {
  let top = element.offsetTop;
  let parent: HTMLDivElement = element.offsetParent as HTMLDivElement;
  while (parent !== null) {
    // 如果还有上一层父元素
    top += parent.offsetTop;
    parent = parent.offsetParent as HTMLDivElement;
  }
  return top;
};

export const copyText = (text: string) => {
  if (navigator.clipboard) {
    // clipboard api 复制
    navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    // 隐藏此输入框
    textarea.style.position = "fixed";
    textarea.style.clip = "rect(0 0 0 0)";
    textarea.style.top = "10px";
    // 赋值
    textarea.value = text;
    // 选中
    textarea.select();
    // 复制
    document.execCommand("copy", true);
    // 移除输入框
    document.body.removeChild(textarea);
  }
};
