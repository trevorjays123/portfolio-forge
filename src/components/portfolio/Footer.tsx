import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-gradient text-lg">&lt;Dev/&gt;</p>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} David Edoro. Crafted with React & Tailwind.
          </p>
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
