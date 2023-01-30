<script lang="ts">
import { h, toRefs, reactive } from "vue";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    renderContent: Function,
    parentData: Array,
  },
  setup(props) {
    const { data, renderContent, parentData } = toRefs(props);
    const nodeData = reactive({
      data: data.value,
      parentData: parentData.value,
    });
    return () => [renderContent.value ? renderContent.value(h, nodeData) : h("span", data.value.label)];
  },
};
</script>
