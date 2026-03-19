import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 md:p-10 lg:p-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,102,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_20%)]" />

        <div className="relative mb-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="section-kicker mb-4">Contact</p>
            <h2 className="max-w-3xl text-3xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
              If the project needs stronger motion, cleaner editing, or a more
              polished digital presence, let's build it.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            This section now feels more like a closing scene instead of a plain
            form block, while still staying simple enough to use on mobile.
          </p>
        </div>

        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel rounded-[1.75rem] p-10 text-center"
          >
            <p className="text-2xl font-display font-semibold text-foreground">
              Message sent.
            </p>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Thanks for reaching out. I will get back to you soon.
            </p>
            <Button onClick={() => setStatus("idle")} variant="link" className="mt-4">
              Send another message
            </Button>
          </motion.div>
        ) : (
          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.06 }}
              onSubmit={handleSubmit}
              className="glass-panel rounded-[1.75rem] p-6 md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Name
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                    maxLength={100}
                    className="border-white/10 bg-black/20 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    maxLength={255}
                    className="border-white/10 bg-black/20 focus-visible:ring-ring"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Message
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the project, the timeline, and what you want people to feel when they land on it."
                  required
                  maxLength={1000}
                  className="min-h-36 border-white/10 bg-black/20 focus-visible:ring-ring"
                />
              </div>

              <Button type="submit" disabled={status === "sending"} className="accent-glow mt-6">
                {status === "sending" ? "Sending..." : "Send message"}
                <ArrowRight />
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.72, delay: 0.12 }}
              className="grid gap-5"
            >
              <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-primary/85">
                  Prefer email
                </p>
                <a
                  className="mt-4 block text-lg font-display text-foreground transition-colors hover:text-primary md:text-2xl"
                  href="mailto:rahatbinshaheed@gmail.com"
                >
                  rahatbinshaheed@gmail.com
                </a>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Based in Dhaka, Bangladesh. Available for freelance work,
                  content collaborations, and creative direction.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                  Social
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href="https://www.linkedin.com/in/rahat-bin-shaheed-56b858388/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base text-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/Rahatbinshaheed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base text-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
