import { motion } from 'motion/react';
import { Gamepad2, Zap, Star, Rocket } from 'lucide-react';

interface GameGridProps {
  onIdle: () => void;
}

const games = [
  { id: 1, name: 'Adventure', icon: Rocket, color: 'bg-gradient-to-br from-pink-400 to-pink-500' },
  { id: 2, name: 'Puzzle', icon: Star, color: 'bg-gradient-to-br from-yellow-400 to-yellow-500' },
  { id: 3, name: 'Action', icon: Zap, color: 'bg-gradient-to-br from-purple-400 to-purple-500' },
  { id: 4, name: 'Arcade', icon: Gamepad2, color: 'bg-gradient-to-br from-blue-400 to-blue-500' },
];

export function GameGrid({ onIdle }: GameGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full h-full p-6 flex flex-col"
    >
      {/* Grid of games */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {games.map((game, index) => {
          const Icon = game.icon;
          return (
            <motion.button
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onIdle}
              className={`${game.color} rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 border-4 border-white/30 hover:border-white/50 transition-all`}
            >
              <Icon className="w-10 h-10 text-white drop-shadow-md" strokeWidth={2.5} />
              <span className="text-white drop-shadow-md">{game.name}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={onIdle}
        className="mt-4 py-2 px-6 bg-slate-700 text-white rounded-full shadow-md hover:bg-slate-600 transition-colors"
      >
        Back
      </motion.button>
    </motion.div>
  );
}
