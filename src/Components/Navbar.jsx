import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

const PRIMARY = "#7c3bed"; // primary color
const PRIMARY_TEXT = "#ffffff";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const navbarOffset = 90; // adjust if needed

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };


  return (
    <nav className="fixed top-0 w-full z-50 flex justify-around rounded-full mt-1 px-1">
      <motion.div
        animate={{
          width: scrolled ? "80%" : "100%",
          borderRadius: scrolled ? "40px" : "150px 100px 777px 150px",
          paddingTop: scrolled ? "12px" : "16px",
          paddingBottom: scrolled ? "12px" : "16px",

          backgroundImage: scrolled
            ? "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.02))"
            : "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0))",

          // ✅ Glass after scroll
          backgroundColor: scrolled ? "rgba(124, 59, 237, 0.55)" : PRIMARY,

          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",

          border: scrolled ? "1px solid rgba(255,255,255,0.25)" : "none",

          boxShadow: scrolled
            ? "inset 0 1px 1px rgba(255,255,255,0.25), 0 16px 45px rgba(0,0,0,0.35)"
            : "inset 0 1px 1px rgba(255,255,255,0.18), 0 6px 20px rgba(0,0,0,0.18)",

          y: scrolled ? -4 : 0,
          scale: scrolled ? 0.97 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 26,
          mass: 1.1,
        }}
        className="px-6"
      >
        {/* Navbar content */}
        <div className="flex justify-between items-center p-3">
          <h1
            className="text-xl md:text-3xl font-semibold tracking-wide"
            style={{
              color: PRIMARY_TEXT,
              textShadow: "0 6px 6px rgba(0,0,0,0.50)",
            }}
          >
            SoulTechies
          </h1>

          {/* Desktop Menu */}

          <div
            className="relative transition hidden md:flex gap-8 "
            style={{ color: PRIMARY_TEXT }}
          >
            {[
              { label: "Home", id: "home" },
              { label: "Reviews", id: "reviews" },
              { label: "Services", id: "services" },
            ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{
                    y: -2,
                    scale: 1.10,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                    mass: 0.5,
                  }}
                  className="relative bg-transparent font-medium tracking-wide"
                  style={{
                    color: PRIMARY_TEXT,
                    textShadow: "0 1px 4px rgba(0,0,0,0.25)",
                  }}
                >
                  {item.label}

                  {/* soft underline */}
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-white"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                </motion.button>

            //   <motion.button
            //     key={item.id}
            //     onClick={() => scrollToSection(item.id)}
            //     className="relative bg-transparent"
            //     style={{ color: PRIMARY_TEXT }}
            //     initial="rest"
            //     whileHover="hover"
            //     animate="rest"
            //   >
            //     {item.label}

            //     <motion.span
            //       className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-white"
            //       variants={{
            //         rest: { scaleX: 0, opacity: 0 },
            //         hover: { scaleX: 1, opacity: 1 },
            //       }}
            //       transition={{ duration: 0.25, ease: "easeOut" }}
            //       style={{ originX: 0 }}
            //     />
            //   </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ color: PRIMARY_TEXT }}
          >
            {!open ? (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                stroke={PRIMARY_TEXT}
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                stroke={PRIMARY_TEXT}
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-20 w-[90%] rounded-2xl py-4 md:hidden shadow-xl"
            style={{
              backgroundColor: PRIMARY, // solid primary color (no transparency)
            }}
          >
            {[
              { label: "Home", id: "home" },
              { label: "Services", id: "services" },
              { label: "Projects", id: "projects" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="block w-full text-left text-lg px-6 py-3 rounded-xl"
                style={{
                  color: PRIMARY_TEXT,
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
