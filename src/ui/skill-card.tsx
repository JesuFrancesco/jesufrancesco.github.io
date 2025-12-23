import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "../lib/utils";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

type SkillCardProps = {
  icon: string | React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
};
const SkillCard = ({ icon, title, subtitle, className }: SkillCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-48 w-72 rounded-xl"
    >
      <article
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "from-blue-slate/20 to-blue-slate/5 dark:from-primary/30 dark:to-secondary/20",
          "absolute inset-5 flex flex-col place-content-center gap-y-1 rounded-xl bg-linear-to-br shadow-lg backdrop-blur-lg",
          className,
        )}
      >
        <img src={icon as string} alt={title} className="h-12 object-contain" />
        <h2
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="px-4 text-center text-sm"
          >
            {subtitle}
          </p>
        )}
      </article>
    </motion.div>
  );
};

export default SkillCard;
