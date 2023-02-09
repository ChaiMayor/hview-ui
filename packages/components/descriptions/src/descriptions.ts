import type Description from "./description.vue";

export const descriptionProps = {
  border: {
    type: Boolean,
    default: false,
  },
  column: {
    type: Number,
    default: 3,
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal",
  },
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default",
  },
  title: {
    type: String,
    default: "",
  },
  extra: {
    type: String,
    default: "",
  },
};

export type DescriptionInstance = InstanceType<typeof Description>;
