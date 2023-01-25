<style scoped>
.example {
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding:20px;
  font-size:30px
}
.example div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2px;
}
</style>

# Icon 图标

## 基础使用

图标根据传入不同的 name 值，来动态展示不同的图标

<div class="example">
  <div>
    <h-icon name="edit"></h-icon>
    <h-icon name="share"></h-icon>
    <h-icon name="delete"></h-icon>
    <h-icon name="search"></h-icon>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-icon name="edit"></h-icon>
    <h-icon name="share"></h-icon>
    <h-icon name="delete"></h-icon>
    <h-icon name="search"></h-icon>
  </div>
</template>
```

:::

## 改变图标颜色

h-icon 根据传入不同的 color 值，来动态展示对应颜色的图标

<div class="example">
  <div>
    <h-icon name="edit" color="red"></h-icon>
    <h-icon name="share" color="#fff159"></h-icon>
    <h-icon name="delete" color="blue"></h-icon>
    <h-icon name="success" color="green"></h-icon>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-icon name="edit" color="red"></h-icon>
    <h-icon name="share" color="#fff159"></h-icon>
    <h-icon name="delete" color="blue"></h-icon>
    <h-icon name="success" color="green"></h-icon>
  </div>
</template>
```

:::

## 添加图标徽标

h-icon 传入 dot，图标右上角展示徽标红点，badge 值用于徽标显示详情值

<div class="example">
  <div>
    <h-icon name="edit" dot></h-icon>
    <h-icon name="share" dot badge="520"></h-icon>
    <h-icon name="delete" dot badge="tip" color="green"></h-icon>
  </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-icon name="edit" dot></h-icon>
    <h-icon name="share" dot badge="520"></h-icon>
    <h-icon name="delete" dot badge="tip" color="green"></h-icon>
  </div>
</template>
```

:::

## 图标集合

<div class="icon_content">
  <div class="icon_list">
    <h-icon name="delete"></h-icon>
    <div class="icon_name">delete</div>
  </div>
  <div class="icon_list">
    <h-icon name="share"></h-icon>
    <div class="icon_name">share</div>
  </div>
  <div class="icon_list">
    <h-icon name="edit"></h-icon>
    <div class="icon_name">edit</div>
  </div>
  <div class="icon_list">
    <h-icon name="calendar"></h-icon>
    <div class="icon_name">calendar</div>
  </div>
  <div class="icon_list">
    <h-icon name="loading"></h-icon>
    <div class="icon_name">loading</div>
  </div>
  <div class="icon_list">
    <h-icon name="user"></h-icon>
    <div class="icon_name">user</div>
  </div>
  <div class="icon_list">
    <h-icon name="star"></h-icon>
    <div class="icon_name">star</div>
  </div>
  <div class="icon_list">
    <h-icon name="download"></h-icon>
    <div class="icon_name">download</div>
  </div>
  <div class="icon_list">
    <h-icon name="view"></h-icon>
    <div class="icon_name">view</div>
  </div>
  <div class="icon_list">
    <h-icon name="typescript"></h-icon>
    <div class="icon_name">typescript</div>
  </div>
  <div class="icon_list">
    <h-icon name="link"></h-icon>
    <div class="icon_name">link</div>
  </div>
  <div class="icon_list">
    <h-icon name="question"></h-icon>
    <div class="icon_name">question</div>
  </div>
  <div class="icon_list">
    <h-icon name="close"></h-icon>
    <div class="icon_name">close</div>
  </div>
  <div class="icon_list">
    <h-icon name="setting"></h-icon>
    <div class="icon_name">setting</div>
  </div>
  <div class="icon_list">
    <h-icon name="success"></h-icon>
    <div class="icon_name">success</div>
  </div>
  <div class="icon_list">
    <h-icon name="error"></h-icon>
    <div class="icon_name">error</div>
  </div>
  <div class="icon_list">
    <h-icon name="warning"></h-icon>
    <div class="icon_name">warning</div>
  </div>
  <div class="icon_list">
    <h-icon name="info"></h-icon>
    <div class="icon_name">info</div>
  </div>
  <div class="icon_list">
    <h-icon name="search"></h-icon>
    <div class="icon_name">search</div>
  </div>
</div>

## Attributes

| 参数  | 说明             | 类型          | 可选值 | 默认  |
| ----- | ---------------- | ------------- | ------ | ----- |
| name  | 图标名称         | string        | —      | —     |
| color | 图标颜色         | string        | —      | —     |
| dot   | 图标是否展示徽标 | boolean       | —      | false |
| badge | 徽标 value       | string/number | —      | —     |

<style>
.icon_content{
    overflow:hidden;
    border-top:1px solid #f5f5f5;
    border-left:1px solid #f5f5f5;
}
.icon_content .icon_list {
    float:left;
    width:20%;
    height:110px;
    border-right:1px solid #f5f5f5;
    border-bottom:1px solid #f5f5f5;
    padding:20px;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-wrap:wrap;
    box-sizing:border-box;
    cursor: pointer;
}

.icon_name {
    color:gray;
    font-size:14px;
    width:100%;
    text-align:center
}
</style>
