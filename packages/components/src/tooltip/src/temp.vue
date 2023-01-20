<script setup lang="ts">
import "../style/index.less";
import { getCurrentInstance, defineComponent, useSlots, onMounted, toRefs, ref, watchEffect, nextTick } from "vue";
import { TooltipProps } from "./tooltip";

const props = defineProps(TooltipProps);
const slots = useSlots();
// 获取当前组件的实例
const instance = getCurrentInstance();
const { placement, content, width, modelValue } = toRefs(props);
const isShow = ref(modelValue.value);

// 构建以tooltip的DOM元素，并用uid记录
const tip = document.createElement("div");
tip.className = `h-tooltip h-tooltip-${placement!.value}`;
width?.value && (tip.style.width = width.value)
const tid = (tip.id = `h-tooltip-${instance!.uid}`)

// 隐藏tooltip
function hide() {
  const el = document.getElementById(tid);
  if (el) {
    // 移除样式
    el.classList.remove("h-tooltip-show");
  }
};

// 显示tooltip
function show() {
  tip && tip.classList.add("h-tooltip-show");
};

function calcStyle(Rect: any, tip: any, key: string): Object {
  let y = document.documentElement.scrollTop;
  let x = 0;

  const placement:any = {
    left: () => {
      x += Rect.x;
      y += Rect.y - tip.offsetHeight;
    }
  };
  placement[key]();
  return { "x": x , "y": y };
}

// 核心函数，获取到已经渲染完毕的DOM.
function update() {
  // const Rect = instance?.proxy?.$el.getBoundingClientRect();
  const Rect = instance?.proxy?.$el;
  console.log(Rect)
  const el = document.getElementById(tid);
  if (!el) {
    document.body.appendChild(tip);
  }
  tip.style.display = "block";
  const obj = calcStyle(Rect, tip, placement?.value!);
  console.log(obj)
  // tip.style.top = obj.y + "px";
  // tip.style.left = obj.x + "px";
}


onMounted(() => {
  const el = instance?.proxy?.$el;
  // 监听isShow变化，监听有无接触组件
  watchEffect(() => {
    tip.innerHTML = `<span>${content?.value}</span>` || "";
    // 下个宏循环才能获取，加上nextTick
    nextTick(update);
    if(toString.call(props.modelValue) !== "[object Null]") {
      isShow.value = modelValue.value;
    }
    
    if (isShow.value) {
      show();
    } else {
      hide();
    }
  });

  // 监听有无接触组件，接触了为true，离开为false
  el && el.addEventListener("mouseenter",() => {
    if (!modelValue?.value && !modelValue.value) return;
      isShow.value = true;
  });

  el && el.addEventListener("mouseleave",() => {
    if (!modelValue?.value && !modelValue.value) return;
      isShow.value = false;
  });
})

// 获取插槽元素
function getFirstElement() {
  const slotsDefault = slots.default &&  slots.default()
  if (!Array.isArray(slotsDefault)) return null
  let element = null;
  for (let index = 0; index < slotsDefault.length; index++) {
    if (slotsDefault[index] && slotsDefault[index].type) {
      element = slotsDefault[index];
    }
  }
  return element;
};
defineExpose({ getFirstElement });
</script>
<script lang="ts">
export default defineComponent({
  name: "HTooltip",
})
</script>