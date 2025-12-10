import { motion, AnimatePresence } from 'motion/react';
import { IdleFace } from './IdleFace';
import { GameGrid } from './GameGrid';

interface TopScreenProps {
  isActive: boolean;
  onIdle: () => void;
}

export function TopScreen({ isActive, onIdle }: TopScreenProps) {
  return (
    <div className="relative w-full h-64">
      {/* Screen frame */}
      <div className="w-full h-full bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-2xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.15)] p-3 border-4 border-cyan-500">
        {/* Inner display */}
        <div className="w-full h-full bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-xl overflow-hidden relative">
          <AnimatePresence mode="wait">
            {!isActive ? (
              <IdleFace key="idle" />
            ) : (
              <GameGrid key="grid" onIdle={onIdle} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}