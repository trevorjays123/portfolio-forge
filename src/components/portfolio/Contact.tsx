import { useState } from "react";
import { z } from "zod";
import { Mail, Send, Briefcase, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-50" />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient">build</span> something
          </h2>
          <p className="text-muted-foreground mt-4">
            Have a project in mind or want to collaborate? Drop me a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 max-w-5xl mx-auto">
          {/* Hire CTA */}
          <div className="rounded-2xl p-8 bg-gradient-card border border-border shadow-card flex flex-col justify-between animate-fade-in-up">
            <div className="space-y-4">
              <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Briefcase className="size-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Hire me on Fiverr</h3>
              <p className="text-muted-foreground">
                Need a fast turnaround? Book one of my Fiverr packages for
                landing pages, dashboards, or full React apps.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 pt-2">
                <li>✦ Production-ready React & TypeScript</li>
                <li>✦ Pixel-perfect, responsive UI</li>
                <li>✦ Fast delivery, clean handoff</li>
              </ul>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow mt-6"
            >
              <a
                href="https://fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me on Fiverr <Briefcase className="ml-2 size-4" />
              </a>
            </Button>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl p-8 bg-gradient-card border border-border shadow-card space-y-5 animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                maxLength={1000}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              {loading ? "Sending..." : (<>Send Message <Send className="ml-2 size-4" /></>)}
            </Button>
            <div className="pt-2 border-t border-border/60 grid sm:grid-cols-3 gap-3 text-xs">
              <a
                href="mailto:crestlinedevsolutions@gmail.com"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="size-3.5" /> Email
              </a>
              <a
                href="https://wa.me/2348058174134"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="size-3.5" /> WhatsApp
              </a>
              <a
                href="tel:+2348058174134"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="size-3.5" /> Call
              </a>
            </div>
            <p className="text-[11px] text-muted-foreground text-center">
              crestlinedevsolutions@gmail.com · +234 805 817 4134
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
