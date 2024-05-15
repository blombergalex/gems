import * as React from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

export const Lotus = () => (
  <div className="container">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="item"
    >
      <motion.path
        d="M429.435,244.898c-21.155,50.07-46.688,81.923-86.492,105.662c57.474-52.359,89.336-158.471,66.959-224.034 c-27.059,0.72-50.312,8.878-74.05,30.25c21.978,51.422,21.076,123.375,0.087,173.592c-3.676,8.8-17.636,23.955-32.088,41.165 c37.983-45.249,48.171-183.32-12.146-253.27C281.638,105.302,269.786,94.36,256,86.574c-13.786,7.786-25.637,18.728-35.703,31.689 c-60.318,69.95-50.13,208.02-12.147,253.27c-14.453-17.21-28.412-32.365-32.087-41.165c-20.991-50.217-21.893-122.17,0.086-173.592 c-23.738-21.372-46.991-29.53-74.05-30.25c-22.378,65.563,9.485,171.675,66.959,224.034 c-39.804-23.739-65.338-55.592-86.493-105.662C56.225,221.229,17.756,218.264,0,224.185c25.152,162.762,183.484,201.24,256,201.24 c72.516,0,230.848-38.478,256-201.24C494.244,218.264,455.775,221.229,429.435,244.898z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 4, ease: [1, 0, 0.8, 1] },
        }}
        style={{
            stroke: "#fff",
            strokeWidth: 2,
            strokeLinejoin: "round",
            strokeLinecap: "round",
          }}
      />
    </motion.svg>
  </div>
);