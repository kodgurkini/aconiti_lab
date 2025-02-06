import { useMemo } from "react";
import { motion } from "motion/react";
import { ShimmerText } from "./ShimmerText";

const containerStyle = {
  margin: "0 auto",
  position: "absolute" as const,
  left: 0,
  right: 0,
  width: "100%",
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const StreamingText = ({ searchTerm }: { searchTerm: string }) => {
  // Compute the random count only once.
  const randomCount = useMemo(
    () => Math.floor(Math.random() * (99 - 11 + 1)) + 11,
    []
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: "24px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 2000,
      }}
    >
      <motion.div
        style={containerStyle}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: [0, 1, 1, 0], y: [-12, 0, 0, 12] }}
        transition={{
          duration: 1,
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut",
        }}
      >
        <ShimmerText text="Searching for..." />
      </motion.div>

      {/* Search term (1s → 2.8s) */}
      <motion.div
        style={containerStyle}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: [0, 1, 1, 0], y: [-12, 0, 0, 12] }}
        transition={{
          delay: 1,
          duration: 1.8,
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut",
        }}
      >
        <ShimmerText text={`"${searchTerm}"`} />
      </motion.div>

      {/* "Sorting … results..." (2.8s → 4.675s) */}
      <motion.div
        style={containerStyle}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: [0, 1, 1, 0], y: [-12, 0, 0, 12] }}
        transition={{
          delay: 2.8,
          duration: 1.875,
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut",
        }}
      >
        <ShimmerText text={`Sorting ${randomCount} results...`} />
      </motion.div>
    </div>
  );
};
