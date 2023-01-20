<script lang="ts">
import "../style/index.less";
import { getCurrentInstance, defineComponent, useSlots, onMounted, toRefs, ref, watchEffect, nextTick } from "vue";
export default defineComponent({
  name: "HTooltip",
  props: {
    placement: {
      type: String,
      default: 'top',
      validator: (value: string) => ["right"].includes(value),
    },
    modelValue: {
      type: Boolean,
      default: null,
    },
    width: String,
    content: [String, Number],
  },
  setup(props) {
    // const props = defineProps(TooltipProps);
    const slots = useSlots();
    // 获取当前组件的实例
    const instance = getCurrentInstance();
    const { placement, content, width, modelValue } = toRefs(props);
    const isShow = ref(modelValue.value);

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
      console.log("showed");
      tip && tip.classList.add("h-tooltip-show");
      console.log("show end");
    };

    function calcStyle(Rect: any, tip: any, key: string): {x: number, y: number} {
      let y = document.documentElement.scrollTop;
      let x = 0;
      const placement:any = {
        left: () => {
          x += Rect.x;
          y += Rect.y - tip.offsetHeight;
        },
        right: () => {
          x += Rect.x + Rect.width
          y += Rect.y + (Rect.height - tip.offsetHeight) * 0.5
        },
      };
      placement[key]();
      return { x, y };
    }

    // 核心函数，获取到已经渲染完毕的DOM.
    function update() {
      const Rect = instance?.proxy?.$el.getBoundingClientRect();
      const el = document.getElementById(tid);
      if (!el) {
        document.body.appendChild(tip);
      }
      tip.style.display = "block";
      const { x, y } = calcStyle(Rect, tip, placement?.value!);
      tip.style.top = y + "px";
      tip.style.left = x + "px";
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
          console.log("start show");
          show();
        } else {
          hide();
        }
      });

    // 监听有无接触组件，接触了为true，离开为false
      el && el.addEventListener("mouseenter",() => {
        console.log(modelValue.value);
        // if (!modelValue?.value && !modelValue.value) return;
        isShow.value = true;
      });

      el && el.addEventListener("mouseleave",() => {
        // if (modelValue?.value && modelValue.value) return;
        isShow.value = false;
      });
    })

    return () => {
      return getFirstElement()
    }
  },
});
</script>