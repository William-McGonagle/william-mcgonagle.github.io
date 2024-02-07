"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  paragraph,
  className,
}: {
  paragraph: string[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let sentencesArray = paragraph.map((i) => i.split(" "));
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {sentencesArray.map((sentence, idx) => {
          return [
            ...sentence.map((word, ijx) => (
              <motion.span
                key={word + idx + "_" + ijx}
                className="dark:text-white text-black opacity-0"
              >
                {word}{" "}
              </motion.span>
            )),
            <motion.span
              key={idx}
              className="dark:text-white text-black opacity-0"
            >
              <br />
            </motion.span>,
          ];
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
