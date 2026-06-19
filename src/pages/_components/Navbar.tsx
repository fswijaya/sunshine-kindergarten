import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const links = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-lg px-6 py-3 flex items-center justify-between border border-orange-100">
        <a href="#home" className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-md">
            <Sun className="w-5 h-5 text-white" />
          </div>
          <span
            className="text-xl font-black text-orange-500 leading-none"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Sunshine
            <span className="text-purple-500"> Kids</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-xl text-sm font-bold text-foreground/70 hover:text-orange-500 hover:bg-orange-50 transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          className="hidden md:flex bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
          onClick={() => {
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Enroll Now!
        </Button>

        <button
          className="md:hidden p-2 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden"
          >
            <nav className="flex flex-col p-3 gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 rounded-xl font-bold text-foreground/70 hover:text-orange-500 hover:bg-orange-50 transition-all cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold rounded-xl">
                Enroll Now!
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
