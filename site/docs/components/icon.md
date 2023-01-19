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
        <h-icon name="eleme"></h-icon>
        <h-icon name="right"></h-icon>
        <h-icon name="error"></h-icon>
        <h-icon name="delete"></h-icon>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-icon name="eleme"></h-icon>
    <h-icon name="right"></h-icon>
    <h-icon name="error"></h-icon>
    <h-icon name="delete"></h-icon>
  </div>
</template>
```

:::

## 改变图标颜色

h-icon 根据传入不同的 color 值，来动态展示对应颜色的图标

<div class="example">
    <div>
        <h-icon name="eleme" color="red"></h-icon>
        <h-icon name="right" color="#fff159"></h-icon>
        <h-icon name="delete" color="blue"></h-icon>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-icon name="eleme" color="red"></h-icon>
    <h-icon name="right" color="#000145"></h-icon>
    <h-icon name="delete" color="blue"></h-icon>
  </div>
</template>
```

:::

## 添加图标徽标

h-icon 传入 dot，图标右上角展示徽标红点，badge 值用于徽标显示详情值

<div class="example">
    <div>
        <h-icon name="eleme" dot></h-icon>
        <h-icon name="right" dot badge="520"></h-icon>
        <h-icon name="delete" dot badge="tip" color="green"></h-icon>
    </div>
</div>

::: details 显示代码

```html
<template>
  <div>
    <h-icon name="eleme" dot></h-icon>
    <h-icon name="right" dot badge="520"></h-icon>
    <h-icon name="delete" dot badge="tip" color="green"></h-icon>
  </div>
</template>
```

:::

## 图标集合

<div class="icon_content">
    <div class="icon_list">
        <h-icon name="platform-eleme"></h-icon>
        <div class="icon_name">platform-eleme</div>
    </div>
    <div class="icon_list">
        <h-icon name="eleme"></h-icon>
        <div class="icon_name">eleme</div>
    </div>
    <div class="icon_list">
        <h-icon name="delete-solid"></h-icon>
        <div class="icon_name">delete-solid</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-tools"></h-icon>
        <div class="icon_name">s-tools</div>
    </div>
    <div class="icon_list">
        <h-icon name="setting"></h-icon>
        <div class="icon_name">setting</div>
    </div>
    <div class="icon_list">
        <h-icon name="user-solid"></h-icon>
        <div class="icon_name">user-solid</div>
    </div>
    <div class="icon_list">
        <h-icon name="user"></h-icon>
        <div class="icon_name">user</div>
    </div>
    <div class="icon_list">
        <h-icon name="phone"></h-icon>
        <div class="icon_name">phone</div>
    </div>
    <div class="icon_list">
        <h-icon name="phone-outline"></h-icon>
        <div class="icon_name">phone-outline</div>
    </div>
    <div class="icon_list">
        <h-icon name="more"></h-icon>
        <div class="icon_name">more</div>
    </div>
    <div class="icon_list">
        <h-icon name="more-outline"></h-icon>
        <div class="icon_name">more-outline</div>
    </div>
    <div class="icon_list">
        <h-icon name="star-on"></h-icon>
        <div class="icon_name">star-on</div>
    </div>
    <div class="icon_list">
        <h-icon name="star-off"></h-icon>
        <div class="icon_name">star-off</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-goods"></h-icon>
        <div class="icon_name">s-goods</div>
    </div>
    <div class="icon_list">
        <h-icon name="goods"></h-icon>
        <div class="icon_name">goods</div>
    </div>
    <div class="icon_list">
        <h-icon name="warning"></h-icon>
        <div class="icon_name">warning</div>
    </div>
    <div class="icon_list">
        <h-icon name="warning-outline"></h-icon>
        <div class="icon_name">warning-outline</div>
    </div>
    <div class="icon_list">
        <h-icon name="question"></h-icon>
        <div class="icon_name">question</div>
    </div>
    <div class="icon_list">
        <h-icon name="info"></h-icon>
        <div class="icon_name">info</div>
    </div>
    <div class="icon_list">
        <h-icon name="remove"></h-icon>
        <div class="icon_name">remove</div>
    </div>
    <div class="icon_list">
        <h-icon name="circle-plus"></h-icon>
        <div class="icon_name">circle-plus</div>
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
        <h-icon name="zoom-in"></h-icon>
        <div class="icon_name">zoom-in</div>
    </div>
    <div class="icon_list">
        <h-icon name="zoom-out"></h-icon>
        <div class="icon_name">zoom-out</div>
    </div>
    <div class="icon_list">
        <h-icon name="remove-outline"></h-icon>
        <div class="icon_name">remove-outline</div>
    </div>
    <div class="icon_list">
        <h-icon name="circle-plus-outline"></h-icon>
        <div class="icon_name">circle-plus-outline</div>
    </div>
    <div class="icon_list">
        <h-icon name="circle-check"></h-icon>
        <div class="icon_name">circle-check</div>
    </div>
    <div class="icon_list">
        <h-icon name="circle-close"></h-icon>
        <div class="icon_name">circle-close</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-help"></h-icon>
        <div class="icon_name">s-help</div>
    </div>
    <div class="icon_list">
        <h-icon name="help"></h-icon>
        <div class="icon_name">help</div>
    </div>
    <div class="icon_list">
        <h-icon name="minus"></h-icon>
        <div class="icon_name">minus</div>
    </div>
    <div class="icon_list">
        <h-icon name="plus"></h-icon>
        <div class="icon_name">plus</div>
    </div>
    <div class="icon_list">
        <h-icon name="check"></h-icon>
        <div class="icon_name">check</div>
    </div>
    <div class="icon_list">
        <h-icon name="close"></h-icon>
        <div class="icon_name">close</div>
    </div>
    <div class="icon_list">
        <h-icon name="picture"></h-icon>
        <div class="icon_name">picture</div>
    </div>
    <div class="icon_list">
        <h-icon name="picture-outline"></h-icon>
        <div class="icon_name">picture-outline</div>
    </div>
    <div class="icon_list">
        <h-icon name="picture-outline-round"></h-icon>
        <div class="icon_name">picture-outline-round</div>
    </div>
    <div class="icon_list">
        <h-icon name="upload"></h-icon>
        <div class="icon_name">upload</div>
    </div>
    <div class="icon_list">
        <h-icon name="download"></h-icon>
        <div class="icon_name">download</div>
    </div>
    <div class="icon_list">
        <h-icon name="camera-solid"></h-icon>
        <div class="icon_name">camera-solid</div>
    </div>
    <div class="icon_list">
        <h-icon name="camera"></h-icon>
        <div class="icon_name">camera</div>
    </div>
    <div class="icon_list">
        <h-icon name="video-camera-solid"></h-icon>
        <div class="icon_name">video-camera-solid</div>
    </div>
   <div class="icon_list">
        <h-icon name="video-camera"></h-icon>
        <div class="icon_name">video-camera</div>
    </div>
    <div class="icon_list">
        <h-icon name="message-solid"></h-icon>
        <div class="icon_name">message-solid</div>
    </div>
    <div class="icon_list">
        <h-icon name="bell"></h-icon>
        <div class="icon_name">bell</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-cooperation"></h-icon>
        <div class="icon_name">s-cooperation</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-order"></h-icon>
        <div class="icon_name">s-order</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-platform"></h-icon>
        <div class="icon_name">s-platform</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-fold"></h-icon>
        <div class="icon_name">s-fold</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-unfold"></h-icon>
        <div class="icon_name">s-unfold</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-operation"></h-icon>
        <div class="icon_name">s-operation</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-promotion"></h-icon>
        <div class="icon_name">s-promotion</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-home"></h-icon>
        <div class="icon_name">s-home</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-release"></h-icon>
        <div class="icon_name">s-release</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-ticket"></h-icon>
        <div class="icon_name">s-ticket</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-management"></h-icon>
        <div class="icon_name">s-management</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-open"></h-icon>
        <div class="icon_name">s-open</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-shop"></h-icon>
        <div class="icon_name">s-shop</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-marketing"></h-icon>
        <div class="icon_name">s-marketing</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-flag"></h-icon>
        <div class="icon_name">s-flag</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-comment"></h-icon>
        <div class="icon_name">s-comment</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-finance"></h-icon>
        <div class="icon_name">s-finance</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-claim"></h-icon>
        <div class="icon_name">s-claim</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-custom"></h-icon>
        <div class="icon_name">s-custom</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-opportunity"></h-icon>
        <div class="icon_name">s-opportunity</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-data"></h-icon>
        <div class="icon_name">s-data</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-check"></h-icon>
        <div class="icon_name">s-check</div>
    </div>
    <div class="icon_list">
        <h-icon name="s-grid"></h-icon>
        <div class="icon_name">s-grid</div>
    </div>
    <div class="icon_list">
        <h-icon name="menu"></h-icon>
        <div class="icon_name">menu</div>
    </div>
    <div class="icon_list">
        <h-icon name="share"></h-icon>
        <div class="icon_name">share</div>
    </div>
    <div class="icon_list">
        <h-icon name="d-caret"></h-icon>
        <div class="icon_name">d-caret</div>
    </div>
    <div class="icon_list">
        <h-icon name="caret-left"></h-icon>
        <div class="icon_name">caret-left</div>
    </div>
    <div class="icon_list">
        <h-icon name="caret-right"></h-icon>
        <div class="icon_name">caret-right</div>
    </div>
        <div class="icon_list">
        <h-icon name="caret-bottom"></h-icon>
        <div class="icon_name">caret-bottom</div>
    </div>
    <div class="icon_list">
        <h-icon name="caret-top"></h-icon>
        <div class="icon_name">caret-top</div>
    </div>
    <div class="icon_list">
        <h-icon name="bottom-left"></h-icon>
        <div class="icon_name">bottom-left</div>
    </div>
    <div class="icon_list">
        <h-icon name="bottom-right"></h-icon>
        <div class="icon_name">bottom-right</div>
    </div>
    <div class="icon_list">
        <h-icon name="back"></h-icon>
        <div class="icon_name">back</div>
    </div>
    <div class="icon_list">
        <h-icon name="right"></h-icon>
        <div class="icon_name">right</div>
    </div>
    <div class="icon_list">
        <h-icon name="bottom"></h-icon>
        <div class="icon_name">bottom</div>
    </div>
    <div class="icon_list">
        <h-icon name="top"></h-icon>
        <div class="icon_name">top</div>
    </div>
    <div class="icon_list">
        <h-icon name="top-left"></h-icon>
        <div class="icon_name">top-left</div>
    </div>
    <div class="icon_list">
        <h-icon name="top-right"></h-icon>
        <div class="icon_name">top-right</div>
    </div>
    <div class="icon_list">
        <h-icon name="arrow-left"></h-icon>
        <div class="icon_name">arrow-left</div>
    </div>
    <div class="icon_list">
        <h-icon name="arrow-right"></h-icon>
        <div class="icon_name">arrow-right</div>
    </div>
    <div class="icon_list">
        <h-icon name="arrow-down"></h-icon>
        <div class="icon_name">arrow-down</div>
    </div>
    <div class="icon_list">
        <h-icon name="arrow-up"></h-icon>
        <div class="icon_name">arrow-up</div>
    </div>
    <div class="icon_list">
        <h-icon name="d-arrow-left"></h-icon>
        <div class="icon_name">d-arrow-left</div>
    </div>
    <div class="icon_list">
        <h-icon name="d-arrow-right"></h-icon>
        <div class="icon_name">d-arrow-right</div>
    </div>
    <div class="icon_list">
        <h-icon name="video-pause"></h-icon>
        <div class="icon_name">video-pause</div>
    </div>
    <div class="icon_list">
        <h-icon name="video-play"></h-icon>
        <div class="icon_name">video-play</div>
    </div>
    <div class="icon_list">
        <h-icon name="refresh"></h-icon>
        <div class="icon_name">refresh</div>
    </div>
    <div class="icon_list">
        <h-icon name="refresh-right"></h-icon>
        <div class="icon_name">refresh-right</div>
    </div>
    <div class="icon_list">
        <h-icon name="refresh-left"></h-icon>
        <div class="icon_name">refresh-left</div>
    </div>
    <div class="icon_list">
        <h-icon name="finished"></h-icon>
        <div class="icon_name">finished</div>
    </div>
    <div class="icon_list">
        <h-icon name="sort"></h-icon>
        <div class="icon_name">sort</div>
    </div>
    <div class="icon_list">
        <h-icon name="sort-up"></h-icon>
        <div class="icon_name">sort-up</div>
    </div>
    <div class="icon_list">
        <h-icon name="sort-down"></h-icon>
        <div class="icon_name">sort-down</div>
    </div>
    <div class="icon_list">
        <h-icon name="rank"></h-icon>
        <div class="icon_name">rank</div>
    </div>
    <div class="icon_list">
        <h-icon name="loading"></h-icon>
        <div class="icon_name">loading</div>
    </div>
    <div class="icon_list">
        <h-icon name="view"></h-icon>
        <div class="icon_name">view</div>
    </div>
    <div class="icon_list">
        <h-icon name="c-scale-to-original"></h-icon>
        <div class="icon_name">c-scale-to-original</div>
    </div>
    <div class="icon_list">
        <h-icon name="date"></h-icon>
        <div class="icon_name">date</div>
    </div>
    <div class="icon_list">
        <h-icon name="edit"></h-icon>
        <div class="icon_name">edit</div>
    </div>
    <div class="icon_list">
        <h-icon name="edit-outline"></h-icon>
        <div class="icon_name">edit-outline</div>
    </div>
    <div class="icon_list">
        <h-icon name="folder"></h-icon>
        <div class="icon_name">folder</div>
    </div>
    <div class="icon_list">
        <h-icon name="folder-opened"></h-icon>
        <div class="icon_name">folder-opened</div>
    </div>
    <div class="icon_list">
        <h-icon name="folder-add"></h-icon>
        <div class="icon_name">folder-add</div>
    </div>
    <div class="icon_list">
        <h-icon name="folder-remove"></h-icon>
        <div class="icon_name">folder-remove</div>
    </div>
    <div class="icon_list">
        <h-icon name="folder-delete"></h-icon>
        <div class="icon_name">folder-delete</div>
    </div>
    <div class="icon_list">
        <h-icon name="folder-checked"></h-icon>
        <div class="icon_name">folder-checked</div>
    </div>
    <div class="icon_list">
        <h-icon name="tickets"></h-icon>
        <div class="icon_name">tickets</div>
    </div>
    <div class="icon_list">
        <h-icon name="document-delete"></h-icon>
        <div class="icon_name">document-delete</div>
    </div>
    <div class="icon_list">
        <h-icon name="document-copy"></h-icon>
        <div class="icon_name">document-copy</div>
    </div>
    <div class="icon_list">
        <h-icon name="document-checked"></h-icon>
        <div class="icon_name">document-checked</div>
    </div>
    <div class="icon_list">
        <h-icon name="document"></h-icon>
        <div class="icon_name">document</div>
    </div>
    <div class="icon_list">
        <h-icon name="document-add"></h-icon>
        <div class="icon_name">document-add</div>
    </div>
    <div class="icon_list">
        <h-icon name="printer"></h-icon>
        <div class="icon_name">printer</div>
    </div>
    <div class="icon_list">
        <h-icon name="paperclip"></h-icon>
        <div class="icon_name">paperclip</div>
    </div>
    <div class="icon_list">
        <h-icon name="takeaway-box"></h-icon>
        <div class="icon_name">takeaway-box</div>
    </div>
    <div class="icon_list">
        <h-icon name="search"></h-icon>
        <div class="icon_name">search</div>
    </div>
    <div class="icon_list">
        <h-icon name="monitor"></h-icon>
        <div class="icon_name">monitor</div>
    </div>
    <div class="icon_list">
        <h-icon name="attract"></h-icon>
        <div class="icon_name">attract</div>
    </div>
    <div class="icon_list">
        <h-icon name="mobile"></h-icon>
        <div class="icon_name">mobile</div>
    </div>
    <div class="icon_list">
        <h-icon name="scissors"></h-icon>
        <div class="icon_name">scissors</div>
    </div>
    <div class="icon_list">
        <h-icon name="umbrella"></h-icon>
        <div class="icon_name">umbrella</div>
    </div>
    <div class="icon_list">
        <h-icon name="headset"></h-icon>
        <div class="icon_name">headset</div>
    </div>
    <div class="icon_list">
        <h-icon name="brush"></h-icon>
        <div class="icon_name">brush</div>
    </div>
    <div class="icon_list">
        <h-icon name="mouse"></h-icon>
        <div class="icon_name">mouse</div>
    </div>
    <div class="icon_list">
        <h-icon name="coordinate"></h-icon>
        <div class="icon_name">coordinate</div>
    </div>
    <div class="icon_list">
        <h-icon name="magic-stick"></h-icon>
        <div class="icon_name">magic-stick</div>
    </div>
    <div class="icon_list">
        <h-icon name="reading"></h-icon>
        <div class="icon_name">reading</div>
    </div>
    <div class="icon_list">
        <h-icon name="data-line"></h-icon>
        <div class="icon_name">data-line</div>
    </div>
    <div class="icon_list">
        <h-icon name="data-board"></h-icon>
        <div class="icon_name">data-board</div>
    </div>
    <div class="icon_list">
        <h-icon name="pie-chart"></h-icon>
        <div class="icon_name">pie-chart</div>
    </div>
    <div class="icon_list">
        <h-icon name="collection-tag"></h-icon>
        <div class="icon_name">collection-tag</div>
    </div>
    <div class="icon_list">
        <h-icon name="film"></h-icon>
        <div class="icon_name">film</div>
    </div>
    <div class="icon_list">
        <h-icon name="suitcase"></h-icon>
        <div class="icon_name">suitcase</div>
    </div>
    <div class="icon_list">
        <h-icon name="receiving"></h-icon>
        <div class="icon_name">receiving</div>
    </div>
    <div class="icon_list">
        <h-icon name="collection"></h-icon>
        <div class="icon_name">collection</div>
    </div>
    <div class="icon_list">
        <h-icon name="files"></h-icon>
        <div class="icon_name">files</div>
    </div>
    <div class="icon_list">
        <h-icon name="notebook-1"></h-icon>
        <div class="icon_name">notebook-1</div>
    </div>
    <div class="icon_list">
        <h-icon name="toilet-paper"></h-icon>
        <div class="icon_name">toilet-paper</div>
    </div>
    <div class="icon_list">
        <h-icon name="office-building"></h-icon>
        <div class="icon_name">office-building</div>
    </div>
    <div class="icon_list">
        <h-icon name="school"></h-icon>
        <div class="icon_name">school</div>
    </div>
    <div class="icon_list">
        <h-icon name="table-lamp"></h-icon>
        <div class="icon_name">table-lamp</div>
    </div>
    <div class="icon_list">
        <h-icon name="house"></h-icon>
        <div class="icon_name">house</div>
    </div>
    <div class="icon_list">
        <h-icon name="no-smoking"></h-icon>
        <div class="icon_name">no-smoking</div>
    </div>
    <div class="icon_list">
        <h-icon name="smoking"></h-icon>
        <div class="icon_name">smoking</div>
    </div>
    <div class="icon_list">
        <h-icon name="shopping-cart-full"></h-icon>
        <div class="icon_name">shopping-cart-full</div>
    </div>
    <div class="icon_list">
        <h-icon name="shopping-cart-1"></h-icon>
        <div class="icon_name">shopping-cart-1</div>
    </div>
    <div class="icon_list">
        <h-icon name="sold-out"></h-icon>
        <div class="icon_name">sold-out</div>
    </div>
    <div class="icon_list">
        <h-icon name="sell"></h-icon>
        <div class="icon_name">sell</div>
    </div>
    <div class="icon_list">
        <h-icon name="present"></h-icon>
        <div class="icon_name">present</div>
    </div>
    <div class="icon_list">
        <h-icon name="box"></h-icon>
        <div class="icon_name">box</div>
    </div>
    <div class="icon_list">
        <h-icon name="bank-card"></h-icon>
        <div class="icon_name">bank-card</div>
    </div>
    <div class="icon_list">
        <h-icon name="money"></h-icon>
        <div class="icon_name">money</div>
    </div>
    <div class="icon_list">
        <h-icon name="coin"></h-icon>
        <div class="icon_name">coin</div>
    </div>
    <div class="icon_list">
        <h-icon name="wallet"></h-icon>
        <div class="icon_name">wallet</div>
    </div>
    <div class="icon_list">
        <h-icon name="discount"></h-icon>
        <div class="icon_name">discount</div>
    </div>
    <div class="icon_list">
        <h-icon name="price-tag"></h-icon>
        <div class="icon_name">price-tag</div>
    </div>
    <div class="icon_list">
        <h-icon name="news"></h-icon>
        <div class="icon_name">news</div>
    </div>
    <div class="icon_list">
        <h-icon name="guide"></h-icon>
        <div class="icon_name">guide</div>
    </div>
     <div class="icon_list">
        <h-icon name="male"></h-icon>
        <div class="icon_name">male</div>
    </div>
     <div class="icon_list">
        <h-icon name="female"></h-icon>
        <div class="icon_name">female</div>
    </div>
    <div class="icon_list">
        <h-icon name="thumb"></h-icon>
        <div class="icon_name">thumb</div>
    </div>
    <div class="icon_list">
        <h-icon name="cpu"></h-icon>
        <div class="icon_name">cpu</div>
    </div>
    <div class="icon_list">
        <h-icon name="link"></h-icon>
        <div class="icon_name">link</div>
    </div>
    <div class="icon_list">
        <h-icon name="connection"></h-icon>
        <div class="icon_name">connection</div>
    </div>
    <div class="icon_list">
        <h-icon name="open"></h-icon>
        <div class="icon_name">open</div>
    </div>
    <div class="icon_list">
        <h-icon name="turn-off"></h-icon>
        <div class="icon_name">turn-off</div>
    </div>
    <div class="icon_list">
        <h-icon name="set-up"></h-icon>
        <div class="icon_name">set-up</div>
    </div>
    <div class="icon_list">
        <h-icon name="chat-round"></h-icon>
        <div class="icon_name">chat-round</div>
    </div>
    <div class="icon_list">
        <h-icon name="chat-line-round"></h-icon>
        <div class="icon_name">chat-line-round</div>
    </div>
    <div class="icon_list">
        <h-icon name="chat-square"></h-icon>
        <div class="icon_name">chat-square</div>
    </div>
    <div class="icon_list">
        <h-icon name="chat-dot-round"></h-icon>
        <div class="icon_name">chat-dot-round</div>
    </div>
    <div class="icon_list">
        <h-icon name="chat-dot-square"></h-icon>
        <div class="icon_name">chat-dot-square</div>
    </div>
    <div class="icon_list">
        <h-icon name="chat-line-square"></h-icon>
        <div class="icon_name">chat-line-square</div>
    </div>
    <div class="icon_list">
        <h-icon name="message"></h-icon>
        <div class="icon_name">message</div>
    </div>
    <div class="icon_list">
        <h-icon name="postcard"></h-icon>
        <div class="icon_name">postcard</div>
    </div>
    <div class="icon_list">
        <h-icon name="position"></h-icon>
        <div class="icon_name">position</div>
    </div>
    <div class="icon_list">
        <h-icon name="turn-off-microphone"></h-icon>
        <div class="icon_name">turn-off-microphone</div>
    </div>
    <div class="icon_list">
        <h-icon name="microphone"></h-icon>
        <div class="icon_name">microphone</div>
    </div>
    <div class="icon_list">
        <h-icon name="close-notification"></h-icon>
        <div class="icon_name">close-notification</div>
    </div>
    <div class="icon_list">
        <h-icon name="bangzhu"></h-icon>
        <div class="icon_name">bangzhu</div>
    </div>
    <div class="icon_list">
        <h-icon name="time"></h-icon>
        <div class="icon_name">time</div>
    </div>
    <div class="icon_list">
        <h-icon name="odometer"></h-icon>
        <div class="icon_name">odometer</div>
    </div>
    <div class="icon_list">
        <h-icon name="crop"></h-icon>
        <div class="icon_name">crop</div>
    </div>
    <div class="icon_list">
        <h-icon name="aim"></h-icon>
        <div class="icon_name">aim</div>
    </div>
    <div class="icon_list">
        <h-icon name="switch-button"></h-icon>
        <div class="icon_name">switch-button</div>
    </div>
    <div class="icon_list">
        <h-icon name="full-screen"></h-icon>
        <div class="icon_name">full-screen</div>
    </div>
    <div class="icon_list">
        <h-icon name="copy-document"></h-icon>
        <div class="icon_name">copy-document</div>
    </div>
    <div class="icon_list">
        <h-icon name="mic"></h-icon>
        <div class="icon_name">mic</div>
    </div>
    <div class="icon_list">
        <h-icon name="stopwatch"></h-icon>
        <div class="icon_name">stopwatch</div>
    </div>
    <div class="icon_list">
        <h-icon name="medal"></h-icon>
        <div class="icon_name">medal</div>
    </div>
    <div class="icon_list">
        <h-icon name="trophy"></h-icon>
        <div class="icon_name">trophy</div>
    </div>
    <div class="icon_list">
        <h-icon name="trophy-1"></h-icon>
        <div class="icon_name">trophy-1</div>
    </div>
    <div class="icon_list">
        <h-icon name="first-aid-kit"></h-icon>
        <div class="icon_name">first-aid-kit</div>
    </div>
    <div class="icon_list">
        <h-icon name="discover"></h-icon>
        <div class="icon_name">discover</div>
    </div>
    <div class="icon_list">
        <h-icon name="place"></h-icon>
        <div class="icon_name">place</div>
    </div>
    <div class="icon_list">
        <h-icon name="location"></h-icon>
        <div class="icon_name">location</div>
    </div>
    <div class="icon_list">
        <h-icon name="location-outline"></h-icon>
        <div class="icon_name">location-outline</div>
    </div>
    <div class="icon_list">
        <h-icon name="location-information"></h-icon>
        <div class="icon_name">location-information</div>
    </div>
    <div class="icon_list">
        <h-icon name="add-location"></h-icon>
        <div class="icon_name">add-location</div>
    </div>
    <div class="icon_list">
        <h-icon name="delete-location"></h-icon>
        <div class="icon_name">delete-location</div>
    </div>
    <div class="icon_list">
        <h-icon name="map-location"></h-icon>
        <div class="icon_name">map-location</div>
    </div>
    <div class="icon_list">
        <h-icon name="alarm-clock"></h-icon>
        <div class="icon_name">alarm-clock</div>
    </div>
    <div class="icon_list">
        <h-icon name="timer"></h-icon>
        <div class="icon_name">timer</div>
    </div>
    <div class="icon_list">
        <h-icon name="watch"></h-icon>
        <div class="icon_name">watch</div>
    </div>
    <div class="icon_list">
        <h-icon name="lock"></h-icon>
        <div class="icon_name">lock</div>
    </div>
    <div class="icon_list">
        <h-icon name="unlock"></h-icon>
        <div class="icon_name">unlock</div>
    </div>
    <div class="icon_list">
        <h-icon name="key"></h-icon>
        <div class="icon_name">key</div>
    </div>
    <div class="icon_list">
        <h-icon name="service"></h-icon>
        <div class="icon_name">service</div>
    </div>
    <div class="icon_list">
        <h-icon name="mobile-phone"></h-icon>
        <div class="icon_name">mobile-phone</div>
    </div>
    <div class="icon_list">
        <h-icon name="bicycle"></h-icon>
        <div class="icon_name">bicycle</div>
    </div>
    <div class="icon_list">
        <h-icon name="truck"></h-icon>
        <div class="icon_name">truck</div>
    </div>
    <div class="icon_list">
        <h-icon name="ship"></h-icon>
        <div class="icon_name">ship</div>
    </div>
    <div class="icon_list">
        <h-icon name="basketball"></h-icon>
        <div class="icon_name">basketball</div>
    </div>
    <div class="icon_list">
        <h-icon name="football"></h-icon>
        <div class="icon_name">football</div>
    </div>
    <div class="icon_list">
        <h-icon name="soccer"></h-icon>
        <div class="icon_name">soccer</div>
    </div>
    <div class="icon_list">
        <h-icon name="light-rain"></h-icon>
        <div class="icon_name">light-rain</div>
    </div>
    <div class="icon_list">
        <h-icon name="lightning"></h-icon>
        <div class="icon_name">lightning</div>
    </div>
    <div class="icon_list">
        <h-icon name="heavy-rain"></h-icon>
        <div class="icon_name">heavy-rain</div>
    </div>
    <div class="icon_list">
        <h-icon name="sunrise"></h-icon>
        <div class="icon_name">sunrise</div>
    </div>
    <div class="icon_list">
        <h-icon name="sunset"></h-icon>
        <div class="icon_name">sunset</div>
    </div>
    <div class="icon_list">
        <h-icon name="sunny"></h-icon>
        <div class="icon_name">sunny</div>
    </div>
    <div class="icon_list">
        <h-icon name="cloudy"></h-icon>
        <div class="icon_name">cloudy</div>
    </div>
    <div class="icon_list">
        <h-icon name="partly-cloudy"></h-icon>
        <div class="icon_name">partly-cloudy</div>
    </div>
    <div class="icon_list">
        <h-icon name="cloudy-and-sunny"></h-icon>
        <div class="icon_name">cloudy-and-sunny</div>
    </div>
    <div class="icon_list">
        <h-icon name="moon"></h-icon>
        <div class="icon_name">moon</div>
    </div>
    <div class="icon_list">
        <h-icon name="moon-night"></h-icon>
        <div class="icon_name">moon-night</div>
    </div>
    <div class="icon_list">
        <h-icon name="dish"></h-icon>
        <div class="icon_name">dish</div>
    </div>
    <div class="icon_list">
        <h-icon name="dish-1"></h-icon>
        <div class="icon_name">dish-1</div>
    </div>
    <div class="icon_list">
        <h-icon name="food"></h-icon>
        <div class="icon_name">food</div>
    </div>
    <div class="icon_list">
        <h-icon name="chicken"></h-icon>
        <div class="icon_name">chicken</div>
    </div>
    <div class="icon_list">
        <h-icon name="fork-spoon"></h-icon>
        <div class="icon_name">fork-spoon</div>
    </div>
    <div class="icon_list">
        <h-icon name="knife-fork"></h-icon>
        <div class="icon_name">knife-fork</div>
    </div>
    <div class="icon_list">
        <h-icon name="burger"></h-icon>
        <div class="icon_name">burger</div>
    </div>
    <div class="icon_list">
        <h-icon name="tableware"></h-icon>
        <div class="icon_name">tableware</div>
    </div>
    <div class="icon_list">
        <h-icon name="sugar"></h-icon>
        <div class="icon_name">sugar</div>
    </div>
    <div class="icon_list">
        <h-icon name="dessert"></h-icon>
        <div class="icon_name">dessert</div>
    </div>
    <div class="icon_list">
        <h-icon name="ice-cream"></h-icon>
        <div class="icon_name">ice-cream</div>
    </div>
    <div class="icon_list">
        <h-icon name="hot-water"></h-icon>
        <div class="icon_name">hot-water</div>
    </div>
    <div class="icon_list">
        <h-icon name="water-cup"></h-icon>
        <div class="icon_name">water-cup</div>
    </div>
    <div class="icon_list">
        <h-icon name="coffee-cup"></h-icon>
        <div class="icon_name">coffee-cup</div>
    </div>
    <div class="icon_list">
        <h-icon name="cold-drink"></h-icon>
        <div class="icon_name">cold-drink</div>
    </div>
    <div class="icon_list">
        <h-icon name="goblet"></h-icon>
        <div class="icon_name">goblet</div>
    </div>
    <div class="icon_list">
        <h-icon name="goblet-full"></h-icon>
        <div class="icon_name">goblet-full</div>
    </div>
    <div class="icon_list">
        <h-icon name="goblet-square"></h-icon>
        <div class="icon_name">goblet-square</div>
    </div>
    <div class="icon_list">
        <h-icon name="goblet-square-full"></h-icon>
        <div class="icon_name">goblet-square-full</div>
    </div>
    <div class="icon_list">
        <h-icon name="refrigerator"></h-icon>
        <div class="icon_name">refrigerator</div>
    </div>
    <div class="icon_list">
        <h-icon name="grape"></h-icon>
        <div class="icon_name">grape</div>
    </div>
    <div class="icon_list">
        <h-icon name="watermelon"></h-icon>
        <div class="icon_name">watermelon</div>
    </div>
    <div class="icon_list">
        <h-icon name="cherry"></h-icon>
        <div class="icon_name">cherry</div>
    </div>
    <div class="icon_list">
        <h-icon name="apple"></h-icon>
        <div class="icon_name">apple</div>
    </div>
    <div class="icon_list">
        <h-icon name="pear"></h-icon>
        <div class="icon_name">pear</div>
    </div>
    <div class="icon_list">
        <h-icon name="orange"></h-icon>
        <div class="icon_name">orange</div>
    </div>
    <div class="icon_list">
        <h-icon name="coffee"></h-icon>
        <div class="icon_name">coffee</div>
    </div>
    <div class="icon_list">
        <h-icon name="ice-tea"></h-icon>
        <div class="icon_name">ice-tea</div>
    </div>
    <div class="icon_list">
        <h-icon name="ice-drink"></h-icon>
        <div class="icon_name">ice-drink</div>
    </div>
    <div class="icon_list">
        <h-icon name="milk-tea"></h-icon>
        <div class="icon_name">milk-tea</div>
    </div>
    <div class="icon_list">
        <h-icon name="potato-strips"></h-icon>
        <div class="icon_name">potato-strips</div>
    </div>
    <div class="icon_list">
        <h-icon name="lollipop"></h-icon>
        <div class="icon_name">lollipop</div>
    </div>
    <div class="icon_list">
        <h-icon name="ice-cream-square"></h-icon>
        <div class="icon_name">ice-cream-square</div>
    </div>
    <div class="icon_list">
        <h-icon name="ice-cream-round"></h-icon>
        <div class="icon_name">ice-cream-round</div>
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
