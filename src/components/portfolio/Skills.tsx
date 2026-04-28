const skills = [
  {
    name: "React",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-12">
        <circle cx="12" cy="12" r="2.05" />
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-12">
        <path d="M3 3h18v18H3V3zm9.5 9.5v1.6h2.4v6.4h1.9v-6.4h2.4v-1.6h-6.7zm-5.7 6.4c.6.5 1.6.9 2.7.9 1.7 0 2.9-.9 2.9-2.4 0-1.3-.7-2-2.3-2.6-1.1-.4-1.5-.7-1.5-1.2 0-.4.4-.7 1.1-.7.7 0 1.3.3 1.6.5l.5-1.4c-.5-.3-1.2-.5-2-.5-1.7 0-2.8.9-2.8 2.2 0 1.2.8 1.9 2.3 2.4 1 .4 1.4.7 1.4 1.2 0 .5-.4.8-1.2.8s-1.6-.3-2.1-.6l-.6 1.4z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-12">
        <path d="M3 3h18v18H3V3zm9.4 14c0 1.4-.8 2-2 2-.9 0-1.5-.5-1.7-1l1.1-.7c.2.3.3.6.7.6.4 0 .6-.1.6-.7v-4.4h1.3v4.2zm3.7 2c-1.3 0-2.1-.6-2.5-1.4l1.1-.6c.3.5.7.9 1.4.9.6 0 1-.3 1-.7 0-.5-.4-.7-1.1-1l-.4-.2c-1.1-.5-1.8-1-1.8-2.2 0-1.1.8-1.9 2.1-1.9.9 0 1.6.3 2 1.1l-1.1.7c-.2-.4-.5-.6-1-.6s-.8.3-.8.6c0 .4.3.6 1 .9l.4.2c1.3.5 2 1.1 2 2.3 0 1.3-1 2-2.3 2z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-12">
        <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 2 1.4 1 1 2.2 2.1 4.5 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-2-1.4-1-1-2.2-2.1-4.5-2.1zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 2 1.4 1 1 2.2 2.1 4.5 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-2-1.4-1-1-2.2-2.1-4.5-2.1z" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    color: "#E34F26",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-12">
        <path d="M3 2l1.7 19L12 23l7.3-2L21 2H3zm14.5 6H8.4l.2 2.4h8.7l-.6 6.8L12 18.6l-4.7-1.4-.3-3.6h2.3l.2 1.8 2.5.7 2.5-.7.3-3H7l-.6-6.5h11.3L17.5 8z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    color: "#1572B6",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-12">
        <path d="M3 2l1.7 19L12 23l7.3-2L21 2H3zm13.7 6.5l-.2 2-.1.6H8l.2 2.1h8l-.6 6.4-3.6 1-3.6-1-.2-2.7h2l.1 1.4 1.7.4 1.7-.5.2-2H7.7l-.6-5.4h9.7l.1-1.5H6.7l-.2-2.4h11l-.1 1.6z" />
      </svg>
    ),
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tools I use to <span className="text-gradient">ship</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            A modern, type-safe stack focused on performance, accessibility, and
            beautiful UI.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl p-6 bg-gradient-card border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={
                {
                  animationDelay: `${i * 80}ms`,
                  // Per-skill brand color for hover glow
                  ["--skill-color" as never]: skill.color,
                } as React.CSSProperties
              }
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${skill.color}33, transparent 70%)`,
                  boxShadow: `0 0 40px ${skill.color}40`,
                }}
              />
              <div className="relative flex flex-col items-center text-center gap-3">
                <div
                  className="text-muted-foreground transition-colors duration-300 group-hover:[color:var(--skill-color)]"
                >
                  {skill.svg}
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
