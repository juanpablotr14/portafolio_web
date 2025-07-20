import type {
  AnimatedRenderProps,
  AnimationRenderType,
} from "./AnimatedRender.types";
import styles from "./AnimatedRender.module.css";

import type { JSX } from "react";

export default function AnimatedRender({
  animate = true,
  animationType = "fadeInLeft",
  as: Component = "div",
  children,
  className = "",
  delay = "0s",
  ...props
}: AnimatedRenderProps): JSX.Element {
  const animations: Record<AnimationRenderType, string> = {
    bounceInDown: styles.bounceInDown,
    fadeIn: styles.fadeIn,
    fadeInDown: styles.fadeInDown,
    fadeInLeft: styles.fadeInLeft,
    pulse: styles.pulse,
    slideInUp: styles.slideInUp,
  };

  return (
    <Component
      {...props}
      className={`${styles.animation_config} ${animate && animations[animationType]} ${className}`}
      style={{ animationDelay: delay, ...props.style }}
    >
      {children}
    </Component>
  );
}
