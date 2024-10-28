type FadeInProps = {
  direction: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
};
export const fadeIn = ({
  direction,
  delay = 0.3,
  duration = 1.2,
}: FadeInProps) => {
  return {
    hidden: {
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.5, 1],
      },
    },
  };
};
