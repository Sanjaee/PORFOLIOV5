import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Style from "../Styles/Loader.module.css";

const Loader = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width when component is mounted
    setWindowWidth(window.innerWidth);

    // Add event listener to update window width when window is resized
    window.addEventListener("resize", handleResize);

    // Clean up event listener when component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // useEffect only runs once when component is mounted

  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -1000,
        opacity: 1,
        transition: { duration: 1, delay: 2 },
      }}
      exit={{ y: windowWidth }} // Use windowWidth that has been set
      className={Style.loader}
    >
      <div className={Style.loader__container}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transitionEnd: {
              display: "none",
            },
          }}
          className={Style.loader__text}
        >
          Halo
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8 },
            transitionEnd: {
              display: "none",
            },
          }}
          className={Style.loader__text}
        >
          Hello
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1 },
            transitionEnd: {
              display: "none",
            },
          }}
          className={Style.loader__text}
        >
          مرحبًا
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4 },
            transitionEnd: {
              display: "none",
            },
          }}
          className={Style.loader__text}
        >
          こんにちは
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.7 } }}
          className={Style.loader__text}
        >
          Привет
        </motion.span>
      </div>
    </motion.section>
  );
};

export default Loader;
