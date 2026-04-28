import { Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshot from "@/assets/headshot.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-background/40" />

      <div className="container grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="space-y-7 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary animate-glow-pulse" />
            Available for freelance work
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Building <span className="text-gradient">scalable</span> web apps
            with React & TypeScript
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I'm David Edoro — a full-stack web developer crafting fast, modern
            interfaces with React, TypeScript, and Tailwind CSS. From idea to
            production-ready product.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
            >
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 size-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <div className="relative animate-scale-in mx-auto">
          <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full animate-glow-pulse" />
          <div className="relative size-72 md:size-80 lg:size-96 rounded-3xl overflow-hidden border border-border shadow-elegant animate-float">
            <img
              src={headshot}
              alt="Alex Carter, web developer"
              width={768}
              height={768}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
