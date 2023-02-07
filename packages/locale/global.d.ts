export {};
declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		// refer: https://www.cnblogs.com/it774274680/p/16660035.html
		$t: (str: string) => string;
	}
}
