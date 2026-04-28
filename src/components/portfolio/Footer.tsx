import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/crestline-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-center md:text-left">
          <span className="size-11 rounded-lg bg-white flex items-center justify-center overflow-hidden ring-1 ring-border shadow-sm shrink-0">
            <img
              src={logo}
              alt="Crestline Dev Solutions logo"
              className="w-full h-full object-contain p-1"
            />
          </span>
          <div>
            <p className="font-bold text-base leading-tight">
              <span className="text-foreground">Crestline</span>{" "}
              <span className="text-gradient">Dev Solutions</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} David Edoro. Crafted with React & Tailwind.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            { icon: Mail, href: "mailto:crestlinedevsolutions@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>

        <Button
          asChild
          className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
        >
          <a href="/resume.pdf" download="David-Edoro-Resume.pdf">
            <Download className="mr-2 size-4" /> Download Resume
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
