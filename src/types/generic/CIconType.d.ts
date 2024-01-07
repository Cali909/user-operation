import { CSSProperties, MouseEventHandler } from "react";

export type CIconType = {
  src: string;
  alt: string;
  className?: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  customSize?: number;
  clickable?: boolean;
  sx?: SxProps<Theme>;
  style?: CSSProperties;
  filter?: string;
  onClick?: MouseEventHandler<HTMLElement>;
};
