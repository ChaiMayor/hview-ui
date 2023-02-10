<script setup>
    import basic from 'exam/space/basic.vue'
    import inline from 'exam/space/inline.vue'
    import wrap from 'exam/space/wrap.vue'
    import size from 'exam/space/size.vue'
</script>

# Space 间距

通过这个组件来给组件之间提供统一间距

## 基础用法

通过间距组件来给多个组件之间提供间距

::: code space/basic
<basic></basic>
:::

## 垂直布局

默认水平布局方式，我们也提供垂直布局的方式

::: code space/inline
<inline></inline>
:::

## 自定义 Size

很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。size 值是一个数组，数组元素依次是左右，上下的间距

::: code space/size
<size></size>
:::

## 自动换行

在水平布局模式下, 通过控制 wrap（布尔类型）来控制是否自动换行

::: code space/wrap
<wrap></wrap>
:::
