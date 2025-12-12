import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IdleFace() {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="relative">
        {/* Eyes */}
        <div className="flex gap-8 mb-6">
          {/* Left eye */}
          <motion.div
            animate={{
              scaleY: blink ? 0.1 : 1,
            }}
            transition={{ duration: 0.1 }}
            className="w-8 h-8 bg-slate-800 rounded-full"
          />
          {/* Right eye */}
          <motion.div
            animate={{
              scaleY: blink ? 0.1 : 1,
            }}
            transition={{ duration: 0.1 }}
            className="w-8 h-8 bg-slate-800 rounded-full"
          />
        </div>

        {/* Smile */}
        <motion.svg
          width="80"
          height="40"
          viewBox="0 0 80 40"
          className="mx-auto"
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 10 10 Q 40 30, 70 10"
            stroke="#1e293b"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}
