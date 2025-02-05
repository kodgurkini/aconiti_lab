import { useState } from "react";
//import { reenieBeanieRegular } from "./font";
import Link from "next/link";
import Image from "next/image";

export const useRandomRange = (min: number, max: number, seed = 0) => {
    const [value] = useState(() => min + (Math.sin(seed) + 1) * 0.5 * (max - min));
    return value;
  };


export const LabTitleDesc = ({ number, title, description }: { number: string, title: string, description: string }) => {

  return (
    <>
        <p style={{opacity: 0.54, transform: "rotate(-3deg)", fontSize: "11px", fontWeight: "500", marginBottom: "8px", marginTop: "-144px"}}>LAB #{number}</p>
        <p style={{opacity: 0.56, transform: "rotate(-1deg)", fontSize: "28px", fontWeight: "500", marginBottom: "8px", /* fontFamily: reenieBeanieRegular.style.fontFamily */}}>{title}</p>
        <p style={{opacity: 0.64, transform: "rotate(1deg)", fontSize: "14px", fontWeight: "500", marginBottom: "44px", textWrap: "nowrap"}}>{description}</p>
    </>
  )
}

export const LabNavigator = ({ currentLab }: { currentLab: number }) => {
  const lastLab = 12;  
  
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      display: "grid",
      gridTemplateRows: "44px 1fr",
      justifyItems: "center",
      paddingTop: "12px"
    }}>
      <div style={{
        display: "flex",
        gap: "12px"
      }}>
        {currentLab > 1 ? (
          <Link href={`/lab${String(currentLab - 1).padStart(3, '0')}`} style={{display: "flex", alignItems: "center", gap: "8px", transform: "rotate(-0.9deg)"}} >
            <p>⭠</p>
            <p style={{opacity: 0.64, fontSize: "11px", fontWeight: "500", textDecoration: "underline"}}>
              LAB #{String(currentLab - 1).padStart(3, '0')}
            </p>
          </Link>
        ) : (
          <div style={{display: "flex", alignItems: "center", gap: "8px", transform: "rotate(-0.9deg)", opacity: 0.3, cursor: "not-allowed"}} >
            <p>⭠</p>
            <p style={{fontSize: "11px", fontWeight: "500"}}>
              LAB #{String(currentLab - 1).padStart(3, '0')}
            </p>
          </div>
        )}
        <Link href="/lab" style={{display: "flex", alignItems: "center", gap: "8px", transform: "rotate(1deg)"}} >
          <p style={{opacity: 0.64, fontSize: "11px", fontWeight: "500", textDecoration: "underline"}}>
          ↑ ALL LABS
          </p>
        </Link>
        {currentLab < lastLab ? (
          <Link href={`/lab${String(currentLab + 1).padStart(3, '0')}`} style={{display: "flex", alignItems: "center", gap: "8px", transform: "rotate(0.9deg)"}} >
            <p style={{opacity: 0.64, fontSize: "11px", fontWeight: "500", textDecoration: "underline"}}>
              LAB #{String(currentLab + 1).padStart(3, '0')}
            </p>
            <p>⭢</p>
          </Link>
        ) : (
          <div style={{display: "flex", alignItems: "center", gap: "8px", transform: "rotate(0.9deg)", opacity: 0.3, cursor: "not-allowed"}} >
            <p style={{fontSize: "11px", fontWeight: "500"}}>
              LAB #{String(currentLab + 1).padStart(3, '0')}
            </p>
            <p>⭢</p>
          </div>
        )}
      </div>
    </div>
  )
}

export const Footer = () => {
  return (
    <div style={{
      position: "absolute",
      bottom: "22px",
      left: "50%",
      display: "grid",
      justifyItems: "center",
      transform: "translateX(-50%)"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
        <div style={{display: "flex", alignItems: "center", gap: "8px", transform: "rotate(0.4deg)"}}>
          <p>🐢</p>
          <p style={{opacity: 0.64, fontSize: "11px", fontWeight: "500"}}>
            No animals were harmed during this experiment
          </p>
        </div>
        <Link href="https://x.com/designgurra" style={{display: "flex", alignItems: "center", gap: "8px", transform: "rotate(-0.5deg)"}}>
          <Image
            src="/img/x-logo.svg"
            width={12}
            height={12}
            alt="x-logo"
          />
          <p style={{opacity: 0.64, fontSize: "11px", fontWeight: "500", textDecoration: "underline"}}>
            Discuss original post
          </p>
        </Link>
      </div>
    </div>
  )
}