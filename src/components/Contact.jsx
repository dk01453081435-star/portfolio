import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, Copy, Check, MessageSquare, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { email, phone, github, linkedin, location, hometown } = portfolioData.personal;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/30 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left max-w-2xl mb-14">
          <p className="text-primary-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 font-mono">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Talk &amp; Connect
          </h2>
          <div className="w-12 h-1 bg-primary-500 mt-3 rounded-full" />
          <p className="text-slate-400 text-base mt-4">
            Whether you have an internship opportunity, a project idea, or just want to chat about C++, web dev, or AI — my inbox is open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct contact info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 space-y-5">
              <h3 className="text-white font-bold text-lg">
                Direct Contact
              </h3>

              {/* Email item with copy button */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-500 flex items-center gap-1.5">
                    <Mail size={13} className="text-primary-400" />
                    Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-md border border-slate-800 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-white hover:text-primary-400 text-sm sm:text-base font-medium break-all block transition-colors"
                >
                  {email}
                </a>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="text-xs font-mono uppercase text-slate-500 flex items-center gap-1.5">
                  <Phone size={13} className="text-indigo-400" />
                  Phone
                </span>
                <a
                  href={`tel:${phone}`}
                  className="text-white hover:text-primary-400 text-sm sm:text-base font-medium block transition-colors"
                >
                  +91 {phone}
                </a>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="text-xs font-mono uppercase text-slate-500 flex items-center gap-1.5">
                  <MapPin size={13} className="text-cyan-400" />
                  Location
                </span>
                <p className="text-slate-300 text-sm font-medium">
                  {location} (College) &amp; {hometown} (Home)
                </p>
              </div>

              {/* Social links */}
              <div className="pt-2 border-t border-slate-800/70 flex items-center gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <Github size={16} />
                  GitHub Profile
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Friendly message form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 lg:p-9 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-white text-xl font-bold">Message Received!</h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Thanks for reaching out! I've received your note and will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-primary-400 hover:text-primary-300 font-semibold uppercase tracking-wider underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                      <MessageSquare size={18} className="text-primary-400" />
                      Send a Message
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Drop me a line directly through this form.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-slate-400 text-xs font-medium mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-primary-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors"
                        placeholder="Deepak / Recruiter"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-slate-400 text-xs font-medium mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-primary-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-slate-400 text-xs font-medium mb-1.5">
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-primary-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors"
                      placeholder="Internship / Collaboration / Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-400 text-xs font-medium mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-primary-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors resize-none"
                      placeholder="Hi Deepak, I saw your portfolio and wanted to reach out regarding..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 disabled:bg-slate-800 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-md shadow-primary-600/20 cursor-pointer disabled:cursor-not-allowed text-sm"
                  >
                    {isSubmitting ? 'Sending Message...' : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
