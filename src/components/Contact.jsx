import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { email, phone, github, linkedin } = portfolioData.personal;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all the fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Feel free to reach out for hackathons, collaboration opportunities, or questions.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-white text-xl font-bold mb-4">
              Let's Connect
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              I am open to internships, collaborating on open-source projects, and talking about AI/full-stack concepts.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block font-mono">EMAIL ME</span>
                  <span className="text-slate-200 text-sm sm:text-base font-semibold group-hover:text-white transition-colors break-all">
                    {email}
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block font-mono">CALL ME</span>
                  <span className="text-slate-200 text-sm sm:text-base font-semibold group-hover:text-white transition-colors">
                    +91 {phone}
                  </span>
                </div>
              </a>
            </div>

            {/* Social Connect links */}
            <div className="pt-6 border-t border-slate-800/80">
              <h4 className="text-slate-400 text-xs uppercase tracking-wider font-mono mb-4">
                Social Profiles
              </h4>
              <div className="flex gap-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form UI */}
          <div className="lg:col-span-7 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto">
                  Thank you for reaching out, Deepak will receive your message and respond as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs text-primary-400 hover:text-primary-300 font-bold tracking-wider uppercase underline transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-white text-lg font-bold flex items-center gap-2 mb-2">
                  <MessageSquare size={18} className="text-primary-400" />
                  Send a Message
                </h3>
                
                {error && (
                  <div className="p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-semibold">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-white rounded-xl px-4 py-3 text-sm transition-all outline-none resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 disabled:from-slate-800 disabled:to-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary-600/10 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
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
