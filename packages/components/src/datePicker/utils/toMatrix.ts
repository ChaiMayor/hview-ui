import { ICell } from "../src/datePicker";

export const toMatrix = (list: ICell[], elementPerSubArray: number) => {
  // 通过一个索引
  const matrix: ICell[][] = [];
  let k = -1;
  list.forEach((item, i) => {
    if (i % elementPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(item);
  });
  return matrix;
};
