"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { SearchIcon } from "../../comps/icons";

const skeletonBg = "#EDEFF2";

interface SearchBarProps {
  setIsOpen: (isOpen: boolean) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  search: () => void;
  iconLoading: boolean;
}

export const SearchBar = ({
  setIsOpen,
  searchTerm,
  setSearchTerm,
  search,
  iconLoading,
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputFocused, setInputFocused] = useState(false);

  const handleClose = () => {
    setInputFocused(false);
    if (searchTerm.length < 1) {
      setIsOpen(false);
      setSearchTerm(""); // Reset search term when closing
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only update if the length is 21 or less
    if (e.target.value.length <= 21) {
      setSearchTerm(e.target.value);
    }
  };

  const clickSearchButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    search();
  };

  const eraseSearchTerm = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        //borderBottom: skeletonBorder,
      }}
    >
      <div style={{ position: "relative", width: "100%" }}>
        <motion.input
          ref={inputRef}
          autoFocus
          layoutId="searchInput"
          onFocus={() => {
            setIsOpen(true);
            setInputFocused(true);
          }}
          onChange={handleChange}
          onBlur={handleClose}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              search();
              inputRef.current?.blur();
            } else if (e.key === "Escape") {
              handleClose();
            }
          }}
          type="text"
          animate={{
            boxShadow: inputFocused
              ? "0 0 0 1px #1c1f2317"
              : "0 0 0 0px #1c1f2317",
            background: inputFocused ? "#FFF" : skeletonBg,
          }}
          className="input-dark"
          style={{
            outline: "none",
            width: "100%",
            borderRadius: "20px",
            padding: "8px 16px 8px 42px",
            border: "none",
            color: "#000",
            fontSize: "14px",
            fontWeight: "500",
            zIndex: 1999,
          }}
          maxLength={21}
        />
        <motion.div
          layoutId="searchIcon"
          layout="position"
          style={{ position: "absolute", top: "6px", left: "14px" }}
        >
          <SearchIcon width={18} color="#00000050" pending={iconLoading} />
        </motion.div>
        <AnimatePresence mode="wait">
          {searchTerm.length > 0 && inputFocused && (
            <motion.div
              key="search-button"
              onClick={clickSearchButton}
              initial={{ x: -8, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.14, opacity: { duration: 0.05 } },
              }}
              exit={{
                x: -8,
                opacity: 0,
                transition: { opacity: { duration: 0.2 } },
              }}
              style={{
                zIndex: 100,
                cursor: "pointer",
                position: "absolute",
                top: "8px",
                right: "10px",
                width: "22px",
                height: "22px",
                background: "#DFE0E3",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 1px -1px #00000030",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#2D2E37",
                  marginTop: "3px",
                  userSelect: "none",
                }}
              >
                ↵
              </p>
            </motion.div>
          )}
          {searchTerm.length > 0 && !inputFocused && (
            <motion.div
              key="search-button-close"
              onClick={eraseSearchTerm}
              initial={{ x: 8, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.14, opacity: { duration: 0.05 } },
              }}
              exit={{
                x: 8,
                opacity: 0,
                transition: { opacity: { duration: 0.2 } },
              }}
              style={{
                zIndex: 100,
                cursor: "pointer",
                position: "absolute",
                top: "8px",
                right: "10px",
                width: "22px",
                height: "22px",
                background: "#DFE0E3",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 1px -1px #00000030",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#2D2E37",
                  userSelect: "none",
                }}
              >
                ✕
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
