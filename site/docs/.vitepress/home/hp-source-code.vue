<template>
  <ClientOnly>
    <div class="example">
      <div class="example-showcase">
        <slot></slot>
      </div>
      <div class="op-btns">
        <ElTooltip content="在 PlayGround 中编辑" :show-arrow="false">
          <h-icon name="test" @click="toPlayground"></h-icon>
        </ElTooltip>
        <ElTooltip content="在 Github 中编辑" :show-arrow="false">
          <h-icon name="github" @click="toGithub"></h-icon>
        </ElTooltip>
        <ElTooltip content="复制代码" :show-arrow="false">
          <h-icon name="fuzhi" @click="copyCode"></h-icon>
        </ElTooltip>
        <ElTooltip content="查看源代码" :show-arrow="false">
          <h-icon name="code" @click="toggleSourceVisible()"></h-icon>
        </ElTooltip>
      </div>

      <ElCollapseTransition>
        <SourceCode v-show="sourceVisible" :source="source!" />
      </ElCollapseTransition>

      <Transition name="el-fade-in-linear">
        <div
          v-show="sourceVisible"
          class="example-float-control"
          @click="toggleSourceVisible(false)">
          <h-icon name="ArrowTopBold" @click="copyCode"></h-icon>
          <span>隐藏源码</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useClipboard, useToggle, isClient } from "@vueuse/core";
import { ElTooltip, ElCollapseTransition } from "element-plus";
import SourceCode from "./hp-code.vue";
import { usePlayground } from "./composables/use-playground";

import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const { $message } = instance!.appContext.config.globalProperties;

const [sourceVisible, toggleSourceVisible] = useToggle();

const props = defineProps<{
  source: string;
  rawSource: string;
  pageName: string;
}>();

const { copy } = useClipboard({
  source: decodeURIComponent(props.rawSource!),
  read: false,
});

const copyCode = async () => {
  try {
    await copy();
    $message({
      message: "复制成功！",
      type: "success",
    });
  } catch (e: any) {
    console.log(e);
  }
};

const toGithub = () => {
  const name = props.pageName.split("/")[0];
  window.open(
    `https://github.com/ChaiMayor/hview-ui/tree/dev/packages/components/${name}/src/${name}.vue`,
    "_blank",
  );
};

const toPlayground = () => {
  const { link } = usePlayground(props.rawSource);
  if (!isClient) return;
  window.open(link);
};
</script>

<style scoped lang="less">
:deep(.op-btns) {
  padding-right: 16px !important;
  .hview-icon {
    margin-right: 16px;
    cursor: pointer;
    transition: color 0.3s;
    color: var(--h-code-icon-color);
    &:hover {
      color: var(--h-code-icon-color-hover);
    }
    &:last-of-type {
      margin-right: 0;
    }
    :deep(i) {
      font-size: 16px;
    }
  }
}
.m-0 {
  margin: 0;
}
.example-showcase {
  padding: 1.5rem;
  border-bottom: 1px solid #dcdfe6 !important;
}
html.dark {
  .example-showcase {
    border-bottom: 1px solid rgba(84, 84, 84, 0.48) !important;
  }
  .op-btns {
    .hview-icon {
      color: var(--dark-h-code-icon-color) !important;
      &:hover {
        color: var(--dark-h-code-icon-color-hover) !important;
      }
    }
  }
}
.example {
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 4px;

  .op-btns {
    border-top: 1px solid var(--vp-c-divider-light);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--vp-c-brand);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--vp-c-text-2);
      transition: 0.2s;
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--vp-c-divider-light);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--vp-c-bg, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--vp-c-brand);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--vp-c-brand-light);
    }
  }
}

.example-float-control {
  :deep(i) {
    font-size: 14px;
  }
  color: #909399;
  transition: color 0.3s;
  &:hover {
    color: var(--vp-c-green);
  }
}
</style>
