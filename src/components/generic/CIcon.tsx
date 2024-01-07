import { ReactElement } from "react";
import CImage from "./CImage";
import { CIconType } from "@/types/generic/CIconType";

const CIcon = ({
  src,
  alt,
  className,
  small,
  medium,
  large,
  customSize,
  clickable,
  style,
  onClick,
}: CIconType): ReactElement => {
  let width = 16;
  if (small) {
    width = 16;
  } else if (medium) {
    width = 20;
  } else if (large) {
    width = 24;
  } else if (customSize) {
    width = customSize;
  }

  return (
    <CImage
      Static
      width={width}
      height={width}
      src={src}
      alt={alt || "icon"}
      className={className}
      style={{ cursor: clickable ? "pointer" : "dafault", ...style }}
      onClick={onClick}
    />
  );
};

export default CIcon;
