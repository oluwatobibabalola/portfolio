import { motion } from "framer-motion";
import { cn } from "../../utils";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  return (
    <div className={cn("flex space-x-1 justify-center ", className)}>
      <motion.div
        className="overflow-hidden "
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 2,
        }}
      >
        <div
          className="text-base font-medium md:text-xl text-primary-foreground"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {wordsArray.map((word, idx) => {
            return (
              <div key={`word-${idx}`} className="inline-block ">
                {word.text.map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className={cn(` text-black `, word.className)}
                  >
                    {char}
                  </span>
                ))}
                &nbsp;
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-6 bg-accent-foreground",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
