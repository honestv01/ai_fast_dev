import React, { useState } from 'react';
import { Mail, Github, Send, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import DiscordIcon from './DiscordIcon';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
}

interface ContactApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  budget: '',
};

const budgetOptions = [
  'Under $2K',
  '$2K - $8K',
  '$8K - $20K',
  '$20K+',
  'Not sure yet',
];

const discordUrl = 'https://discord.com/users/@eternal026694';

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setApiError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          budget: form.budget,
          message: form.message.trim(),
        }),
      });
      const data = (await response.json().catch(() => null)) as ContactApiResponse | null;

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || 'Failed to send message');
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again later.';
      console.error('Contact form error:', err);
      setApiError(message);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (apiError) setApiError(null);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-400/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left - Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-cyan-300/50" />
              <span className="text-cyan-300 text-sm font-medium uppercase tracking-widest">Get In Touch</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Let's build something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300"> extraordinary</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Whether you have a fully formed idea or just a spark of inspiration, I'd love to hear about it. 
              Let's explore how AI-powered development can bring your vision to life.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href="mailto:codesmith95316@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-300/20 hover:bg-cyan-300/[0.02] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-300/10 flex items-center justify-center group-hover:bg-cyan-300/20 transition-colors">
                  <Mail size={18} className="text-cyan-300" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Email</div>
                  <div className="text-slate-400 text-sm">codesmith95316@gmail.com</div>
                </div>
              </a>

              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-300/30 hover:bg-indigo-300/[0.03] transition-all"
                aria-label="Open Discord profile for eternal026694"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-300/10 flex items-center justify-center">
                  <DiscordIcon size={18} className="text-indigo-300" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Discord</div>
                  <div className="text-slate-400 text-sm">eternal026694</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-sky-300/10 flex items-center justify-center">
                  <MapPin size={18} className="text-sky-300" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Location</div>
                  <div className="text-slate-400 text-sm">Remote — Available Worldwide</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-green-400/10 flex items-center justify-center">
                  <Clock size={18} className="text-green-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Response Time</div>
                  <div className="text-slate-400 text-sm">Usually within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://github.com/honest0" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm">
                <Github size={16} /> GitHub
              </a>
              <a href={discordUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm"
                aria-label="Open Discord profile for eternal026694">
                <DiscordIcon size={16} /> Discord
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-12 rounded-2xl bg-white/[0.02] border border-green-400/20">
                <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-slate-400 text-lg mb-6">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setApiError(null); }}
                  className="text-cyan-300 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* API Error Banner */}
                {apiError && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-400/10 border border-red-400/20">
                    <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-400 text-sm font-medium">Unable to send message</p>
                      <p className="text-red-400/70 text-sm mt-0.5">{apiError}</p>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Your Name</label>
                    <input type="text" value={form.name} onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none transition-all ${
                        errors.name ? 'border-red-400/50 focus:border-red-400' : 'border-white/10 focus:border-cyan-300/30 focus:ring-1 focus:ring-cyan-300/20'
                      }`} />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none transition-all ${
                        errors.email ? 'border-red-400/50 focus:border-red-400' : 'border-white/10 focus:border-cyan-300/30 focus:ring-1 focus:ring-cyan-300/20'
                      }`} />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Subject</label>
                  <input type="text" value={form.subject} onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-300/30 focus:ring-1 focus:ring-cyan-300/20 transition-all" />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Estimated Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((opt) => (
                      <button key={opt} type="button"
                        onClick={() => handleChange('budget', form.budget === opt ? '' : opt)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          form.budget === opt
                            ? 'bg-cyan-300/15 text-cyan-300 border border-cyan-300/30'
                            : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-white hover:bg-white/5'
                        }`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Your Message</label>
                  <textarea value={form.message} onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell me about your project, your goals, and how I can help..."
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none resize-none transition-all ${
                      errors.message ? 'border-red-400/50 focus:border-red-400' : 'border-white/10 focus:border-cyan-300/30 focus:ring-1 focus:ring-cyan-300/20'
                    }`} />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                <button type="submit" disabled={sending}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 shimmer-border bg-gradient-to-r from-cyan-300 to-emerald-300 text-[#070707] font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  {sending ? (
                    <><div className="w-4 h-4 border-2 border-[#070707]/30 border-t-[#070707] rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




