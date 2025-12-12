import { AnimatePresence } from "framer-motion";
import { IdleFace } from "./IdleFace";
import { GameGrid } from "./GameGrid";
import GameStream from "./GameStream";
import { useState } from "react";

interface TopScreenProps {
  screen: string;
  setScreen: (screen: string) => void;
  setIsGameSelected: (isSelected: boolean) => void;
}

export function TopScreen({ screen, setIsGameSelected }: TopScreenProps) {
  const [selectedGameName, setSelectedGameName] = useState<string | null>(null);
  if (screen === "Game") {
    fetch("http://localhost:8000/${selectedGameName}")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }
  return (
    <div className="relative w-full min-h-full">
      {/* Screen frame */}
      <div className="w-full min-h-120 h-full bg-linear-to-br from-cyan-300 to-cyan-400 rounded-2xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.15)] p-3 border-4 border-cyan-500">
        {/* Inner display */}
        <div className="flex flex-col justify-center w-full min-h-120 bg-linear-to-br from-cyan-200 to-cyan-300 rounded-xl overflow-hidden relative">
          <AnimatePresence mode="wait">
            {screen === "Idle" && <IdleFace />}
            {screen === "GameGrid" && (
              <GameGrid
                setIsGameSelected={setIsGameSelected}
                selectedGameName={selectedGameName}
                setSelectedGameName={setSelectedGameName}
              />
            )}
            {screen === "Game" && <GameStream />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
