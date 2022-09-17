import { Variants } from "framer-motion";

const popY: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const popLeft: Variants = {
    offscreen: {
      x: -150,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "Tween",
        bounce: 0.2,
        duration: .7,
      },
    },
  };

  const popRight: Variants = {
    offscreen: {
        x: 300,
    },
    onscreen: {
        x: 0,
        transition: {
            type: "Tween",
            bounce: 0.2,
            duration: .7,
        },
    },
};

const fadeIn: Variants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "Tween",
            bounce: 0.2,
            duration: 0.7,
        },
    },
};



export { popY, popLeft, fadeIn, popRight };
