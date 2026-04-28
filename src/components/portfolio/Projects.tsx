import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    source: "https://github.com/trevorjays123",
  },
  {
    title: "NEESCENT Perfumes",
    description:
      "Luxury fragrance storefront with curated collections, cart, and Paystack checkout — delivered nationwide across Nigeria.",
    image: pPerfumes,
    stack: ["React", "TypeScript", "Tailwind", "Paystack"],
    live: "https://trevorjays123.github.io/NEESCENT-PERFUMES/",
    source: "https://github.com/trevorjays123/NEESCENT-PERFUMES",
  },
  {
    title: "Naija Food Hub",
    description:
      "Lagos-based food delivery site featuring authentic Nigerian, Continental, and Fast Food menus with category filtering and a polished UI.",
    image: pNaija,
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    live: "https://trevorjays123.github.io/naija-food-hub/",
    source: "https://github.com/trevorjays123/naija-food-hub",
  },
  {
    title: "Luxe Drive — WHYTE Logistics",
    description:
      "Editorial chauffeur & luxury car rental site with a curated fleet, multi-city coverage, and a refined booking experience.",
    image: pLuxe,
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    live: "https://trevorjays123.github.io/luxe-drive/",
    source: "https://github.com/trevorjays123/luxe-drive",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Recent <span className="text-gradient">projects</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            A few things I've designed and built recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
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
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {s}
                    </span>
                  ))}
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
      </div>
    </section>
  );
};

export default Projects;
