import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Clock } from "lucide-react";

const programs = [
  { emoji: "🌅", title: "Morning Explorers", age: "Ages 2–3", time: "8:00 – 11:00 AM", desc: "Gentle introduction to school life with sensory play, storytime, music, and free exploration.", highlights: ["Sensory Play", "Storytime", "Music & Movement", "Snack Time"], gradient: "from-yellow-400 via-orange-400 to-pink-400", cardBg: "bg-gradient-to-br from-yellow-50 to-orange-50", border: "border-orange-200", badge: "bg-orange-100 text-orange-600" },
  { emoji: "🌈", title: "Rainbow Learners", age: "Ages 3–4", time: "8:00 AM – 1:00 PM", desc: "A rich blend of literacy, numeracy, art, and science through hands-on projects and group learning.", highlights: ["Phonics & Numbers", "Science Projects", "Art & Craft", "Outdoor Play"], gradient: "from-purple-400 via-pink-400 to-rose-400", cardBg: "bg-gradient-to-br from-purple-50 to-pink-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-600", featured: true },
  { emoji: "🚀", title: "Rocket Readies", age: "Ages 4–5", time: "8:00 AM – 3:00 PM", desc: "Full-day school readiness program focusing on reading, writing, social-emotional skills, and independence.", highlights: ["Reading & Writing", "Math Concepts", "Social Skills", "After-Care Option"], gradient: "from-blue-400 via-teal-400 to-green-400", cardBg: "bg-gradient-to-br from-blue-50 to-teal-50", border: "border-blue-200", badge: "bg-blue-100 text-blue-600" },
];

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="programs" className="py-24 px-4 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-600 rounded-full px-4 py-1.5 text-sm font-black mb-4">Our Programs</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>Programs for Every<span className="text-green-500"> Little Learner</span></h2>
          <p className="text-muted-foreground font-semibold text-lg max-w-xl mx-auto">Thoughtfully designed programs to match your child&apos;s age and developmental stage.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {programs.map((program, i) => (
            <motion.div key={program.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6 }} className={`relative rounded-3xl border-2 ${program.border} ${program.cardBg} overflow-hidden shadow-lg hover:shadow-2xl transition-all ${program.featured ? "md:-mt-4 md:scale-105" : ""}`}>
              {program.featured && <div className={`absolute top-4 right-4 bg-gradient-to-r ${program.gradient} text-white text-xs font-black rounded-full px-3 py-1 shadow`}>Most Popular</div>}
              <div className={`h-2 w-full bg-gradient-to-r ${program.gradient}`} />
              <div className="p-6">
                <div className="text-5xl mb-4">{program.emoji}</div>
                <span className={`${program.badge} text-xs font-black rounded-full px-3 py-1`}>{program.age}</span>
                <h3 className="text-2xl font-black mt-3 mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>{program.title}</h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-semibold mb-3"><Clock className="w-3.5 h-3.5" />{program.time}</div>
                <p className="text-sm text-muted-foreground font-semibold mb-5 leading-relaxed">{program.desc}</p>
                <ul className="space-y-2">{program.highlights.map((h) => <li key={h} className="flex items-center gap-2 text-sm font-bold"><span className={`w-5 h-5 rounded-full bg-gradient-to-br ${program.gradient} flex items-center justify-center text-white text-xs`}>✓</span>{h}</li>)}</ul>
                <button className={`mt-6 w-full py-3 rounded-2xl bg-gradient-to-r ${program.gradient} text-white font-black shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-100 transition-all cursor-pointer`} onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
