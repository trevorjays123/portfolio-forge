import { useEffect, useState } from "react";
import logo from "@/assets/crestline-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="size-9 rounded-lg bg-white flex items-center justify-center overflow-hidden ring-1 ring-border shadow-sm">
            <img
              src={logo}
              alt="Crestline Dev Solutions logo"
              className="w-full h-full object-contain p-1"
            />
          </span>
          <span className="hidden sm:inline text-sm leading-tight">
            <span className="text-foreground">Crestline</span>{" "}
            <span className="text-gradient">Dev Solutions</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
