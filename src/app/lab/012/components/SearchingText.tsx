import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShimmerText } from "./ShimmerText";

export const StreamingText = ({ searchTerm }: { searchTerm: string }) => {
  const [showSearching, setShowSearching] = useState(true);
  const [showSearchTerm, setShowSearchTerm] = useState(false);
  const [showSorting, setShowSorting] = useState(false);

  useEffect(() => {
    // Show "Searching..." for 0.8s, then show search term
    const timer1 = setTimeout(() => {
      setShowSearchTerm(true);
      setShowSearching(false);
    }, 1000);
    // Show "Sorting..." after search term
    const timer2 = setTimeout(() => setShowSorting(true), 2800);
    // Show "Searching..." after sorting
    const timer3 = setTimeout(() => {
      setShowSorting(false);
      setShowSearchTerm(false);
    }, 4675);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "24px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: "2000",
      }}
    >
      <AnimatePresence mode="sync">
        {showSearching && (
          <motion.div
            key="searching"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            style={{
              margin: "0 auto",
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShimmerText text="Searching for..." />
          </motion.div>
        )}
        {showSearchTerm && !showSorting && (
          <motion.div
            key="search-term"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            style={{
              margin: "0 auto",
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShimmerText text={`"${searchTerm}"`} />
          </motion.div>
        )}
        {showSorting && (
          <motion.div
            key="sorting"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            style={{
              margin: "0 auto",
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShimmerText
              text={`Sorting ${
                Math.floor(Math.random() * (99 - 11 + 1)) + 11
              } results...`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
