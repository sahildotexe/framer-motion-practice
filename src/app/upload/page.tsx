"use client";
import Image from "next/image";
import { delay, motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { AttachmentIcon, CheckIcon } from "@chakra-ui/icons";

const variants = {
  initial: { width: "80%" },
  uploading: { width: "0%", transition: { duration: 0.5 } },
  uploaded: {
    opacity: 0,
    width: "0px",
    height: "0px",
    transition: { duration: 2 },
  },
};

const rightBoxVariants = {
  initial: { width: "20%" },
  uploading: { width: "100%", transition: { duration: 1 } },
  uploaded: {
    opacity: 0,
    width: "0px",
    height: "0px",
    transition: { duration: 2 },
  },
};

const pathVariant = {
  initial: { width: "0%", height: "6px", },
  uploading: { height: "4px", width: "100%",transition: { duration: 3 , delay:0.5} },
  uploaded: { height: "0px", width: "0%", transition: { duration: 0.25 } },
};

const mainBoxVariants = {
  initial: { backgroundColor: "#5B32EB" },
  uploading: { scale: 1 },
  uploaded: {

  },
};

const finalVariant = {
  initial: { width: "100%", height: "0px",opacity:0 },
  uploading: { height: "0", width: "100%",opacity:0, transition: { duration: 0.25 } },
  uploaded: { height: "100%", width: "100%", transition: { duration: 0.5, delay:0.5 } },
}

export default function Upload() {
  const [isUploading, setisUploading] = useState(false);
  const [isUploaded, setisUploaded] = useState(false);

  const handleUpload = async () => {
    setisUploading(true);
    setisUploaded(false);
    setTimeout(() => {
      setisUploading(false);
      setisUploaded(true);
    }, 3000);
    setTimeout(() => {
      setisUploaded(false);
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#CBB8FA]">
 <div className="relative">
      <motion.div
        animate={
          isUploading ? "uploading" : isUploaded ? "uploaded" : "initial"
        }
        variants={mainBoxVariants}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        className="example-container min-w-[320px] cursor-pointer overflow-hidden flex flex-col"
        onClick={() => handleUpload()}
      >
        {isUploaded ? (
          <motion.div
            initial={{ opacity:0,x: "-80px" }}
            animate={{ opacity:1,x: 0 }}
            className="p-4 m-0 font-semibold flex flex-row justify-center items-center text-[#5B32EB] z-50"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
       Uploaded
            <span className="ml-2 font-normal mt-[-5px]">
              <CheckIcon />
            </span>
          </motion.div>
          
        ) : (
          <div>
            <div className="p-1 m-0 flex flex-row">
              <motion.div
                animate={
                  isUploading
                    ? "uploading"
                    : isUploaded
                    ? "uploaded"
                    : "initial"
                }
                variants={variants}
                className="flex flex-row h-[100%] w-[80%] items-center justify-center bg-white"
              >
                {isUploading ? (
                  <div className="w-[50px] h-[50px] bg-white"></div>
                ) : !isUploaded ? (
                  <div className="p-3 font-semibold font-sans">
                    <span className="mr-2 ">
                      <AttachmentIcon />
                    </span>
                    <span className="mt-[10px]">
                    file.pdf
                    </span>
                  </div>
                ) : null}
              </motion.div>
              <motion.div
                animate={
                  isUploading
                    ? "uploading"
                    : isUploaded
                    ? "uploaded"
                    : "initial"
                }
                variants={rightBoxVariants}
                className="flex mx-3 right-box flex-col w-[20%] justify-center items-center text-white"
              >
                {isUploading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="p-3 font-sans font-semibold"
                  >
                    Uploading...
                  </motion.div>
                ) : !isUploaded ? (
                  <div className="p-3 font-sans font-semibold">Upload</div>
                ) : null}
              </motion.div>
            </div>
          </div>
        )}
        <div>
          <motion.div
            animate={
              isUploading ? "uploading" : isUploaded ? "uploaded" : "initial"
            }
            variants={pathVariant}
            className=" bg-white absolute bottom-0"
          ></motion.div>
        
        </div>
        <div>
   
              <motion.div
              animate={
                isUploading ? "uploading" : isUploaded ? "uploaded" : "initial"
              }
              variants={finalVariant}
              className=" bg-white absolute bottom-0"          
            >
              
            </motion.div>
     

        </div>
      </motion.div>
    </div>
    </div>
   
  );
}
