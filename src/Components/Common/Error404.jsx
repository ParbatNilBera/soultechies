import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { IoSparklesSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  // INIT
  useEffect(() => {
    const root = document.body;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      root.classList.add("dark");
    } else if (savedTheme === "light") {
      root.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      root.classList.toggle("dark", prefersDark);
    }

    const syncDarkMode = () => {
      setDarkMode(root.classList.contains("dark"));
    };

    syncDarkMode();

    const observer = new MutationObserver(syncDarkMode);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-white dark:from-violet-950/20 dark:via-purple-950/20 dark:to-black" />

        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-violet-400/30 dark:bg-violet-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 -right-20  w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(124,58,237,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-1">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 blur-xl opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <HiOutlineExclamationTriangle className="w-24 h-24 text-violet-500 dark:text-violet-400" />
                </motion.div>
                <HiOutlineExclamationTriangle className="relative w-24 h-24 text-violet-600 dark:text-violet-400" />
              </div>
            </motion.div>

            <motion.div
              className="relative mb-3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.h1
                className="text-[12rem] md:text-[16rem] font-black leading-none bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                404
              </motion.h1>
              <motion.div
                className="absolute inset-0 blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h1 className="text-[12rem] md:text-[16rem] font-black leading-none bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  404
                </h1>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-4 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="flex items-center justify-center gap-2">
                <IoSparklesSharp className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Oops! Page Not Found
                </h2>
                <IoSparklesSharp className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <p className="px-4 md:px-0 text-xs md:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Looks like you've ventured into the digital void. The page
                you're looking for doesn't exist or has been moved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                className="relative group px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-500 dark:via-purple-500 dark:to-indigo-500 text-white font-semibold rounded-xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => (window.location.href = "/")}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  Go Back Home
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] rounded-xl" />
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-10 flex justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-violet-400/40 dark:bg-violet-500/40"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 dark:via-violet-400/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </div>
    </div>
  );
};

export default Error404;
