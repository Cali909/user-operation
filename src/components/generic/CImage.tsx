import { Box, SxProps, Theme } from "@mui/material";
import Image from "next/image";
import { CSSProperties, MouseEventHandler, ReactElement } from "react";

type props = {
  src: string;
  alt: string;
  sx?: SxProps<Theme>;
  className?: string;
  keepAR?: boolean;
  Static?: boolean;
  width: number;
  height: number;
  greyscale?: boolean;
  clickable?: boolean;
  style?: CSSProperties;
  parentSx?: CSSProperties;
  xs?: number;
  sm?: number;
  md?: number;
  padding?: number;
  priority?: boolean;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
};

const CImage = ({
  src,
  alt,
  className,
  Static,
  width,
  height,
  greyscale,
  clickable,
  xs,
  sm,
  md,
  padding,
  onClick,
  parentSx,
  priority,
  style,
}: props): ReactElement => {
  return Static ? getStaticImage() : getDynamicImage();

  function getStaticImage() {
    return (
      <Image
        src={src || ""}
        width={width}
        height={height}
        alt={alt || `${process.env.NEXT_PUBLIC_EN_BRAND}`}
        style={{
          ...(greyscale ? { filter: "grayscale(100%)" } : null),
          cursor: clickable ? "pointer" : "dafault",
          ...style,
        }}
        onClick={onClick}
        className={className}
      />
    );
  }

  function getDynamicImage() {
    let ARReversePercent = (height / width) * 100;

    return (
      <Box
        sx={{
          mx: padding ? "auto" : 0,
          position: "relative",
          width: padding ? `calc(100% - ${2 * padding}px)` : "100%",
          height: "100%",
          pb: {
            xs: `${ARReversePercent}%`,
            sm: `${ARReversePercent}%`,
            md: `${ARReversePercent}%`,
          },
          ...parentSx,
        }}
        onClick={onClick}
      >
        <Image
          src={src || ""}
          alt={alt || `${process.env.NEXT_PUBLIC_EN_BRAND}`}
          blurDataURL={src || ""}
          fill
          style={{
            objectFit: padding ? "contain" : "cover",
            ...(greyscale ? { filter: "grayscale(100%)" } : null),
            cursor: clickable ? "pointer" : "dafault",
            ...style,
          }}
          sizes={
            xs || sm || md
              ? `(max-width: 600px) ${xs}vw,(max-width: 1024px) ${sm}vw,${md}vw`
              : undefined
          }
          priority={priority ? true : false}
        />
      </Box>
    );
  }
};

export default CImage;
