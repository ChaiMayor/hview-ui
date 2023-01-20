import { withInstall } from "@hview-plus/utils";
// import { withInstall, withNoopInstall } from "./temp";
import container from "./src/container.vue";
import header from "./src/header.vue";
import aside from "./src/aside.vue";
import main from "./src/main.vue";
import footer from "./src/footer.vue";

export const Container = withInstall(container);
// export default Container;
export const Header = withInstall(header);
export const Aside = withInstall(aside);
export const Main = withInstall(main);
export const Footer = withInstall(footer);
