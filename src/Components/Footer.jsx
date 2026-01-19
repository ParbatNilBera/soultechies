import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Moon, Sun, Calendar } from "lucide-react";

const PRIMARY = "#7c3bed";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
    relative transition-colors duration-500
    bg-gradient-to-br from-gray-50 via-white to-gray-100
    dark:bg-gradient-to-br dark:from-black dark:via-gray-950 dark:to-black
  "
    >
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Company Info */}
          <motion.div variants={item}>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Soul<span style={{ color: PRIMARY }}>Techies</span>
            </h2>

            <p className="text-sm leading-relaxed max-w-md text-gray-600 dark:text-gray-400">
              Transforming ideas into digital reality with clean, scalable and
              innovative solutions.
            </p>

            {/* Book Now CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
            inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl
            text-sm font-semibold text-white shadow-md
            shadow-violet-300/40 dark:shadow-violet-900/40
          "
              style={{ backgroundColor: PRIMARY }}
            >
              <Calendar size={16} />
              Book Now
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-3">
            <motion.a
              whileHover={{ x: 5 }}
              href="mailto:soulte3h@gmail.com"
              className="
            flex items-center gap-3 transition-colors
            text-gray-600 hover:text-gray-900
            dark:text-gray-400 dark:hover:text-white
          "
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                <Mail size={16} style={{ color: PRIMARY }} />
              </div>
              <span className="text-sm">Soulte3h@gmail.com</span>
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="tel:+916289549477"
              className="
            flex items-center gap-3 transition-colors
            text-gray-600 hover:text-gray-900
            dark:text-gray-400 dark:hover:text-white
          "
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                <Phone size={16} style={{ color: PRIMARY }} />
              </div>
              <span className="text-sm">+91 6289 549 477</span>
            </motion.a>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${PRIMARY}20` }}
              >
                <MapPin size={16} style={{ color: PRIMARY }} />
              </div>
              <span className="text-sm">Kolkata, West Bengal</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={item}
          className="
        border-t mt-8 pt-5 text-center
        border-gray-200 dark:border-white/10
      "
        >
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} SoulTechies. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Bottom Glow Line */}
      <div
        className="
      absolute bottom-0 left-0 w-full h-px
      bg-gradient-to-r from-transparent via-purple-400 to-transparent
      dark:via-purple-600
      opacity-40
    "
      />
    </motion.footer>
  );
};

export default Footer;
