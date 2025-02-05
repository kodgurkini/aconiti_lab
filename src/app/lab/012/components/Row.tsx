import { motion } from "framer-motion";

const skeletonBg = "#EDEFF2";
const skeletonBorder = "1px solid rgba(28, 31, 35, 0.09)";

export const Row = () => {
  return (
    <div
      style={{
        minWidth: "285px",
        padding: "12px 16px",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: skeletonBorder,
        boxShadow: "0 3px 6px -2px #00000020",
        background: "#FFF",
      }}
    >
      <motion.div style={{ display: "flex", marginRight: "auto" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            background: skeletonBg,
            borderRadius: "12px",
            border: "2px solid rgb(255, 255, 255)",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.12) 0px 2px 2px -1px, rgba(0, 0, 0, 0.16) 0px 1px 6px -1px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              width: "84px",
              height: "14px",
              background: skeletonBg,
              borderRadius: "10px",
              marginLeft: "12px",
            }}
          ></div>
          <div
            style={{
              width: "58px",
              height: "12px",
              background: skeletonBg,
              borderRadius: "10px",
              marginLeft: "12px",
            }}
          ></div>
        </div>
      </motion.div>
    </div>
  );
};
