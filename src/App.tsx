import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from './components/loading';
import MainApp from './components/MainApp';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingPhase, setLoadingPhase] = useState<number>(0);

  useEffect(() => {
    // Multi-phase loading untuk dramatic effect
    const phases = [
      { delay: 0, message: "Membuka time capsule..." },
      { delay: 2000, message: "Menyusun kaleidoskop kenangan..." },
      { delay: 4000, message: "Mengumpulkan wish dari teman-teman..." },
      { delay: 6000, message: "Mempersiapkan surprise..." },
    ];

    phases.forEach((phase, index) => {
      setTimeout(() => {
        setLoadingPhase(index);
        if (index === phases.length - 1) {
          // Final phase - fade out loading
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      }, phase.delay);
    });

    return () => {
      // Cleanup any pending timeouts
    };
  }, []);

  const getCurrentMessage = () => {
    const messages = [
      "Membuka time capsule...",
      "Menyusun kaleidoskop kenangan...", 
      "Mengumpulkan wish dari teman-teman...",
      "Mempersiapkan surprise..."
    ];
    return messages[loadingPhase] || messages[0];
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.1,
              filter: "blur(10px)"
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <Loading message={getCurrentMessage()} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ 
              opacity: 0,
              scale: 0.9,
              filter: "blur(20px)"
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              filter: "blur(0px)"
            }}
            transition={{ 
              duration: 2,
              ease: "easeOut",
              delay: 0.5
            }}
          >
            <MainApp />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional: Progress indicator */}
      {isLoading && (
        <motion.div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-2 h-2 bg-pink-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  delay: 0
                }}
              />
              <motion.div
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.2
                }}
              />
              <motion.div
                className="w-2 h-2 bg-indigo-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.4
                }}
              />
              <span className="text-white/80 text-sm font-medium ml-2">
                {Math.round((loadingPhase + 1) * 25)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
