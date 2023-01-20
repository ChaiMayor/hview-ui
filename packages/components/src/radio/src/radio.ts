interface IItem {
  label: string;
  id: number;
  disabled: boolean;
  inline: string;
}

const radioProps = {
  options: {
    type: Array,
    default: () => [],
  },
  inline: {
    type: Boolean,
    default: true,
  },
  customColor: {
    type: String,
    default: "#0e80eb",
  },
};

export { radioProps };

export type { IItem };
