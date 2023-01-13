import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini'];

export const buttonProps = {
    type: {
        type: String,
        validator(value: string) {
            //这里表示type只能接收这些值
            return ButtonType.includes(value)
        }
    }
}
export type ButtonProps = ExtractPropTypes<typeof buttonProps>