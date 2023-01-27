<style scoped>
.example {
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding:20px;
}
.example div {
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  display:flex;
  width: 100%;
  height: 100%;
  background-color: #99a9bf;
}
.item .text{
  margin: auto;
  font-weight: bold;
  font-size: 30px;
}
.vp-doc ul {
    list-style: none !important;
    margin: 0;
    padding: 0;
}
</style>

# Carousel 走马灯

> 在区域内展示相同类型的文字、图片等内容。

## 基础用法

结合使用 `h-carousel` 和 `h-carousel-item` 标签就得到了一个走马灯。 其内容完全自定义，将要展示的内容放到 `h-carousel-item` 标签内即可。

<div class="example">
    <div >
        <div class="demo">
          <h-carousel>
            <h-carousel-item>
              <div class="item">
                <div class="text">
                  1
                </div>
              </div>
            </h-carousel-item>
            <h-carousel-item>
              <div class="item">
                <div class="text">
                  2
                </div>
              </div>
            </h-carousel-item>
            <h-carousel-item>
              <div class="item">
                <div class="text">
                  3
                </div>
              </div>
            </h-carousel-item>
          </h-carousel>
        </div>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div class="demo">
    <h-carousel>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 1 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 2 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 3 </div>
        </div>
      </h-carousel-item>
    </h-carousel>
  </div>
</template>

<style scoped>
  .item {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #99a9bf;
  }
  .item .text {
    margin: auto;
    font-weight: bold;
    font-size: 30px;
  }
</style>
```

:::

## 指示器

通过 `indicator-position`属性可以自定义指示器的显示位置，可选值为 `none`、`outside`，默认情况下指示器在内部显示。
`indicator-type` 属性能够自定义指示器的形状。

<div class="example">
    <div >
        <div class="demo">
          <h-carousel indicator-position="outside">
            <h-carousel-item>
              <div class="item">
                <div class="text">
                  1
                </div>
              </div>
            </h-carousel-item>
            <h-carousel-item>
              <div class="item">
                <div class="text">
                  2
                </div>
              </div>
            </h-carousel-item>
            <h-carousel-item>
              <div class="item">
                <div class="text">
                  3
                </div>
              </div>
            </h-carousel-item>
          </h-carousel>
          <h-carousel indicator-position="outside" indicator-type="rect">
            <h-carousel-item>
              <div class="item">
                <div class="text">
                  1
                </div>
              </div>
            </h-carousel-item>
            <h-carousel-item>
              <div class="item">
                <div class="text">
                  2
                </div>
              </div>
            </h-carousel-item>
            <h-carousel-item>
              <div class="item">
                <div class="text">
                  3
                </div>
              </div>
            </h-carousel-item>
          </h-carousel>
        </div>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div class="demo">
    <h-carousel>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 1 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 2 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 3 </div>
        </div>
      </h-carousel-item>
    </h-carousel>
    <h-carousel indicator-position="outside" indicator-type="rect">
      <h-carousel-item>
        <div class="item">
          <div class="text"> 1 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 2 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 3 </div>
        </div>
      </h-carousel-item>
    </h-carousel>
  </div>
</template>

<style scoped>
  .item {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #99a9bf;
  }
  .item .text {
    margin: auto;
    font-weight: bold;
    font-size: 30px;
  }
</style>
```

:::

## 切换箭头

可以通过 `arrow` 属性设置箭头的显示时机，默认值为 `hover`，鼠标悬浮后才会显示箭头，将该值设置为 `always` 可以让箭头一直显示。

<div class="example">
    <div >
        <div class="demo">
          <h-carousel arrow="always">
            <h-carousel-item>
              <div class="item">
                <div class="text"> 1 </div>
              </div>
            </h-carousel-item>
            <h-carousel-item>
              <div class="item">
                <div class="text"> 2 </div>
              </div>
            </h-carousel-item>
            <h-carousel-item>
              <div class="item">
                <div class="text"> 3 </div>
              </div>
            </h-carousel-item>
          </h-carousel>
        </div>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div class="demo">
    <h-carousel arrow="always">
      <h-carousel-item>
        <div class="item">
          <div class="text"> 1 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 2 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 3 </div>
        </div>
      </h-carousel-item>
    </h-carousel>
  </div>
</template>

<style scoped>
  .item {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #99a9bf;
  }
  .item .text {
    margin: auto;
    font-weight: bold;
    font-size: 30px;
  }
</style>
```

:::

## 布局

通过设置 `direction` 属性可以更改走马灯的布局，默认情况下为 `horizontal`。 通过设置 `direction` 为 `vertical` 可以让走马灯垂直显示。

<div class="example">
    <div >
        <div class="demo">
          <h-carousel direction="vertical">
            <h-carousel-item>
              <div class="item">
                <div class="text"> 1 </div>
              </div>
            </h-carousel-item>
            <h-carousel-item>
              <div class="item">
                <div class="text"> 2 </div>
              </div>
            </h-carousel-item>
            <h-carousel-item>
              <div class="item">
                <div class="text"> 3 </div>
              </div>
            </h-carousel-item>
          </h-carousel>
        </div>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div class="demo">
    <h-carousel direction="vertical">
      <h-carousel-item>
        <div class="item">
          <div class="text"> 1 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 2 </div>
        </div>
      </h-carousel-item>
      <h-carousel-item>
        <div class="item">
          <div class="text"> 3 </div>
        </div>
      </h-carousel-item>
    </h-carousel>
  </div>
</template>

<style scoped>
  .item {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #99a9bf;
  }
  .item .text {
    margin: auto;
    font-weight: bold;
    font-size: 30px;
  }
</style>
```

:::

## API

### Carousel Attributes

| Name               | 说明                       | 类型      | 可选值                   | 默认值     |
| ------------------ | -------------------------- | --------- | ------------------------ | ---------- |
| height             | carousel 的高度            | `string`  | —                        | —          |
| initial-index      | 起始的 index               | `number`  | —                        | 0          |
| trigger            | 指示器的触发方式           | `string`  | `hover`/`click`          | hover      |
| autoplay           | 是否开启自动切换           | `boolean` | —                        | true       |
| interval           | 自动切换的间隔时间         | `number`  | —                        | 3000       |
| indicator-position | 指示器显示的位置           | `string`  | `outside`/`none`         | —          |
| indicator-type     | 指示器的类型               | `string`  | `rect`/`circle`          | circle     |
| arrow              | 切换箭头的显示时机         | `string`  | `always`/`hover`/`never` | hover      |
| loop               | 是否循环显示               | `boolean` | -                        | `true`     |
| direction          | carousel 的布局方式        | `string`  | `horizontal`/`vertical`  | horizontal |
| pause-on-hover     | 鼠标悬浮时是否停止自动切换 | `boolean` | -                        | true       |

### Carousel Events

| 事件名 | 说明       | 回调参数               |
| ------ | ---------- | ---------------------- |
| change | 切换时触发 | 目前的索引，原来的索引 |

### Carousel Methods

| 方法名        | 说明         | 参数                                                        |
| ------------- | ------------ | ----------------------------------------------------------- |
| setActiveItem | 手动切换     | 需要切换到的索引；或相应 `h-carousel-item` 的 `name` 属性值 |
| prev          | 切换至上一张 | —                                                           |
| next          | 切换至下一张 | —                                                           |

### Carousel Slots

| 插槽名 | 说明         | 子标签        |
| ------ | ------------ | ------------- |
| -      | 自定义的内容 | Carousel-Item |

### Carousel-Item Attributes

| 属性名 | 说明                                                   | 类型     | 可选值 | 默认值 |
| ------ | ------------------------------------------------------ | -------- | ------ | ------ |
| name   | `carousel-item`的名字，可以做为 `setActiveItem` 的参数 | `string` | —      | —      |
| label  | 该`carousel-item`所对应指示器的文本                    | `string` | —      | —      |

### Carousel-Item Slots

| 插槽名 | 说明         |
| ------ | ------------ |
| —      | 自定义的内容 |
