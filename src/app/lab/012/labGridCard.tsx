"use client";
import { motion } from "motion/react";
import { SearchIcon } from "../comps/icons";

export const Card12 = () => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      layoutId="searchInput"
      style={{
        background: "#EDEFF2",
        height: "34px",
        width: "104px",
        borderRadius: "16px",
        margin: "auto auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <motion.div layoutId="searchIcon" layout="position">
        <SearchIcon
          width={16}
          color="#00000050"
          styleProps={{ marginLeft: "12px" }}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -4 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -4 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        layout="position"
        style={{
          fontSize: "14px",
          lineHeight: "0px",
          fontWeight: "500",
          color: "#2D2E37",
          margin: "auto auto auto 8px",
          userSelect: "none",
        }}
      >
        Search
      </motion.p>
    </motion.div>
  );
};
