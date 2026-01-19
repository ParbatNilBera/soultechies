// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/loogo.png";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     setOpen(false);
//     const el = document.getElementById(id);
//     if (!el) return;

//     const offset = 90;
//     const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 flex justify-around mt-1 px-1">
//       <motion.div
//         animate={{
//           width: scrolled ? "80%" : "100%",
//           borderRadius: scrolled ? "40px" : "150px 100px 777px 150px",
//           paddingTop: scrolled ? "12px" : "16px",
//           paddingBottom: scrolled ? "12px" : "16px",
//           y: scrolled ? -4 : 0,
//           scale: scrolled ? 0.97 : 1,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 90,
//           damping: 26,
//           mass: 1.1,
//         }}
//         className={`px-6 navbar ${scrolled ? "navbar-scrolled" : ""}`}
//       >
//         {/* Navbar content */}
//         <div className="flex justify-between items-center p-3">
//           {/* Logo */}
//           {/* <h1 className="navbar-text text-xl md:text-3xl font-semibold tracking-wide">
//             SoulTechies
//           </h1> */}

//           <Link to="/" className="flex items-center gap-2">
//             <img
//               src={logo}
//               alt="SoulTechies Logo"
//               className="h-14 w-14 md:h-12 md:w-12 object-contain"
//             />
//             <span className="navbar-text text-xl md:text-3xl font-semibold tracking-wide">
//               SoulTechies
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-8 navbar-text">
//             {[
//               { label: "Home", id: "home" },
//               { label: "Reviews", id: "reviews" },
//               { label: "Services", id: "services" },
//             ].map((item) => (
//               <motion.button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 whileHover={{ y: -2, scale: 1.1 }}
//                 whileTap={{ scale: 0.97 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 18,
//                 }}
//                 className="relative bg-transparent font-medium tracking-wide"
//               >
//                 {item.label}

//                 <motion.span
//                   className="navbar-underline absolute left-0 -bottom-1 w-full h-[2px] rounded-full"
//                   initial={{ scaleX: 0, opacity: 0 }}
//                   whileHover={{ scaleX: 1, opacity: 1 }}
//                   transition={{ duration: 0.25 }}
//                   style={{ originX: 0 }}
//                 />
//               </motion.button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden navbar-text"
//             onClick={() => setOpen(!open)}
//           >
//             {!open ? (
//               <svg width="26" height="26" viewBox="0 0 24 24">
//                 <path
//                   d="M3 6h18M3 12h18M3 18h18"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             ) : (
//               <svg width="26" height="26" viewBox="0 0 24 24">
//                 <path
//                   d="M6 6l12 12M6 18L18 6"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </motion.div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             className="absolute top-20 w-[90%] rounded-2xl py-4 md:hidden shadow-xl bg-primary"
//           >
//             {[
//               { label: "Home", id: "home" },
//               { label: "Services", id: "services" },
//               { label: "Projects", id: "projects" },
//             ].map((item) => (
//               <motion.button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 whileHover={{ x: 6 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="block w-full text-left text-lg px-6 py-3 rounded-xl text-white"
//               >
//                 {item.label}
//               </motion.button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/images/loogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  /* ---------------- SCROLL ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- DARK MODE INIT + SYNC ---------------- */
  useEffect(() => {
    const root = document.documentElement;

    // 1️⃣ Initial theme (localStorage → system → default)
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

    // 2️⃣ Sync React state with actual DOM state
    const syncDarkMode = () => {
      setDarkMode(root.classList.contains("dark"));
    };

    syncDarkMode();

    // 3️⃣ Observe class changes (prevents desync bugs)
    const observer = new MutationObserver(syncDarkMode);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  /* ---------------- TOGGLE DARK MODE ---------------- */
  const toggleDarkMode = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");

    root.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
    // ❌ do NOT manually setDarkMode here — observer handles it
  };

  /* ---------------- SCROLL TO SECTION ---------------- */
  const scrollToSection = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 90;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-around mt-1 px-1">
      <motion.div
        animate={{
          width: scrolled ? "80%" : "100%",
          borderRadius: scrolled ? "40px" : "150px 100px 777px 150px",
          paddingTop: scrolled ? "12px" : "16px",
          paddingBottom: scrolled ? "12px" : "16px",
          y: scrolled ? -4 : 0,
          scale: scrolled ? 0.97 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 26,
          mass: 1.1,
        }}
        className={`px-6 navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <div className="flex justify-between items-center p-3">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="SoulTechies Logo" className="h-14 w-14" />
            <span className="navbar-text text-xl md:text-3xl font-semibold">
              SoulTechies
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 navbar-text items-center">
            {[
              { label: "Home", id: "home" },
              { label: "Reviews", id: "reviews" },
              { label: "Services", id: "services" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.97 }}
                className="relative font-medium"
              >
                {item.label}
                <motion.span
                  className="navbar-underline absolute left-0 -bottom-1 w-full h-[2px]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            ))}

            {/* 🌞 🌙 ANIMATED TOGGLE */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 w-11 h-11 rounded-full flex items-center justify-center
                         bg-white/20 hover:bg-white/30 transition"
            >
              <AnimatePresence mode="wait">
                {!darkMode ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                    transition={{ duration: 0.35 }}
                    className="text-xl"
                  >
                    🌞
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                    transition={{ duration: 0.35 }}
                    className="text-xl"
                  >
                    🌙
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="md:hidden flex items-center gap-3 navbar-text">
            <button onClick={toggleDarkMode} className="text-xl">
              <AnimatePresence mode="wait">
                {!darkMode ? (
                  <motion.span
                    key="sun-m"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    🌞
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon-m"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    🌙
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button onClick={() => setOpen(!open)}>{!open ? "☰" : "✕"}</button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-20 w-[90%] rounded-2xl py-4 md:hidden
                       shadow-xl bg-primary"
          >
            {["Home", "Services", "Projects"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ x: 6 }}
                className="block w-full text-left px-6 py-3 text-white"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
