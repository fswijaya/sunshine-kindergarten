import { motion } from "motion/react";
import { Sparkles, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const floatingShapes = [
  { color: "bg-yellow-300", size: "w-14 h-14", top: "8%", left: "5%", delay: 0 },
  { color: "bg-pink-300", size: "w-10 h-10", top: "15%", right: "8%", delay: 0.3 },
  { color: "bg-blue-300", size: "w-8 h-8", top: "60%", left: "3%", delay: 0.6 },
  { color: "bg-green-300", size: "w-12 h-12", bottom: "20%", right: "5%", delay: 0.2 },
  { color: "bg-purple-300", size: "w-6 h-6", top: "40%", right: "12%", delay: 0.5 },
  { color: "bg-orange-300", size: "w-9 h-9", bottom: "35%", left: "8%", delay: 0.4 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.98 0.03 85) 0%, oklch(0.97 0.04 320) 50%, oklch(0.97 0.04 200) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-30 blur-3xl bg-yellow-300" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-25 blur-3xl bg-pink-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-20 blur-3xl bg-blue-300" />
      </div>

      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} ${shape.color} rounded-full opacity-60`}
          style={{ top: shape.top, left: shape.left, right: (shape as { right?: string }).right, bottom: (shape as { bottom?: string }).bottom }}
          animate={{ y: [0, -18, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: shape.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 rounded-full px-4 py-2 text-sm font-bold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Enrolling for 2025–2026!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance mb-6"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            <span className="text-orange-500">Where Little</span>
            <br />
            <span className="text-purple-500">Stars</span>
            <span className="text-foreground"> Come to</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #f97316, #ec4899, #a855f7)" }}
            >
              Shine!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground font-semibold mb-8 max-w-lg mx-auto lg:mx-0"
          >
            A magical place where curiosity blooms, friendships grow, and every child discovers the joy of learning through play!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all px-8 py-6"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Heart className="w-5 h-5 mr-2" />
              Enroll Your Child
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="font-black text-lg rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all px-8 py-6"
              onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Programs
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-6 mt-10 justify-center lg:justify-start flex-wrap"
          >
            {[
              { num: "200+", label: "Happy Kids" },
              { num: "15+", label: "Years Open" },
              { num: "20", label: "Expert Teachers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-orange-500" style={{ fontFamily: "'Fredoka One', cursive" }}>{stat.num}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-8 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1777056481869-feac70afe522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                alt="Children in classroom"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-4 border-dashed border-yellow-300 opacity-60"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-0 bg-white rounded-2xl shadow-xl px-4 py-3 z-20 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-xl bg-yellow-400 flex items-center justify-center text-lg">⭐</div>
              <div>
                <div className="text-xs font-black text-foreground">Top Rated</div>
                <div className="flex gap-0.5">{"★★★★★".split("").map((s, i) => <span key={i} className="text-yellow-400 text-xs">{s}</span>)}</div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-xl px-4 py-3 z-20 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-xl bg-green-400 flex items-center justify-center text-lg">🎨</div>
              <div>
                <div className="text-xs font-black text-foreground">Creative Learning</div>
                <div className="text-xs text-muted-foreground font-semibold">Arts & Play</div>
              </div>
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 left-8 z-20"
            >
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
