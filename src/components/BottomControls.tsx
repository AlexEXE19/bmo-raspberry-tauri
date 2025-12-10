import { motion } from 'motion/react';

interface BottomControlsProps {
  onButtonPress: () => void;
}

export function BottomControls({ onButtonPress }: BottomControlsProps) {
  return (
    <div className="w-full max-w-md">
      {/* Button layout matching BMO */}
      <div className="flex items-center justify-center gap-8">
        
        {/* Left side - D-pad (cross/plus shape) */}
        <div className="relative w-24 h-24">
          {/* Horizontal bar */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onButtonPress}
            className="absolute top-1/2 left-0 w-full h-8 -translate-y-1/2 bg-gradient-to-b from-yellow-400 to-amber-500 shadow-[0_4px_0_rgb(180,83,9),0_6px_12px_rgba(0,0,0,0.3)] active:shadow-[0_2px_0_rgb(180,83,9)] active:translate-y-[-calc(50%-1px)] border-2 border-amber-600 rounded-lg transition-all"
          />
          {/* Vertical bar */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onButtonPress}
            className="absolute top-0 left-1/2 w-8 h-full -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_4px_0_rgb(180,83,9),0_6px_12px_rgba(0,0,0,0.3)] active:shadow-[0_2px_0_rgb(180,83,9)] active:translate-y-0.5 border-2 border-amber-600 rounded-lg transition-all"
          />
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-amber-600 rounded-full shadow-inner pointer-events-none" />
        </div>

        {/* Right side - Triangle and Circle buttons */}
        <div className="relative w-24 h-24">
          {/* Triangle button (top) */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onButtonPress}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-[0_5px_0_rgb(6,182,212),0_7px_14px_rgba(0,0,0,0.3)] active:shadow-[0_2px_0_rgb(6,182,212)] active:translate-y-1 border-3 border-cyan-600 rounded-xl flex items-center justify-center transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-cyan-900">
              <path d="M10 2 L18 18 L2 18 Z" fill="currentColor" />
            </svg>
          </motion.button>

          {/* Circle button (bottom right) */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onButtonPress}
            className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 shadow-[0_5px_0_rgb(190,18,60),0_7px_14px_rgba(0,0,0,0.3)] active:shadow-[0_2px_0_rgb(190,18,60)] active:translate-y-1 border-3 border-rose-700 flex items-center justify-center transition-all"
          >
            <div className="w-6 h-6 border-4 border-rose-900 rounded-full" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}