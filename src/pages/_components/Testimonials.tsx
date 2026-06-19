import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", role: "Parent of Emma, Age 4", text: "Sunshine Kindergarten transformed our shy little girl into a confident, curious learner! The teachers are genuinely caring and the environment is just magical.", avatar: "🌸", color: "from-pink-400 to-rose-400", bg: "bg-pink-50" },
  { name: "James & Priya K.", role: "Parents of Noah, Age 3", text: "We visited 6 schools before choosing Sunshine. Nothing compared. Noah comes home every day singing new songs and bursting with stories. Best decision we ever made!", avatar: "⭐", color: "from-yellow-400 to-orange-400", bg: "bg-yellow-50" },
  { name: "Linda T.", role: "Parent of twins Maya & Leo", text: "Having twins with different personalities, we worried about fitting in. But both of them absolutely love it here. The teachers truly understand each child as an individual.", avatar: "💜", color: "from-purple-400 to-violet-400", bg: "bg-purple-50" },
  { name: "David R.", role: "Parent of Sophie, Age 5", text: "Sophie was so ready for primary school after Rocket Readies. Her teacher said she was one of the most prepared children they had ever received. So grateful!", avatar: "🚀", color: "from-blue-400 to-teal-400", bg: "bg-blue-50" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const visible = [testimonials[current % testimonials.length], testimonials[(current + 1) % testimonials.length]];
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-purple-50/40 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block bg-yellow-100 text-yellow-700 rounded-full px-4 py-1.5 text-sm font-black mb-4">Parent Stories</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>Families Love<span className="text-yellow-500"> Sunshine Kids</span></h2>
        </motion.div>
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6">
            {visible.map((t, i) => (
              <motion.div key={`${current}-${i}`} initial={{ opacity: 0, x: i === 0 ? -30 : 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className={`${t.bg} rounded-3xl p-7 border-2 border-white shadow-lg relative`}>
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-4 shadow`}><Quote className="w-5 h-5 text-white" /></div>
                <p className="text-foreground font-semibold leading-relaxed mb-6 text-sm md:text-base">{`"`}{t.text}{`"`}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xl shadow`}>{t.avatar}</div>
                  <div><div className="font-black text-foreground text-sm">{t.name}</div><div className="text-xs text-muted-foreground font-semibold">{t.role}</div></div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white border-2 border-border shadow flex items-center justify-center hover:bg-orange-50 hover:border-orange-300 transition-all cursor-pointer"><ChevronLeft className="w-4 h-4" /></button>
            <div className="flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${i === current % testimonials.length ? "bg-orange-400 w-6" : "bg-border"}`} />)}</div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white border-2 border-border shadow flex items-center justify-center hover:bg-orange-50 hover:border-orange-300 transition-all cursor-pointer"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
