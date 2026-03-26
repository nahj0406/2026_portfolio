import Image from "next/image";
import styles from "./img.module.scss";
import { ImageType } from "@/utils/interfaces";
import { ToCssSize } from "@/utils/functions";

export default function Img({ src, alt, width, height }: ImageType) {
   return (
      <figure
        className={styles.img}
        style={
          {
            "--width": ToCssSize(width),
            "--height": ToCssSize(height),
          } as React.CSSProperties
        }
      >
        <Image src={src} alt={alt} fill />
      </figure>
   )
}
