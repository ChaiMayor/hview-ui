import { getCurrentInstance } from "vue";
import hp from "hview-plus";

let installed = false;

await loadStyle();

export function installHviewUI() {
  if (installed) return;
  const instance = getCurrentInstance();
  console.log(instance);
  instance.appContext.app.use(hp);
  installed = true;
}

export function loadStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `#STYLE#`;
    link.addEventListener("load", resolve);
    link.addEventListener("error", reject);
    document.body.append(link);
  });
}
