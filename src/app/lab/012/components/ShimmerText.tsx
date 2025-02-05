"use client"
import { motion } from "motion/react";

export const ShimmerText = ({ text }: { text: string }) => {
    return (
      <motion.div key={text} style={{ display: "flex", alignItems: "center", fontSize: "13px", fontWeight: "500", color: "#FFF", userSelect: "none", margin: "0 auto" }}>
        {text.split("").map((char: string, index: number) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.6] }}
            transition={{
              duration: 0.34,
              delay: 0.16 + index * 0.018
            }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    );
  };