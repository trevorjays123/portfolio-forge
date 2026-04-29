import { useMemo, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import pRestaurant from "@/assets/project-restaurant.jpg";
import pPerfumes from "@/assets/project-perfumes.jpg";
import pNaija from "@/assets/project-naijafood.jpg";
import pLuxe from "@/assets/project-luxedrive.jpg";

const projects = [
  {
    title: "Restaurant E-Commerce",
    description:
      "Three cuisines, one kitchen — a full restaurant ordering platform with menu browsing, cart, and checkout for Nigerian, Continental, and Fast Food.",
    image: pRestaurant,
    stack: ["React", "TypeScript", "Tailwind", "Vercel"],
    live: "https://restaurant-ecommerce-client.vercel.app/",
    source: "https://restaurant-ecommerce-client.vercel.app/",
  },
  {
    title: "NEESCENT Perfumes",
    description:
      "Luxury fragrance storefront with curated collections, cart, and Paystack checkout — delivered nationwide across Nigeria.",
    image: pPerfumes,
    stack: ["React", "TypeScript", "Tailwind", "Paystack"],
    live: "https://neescent-perfumes.vercel.app/",
    source: "https://neescent-perfumes.vercel.app/",
  },
  {
    title: "Naija Food Hub",
    description:
      "Lagos-based food delivery site featuring authentic Nigerian, Continental, and Fast Food menus with category filtering and a polished UI.",
    image: pNaija,
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    live: "https://naija-food-hub.vercel.app/",
    source: "https://naija-food-hub.vercel.app/",
  },
  {
    title: "Luxe Drive — WHYTE Logistics",
    description:
      "Editorial chauffeur & luxury car rental site with a curated fleet, multi-city coverage, and a refined booking experience.",
    image: pLuxe,
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    live: "https://luxe-drive-two.vercel.app/",
    source: "https://luxe-drive-two.vercel.app/",
  },
];

const allStacks = Array.from(new Set(projects.flatMap((p) => p.stack)));

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter
        ? projects.filter((p) => p.stack.includes(activeFilter))
        : projects,
    [activeFilter]
  );

  const toggle = (tech: string) =>
    setActiveFilter((prev) => (prev === tech ? null : tech));

  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Recent <span className="text-gradient">projects</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            A few things I've designed and built recently. Tap a tech badge to filter.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveFilter(null)}
            className={cn(
              "text-xs px-3 py-1.5 rounded-full border transition-all",
              activeFilter === null
                ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                : "bg-secondary text-secondary-foreground border-border hover:border-primary/50"
            )}
          >
            All ({projects.length})
          </button>
          {allStacks.map((tech) => {
            const count = projects.filter((p) => p.stack.includes(tech)).length;
            const active = activeFilter === tech;
            return (
              <button
                key={tech}
                type="button"
                onClick={() => toggle(tech)}
                aria-pressed={active}
                className={cn(
                  "text-xs px-3 py-1.5 rounded-full border transition-all inline-flex items-center gap-1.5",
                  active
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "bg-secondary text-secondary-foreground border-border hover:border-primary/50"
                )}
              >
                {tech}
                <span className="opacity-70">({count})</span>
                {active && <X className="size-3" />}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className="group rounded-2xl overflow-hidden border border-border bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => {
                    const active = activeFilter === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggle(s)}
                        aria-pressed={active}
                        className={cn(
                          "text-xs px-2.5 py-1 rounded-full border transition-all cursor-pointer",
                          active
                            ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                            : "bg-secondary text-secondary-foreground border-border hover:border-primary hover:text-primary"
                        )}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-primary text-primary-foreground hover:opacity-90 flex-1"
                  >
                    <a href={p.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 size-4" /> View Live
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 size-4" /> Source
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
