import { Clapperboard, Users, Megaphone, PenTool } from "lucide-react";

const services = [
  {
    icon: Clapperboard,
    title: "Atuação",
    description: "Interpretação para teatro, cinema, TV e publicidade com técnica e versatilidade.",
  },
/*  {
    icon: Users,
    title: "Figuração",
    description: "Participação como figurante e extra em produções audiovisuais de todos os portes.",
  },*/
  {
    icon: Megaphone,
    title: "Direção",
    description: "Direção cênica e artística para espetáculos teatrais e projetos audiovisuais.",
  },
  {
    icon: PenTool,
    title: "Roteiro",
    description: "Criação e adaptação de roteiros para teatro, curtas e projetos independentes.",
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          O que faço
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          Serviços
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col items-center text-center gap-4">
              <s.icon size={32} strokeWidth={1} className="text-foreground" />
              <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
