import { ref, watch } from "vue";

// 加
export const useAdd = ({ num1, num2 }) => {
	const addNum = ref(0);
	watch([num1, num2], ([num1, num2]) => {
		addFn(num1, num2);
	});
	const addFn = (num1, num2) => {
		addNum.value = num1 + num2;
	};
	return {
		addNum,
		addFn,
	};
};

// 减
export const useSub = ({ num1, num2 }) => {
	const subNum = ref(0);
	watch([num1, num2], ([num1, num2]) => {
		subFn(num1, num2);
	});
	const subFn = (num1, num2) => {
		subNum.value = num1 - num2;
	};
	return {
		subNum,
		subFn,
	};
};
