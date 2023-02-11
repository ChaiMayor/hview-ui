interface objType {
  [propName: string]: any;
}

function typeOf(obj: any) {
  const toString = Object.prototype.toString;
  const map: objType = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
  };
  const str: string = toString.call(obj);
  return map[str];
}

export function deepCopy(data: any) {
  const t = typeOf(data);

  if (t === "array") {
    const arr: object[] = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(deepCopy(data[i]));
    }
    return arr;
  } else if (t === "object") {
    const arr: objType = {};
    for (const i in data) {
      arr[i] = deepCopy(data[i]);
    }
    return arr;
  } else {
    return data;
  }
}

// 判断是不是字符串
export function isString(str: any) {
  return typeOf(str) === "string" && str.constructor === String;
}

// 大于max时取max，小于min时取min，否则取自身
export const withinNum = (origin: any, min: number, max: number) =>
  Math.min(Math.max(origin, min), max);

// 数字小于10时自动前面补0
export const fillZero = (num: number) => {
  if (!num && num !== 0) return "";
  if (num < 10) return `0${num}`;
  return num;
};

export const compareArrJoined = (arr1: any, arr2: any) => {
  const reg = /[^\d]+/g;
  const remove = (str: string) => str.replace(reg, () => "");
  const startNum = parseInt(remove(arr1.join("")), 10) || 0;
  const endNum = parseInt(remove(arr2.join("")), 10) || 0;
  return startNum > endNum;
};

// 格式化输出的值
// (val 值为时分秒的一个数组; rule 格式化的规则，eg：'HH:mm:ss')
export function formatOutputValue(val: any, rule: any) {
  if (!val || !val.length) return "";
  const houtAt12 = (v: number) => (v >= 12 ? v - 12 : v);
  const maps = {
    HH: fillZero(val[0]), // 24时制，2位展示
    H: val[0], // 24时制，1位展示
    hh: fillZero(houtAt12(val[0])), // 12时制，2位展示
    h: houtAt12(val[0]), // 12时制，1位展示
    mm: fillZero(val[1]), // 分钟，2位展示
    m: val[1], // 分钟，1位展示
    ss: fillZero(val[2]), // 秒，2位展示
    s: val[2], // 秒，2位展示
  };
  const reg = /(HH)|(H)|(hh)|(h)|(mm)|(m)|(ss)|(s)/g;
  return rule.replace(reg, (v: any) => (maps as any)[v]);
}
