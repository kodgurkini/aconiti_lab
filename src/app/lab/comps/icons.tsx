"use client";
import { motion } from "motion/react";

export const SearchIcon = ({
  width,
  color,
  styleProps,
  pending = false,
}: {
  width: number;
  color: string;
  styleProps?: React.CSSProperties;
  pending?: boolean;
}) => {
  if (pending) {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{ width: width, color: color, ...styleProps }}
        initial={{ opacity: 0.6 }}
        animate={{
          rotate: 360,
          opacity: 1,
        }}
        transition={{
          repeat: Infinity,
          duration: 0.38,
          ease: "linear",
          opacity: { delay: 0.26 },
        }}
      >
        <motion.path
          d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12 20 12 20 12 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            pathLength: {
              duration: 0.16,
              ease: "easeInOut",
            },
          }}
        />
      </motion.svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: width, color: color, ...styleProps }}
    >
      <motion.path
        /* initial={{filter: "blur(2px)"}}
                animate={{filter: "blur(0px)"}}
                exit={{filter: "blur(2px)"}} */
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8487 18 13.551 17.3729 14.9056 16.3199L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.3199 14.9056C17.3729 13.551 18 11.8487 18 10C18 5.58172 14.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z"
        fill="currentColor"
      />
    </svg>
  );
};
