/**
 * 判断值是否越界
 * @param val 判断值
 * @param min 最小值
 * @param max 最大值
 * @returns 判断值在界限内返回true，否则抛错
 */
export const isOutBounds = (val: number, min: number, max: number) => {
  if (val > max || val < min) {
    throw new Error("不能超出限定范围(默认0~100)");
  }
  return true;
};

/**
 * 计算将该内容划分需要多少份
 * @param extent 需要划分的整体宽度
 * @param step 多少为一份
 * @param maxTotal 最大数量
 * @returns 返回一个数组，存储每份对应的px像素大小
 */
export const cutChunk = (extent: number, step: number, maxTotal: number): number[] => {
  if (!extent) return [];

  const length = Math.floor(maxTotal / step);
  const one = extent / length;
  const result = [];
  for (let i = 1; i <= length; i++) {
    result.push(one * i);
  }
  return result;
};

type Location = "start" | "end";
/**
 * 判断移动到哪个值位置
 * @param val 判断值
 * @param start 左侧值
 * @param end 右侧值
 * @returns 判断值大于中间值则返回右侧值，反之亦然
 */
export const judgeLocation = (val: number, start: number, end: number): Location => {
  // console.log(val, start, end);

  const middle = (end - start) / 2;
  return val > start + middle ? "end" : "start";
};

// type near = "btn1" | "btn2";

// export const distanceNear = (val: number, btn1: number, btn2: number): near => {

//   return "btn1";
// };
