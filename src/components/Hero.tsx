import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-[#21B9C6] rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-[#EBA430] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6 text-center md:text-right"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit mx-auto md:mx-0 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#21B9C6] animate-pulse" />
            <span className="text-sm text-gray-300 font-medium tracking-wide">محیط واقعیت مجازی و تعاملی</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            فراتر از دیدن،<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#21B9C6] to-[#EBA430]">
              نزدیک‌تر به معنا
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 mt-4">
            سدیدار تجربه‌هایی می‌سازد که از تماشا فراتر می‌روند؛ تجربه‌هایی درست، معنادار و اثرگذار برای فرهنگ، آموزش و سرگرمی تعاملی.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center md:justify-start">
            <button 
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#EBA430] hover:bg-[#d99420] text-[#011F41] font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              مشاهده پروژه‌ها
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-medium text-lg px-8 py-4 rounded-xl transition-all w-full sm:w-auto justify-center"
            >
              درباره ما
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Abstract visual representation instead of a specific image to match the "VR/AR" theme */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#032b59] to-[#011F41] border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2MmgtNHYyaDh2LTRoNHYtMmgtNHptLTggMjBWMTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTIgMzBWMzhoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTIwLTIwdjRoMnYtNGg0di0yaC00di00aC0ydjRoLTR2MmgtNHYtbTR6bS04IDMyVjQ2aC0ydjRoLTR2MmgtNHYyaDh2LTRoNHYtMmgtNHptMC02MFY0aC0ydjRoLTR2MmgtNHYyaDh2LTRoNHYtMmgtNHptLTE0IDIwVjE4aC0ydjRoLTR2MmgtNHYyaDh2LTRoNHYtMmgtNHptMC0yMFYwaC0ydjRoLTR2MmgtNHYyaDh2LTRoNHYtMmgtNHpNMTAgMzh2LTRIMHY0aDR2NGgydi00aDR2LTJoLTR6bTMyIDMyVjU4aC0ydjRoLTR2MmgtNHYyaDh2LTRoNHYtMmgtNHptMTAtMjB2LTRoMnYtNGg0di0yaC00di00aC0ydjRoLTR2MmgtNHYydjR6TTEwIDQ2di00SDB2NGg0djRoMnYtNGg0di0yaC00eiIgeDE9IjBweCIgeTE9IjBweCIgeDI9IjEwMCUiIHkyPSIxMDAlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
              
              {/* Animated Floating Shapes */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-48 h-48 rounded-2xl bg-gradient-to-tr from-[#21B9C6] to-transparent border border-[#21B9C6]/50 backdrop-blur-md absolute top-12 right-12 z-10"
              />
              <motion.div 
                animate={{ 
                  y: [0, 30, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-32 h-32 rounded-full bg-gradient-to-bl from-[#EBA430] to-transparent border border-[#EBA430]/50 backdrop-blur-md absolute bottom-20 left-16 z-20"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 rounded-xl bg-white/5 border border-white/20 backdrop-blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center shadow-xl"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"/>
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
