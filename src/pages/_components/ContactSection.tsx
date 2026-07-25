import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 rounded-full px-4 py-1.5 text-sm font-black mb-4">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>Start Your Child&apos;s<span className="text-teal-500"> Journey Today</span></h2>
          <p className="text-muted-foreground font-semibold text-lg max-w-xl mx-auto">We'd love to meet you and your little one! Reach out to schedule a free visit.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-6">
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>Come Visit Us!</h3>
              <p className="text-white/80 font-semibold mb-6 text-sm">We offer free guided tours every weekday morning. Bring your child along!</p>
              <div className="space-y-4">
                {[{ icon: MapPin, label: "123 Sunshine Avenue, Maplewood, CA 90210" }, { icon: Phone, label: "(555) 123-4567" }, { icon: Mail, label: "hello@sunshinekids.edu" }].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-3"><div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5"><Icon className="w-4 h-4 text-white" /></div><span className="text-sm font-semibold text-white/90">{label}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-purple-50 rounded-3xl p-6 border-2 border-purple-100">
              <h4 className="font-black text-foreground mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm font-semibold text-muted-foreground">
                <div className="flex justify-between"><span>Monday – Friday</span><span className="text-foreground font-black">7:30 AM – 5:30 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-foreground font-black">9:00 AM – 12:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border-2 border-blue-100 shadow-lg">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-green-500" /></div>
                <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>Message Sent!</h3>
                <p className="text-muted-foreground font-semibold">We'll get back to you within 24 hours to schedule your visit!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-black mb-5" style={{ fontFamily: "'Fredoka One', cursive" }}>Request a Free Tour</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-black mb-1.5">Parent Name</label><Input placeholder="Sarah Johnson" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="rounded-xl bg-white border-blue-200 font-semibold" /></div>
                  <div><label className="block text-sm font-black mb-1.5">Email</label><Input type="email" placeholder="sarah@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="rounded-xl bg-white border-blue-200 font-semibold" /></div>
                </div>
                <div><label className="block text-sm font-black mb-1.5">Phone Number</label><Input placeholder="(555) 000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-xl bg-white border-blue-200 font-semibold" /></div>
                <div><label className="block text-sm font-black mb-1.5">Message</label><textarea rows={4} placeholder="Tell us about your child and what you're looking for..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border-2 border-blue-200 bg-white px-3 py-2 text-sm font-semibold resize-none focus:outline-none focus:ring-2 focus:ring-teal-400" /></div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white font-black rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all"><Send className="w-4 h-4 mr-2" />Send Message</Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
