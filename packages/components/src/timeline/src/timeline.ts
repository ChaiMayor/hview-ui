import { defineComponent, h, provide, renderSlot } from "vue";

const Timeline = defineComponent({
  name: "HTimeline",
  setup(_, { slots }) {
    provide("timeline", slots);

    return () => {
      return h("ul", { class: "h-timeline" }, [renderSlot(slots, "default")]);
    };
  },
});

export default Timeline;
export type TimelineInstance = InstanceType<typeof Timeline>;
