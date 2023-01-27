export const toFixed = (val: string | number, num: number): number => {
  return Number(Number(val).toFixed(num));
};
