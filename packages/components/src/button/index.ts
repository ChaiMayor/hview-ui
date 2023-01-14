import { App } from 'vue'
import Button from './button.vue'

(Button as any).install = function(app: App) {
  app.component(Button.name,Button)
}

export default Button