import { motion } from "framer-motion";
import { Egg, AudioWaveform, Cpu, CircuitBoard } from "lucide-react";

interface GameGridProps {
  setIsGameSelected: (isSelected: boolean) => void;
  selectedGameName: string | null;
  setSelectedGameName: (name: string) => void;
}

const games = [
  {
    id: 1,
    name: "Crossy Road",
    icon: Egg,
    color: "bg-gradient-to-br from-pink-400 to-pink-500",
  },
  {
    id: 2,
    name: "Fortune Signal",
    icon: AudioWaveform,
    color: "bg-gradient-to-br from-yellow-400 to-yellow-500",
  },
  {
    id: 3,
    name: "Memory Blocks",
    icon: CircuitBoard,
    color: "bg-gradient-to-br from-purple-400 to-purple-500",
  },
  {
    id: 4,
    name: "Chip Factory",
    icon: Cpu,
    color: "bg-gradient-to-br from-blue-400 to-blue-500",
  },
];

export function GameGrid({
  setIsGameSelected,
  selectedGameName,
  setSelectedGameName,
}: GameGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full h-full p-6 flex flex-col"
    >
      {/* Game buttons */}
      <div className="grid grid-cols-2 gap-4">
        {games.map((game, index) => {
          const Icon = game.icon;
          const game_name = game.name.toLowerCase().replace(/\s+/g, "_");
          const isSelected = selectedGameName === game_name;

          return (
            <motion.button
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedGameName(game.name);
                setIsGameSelected(true);
              }}
              className={`
                ${game.color} 
                rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 
                border-4 border-white/30 hover:border-white/50 transition-all
                ${isSelected ? "ring-4 ring-white/80" : ""}
              `}
            >
              <Icon
                className="w-10 h-10 text-white drop-shadow-md"
                strokeWidth={2.5}
              />
              <span className="text-white drop-shadow-md">{game_name}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
