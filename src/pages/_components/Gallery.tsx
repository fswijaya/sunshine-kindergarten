import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";

const images = [
  { url: "https://images.unsplash.com/photo-1777056481869-feac70afe522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", alt: "Children in classroom", caption: "Learning Together", span: "col-span-2 row-span-2" },
  { url: "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400", alt: "Kids art crafts", caption: "Art & Creativity", span: "" },
  { url: "https://images.unsplash.com/photo-1560421683-6856ea585c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400", alt: "Painting activities", caption: "Painting Fun", span: "" },
  { url: "https://images.unsplash.com/photo-1780844824413-ccb03d294ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500", alt: "Colorful classroom", caption: "Colorful Spaces", span: "col-span-2" },
  { url: "https://images.unsplash.com/photo-1767589565213-1daee51888b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400", alt: "School playground", caption: "Outdoor Play", span: "" },
  { url: "https://images.unsplash.com/photo-1770096679916-2cd9c720d400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400", alt: "Drawing with teacher", caption: "One-on-One Learning", span: "" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block bg-pink-100 text-pink-600 rounded-full px-4 py-1.5 text-sm font-black mb-4">Our Gallery</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>A Peek Inside Our<span className="text-pink-500"> Happy Place</span></h2>
          <p className="text-muted-foreground font-semibold text-lg max-w-xl mx-auto">Moments of joy, curiosity, and friendship captured every day.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {images.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.07 }} className={`relative overflow-hidden rounded-3xl cursor-pointer shadow-md ${img.span}`} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
              <motion.img src={img.url} alt={img.alt} className="w-full h-full object-cover" animate={{ scale: hovered === i ? 1.08 : 1 }} transition={{ duration: 0.4 }} />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4" initial={{ opacity: 0 }} animate={{ opacity: hovered === i ? 1 : 0 }} transition={{ duration: 0.3 }}>
                <span className="text-white font-black text-sm">{img.caption}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
