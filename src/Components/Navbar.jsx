
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
    <nav className="fixed top-0 w-full z-50 flex justify-center mt-1 px-2 ">
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
        className={`px-6 sm:px-6 navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <div className="flex justify-between items-center p-3">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            {/* <img src={logo} alt="SoulTechies Logo" className="h-14 w-14" /> */}
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

            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center
             rounded-full bg-white/20 backdrop-blur-md
             hover:bg-white/30 transition"
            >
              {!open ? "☰" : "✕"}
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-20 w-[92%] rounded-2xl py-4 md:hidden
             shadow-2xl
             bg-primary/55 dark:bg-primary/25
             backdrop-blur-xl backdrop-saturate-150
             border border-primary/30 dark:border-primary/40"
          >
            {["Home", "Services", "Projects"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ x: 6 }}
                className="block w-full text-left px-6 py-4
           text-white text-lg font-medium
           hover:bg-white/10 transition rounded-xl"
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
