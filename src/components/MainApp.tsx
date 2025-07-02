import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Wish {
  Timestamp: string;
  Nama: string;
  Ucapan: string;
  FotoURL?: string;
}

export default function MainApp() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const res = await fetch('https://script.google.com/macros/s/AKfycbw-zxUvQCudVOFeHrTaMw5rMi4tbtV7O24vn_G7iOI19kxVRyT1f8dqG4Z5bwjfa13aIQ/exec');
        if (!res.ok) throw new Error('Fetch failed');
        const data: Wish[] = await res.json();
        // optional: sort by timestamp descending
        data.sort((a, b) => 
          new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime()
        );
        setWishes(data);
      } catch (err) {
        console.error(err);
        // Set dummy data untuk development jika API gagal
        setWishes([
          {
            Timestamp: new Date().toISOString(),
            Nama: "Example Friend",
            Ucapan: "Happy 17th Birthday! Semoga selalu bahagia dan sukses! 🎉💜",
            FotoURL: ""
          }
        ]);
      } finally {
        setIsFetching(false);
      }
    };

    fetchWishes();
  }, []);

  // Loading sudah dihandle di App.tsx, jadi kita tidak perlu loading screen disini
  // Tapi kita tetap bisa show placeholder saat fetch wishes

  return(
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      {/* Time Capsule Hero Section */}
      <motion.section 
        className="relative overflow-hidden py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Enhanced Kaleidoscope Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main rotating kaleidoscope layers */}
          <div className="absolute inset-0 opacity-15">
            {/* Large central kaleidoscope */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {/* Hexagonal kaleidoscope pattern */}
              {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                <motion.div
                  key={idx}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  style={{
                    borderLeft: '24px solid transparent',
                    borderRight: '24px solid transparent',
                    borderBottom: `48px solid ${
                      idx % 3 === 0 ? '#ec4899' : 
                      idx % 3 === 1 ? '#a855f7' : '#6366f1'
                    }`,
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-80px)`,
                    opacity: 0.6
                  }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: idx * 0.3 
                  }}
                />
              ))}
            </motion.div>

            {/* Secondary kaleidoscope ring */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                <motion.div
                  key={idx}
                  className="absolute top-1/2 left-1/2 w-4 h-16 bg-gradient-to-t from-pink-300 to-purple-400 rounded-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-60px)`,
                    opacity: 0.7
                  }}
                  animate={{ 
                    scaleY: [1, 1.5, 1],
                    opacity: [0.7, 0.9, 0.7]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: idx * 0.2 
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Floating kaleidoscope fragments */}
          <div className="absolute inset-0 opacity-25">
            {/* Top left cluster */}
            <motion.div 
              className="absolute top-10 left-10 w-32 h-32"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-pink-400 transform -translate-x-1/2"></div>
                <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-purple-400 transform -translate-x-1/2 rotate-120"></div>
                <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-indigo-400 transform -translate-x-1/2 rotate-240"></div>
              </div>
            </motion.div>

            {/* Top right cluster */}
            <motion.div 
              className="absolute top-40 right-20 w-24 h-24"
              animate={{ rotate: -360, scale: [1, 1.3, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative w-full h-full">
                {[0, 72, 144, 216, 288].map((angle, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute top-1/2 left-1/2 w-2 h-8 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-12px)`
                    }}
                    animate={{ scaleY: [1, 1.5, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: idx * 0.1 
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Bottom left cluster */}
            <motion.div 
              className="absolute bottom-20 left-1/3 w-20 h-20"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative w-full h-full">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute inset-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                  animate={{ 
                    scale: [1, 0.8, 1],
                    rotate: -360
                  }}
                  transition={{ 
                    scale: { duration: 3, repeat: Infinity },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                />
              </div>
            </motion.div>

            {/* Bottom right cluster */}
            <motion.div 
              className="absolute bottom-32 right-1/4 w-28 h-28"
              animate={{ rotate: -360, scale: [1, 1.15, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative w-full h-full">
                {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute top-1/2 left-1/2 w-1 h-6 bg-gradient-to-t from-indigo-300 to-pink-300 rounded-full"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-14px)`
                    }}
                    animate={{ 
                      scaleY: [1, 1.8, 1],
                      opacity: [0.5, 0.9, 0.5]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      delay: idx * 0.15 
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Floating geometric shapes */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, idx) => (
              <motion.div
                key={idx}
                className="absolute w-3 h-3"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: `linear-gradient(45deg, ${
                    idx % 3 === 0 ? '#ec4899, #a855f7' : 
                    idx % 3 === 1 ? '#a855f7, #6366f1' : '#6366f1, #ec4899'
                  })`
                }}
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 8 + idx,
                  repeat: Infinity, 
                  delay: idx * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main Time Capsule Title */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-4">
              ✨ Time Capsule ✨
            </h1>
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-white mb-6"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              17 Years of Magical Memories
            </motion.h2>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div 
            className="mb-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-purple-800/40 to-pink-800/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20">
              <h3 className="text-2xl font-bold text-purple-200 mb-6">Perjalanan 17 Tahun</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { year: "2007", emoji: "👶", phase: "Baby Steps", color: "from-pink-400 to-purple-400" },
                  { year: "2012", emoji: "🎒", phase: "School Days", color: "from-purple-400 to-indigo-400" },
                  { year: "2018", emoji: "🌟", phase: "Growing Up", color: "from-indigo-400 to-pink-400" },
                  { year: "2024", emoji: "🎉", phase: "Sweet 17", color: "from-pink-400 to-purple-400" }
                ].map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    className={`bg-gradient-to-br ${milestone.color} p-4 rounded-xl text-center text-white shadow-lg`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + (idx * 0.2), duration: 0.8 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    <div className="text-3xl mb-2">{milestone.emoji}</div>
                    <div className="font-bold text-lg">{milestone.year}</div>
                    <div className="text-sm opacity-90">{milestone.phase}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Memory Kaleidoscope */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          >
            <div className="relative">
              <motion.div 
                className="w-40 h-40 mx-auto bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-32 h-32 bg-gradient-to-r from-purple-900 to-pink-900 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">17</span>
                </div>
              </motion.div>
              
              {/* Floating memory icons */}
              {[
                { icon: "🧸", pos: "top-0 left-8", delay: 0 },
                { icon: "📚", pos: "top-8 right-0", delay: 0.5 },
                { icon: "👫", pos: "bottom-0 left-0", delay: 1 },
                { icon: "🏆", pos: "bottom-8 right-8", delay: 1.5 }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`absolute ${item.pos} text-2xl`}
                  animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: item.delay,
                    ease: "easeInOut"
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              className="text-purple-200 mt-6 text-lg"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Setiap momen adalah bagian dari kaleidoskop kehidupan yang indah ✨
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Memory Gallery Section */}
      <motion.section 
        className="relative py-20 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        {/* Gallery Kaleidoscope Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-6">
            {/* Floating photo frame shapes */}
            <motion.div 
              className="absolute top-16 left-12 w-8 h-10 border-2 border-pink-300/40 rounded-sm"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/3 right-16 w-6 h-8 border-2 border-purple-300/40 rounded-sm"
              animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div 
              className="absolute bottom-20 left-1/4 w-7 h-5 border-2 border-indigo-300/40 rounded-sm"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />
            
            {/* Memory sparkles */}
            {[...Array(6)].map((_, idx) => (
              <motion.div
                key={idx}
                className="absolute w-1 h-1 bg-pink-300/50 rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${15 + Math.random() * 70}%`,
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity, 
                  delay: idx * 0.8,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-4">
              📸 Memory Gallery 💜
            </h2>
            <p className="text-purple-200 text-lg">
              Koleksi momen berharga dan pesan spesial untukmu
            </p>
          </motion.div>

          {/* Gallery Items */}
          <div className="space-y-20">
            {/* Memory 1 */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 4.5 }}
            >
              {/* Photo Side */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Placeholder for photo - replace with actual image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📷</div>
                      <p className="text-purple-600 font-medium">
                        Foto Kenangan #1
                      </p>
                      <p className="text-sm text-purple-500 mt-2">
                        Ganti dengan foto asli
                      </p>
                    </div>
                  </div>
                  
                  {/* Photo overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Decorative frame */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-pink-400 rounded-tl-lg"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-purple-400 rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-purple-400 rounded-bl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-pink-400 rounded-br-lg"></div>
                </div>
              </motion.div>

              {/* Message Side */}
              <motion.div 
                className="space-y-6"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 5 }}
              >
                <div className="bg-gradient-to-br from-pink-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/50">
                  <motion.div
                    className="mb-6"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-4xl">💕</span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">
                    Masa Kecil yang Lucu
                  </h3>
                  
                  <div className="space-y-4 text-purple-700">
                    <p className="italic leading-relaxed">
                      "Inget nggak waktu kamu masih kecil, selalu ngikutin kemana kakak pergi? 
                      Lucu banget deh, kaya anak ayam yang ngikutin induknya! 😄"
                    </p>
                    <p className="leading-relaxed">
                      Sekarang kamu udah 17 tahun, udah jadi anak yang mandiri dan pinter. 
                      Tapi di mata kakak, kamu tetap adek kecil yang selalu kakak sayang! 💜
                    </p>
                  </div>
                  
                  <motion.div 
                    className="mt-6 text-right"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <p className="text-purple-600 font-semibold">
                      - Dengan cinta, Kakak 💝
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Memory 2 - Reversed Layout */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 5.5 }}
            >
              {/* Message Side - Left on desktop */}
              <motion.div 
                className="space-y-6 order-2 lg:order-1"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 6 }}
              >
                <div className="bg-gradient-to-br from-purple-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50">
                  <motion.div
                    className="mb-6"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <span className="text-4xl">🌟</span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">
                    Prestasi yang Membanggakan
                  </h3>
                  
                  <div className="space-y-4 text-purple-700">
                    <p className="italic leading-relaxed">
                      "Kakak selalu bangga sama semua pencapaian kamu! Dari yang kecil sampai yang besar, 
                      semuanya bikin kakak happy banget! 🏆"
                    </p>
                    <p className="leading-relaxed">
                      Di umur 17 ini, pasti masih banyak mimpi dan cita-cita yang pengen kamu capai. 
                      Kakak yakin banget kamu pasti bisa! Semangat terus ya! ✨
                    </p>
                  </div>
                  
                  <motion.div 
                    className="mt-6 text-right"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <p className="text-purple-600 font-semibold">
                      - Your biggest supporter, Kakak 🎉
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Photo Side - Right on desktop */}
              <motion.div 
                className="relative group order-1 lg:order-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 via-indigo-200 to-pink-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏆</div>
                      <p className="text-purple-600 font-medium">
                        Foto Prestasi #2
                      </p>
                      <p className="text-sm text-purple-500 mt-2">
                        Ganti dengan foto asli
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-indigo-400 rounded-tl-lg"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-pink-400 rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-pink-400 rounded-bl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-indigo-400 rounded-br-lg"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Memory 3 */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 6.5 }}
            >
              {/* Photo Side */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-indigo-200 via-pink-200 to-purple-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎂</div>
                      <p className="text-purple-600 font-medium">
                        Foto Ulang Tahun #3
                      </p>
                      <p className="text-sm text-purple-500 mt-2">
                        Ganti dengan foto asli
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-purple-400 rounded-tl-lg"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-indigo-400 rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-indigo-400 rounded-bl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-purple-400 rounded-br-lg"></div>
                </div>
              </motion.div>

              {/* Message Side */}
              <motion.div 
                className="space-y-6"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 7 }}
              >
                <div className="bg-gradient-to-br from-indigo-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl p-8 border border-indigo-200/50">
                  <motion.div
                    className="mb-6"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  >
                    <span className="text-4xl">🎉</span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">
                    Harapan untuk Masa Depan
                  </h3>
                  
                  <div className="space-y-4 text-purple-700">
                    <p className="italic leading-relaxed">
                      "Di umur 17 ini, kakak doain semoga kamu selalu sehat, bahagia, 
                      dan sukses dalam segala hal yang kamu lakuin! 🙏"
                    </p>
                    <p className="leading-relaxed">
                      Apapun yang terjadi nanti, inget ya kalau kakak akan selalu ada buat kamu. 
                      Kamu nggak sendirian, karena kamu punya keluarga yang sayang banget sama kamu! 💜
                    </p>
                  </div>
                  
                  <motion.div 
                    className="mt-6 text-right"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  >
                    <p className="text-purple-600 font-semibold">
                      - Forever your sibling, Kakak 👫💕
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Final Message */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 7.5 }}
          >
            <div className="bg-gradient-to-r from-pink-100/50 to-purple-100/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/30 max-w-2xl mx-auto">
              <motion.div
                className="mb-6"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-5xl">💖</span>
              </motion.div>
              
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Happy 17th Birthday! 🎂
              </h3>
              
              <p className="text-purple-700 text-lg leading-relaxed">
                Semoga website ini bisa jadi kenang-kenangan yang indah di hari spesial kamu. 
                Terima kasih udah jadi adek yang paling amazing di dunia! ✨
              </p>
              
                             <motion.p 
                 className="text-purple-600 font-bold text-xl mt-6"
                 animate={{ opacity: [0.8, 1, 0.8] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 Love you always! 💜🎈
               </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Wish Wall Section */}
      <motion.section 
        className="relative py-16 px-6 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        {/* Wish Wall Kaleidoscope Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle kaleidoscope patterns for wishes section */}
          <div className="absolute inset-0 opacity-8">
            {/* Floating kaleidoscope crystals */}
            <motion.div 
              className="absolute top-20 left-10 w-16 h-16"
              animate={{ rotate: 360, scale: [1, 1.3, 1] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {[0, 120, 240].map((angle, idx) => (
                <motion.div
                  key={idx}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  style={{
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderBottom: `12px solid ${
                      idx === 0 ? '#f472b6' : idx === 1 ? '#c084fc' : '#818cf8'
                    }`,
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-8px)`,
                    opacity: 0.6
                  }}
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: idx * 0.4 
                  }}
                />
              ))}
            </motion.div>

            <motion.div 
              className="absolute top-1/3 right-16 w-12 h-12"
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              {[0, 90, 180, 270].map((angle, idx) => (
                <motion.div
                  key={idx}
                  className="absolute top-1/2 left-1/2 w-1 h-4 bg-gradient-to-t from-pink-300 to-purple-300 rounded-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-6px)`
                  }}
                  animate={{ 
                    scaleY: [1, 1.6, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2.2, 
                    repeat: Infinity, 
                    delay: idx * 0.15 
                  }}
                />
              ))}
            </motion.div>

            <motion.div 
              className="absolute bottom-1/4 left-1/4 w-20 h-20"
              animate={{ rotate: 360, scale: [1, 1.15, 1] }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative w-full h-full">
                {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute top-1/2 left-1/2 w-0 h-0"
                    style={{
                      borderLeft: '4px solid transparent',
                      borderRight: '4px solid transparent',
                      borderBottom: `8px solid ${
                        idx % 2 === 0 ? '#f9a8d4' : '#ddd6fe'
                      }`,
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-10px)`,
                      opacity: 0.5
                    }}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{ 
                      duration: 2.8, 
                      repeat: Infinity, 
                      delay: idx * 0.2 
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-16 right-1/3 w-14 h-14"
              animate={{ rotate: -360, scale: [1, 1.25, 1] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative w-full h-full">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute inset-1 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full"
                  animate={{ 
                    scale: [1, 0.7, 1],
                    rotate: 360
                  }}
                  transition={{ 
                    scale: { duration: 4, repeat: Infinity },
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" }
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Scattered kaleidoscope particles */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(8)].map((_, idx) => (
              <motion.div
                key={idx}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  background: `linear-gradient(45deg, ${
                    idx % 3 === 0 ? '#f472b6, #c084fc' : 
                    idx % 3 === 1 ? '#c084fc, #818cf8' : '#818cf8, #f472b6'
                  })`
                }}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 6 + idx * 0.8,
                  repeat: Infinity, 
                  delay: idx * 0.7,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent mb-4">
              💜 Gallery of Wishes 🌸
            </h2>
            <p className="text-purple-200 text-lg">
              Kumpulan doa dan harapan dari orang-orang terkasih
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishes.map((wish, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 3.5 + (idx * 0.1), 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)"
                }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-pink-100/90 to-purple-100/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-pink-200/50 hover:border-purple-300/80 transition-all duration-300">
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 text-pink-400 opacity-50">✨</div>
                  <div className="absolute bottom-2 left-2 text-purple-400 opacity-50">💫</div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">
                        {wish.Nama.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-purple-800 text-lg">🎈 {wish.Nama}</p>
                      <p className="text-xs text-purple-600 opacity-70">
                        {new Date(wish.Timestamp).toLocaleDateString('id-ID')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 mb-4">
                    <p className="text-purple-700 italic leading-relaxed">
                      "{wish.Ucapan}"
                    </p>
                  </div>
                  
                  {wish.FotoURL && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src={wish.FotoURL}
                        alt={`Foto dari ${wish.Nama}`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </motion.div>
                  )}
                  
                  {/* Floating hearts effect on hover */}
                  <motion.div
                    className="absolute -top-2 -right-2 text-pink-400 opacity-0 group-hover:opacity-100"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💕
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <motion.p 
              className="text-purple-300 text-lg font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨ Thank you for being part of this magical journey ✨
            </motion.p>
            
            <div className="flex justify-center space-x-4 mt-6">
              {["🎂", "🎈", "🎁", "💜", "🌟"].map((emoji, idx) => (
                <motion.div
                  key={idx}
                  className="text-2xl"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2 + idx * 0.5,
                    repeat: Infinity,
                    delay: idx * 0.3
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}