import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Ahmad,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.open(`mailto:suhebah029@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have an application idea, need AI integration, or want to discuss a project? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <Card className="flex items-start gap-4 p-6 bg-white border border-slate-200/90 shadow-sm">
              <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-primary shrink-0 shadow-2xs">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-bold text-textPrimary text-base mb-1">Email Me Directly</h4>
                <a
                  href="mailto:suhebah029@gmail.com"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  suhebah029@gmail.com
                </a>
                <p className="text-textSecondary text-xs mt-1">Prompt responses, usually within 24 hours.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 p-6 bg-white border border-slate-200/90 shadow-sm">
              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 text-secondary shrink-0 shadow-2xs">
                <MessageSquare size={22} />
              </div>
              <div>
                <h4 className="font-bold text-textPrimary text-base mb-1">Available For Opportunities</h4>
                <ul className="text-sm space-y-1.5 text-textSecondary font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Full-Stack Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Management & Inventory Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> AI Automation & Custom Chatbots
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Freelance, Contract & Full-Time
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-slate-200/90 shadow-sm">
              <h4 className="font-bold text-textPrimary text-base mb-4">Connect on Social Platforms</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-primary/40 hover:text-primary transition-all text-sm font-semibold text-slate-700 shadow-2xs"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-primary/40 hover:text-primary transition-all text-sm font-semibold text-slate-700 shadow-2xs"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 md:p-10 bg-white border border-slate-200/90 shadow-md">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600 shadow-sm">
                    <Send size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-2">Message Dispatched!</h3>
                  <p className="text-textSecondary text-sm max-w-sm mx-auto">
                    Thanks for reaching out! Your email client has been prepared, and I'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or required tech stack..."
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none shadow-2xs"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 mt-2 shadow-md shadow-primary/25"
                  >
                    <Send size={18} /> Send Message
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
