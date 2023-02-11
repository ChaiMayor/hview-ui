import Message from "./src/index";
import type { MessageOptions } from "./src/index";
import type { App } from "vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $message: (options: MessageOptions) => void;
  }
}

(Message as any).install = function (app: App) {
  app.config.globalProperties.$message = Message;
};

export { Message };
export default Message;
