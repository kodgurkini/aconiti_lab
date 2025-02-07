import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ShimmerText } from "./ShimmerText";

type Stage = "searching" | "searchTerm" | "sorting" | null;

const getText = (
  stage: Stage,
  searchTerm: string,
  randomCount: number
): string => {
  switch (stage) {
    case "searching":
      return "Searching for...";
    case "searchTerm":
      return `"${searchTerm}"`;
    case "sorting":
      return `Sorting ${randomCount} results...`;
    default:
      return "";
  }
};

const randomCount = Math.floor(Math.random() * (99 - 11 + 1)) + 11;

export const StreamingText = ({ searchTerm }: { searchTerm: string }) => {
  const [stage, setStage] = useState<Stage>("searching");

  const durations = {
    searching: 1000,
    searchTerm: 1800,
    sorting: 1875,
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (stage === "searching") {
      timer = setTimeout(() => setStage("searchTerm"), durations.searching);
    } else if (stage === "searchTerm") {
      timer = setTimeout(() => setStage("sorting"), durations.searchTerm);
    } else if (stage === "sorting") {
      timer = setTimeout(() => setStage(null), durations.sorting);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="absolute bottom-6 w-full flex justify-center z-[2000]">
      <AnimatePresence mode="sync">
        {stage && (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="m-0 auto absolute left-0 right-0 w-full bottom-0 flex items-center justify-center"
          >
            <ShimmerText text={getText(stage, searchTerm, randomCount)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
