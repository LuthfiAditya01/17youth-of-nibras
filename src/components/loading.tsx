import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Memuat perjalanan 17 tahun...' }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 z-50 overflow-hidden">
      {/* Kaleidoscope Background */}
      <div className="absolute inset-0">
        {/* Rotating kaleidoscope layers */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            {/* Hexagonal kaleidoscope pattern */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute top-0 left-1/2 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-pink-400 transform -translate-x-1/2"></div>
              <div className="absolute top-0 left-1/2 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-blue-400 transform -translate-x-1/2 rotate-60"></div>
              <div className="absolute top-0 left-1/2 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-purple-400 transform -translate-x-1/2 rotate-120"></div>
              <div className="absolute top-0 left-1/2 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-yellow-400 transform -translate-x-1/2 rotate-180"></div>
              <div className="absolute top-0 left-1/2 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-green-400 transform -translate-x-1/2 rotate-240"></div>
              <div className="absolute top-0 left-1/2 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-red-400 transform -translate-x-1/2 rotate-300"></div>
            </div>
          </div>
        </div>

        {/* Second layer - reverse rotation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45 translate-y-16"></div>
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-90 translate-y-20"></div>
              <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-135 translate-y-18"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Central Age Display */}
        <div className="relative">
          {/* Age 17 in the center */}
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
                17
              </span>
            </div>
          </div>

          {/* Memory fragments floating around */}
          <div className="absolute inset-0">
            {/* Childhood memories */}
            <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-lg animate-bounce opacity-80" style={{ animationDelay: '0s', animationDuration: '3s' }}>
              <div className="w-full h-full flex items-center justify-center text-xs">🧸</div>
            </div>
            
            {/* School memories */}
            <div className="absolute top-4 right-0 w-6 h-6 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg animate-bounce opacity-80" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
              <div className="w-full h-full flex items-center justify-center text-xs">📚</div>
            </div>

            {/* Friendship memories */}
            <div className="absolute bottom-0 left-4 w-7 h-7 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg animate-bounce opacity-80" style={{ animationDelay: '1s', animationDuration: '3s' }}>
              <div className="w-full h-full flex items-center justify-center text-xs">👫</div>
            </div>

            {/* Achievement memories */}
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg animate-bounce opacity-80" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
              <div className="w-full h-full flex items-center justify-center text-xs">🏆</div>
            </div>
          </div>
        </div>

        {/* Floating wish notes dengan dramatic motion */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Wish note 1 */}
          <motion.div 
            className="absolute top-1/4 left-1/4"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: -100,
              rotate: -45 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: 0,
              rotate: 12,
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 1.5,
              delay: 3,
              type: "spring",
              stiffness: 100,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div 
              className="bg-pink-100 rounded-lg p-2 shadow-lg text-xs max-w-20"
              whileHover={{ scale: 1.1, rotate: 18 }}
              animate={{ 
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px -3px rgba(236, 72, 153, 0.3)",
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              <div className="text-pink-600">💕 HBD!</div>
            </motion.div>
          </motion.div>

          {/* Wish note 2 */}
          <motion.div 
            className="absolute top-1/3 right-1/4"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: 100,
              rotate: 45 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: 0,
              rotate: -12,
              y: [0, -15, 0]
            }}
            transition={{ 
              duration: 1.5,
              delay: 3.5,
              type: "spring",
              stiffness: 100,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div 
              className="bg-blue-100 rounded-lg p-2 shadow-lg text-xs max-w-24"
              whileHover={{ scale: 1.1, rotate: -18 }}
              animate={{ 
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2.5, repeat: Infinity }
              }}
            >
              <div className="text-blue-600">🎉 Stay awesome!</div>
            </motion.div>
          </motion.div>

          {/* Wish note 3 */}
          <motion.div 
            className="absolute bottom-1/3 left-1/3"
            initial={{ 
              opacity: 0, 
              scale: 0,
              y: 100,
              rotate: -30 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0],
              rotate: 6
            }}
            transition={{ 
              duration: 1.5,
              delay: 4,
              type: "spring",
              stiffness: 100,
              y: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div 
              className="bg-purple-100 rounded-lg p-2 shadow-lg text-xs max-w-20"
              whileHover={{ scale: 1.1, rotate: 12 }}
              animate={{ 
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px -3px rgba(147, 51, 234, 0.3)",
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2.2, repeat: Infinity }
              }}
            >
              <div className="text-purple-600">✨ Wish granted!</div>
            </motion.div>
          </motion.div>

          {/* Wish note 4 */}
          <motion.div 
            className="absolute bottom-1/4 right-1/3"
            initial={{ 
              opacity: 0, 
              scale: 0,
              y: 100,
              rotate: 30 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -12, 0],
              rotate: -6
            }}
            transition={{ 
              duration: 1.5,
              delay: 4.5,
              type: "spring",
              stiffness: 100,
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div 
              className="bg-yellow-100 rounded-lg p-2 shadow-lg text-xs max-w-24"
              whileHover={{ scale: 1.1, rotate: -12 }}
              animate={{ 
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  "0 10px 15px -3px rgba(251, 191, 36, 0.3)",
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2.8, repeat: Infinity }
              }}
            >
              <div className="text-yellow-600">🌟 Dreams come true!</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Loading text dengan framer motion */}
        <motion.div 
          className="space-y-4 relative z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main title dengan dramatic entrance */}
          <motion.h2 
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 1,
              type: "spring",
              stiffness: 100 
            }}
          >
            <motion.span 
              className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ✨ Reading your memories, love, and wishes ✨
            </motion.span>
          </motion.h2>

          {/* Subtitle dengan typewriter effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <motion.p 
              className="text-lg text-purple-200 font-medium"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ 
                duration: 2, 
                delay: 2.5,
                ease: "easeInOut"
              }}
              style={{ overflow: "hidden", whiteSpace: "nowrap", margin: "0 auto" }}
            >
              {message}
            </motion.p>
          </motion.div>
          
          {/* Timeline dots dengan staggered animation */}
          <motion.div 
            className="flex justify-center space-x-1 mt-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            {[...Array(17)].map((_, i) => (
              <motion.div 
                key={i}
                className="w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 1], 
                  opacity: [0, 1, 0.8],
                }}
                transition={{ 
                  duration: 0.8,
                  delay: 4.5 + (i * 0.1),
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          {/* Additional dramatic text elements */}
          <motion.div
            className="mt-8 space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6, duration: 1 }}
          >
            <motion.p 
              className="text-sm text-purple-300 font-light"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Collecting fragments from the past...
            </motion.p>
            
            <motion.p 
              className="text-sm text-blue-300 font-light"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
              }}
            >
              Weaving dreams for the future...
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Birthday elements dengan dramatic entrance */}
        <motion.div 
          className="absolute top-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: 1.5,
            type: "spring",
            stiffness: 120
          }}
        >
          <motion.div 
            className="text-2xl"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎂
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute top-12 left-1/4"
          initial={{ opacity: 0, x: -50, rotate: -90 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 2,
            type: "spring"
          }}
        >
          <motion.div 
            className="text-xl"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            🎈
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute top-12 right-1/4"
          initial={{ opacity: 0, x: 50, rotate: 90 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 2.5,
            type: "spring"
          }}
        >
          <motion.div 
            className="text-xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            🎁
          </motion.div>
        </motion.div>
      </div>


    </div>
  );
};

export default Loading;

