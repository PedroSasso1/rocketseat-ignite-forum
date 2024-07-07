import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  withBorder?: boolean;
}

export function Avatar({ withBorder, src, ...props }: AvatarProps) {
  const avatarSrc = src || "https://github.com/PedroSasso1.png"
  return (
    <img 
      className={withBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder}
      src={avatarSrc} 
      {...props}
    />
  )
}