import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, BookOpen, Users, Smile, Music, Leaf } from "lucide-react";

const features = [
  { icon: Shield, title: "Safe & Secure", desc: "Fully fenced campus, CCTV, and trained safety staff ensure your child is always protected.", color: "from-blue-400 to-cyan-400", bg: "bg-blue-50", iconBg: "bg-blue-100", rotate: "-2deg" },
  { icon: BookOpen, title: "Play-Based Learning", desc: "Our curriculum blends structured learning with imaginative play to spark curiosity naturally.", color: "from-orange-400 to-yellow-400", bg: "bg-orange-50", iconBg: "bg-orange-100", rotate: "1deg" },
  { icon: Users, title: "Small Class Sizes", desc: "1:5 teacher-to-child ratio means every child receives the attention and care they deserve.", color: "from-pink-400 to-rose-400", bg: "bg-pink-50", iconBg: "bg-pink-100", rotate: "-1deg" },
  { icon: Smile, title: "Social Skills", desc: "Group activities, sharing circles, and team projects build empathy and communication.", color: "from-purple-400 to-violet-400", bg: "bg-purple-50", iconBg: "bg-purple-100", rotate: "2deg" },
  { icon: Music, title: "Arts & Music", desc: "Daily creative sessions including painting, singing, dancing, and storytelling.", color: "from-green-400 to-emerald-400", bg: "bg-green-50", iconBg: "bg-green-100", rotate: "-1.5deg" },
  { icon: Leaf, title: "Outdoor Play", desc: "A nature garden and adventure playground designed to develop motor skills and confidence.", color: "from-teal-400 to-cyan-400", bg: "bg-teal-50", iconBg: "bg-teal-100", rotate: "1.5deg" },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = feature.icon;
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ scale: 1.04, rotate: "0deg" }} style={{ rotate: feature.rotate }} className={`${feature.bg} rounded-3xl p-6 border-2 border-white dark:border-border shadow-lg cursor-default transition-shadow hover:shadow-xl`}>
      <div className={`w-12 h-12 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
        <div className={`w-7 h-7 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
          <Icon className="w-4 h-4 text-on-gradient" />
        </div>
      </div>
      <h3 className="text-lg font-black mb-2 text-foreground">{feature.title}</h3>
      <p className="text-sm text-muted-foreground font-semibold leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="features" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block badge-purple rounded-full px-4 py-1.5 text-sm font-black mb-4">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>Everything Your Child<span className="text-purple-500"> Needs to Grow</span></h2>
          <p className="text-muted-foreground font-semibold text-lg max-w-xl mx-auto">We combine warmth, structure, and creativity to give every child the best start in life.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  );
}
