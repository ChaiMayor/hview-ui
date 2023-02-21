<template>
  <div class="home-project__container">
    <div ref="homeProject" :class="['home-project', { 'fade-in': isShow }]">
      <div class="home-project__header">
        <p class="home-project__header--title">{{
          isEn ? dataEn.title : data.title
        }}</p>
        <p class="home-project__header--subtitle">{{
          isEn ? dataEn.subtitle : data.subtitle
        }}</p>
        <h-button type="primary"
          ><a
            href="https://chai-mayor.gitee.io/hview-ui/docs/installation.html"
            target="_blank"
            >{{ isEn ? orderEn.learn : order.learn }}</a
          ></h-button
        >
      </div>
      <div class="home-project__body">
        <div class="home-project__body--codebg"> </div>
        <div class="home-project__body--middle">
          <MacContainer>
            <h-descriptions :title="isEn ? orderEn.t1 : order.t1">
              <h-descriptions-item :label="isEn ? orderEn.name : order.name"
                >小黑子</h-descriptions-item
              >
              <h-descriptions-item :label="isEn ? orderEn.tel : order.tel"
                >13620160376</h-descriptions-item
              >
              <h-descriptions-item
                :label="isEn ? orderEn.nationality : order.nationality"
                >中国</h-descriptions-item
              >
              <h-descriptions-item :label="isEn ? orderEn.label : order.label">
                <h-tag size="small">ikun</h-tag>
                <h-tag size="small" style="margin-left: 6px">树脂</h-tag>
              </h-descriptions-item>
              <h-descriptions-item :label="isEn ? orderEn.addr : order.addr"
                >翻斗花园二号楼</h-descriptions-item
              >
            </h-descriptions>
            <h-divider />
            <div class="mac-container--box">
              <div class="mac-container--box--start">
                <h-descriptions :title="isEn ? orderEn.t2 : order.t2">
                  <h-descriptions-item>
                    <h-timeline>
                      <h-timeline-item
                        v-for="(activity, index) in isEn
                          ? activitiesEn
                          : activities"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :hollow="activity.hollow"
                        :timestamp="activity.timestamp">
                        {{ activity.content }}
                      </h-timeline-item>
                    </h-timeline></h-descriptions-item
                  >
                </h-descriptions>
              </div>
              <div class="mac-container--box--end">
                <h-descriptions :title="isEn ? orderEn.pro : order.pro">
                  <h-descriptions-item>
                    <h-progress
                      type="dashboard"
                      :percentage="percentage"
                      :color="colors" />
                    <h-progress
                      type="dashboard"
                      :percentage="percentage2"
                      :color="colors" />
                  </h-descriptions-item>
                </h-descriptions>
              </div>
            </div>
          </MacContainer>
        </div>
        <div class="home-project__body--cn">
          <div class="home-project__body--cn--start"> </div>
          <div class="home-project__body--cn--end"> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import MacContainer from "./mac-container.vue";
import { useIsEn, useData } from "../hooks/use-is-en";

const { isEn } = useIsEn();
const { data, dataEn } = useData(
  {
    title: "组件展示",
    subtitle: "使用组件库提供的组件，快速搭建一个高质量页面",
  },
  {
    title: "Component display",
    subtitle:
      "Quickly build a high-quality page using components provided by the component library",
  },
);

const homeProject = ref(null);
const isShow = ref<boolean>(false);
const percentage = ref(10);
const percentage2 = ref(0);

const colors = [
  { color: "#f56c6c", percentage: 20 },
  { color: "#e6a23c", percentage: 40 },
  { color: "#5cb87a", percentage: 60 },
  { color: "#1989fa", percentage: 80 },
  { color: "#6f7ad3", percentage: 100 },
];

const order = {
  learn: "了解更多",
  t1: "个人信息",
  name: "姓名",
  tel: "电话",
  nationality: "国籍",
  label: "标签",
  addr: "住址",
  t2: "行程历史",
  pro: "完成进度",
};

const orderEn = {
  learn: "Learn more",
  t1: "Personal information",
  name: "name",
  tel: "tel",
  nationality: "nationality",
  label: "label",
  addr: "address",
  t2: "Trip history",
  pro: "Progress of completion",
};

const activities = [
  {
    content: "唱跳 Rap Music",
    timestamp: "2023-01-01 13:14",
    size: "large",
    type: "primary",
    icon: "success",
  },
  {
    content: "练习时长两年半",
    timestamp: "2023-01-01 12:06",
    color: "#0bbd87",
  },
  {
    content: "闻鸡起舞",
    timestamp: "2023-01-01 6:00",
    size: "large",
  },
  {
    content: "Custom hollow",
    timestamp: "2023-01-03 13:14",
    type: "primary",
    hollow: true,
  },
  {
    content: "Default node",
    timestamp: "2023-01-04 13:14",
  },
];

const activitiesEn = [
  {
    content: "Sing and dance Rap Music",
    timestamp: "2023-01-01 13:14",
    size: "large",
    type: "primary",
    icon: "success",
  },
  {
    content: "Practice for two and a half years",
    timestamp: "2023-01-01 12:06",
    color: "#0bbd87",
  },
  {
    content: "Dance at the sound of a chicken",
    timestamp: "2023-01-01 6:00",
    size: "large",
  },
  {
    content: "Custom hollow",
    timestamp: "2023-01-03 13:14",
    type: "primary",
    hollow: true,
  },
  {
    content: "Default node",
    timestamp: "2023-01-04 13:14",
  },
];

useIntersectionObserver(homeProject, ([{ isIntersecting }]) => {
  isShow.value = isIntersecting;
});

onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10;
  }, 500);
});
</script>

<style lang="less" scoped>
.home-project {
  width: 100%;
  max-width: 1152px;
  opacity: 0;
  margin: 0 auto;
  margin-top: 120px;
  padding-top: 120px;
  border-top: 1px solid rgba(28, 31, 35, 0.08);
  overflow: hidden;

  :deep(.h-progress) {
    margin-right: 30px;
    margin-top: 20px;
  }

  :deep(.direction--horizontal) {
    border-color: rgba(28, 31, 35, 0.08);
  }
  :deep(.h-timeline) {
    margin-top: -18px !important;
  }
  .mac-container--box {
    display: flex;
    &--start {
      flex: 1;
    }
    &--end {
      width: 58%;
    }
  }
  .mac-container {
    :deep(&__body) {
      padding: 30px 50px;
    }
  }
  :deep(.h-descriptions-title) {
    color: var(--vi-color-primary);
    font-size: 18px;
    padding-bottom: 8px;
    &:last-of-type {
      padding-bottom: 0px;
    }
  }
  &__container {
    background-color: #16161a;
  }
  &__header {
    text-align: center;
    .h-button {
      width: 120px;
      height: 48px;
      font-size: 16px;
      margin-bottom: 68px !important;
    }
    &--title {
      font-size: 32px;
      color: #fff;
      font-weight: 700;
    }
    &--subtitle {
      margin-top: 32px;
      color: #fff;
      font-size: 18px;
      margin-bottom: 24px;
    }
  }
  &__body {
    position: relative;
    width: 100%;
    &--codebg {
      margin: 0 auto;
      transform: translateX(10%);
      opacity: 0.8;
      background: linear-gradient(180deg, rgba(28, 31, 35, 0), #16161a);
      max-width: calc(1158px * 0.55);
      height: calc(363px * 0.55);
      background: url(https://oss.zhishiyu.online/common/homepage-pro-code.png)
        no-repeat;
      background-size: 100% 100%;
    }
    &--cn {
      width: 100%;
      display: flex;
      &--start {
        flex: 1;
        height: 320px;
        background: url(./start.png);
        background-size: auto 100%;
      }
      &--end {
        flex: 1;
        height: 320px;
        background: url(./end.png);
        background-size: auto 100%;
        background-position-x: right;
      }
    }
    &--middle {
      position: absolute;
      /* 水平垂直居中 */
      position: absolute;
      left: 50%;
      transform: translate(-50%, -10%);
      width: 763px;
      height: 800px;
      box-shadow: 0 -28px 18px 0 rgb(39 47 89 / 12%);
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 30px;
        top: 0;
        z-index: -1;
        left: 0;
        box-shadow: 0 -28px 30px 0 rgb(12, 13, 17);
      }
    }
  }
}

.fade-in {
  opacity: 1;
  transition: opacity 0.8s 0.2s ease;
}
</style>
