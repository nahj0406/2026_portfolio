

export interface ImageType {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
}


export interface StarProps extends ImageType {
  isActive?: boolean;
  onClick?: () => void;
}