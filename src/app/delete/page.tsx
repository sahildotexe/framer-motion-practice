"use client";
import { delay, motion, stagger, useAnimate } from "framer-motion";
import { useState } from "react";

const mainVariant = {
  initial: { backgroundColor: "white" },
  hoveredState: { scale: 1.2, backgroundColor: "#D82E45" },
};

const trashVariant = {
  initial: { fill: "none", stroke: "black", strokeWidth: "2" },
  hoveredState: { fill: "white", stroke: "white", strokeWidth: "2" },
};

const linesVariant = {
  initial: { fill: "none", stroke: "black", strokeWidth: "2" },
  hoveredState: { fill: "none", stroke: "#D82E45", strokeWidth: "2" },
};
const capVariant = {
  initial: {
    d: "M30.0714 7.48028L0.999975 7.48027M19.1696 7.48028C19.1696 7.48028 12.9052 7.48027 11.9018 7.48027C10.8983 7.48027 10.0848 6.61894 10.0848 5.55643C10.0848 5.55643 10.0848 4.69509 10.0848 3.63258C10.0848 2.57007 11.9018 1.70874 11.9018 1.70874L19.1696 1.70874C20.1731 1.70874 20.9866 2.57007 20.9866 3.63258L20.9866 5.55643C20.9866 6.61894 20.1731 7.48028 19.1696 7.48028Z",
    stroke: "black",
    strokeWidth: "2",
    pathlength: 0,
    transform: "translateY(0px) translateX(0px) rotate(0deg)",
  },
  hoveredState: {
    // d: "M32.1169 7.99999H60.6082M42.8011 7.99999C42.8011 7.99999 48.9405 7.99999 49.9239 7.99999C50.9074 7.99999 51.6872 8.80533 51.6657 9.79878C51.6657 9.79878 51.6482 10.6041 51.6267 11.5976C51.6052 12.591 49.8071 13.3964 49.8071 13.3964H42.6842C41.7008 13.3964 40.921 12.591 40.9425 11.5976L40.9814 9.79878C41.003 8.80533 41.8177 7.99999 42.8011 7.99999Z",
    d:"M30.0714 7.48028L0.999975 7.48027M19.1696 7.48028C19.1696 7.48028 12.9052 7.48027 11.9018 7.48027C10.8983 7.48027 10.0848 6.61894 10.0848 5.55643C10.0848 5.55643 10.0848 4.69509 10.0848 3.63258C10.0848 2.57007 11.9018 1.70874 11.9018 1.70874L19.1696 1.70874C20.1731 1.70874 20.9866 2.57007 20.9866 3.63258L20.9866 5.55643C20.9866 6.61894 20.1731 7.48028 19.1696 7.48028Z",
    stroke: "white",
    strokeWidth: "2",
    transition: { duration: 0.25 },
    transform: "translateY(2px) translateX(29px) rotate(165deg)",

  },
};

const bubbleVariant = {
    initial: { opacity: 0 },
    hoveredState: { opacity: 1, transition:{delay:0.4} },
};


export default function Delete() {
  const [hovered, setHovered] = useState(false);

  const handleHoverStart = () => {
    console.log("hovered");
    setHovered(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#F6C650] ">
      <motion.div initial={{opacity:0}} animate={hovered ? "hoveredState" : "initial"}
        variants={bubbleVariant} className="speech square triangle pointed center down">
        <div className="font-sans font-normal text-base justify-center text-center">
            Are you sure ? 
        </div>
        <div className="flex flex-row  items-center justify-between">
        <div className="p-2 px-4 cursor-pointer font-sans font-normal text-xs bg-[#D82E45] text-white rounded-md m-2 ml-0">
            YES
        </div>
        <div className="p-2 px-4 cursor-pointer font-sans font-normal text-xs bg-[#EBEDEE] text-[#545454] rounded-md m-2 mr-0">
            NO
        </div>
        </div>
      </motion.div>
      <motion.div
        animate={hovered ? "hoveredState" : "initial"}
        variants={mainVariant}
        initial={{ backgroundColor: "white" }}
        onHoverStart={handleHoverStart}
        onHoverEnd={() => setHovered(false)}
        className="w-[64px] h-[64px] flex justify-center items-center rounded-full cursor-pointer"
      >
        <svg
          fill="none"
          height="60"
          width="60"
          className="mr-[-31px] mb-[-20px] overflow-visible"
        >
          <motion.path
            d="M22.5235 34.2661H7.98776C5.9808 34.2661 4.35383 32.5434 4.35383 30.4184V9.41748C4.35383 8.8652 4.80155 8.41748 5.35383 8.41748H25.1574C25.7097 8.41748 26.1574 8.8652 26.1574 9.41748V30.4184C26.1574 32.5434 24.5304 34.2661 22.5235 34.2661Z"
            animate={hovered ? "hoveredState" : "initial"}
            variants={trashVariant}
            initial={{ fill: "none", stroke: "black", strokeWidth: "2" }}
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
=          <motion.path
            animate={hovered ? "hoveredState" : "initial"}
            variants={capVariant}
            d="M30.0714 7.48028L0.999975 7.48027M19.1696 7.48028C19.1696 7.48028 12.9052 7.48027 11.9018 7.48027C10.8983 7.48027 10.0848 6.61894 10.0848 5.55643C10.0848 5.55643 10.0848 4.69509 10.0848 3.63258C10.0848 2.57007 11.9018 1.70874 11.9018 1.70874L19.1696 1.70874C20.1731 1.70874 20.9866 2.57007 20.9866 3.63258L20.9866 5.55643C20.9866 6.61894 20.1731 7.48028 19.1696 7.48028Z"
            stroke="black"
            initial={{
              d: "M30.0714 7.48028L0.999975 7.48027M19.1696 7.48028C19.1696 7.48028 12.9052 7.48027 11.9018 7.48027C10.8983 7.48027 10.0848 6.61894 10.0848 5.55643C10.0848 5.55643 10.0848 4.69509 10.0848 3.63258C10.0848 2.57007 11.9018 1.70874 11.9018 1.70874L19.1696 1.70874C20.1731 1.70874 20.9866 2.57007 20.9866 3.63258L20.9866 5.55643C20.9866 6.61894 20.1731 7.48028 19.1696 7.48028Z",
              stroke: "black",
              strokeWidth: "2",
            }}
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"

          />

          <motion.path
            d="M18.8896 27.2361V23.1051V18.9741C18.8896 18.9741 18.8896 17.3803 18.8896 15.1263M11.6218 27.2361V23.1051V18.9741C11.6218 18.9741 11.6218 17.5584 11.6218 15.3045"
            stroke="#D82E45"
            animate={hovered ? "hoveredState" : "initial"}
            variants={linesVariant}
            initial={{ fill: "none", stroke: "black", strokeWidth: "2" }}
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
