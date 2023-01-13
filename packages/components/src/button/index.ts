import button from './button.vue'
import type { App, Plugin } from "vue"
type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        // 当组件是 script setup 的形式时，会自动以为文件名注册，会挂载到组件的__name 属性上
        // 所以要加上这个条件
        app.component((comp as any).name, (comp as any).__name)
    }
    return comp as SFCWithInstall<T>
}
const Button = withInstall(button)
export default Button