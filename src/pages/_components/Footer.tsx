import { Sun, Heart } from "lucide-react";

const footerLinks = {
  Programs: ["Morning Explorers", "Rainbow Learners", "Rocket Readies", "After-Care"],
  Learn: ["Our Approach", "Curriculum", "Teachers", "Safety"],
  Connect: ["Contact Us", "Schedule a Tour", "Parent Portal", "Newsletter"],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow"><Sun className="w-5 h-5 text-white" /></div>
              <span className="text-xl font-black text-on-gradient" style={{ fontFamily: "'Fredoka One', cursive" }}>Sunshine <span className="text-brand-yellow">Kids</span></span>
            </div>
            <p className="text-sm text-footer-muted font-semibold leading-relaxed mb-5">A nurturing kindergarten where every child's potential is discovered, celebrated, and developed.</p>
            <div className="flex gap-3">{["📘", "📸", "▶️"].map((icon, i) => <div key={i} className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-base hover:bg-white/20 transition-colors cursor-pointer">{icon}</div>)}</div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-black text-on-gradient mb-4 text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">{links.map((link) => <li key={link}><a href="#" className="text-sm text-footer-link font-semibold hover:text-footer-link-hover transition-colors cursor-pointer">{link}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-footer-subtle font-semibold">© {new Date().getFullYear()} Sunshine Kids Kindergarten. All rights reserved.</p>
          <p className="text-sm text-footer-subtle font-semibold flex items-center gap-1.5">Made with <Heart className="w-3.5 h-3.5 text-pink-400 dark:text-pink-300 fill-pink-400 dark:fill-pink-300" /> for little ones everywhere</p>
        </div>
      </div>
    </footer>
  );
}
