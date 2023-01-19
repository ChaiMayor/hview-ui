import { ExtractPropTypes } from "vue";

export const Direction = ["horizontal", "vertical"];
/**
 * 定义Container的参数
 */
export const ContainerProps = {
  direction: {
    type: String,
    value: Direction,
  },
};

/**
 * 定义Header的参数
 */
export const HeaderProps = {
  height: {
    type: String,
    default: "60px",
  },
};

/**
 * 定义Aside的参数
 */
export const AsideProps = {
  width: {
    type: String,
    default: "300px",
  },
};

/**
 * 定义Footer的参数
 */
export const FooterProps = {
  height: {
    type: String,
    default: "60px",
  },
};

export type ContainerProps = ExtractPropTypes<typeof ContainerProps>;
export type HeaderProps = ExtractPropTypes<typeof HeaderProps>;
export type AsideProps = ExtractPropTypes<typeof AsideProps>;
export type FooterProps = ExtractPropTypes<typeof FooterProps>;
