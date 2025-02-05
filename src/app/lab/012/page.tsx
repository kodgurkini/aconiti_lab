"use client";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { LabNavigator, LabTitleDesc, Footer } from "../comps/utils";
import { SearchIcon } from "../comps/icons";
import { StreamingText } from "./components/SearchingText";
import { SearchBar } from "./components/SearchBar";
import { Row } from "./components/Row";
import { measureText } from "../comps/measureText";

export default function Lab12() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchDone, setSearchDone] = useState(false);
  const [iconLoading, setIconLoading] = useState(false);

  const search = () => {
    setIsSearching(true);
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const rowControls = useAnimation();
  const cutOutControls = useAnimation();
  const blurControls = useAnimation();

  useEffect(() => {
    const textWidth = measureText(searchTerm);
    if (isSearching) {
      setIconLoading(true);
      const animate = async () => {
        // First animation sequence
        blurControls.start({
          backdropFilter: ["blur(2px)", "blur(0px)"],
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        });
        await cutOutControls.start({
          d: [
            "M0 0 H312 V318 H0 V0 M54,39 m-200,0 a200,200 0 1,0 400,0 a200,200 0 1,0 -400,0 Z",
            "M0 0 H312 V318 H0 V0 M54,39 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0 Z",
            "M0 0 H312 V318 H0 V0 M54,39 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0 Z",
            "M0 0 H312 V318 H0 V0 M76,39 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0 Z",
            `M0 0 H312 V318 H0 V0 M${
              68 + textWidth
            },39 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0 Z`,
          ],
          transition: {
            duration: 1.5,
            ease: "anticipate",
          },
        });
        rowControls.start("visible");
        blurControls.start({
          backdropFilter: ["blur(0px)", "blur(2px)", "blur(0px)"],
          transition: {
            duration: 3.2,
            ease: "easeInOut",
            times: [0.1, 0.16, 1],
          },
        });
        setIconLoading(false);
        await cutOutControls.start({
          d: [
            `M0 0 H312 V318 H0 V0 M${
              68 + textWidth
            },39 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0 Z`,
            "M0 0 H312 V318 H0 V0 M64,112 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0 Z",
            "M0 0 H312 V318 H0 V0 M252,112 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0 Z",
            "M0 0 H312 V318 H0 V0 M58,112 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0 Z",
            "M0 0 H312 V318 H0 V0 M252,112 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0 Z",
            "M0 0 H312 V318 H0 V0 M58,112 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0 Z",
            "M0 0 H312 V318 H0 V0 M58,112 m-350,0 a350,350 0 1,0 700,0 a350,350 0 1,0 -700,0 Z",
          ],
          transition: {
            duration: 4.2,
            ease: "anticipate",
          },
        });
        setSearchDone(true);
        setIsSearching(false);
      };
      animate();
    } else {
      cutOutControls.stop();
    }
  }, [isSearching, cutOutControls]);

  return (
    <div
      style={{ display: "grid", placeItems: "center", height: "100vh" }}
      className="bg-pattern"
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="cutOutMask">
            <motion.path
              animate={cutOutControls}
              d="M0 0 H312 V318 H0 V0 M54,39 m-15,0 a15,15 0 1,0 30,0 a15,15 0 1,0 -30,0 Z"
              style={{ backdropFilter: "blur(4px)" }}
            />
          </clipPath>
        </defs>
      </svg>
      <div>
        <LabNavigator currentLab={13} />
        <LabTitleDesc
          number={"012"}
          title={"Binocular search"}
          description={"Distract away from a slow search query"}
        />
        <motion.div
          layoutId="lab-012"
          style={{
            minWidth: "312px",
            maxWidth: "312px",
            background: isOpen ? "#f8fafc" : "#FFF",
            borderRadius: "24px",
            boxShadow: "0 10px 16px -1px #00000030, 0 0 44px 64px #1073FF",
            zIndex: "2",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            overflow: "hidden",
            maxHeight: "312px",
            minHeight: "312px",
            gap: "16px",
            flexDirection: "column",
          }}
        >
          <AnimatePresence initial={false}>
            {isOpen || isSearching ? (
              <>
                <SearchBar
                  setIsOpen={setIsOpen}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  search={search}
                  iconLoading={iconLoading}
                />
                <AnimatePresence>
                  {(isSearching || searchDone) && (
                    <motion.div
                      initial="hidden"
                      animate={rowControls}
                      variants={rowVariants}
                      transition={{
                        duration: 0.3,
                        delay: 0.4,
                        ease: "easeOut",
                      }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        gap: "16px",
                      }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <Row key={i} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <SearchButton setIsOpen={setIsOpen} />
            )}
          </AnimatePresence>
          {isSearching && (
            <motion.div
              animate={blurControls}
              style={{
                zIndex: 2000,
                position: "absolute",
                inset: 0,
                background: "#000000",
                clipPath: "url(#cutOutMask)",
                scale: 1.075,
              }}
            />
          )}
          {isSearching && <StreamingText searchTerm={searchTerm} />}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

const SearchButton = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      layoutId="searchInput"
      onClick={() => setIsOpen(true)}
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
