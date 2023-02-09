import { ICell } from "../src/datePicker";

export const toMatrix = (
  list: ICell[] | string[] | number[],
  elementPerSubArray: number,
) => {
  // 通过一个索引
  const matrix = [];
  let k = -1;
  list.forEach((item: ICell | string | number, i: number) => {
    if (i % elementPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(item);
  });
  return matrix;
};
