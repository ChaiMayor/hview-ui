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
		const arr: Object[] = [];
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
