import { App } from 'vue'
import Button from './button/button.vue'
const components:{ [key:string]: {} } = {}  // 挂载组件
const api:{ [key:string]: {} } = {}    // 挂载一些api组件，如message

components[Button.name] = Button

function install(app: App) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    app.component('h' + component.name, component)
  })
  applyOptions(app)
}

function applyOptions(app: App) {
  // 兼容vue2写法
  Object.keys(api).forEach((key) => {
    app.config.globalProperties[`$${key}`] = api[key]
  })
  app.config.globalProperties[`$modal`] = components['Modal']
}

const HViewPlus =  {
  install,
  ...components
}

export default HViewPlus


