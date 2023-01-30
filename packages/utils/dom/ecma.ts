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
