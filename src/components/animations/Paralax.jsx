import "../styles/Paralax.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

export default function Parallax({ isDarkmodeOn ,children, baseVelocity = 100 }) {

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * (baseVelocity / 2) * (delta / 1000); // Example: baseVelocity / 2

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className={isDarkmodeOn ? "" :"night_mode_span" } >{children} </span>
        <span className={isDarkmodeOn ? "" :"night_mode_span" }>{children} </span>
        <span className={isDarkmodeOn ? "" :"night_mode_span" }>{children} </span>
        <span className={isDarkmodeOn ? "" :"night_mode_span" }>{children} </span>
        <span className={isDarkmodeOn ? "" :"night_mode_span" }>{children} </span>
        <span className={isDarkmodeOn ? "" :"night_mode_span" }>{children} </span>
      </motion.div>
    </div>
  );
  }
