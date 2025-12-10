import { useState } from 'react';
import { TopScreen } from './components/TopScreen';
import { BottomControls } from './components/BottomControls';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonPress = () => {
    setIsActive(true);
  };

  const handleIdle = () => {
    setIsActive(false);
  };

  return (
    <div className="h-screen w-screen bg-slate-100 flex items-center justify-center overflow-hidden p-4">
      {/* BMO Device Body */}
      <div className="relative w-full max-w-md h-full max-h-[800px] bg-gradient-to-br from-teal-500 to-teal-600 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-8 border-teal-700 flex flex-col p-6">
        
        {/* BMO Text (vertical on left side) */}
        <div className="absolute left-2 top-20 flex flex-col gap-0">
          <span className="text-teal-900 tracking-widest origin-center -rotate-90 whitespace-nowrap translate-x-[-20px]">
            BMO
          </span>
        </div>

        {/* Speaker dots */}
        <div className="absolute left-8 top-8 grid grid-cols-3 gap-1.5">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-teal-800 rounded-full" />
          ))}
        </div>

        {/* Top Screen Area */}
        <div className="flex-1 flex items-start justify-center pt-4 mb-6">
          <TopScreen isActive={isActive} onIdle={handleIdle} />
        </div>

        {/* Bottom Control Area */}
        <div className="flex items-center justify-center pb-4">
          <BottomControls onButtonPress={handleButtonPress} />
        </div>
      </div>
    </div>
  );
}