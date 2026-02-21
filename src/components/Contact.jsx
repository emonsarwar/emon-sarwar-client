import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  const submit = async (e) => {
  e.preventDefault();
  setLoading(true);
  console.log("Submitting form:", form);  
  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    console.log("Response status:", res);
    console.log("Response status:", res.status);
    
    if (res.ok) {
      setStatus("SUCCESS");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("ERROR");
    }
  } catch (err) {
    setStatus("ERROR");
  } finally {
    setLoading(false);
    setTimeout(() => setStatus(""), 4000);
  }
};

  const inputStyles = "w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all duration-300";

  return (
    <section id="contact" className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sky-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 italic underline decoration-sky-500/30 underline-offset-8">Get In Touch</h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                Let's Build <br /> 
                <span className="text-slate-700 italic">Something Great.</span>
              </h3>
            </div>

            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas or original architectural solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sky-500 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all duration-300">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Email Me</p>
                  <p className="text-white font-medium">emonsarwar111@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sky-500 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all duration-300">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Location</p>
                  <p className="text-white font-medium">Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
                {[<FaGithub />, <FaLinkedin />].map((icon, i) => (
                    <motion.a 
                      key={i} 
                      href="#" 
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-400/50 transition-all"
                    >
                        {icon}
                    </motion.a>
                ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form 
              onSubmit={submit}
              className="relative z-10 p-8 md:p-12 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-2 tracking-widest">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className={inputStyles}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-2 tracking-widest">Your Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-2 tracking-widest">Message</label>
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="How can I help you?"
                  required
                  className={`${inputStyles} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-sky-500 text-slate-950 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20 disabled:opacity-50"
              >
                {loading ? (
                    <div className="w-6 h-6 border-4 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                ) : (
                    <>
                        Send Message
                        <FaPaperPlane size={14} />
                    </>
                )}
              </motion.button>

              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`text-center font-bold text-sm ${status === "SUCCESS" ? "text-emerald-400" : "text-rose-500"}`}
                  >
                    {status === "SUCCESS" ? "✓ Message delivered successfully!" : "× Something went wrong. Try again."}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Decorative background glow behind the form */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-blue-500/10 blur-2xl rounded-[3rem] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}