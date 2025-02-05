import Link from "next/link";
import { Card12 } from "./lab/012/labGridCard";

export default function Home() {
  const labs = [
    /* {
        number: "001",
        title: "Gooey contextual toast",
        description: "What if we placed notifications where the action is?",
        screen: <InitState001 />
    },
    {
        number: "002",
        title: "Gooey contextual delete toast",
        description: "What if we placed notifications where the action is?",
        screen: <InitState002 />
    },
    {
        number: "003",
        title: "Hold to delete", 
        description: "Hover the row and hold button to delete row",
        screen: <InitState003 />
    },
    {
        number: "004",
        title: "Marble avatar",
        description: "Online/offline status with avatars",
        screen: <InitState004 />
    },
    {
        number: "005",
        title: "Avatar color picker",   
        description: "Drag and drop on the radial color-wheel",
        screen: <InitState005 /> 
    },
    {
        number: "006",
        title: "Delete profile dissolve", 
        description: "Using SVG filters for a dissolve effect", 
        screen: <InitState006 />
    },
    {
        number: "007",
        title: "Universe spinner", 
        description: "A marble universe spinner and input",
        screen: <InitState007 />
    },
    {
        number: "008",
        title: "Thinking ball", 
        description: "A thinking ball that can be clicked",
        screen: <InitState008 />  
    },
    {
        number: "009",
        title: "Dynamic drop-zone",
        description: "Magnetic black hole drop zone", 
        screen: <InitState009 />
    },
    {
        number: "010",
        title: "Candy button", 
        description: "A candy button with a ripple effect",
        screen: <InitState010 />
    },
    {
        number: "011",
        title: "Space orb", 
        description: "SVG shader creating thinking space orb",
        screen: <InitState011 />  
    }, */
    {
      number: "012",
      title: "Binocular search",
      description: "Distract away from a slow search query",
      screen: <Card12 />,
    },
  ];

  return (
    <div className="min-h-screen bg-pattern">
      <div style={{ padding: "1rem 6rem" }} className="max-w-[1400px] mx-auto">
        <p
          style={{
            opacity: 0.78,
            transform: "rotate(-0.5deg)",
            fontSize: "25px",
            fontWeight: "400",
            marginBottom: "12px",
          }}
        >
          Welcome to our UI lab! (Please excuse the mess)
        </p>
        <p
          style={{
            opacity: 0.64,
            transform: "rotate(-0.8deg)",
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "32px",
          }}
        >
          This is our experimental corner: small, curiosity-led things to keep
          our pens sharp.
        </p>
        <p
          style={{
            opacity: 0.63,
            transform: "rotate(0.2deg)",
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "32px",
          }}
        >
          Not optimized for production, UX, diff. browsers, mobile etc(sry!).
        </p>
        <p
          style={{
            opacity: 0.62,
            transform: "rotate(0.8deg)",
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "32px",
          }}
        >
          Tap a card to try and see more of it 🧪
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center p-8 min-h-0 max-w-[1400px] mx-auto">
        {[...labs].reverse().map((lab) => (
          <Link target="_blank" key={lab.number} href={`/lab/${lab.number}`}>
            <div
              style={{
                maxWidth: "324px",
                minWidth: "285px",
                minHeight: "218px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  lab.number === "007" ||
                  lab.number === "008" ||
                  lab.number === "011"
                    ? "#F2F4F5"
                    : "#FFF",
                borderRadius: "24px",
                boxShadow: "0 10px 16px -1px #00000030, 0 0 44px 64px #1073FF",
                zIndex: "2",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {lab.screen}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
