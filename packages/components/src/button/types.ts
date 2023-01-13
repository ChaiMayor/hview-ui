import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini'];

export const buttonProps = {
    //按钮类型
    type: {
        type: String,
        validator(value: string) {
            //这里表示type只能接收这些值
            return ButtonType.includes(value)
        }
    },
    // 朴素按钮
    plain:Boolean,
    // 圆角按钮
    round:Boolean,
    // 按钮禁用
    disabled:Boolean,
    //按钮大小
    size:{
        type:String,
        validator(value:string) {
              //这里表示size只能接收这些值
              return ButtonSize.includes(value)
        }
    }
}
export type ButtonProps = ExtractPropTypes<typeof buttonProps>