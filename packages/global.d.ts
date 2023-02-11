export {};
declare module "@vue/runtime-core" {
  import type { MessageOptions } from "./components/message/src/index";
  interface ComponentCustomProperties {
    // refer: https://www.cnblogs.com/it774274680/p/16660035.html
    $t: (str: string) => string;
    $message: (options: MessageOptions) => void;
  }
}
