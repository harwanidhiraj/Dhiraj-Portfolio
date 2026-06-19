import { useState } from "react";
import SectionBlock from "./SectionBlock";
import { Mail, Copy, Check, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/constants";
import SocialLinks from "./common/SocialLinks";
import FloatingInput from "./common/FloatingInput";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(
      `https://wa.me/${PERSONAL_INFO.phone}?text=${encodedText}`,
      "_blank",
    );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const connectLinks = SOCIAL_LINKS.filter(
    (l) => l.label !== "Email" && l.label !== "WhatsApp",
  );

  return (
    <SectionBlock id="contact" title="Get in touch">
      <div className="grid md:grid-cols-2 gap-8 md:gap-20">
        <div className="space-y-8 md:space-y-10">
          <p className="text-foreground/80 leading-relaxed font-light text-lg">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to drop a message.
          </p>

          <div className="space-y-6">
            <div className="group flex items-center gap-4 p-4 border border-foreground/10 bg-white/50 hover:border-black transition-colors duration-300">
              <div className="p-3 bg-black text-white self-start">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">
                  Email
                </p>
                <p className="font-mono text-sm break-all">
                  {PERSONAL_INFO.email}
                </p>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 hover:bg-black/5 rounded-full transition-colors relative"
                title="Copy email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-foreground/40" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-4 p-4 border border-foreground/10 bg-white/50 hover:border-black transition-colors duration-300">
              <div className="p-3 bg-black text-white self-start">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">
                  Whatsapp
                </p>
                <p className="font-mono text-sm">+91 8849892389</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50 mb-4">
              Connect
            </p>
            <SocialLinks links={connectLinks} variant="minimal" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FloatingInput
            label="Your Name"
            value={form.name}
            onChange={(name) => setForm({ ...form, name })}
            required
          />
          <FloatingInput
            label="Email Address"
            type="email"
            value={form.email}
            onChange={(email) => setForm({ ...form, email })}
            required
          />
          <FloatingInput
            label="Message"
            value={form.message}
            onChange={(message) => setForm({ ...form, message })}
            multiline
            rows={5}
            required
          />

          <button
            type="submit"
            className="w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-mono uppercase tracking-widest overflow-hidden transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
          >
            <span className="relative z-10 font-bold">Send via WhatsApp</span>
            <MessageCircle className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </SectionBlock>
  );
};

export default ContactSection;
