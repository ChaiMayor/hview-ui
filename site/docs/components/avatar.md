<style scoped>
.example {
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding:20px;
}
.example div {
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2px;
}

.demo {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.demo .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.demo .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
.avatar {
  margin: auto 0;
}
</style>

# Avatar 头像

用于展示头像，支持使用图片、图标或者文字作为头像。

## 基础用法

通过 `shape` 和 `size` 属性来设置头像的形状和大小。

<div class="example">
    <div >
        <div class="demo">
          <div v-for="i in size" :key="i" class="block">
            <h-avatar class="avatar" shape="circle" :size="i" :src="url" />
           </div>
          <div v-for="i in size" :key="i" class="block">
            <h-avatar class="avatar" shape="square" :size="i" :src="url" />
           </div>
        </div>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div class="demo">
    <div v-for="i in size" :key="i" class="block">
      <h-avatar class="avatar" shape="circle" :size="i" :src="url" />
    </div>
    <div v-for="i in size" :key="i" class="block">
      <h-avatar class="avatar" shape="square" :size="i" :src="url" />
    </div>
  </div>
</template>

<style scoped>
  .demo {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .demo .block {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
  }

  .avatar {
    margin: auto 0;
  }
</style>

<script lang="ts" setup>
  import { reactive, toRefs } from "vue";

  const state = reactive({
    fits: ["fill", "contain", "cover", "none", "scale-down"],
    url: "https://img1.baidu.com/it/u=3898423942,4076211846&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  });

  const { fits, url, size } = toRefs(state);
</script>
```

:::

## 展示类型

支持使用图片、图标或者文字作为头像

<div class="example">
    <div >
        <div class="demo">
          <div class="block">
            <h-avatar icon="user-solid" />
          </div>
          <div class="block">
            <h-avatar :src="url" />
          </div>
          <div class="block">
            <h-avatar > 头像 </h-avatar>
          </div>
        </div>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div class="demo">
    <div class="block">
      <h-avatar icon="user-solid" />
    </div>
    <div class="block">
      <h-avatar :src="url" />
    </div>
    <div class="block">
      <h-avatar> 头像 </h-avatar>
    </div>
  </div>
</template>

<style scoped>
  .demo {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .demo .block {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
  }
  .avatar {
    margin: auto 0;
  }
</style>
```

:::

## 适应容器

使用图片作为头像时，设置该图片如何在容器中展示。

<div class="example">
    <div >
        <div class="demo">
          <div v-for="fit in fits" :key="fit" class="block">
            <span class="title">{{ fit }}</span>
            <h-avatar shape="square" :size="100" :fit="fit" :src="url" />
           </div>
        </div>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div class="demo">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <h-avatar shape="square" :size="100" :fit="fit" :src="url" />
    </div>
  </div>
</template>

<style scoped>
  .demo {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .demo .block {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
  }
  .demo .title {
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }
  .avatar {
    margin: auto 0;
  }
</style>

<script lang="ts" setup>
  import { reactive, toRefs } from "vue";

  const state = reactive({
    fits: ["fill", "contain", "cover", "none", "scale-down"],
    url: "https://img1.baidu.com/it/u=3898423942,4076211846&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  });

  const { fits, url, size } = toRefs(state);
</script>
```

:::

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
  url: 'https://img1.baidu.com/it/u=3898423942,4076211846&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  size: ['small', '', 'large'],
})

const { fits, url, size } = toRefs(state)
</script>

## API

### Attributes

| 属性名  | 说明                     | 类型                   | 可选值                                               | 默认值  |
| ------- | ------------------------ | ---------------------- | ---------------------------------------------------- | ------- |
| icon    | 设置头像的图标类型       | `string` / `Component` | —                                                    | default |
| size    | 头像大小                 | `number` / ` string`   | `large` / `default` / `small`                        | circle  |
| shape   | 头像形状                 | `string`               | `circle` / `square`                                  | —       |
| border  | 头像边框                 | `string`               | `none` / `solid` / `dot`                             | solid   |
| src     | 图片的源地址             | `string`               | —                                                    | —       |
| src-set | 图片的原生 `srcset` 属性 | `string`               | —                                                    | —       |
| alt     | 图片的原生 `alt` 属性    | `string`               | —                                                    | —       |
| fit     | 设置头像图片如何适应容器 | `string`               | `fill` / `contain` / `cover` / `none` / `scale-down` | cover   |

### Events

| 事件名 | 说明                     | 类型       |
| ------ | ------------------------ | ---------- |
| error  | 图片加载失败时触发的事件 | `Function` |

### Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义头像内容 |
