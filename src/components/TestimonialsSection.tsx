import t1 from "@/assets/testimonial1.jpg";
import t2 from "@/assets/testimonial2.jpg";
import t3 from "@/assets/testimonial3.jpg";

const testimonials = [
  {
    image: t1,
    quote: "Wesley trouxe uma intensidade e verdade ao personagem que surpreendeu a todos. Um ator com entrega total.",
    name: "Fernanda Camargo",
    role: "Diretora — Elle: Ser Quem Você É",
  },
  {
    image: t2,
    quote: "Sua presença em cena é magnética. Wesley domina o palco com técnica e sensibilidade raras para sua idade.",
    name: "Cibele Forjaz",
    role: "Orientadora — ECA-USP",
  },
  {
    image: t3,
    quote: "Trabalhar com Wesley é uma experiência colaborativa rica. Ele traz inteligência cênica e generosidade ao elenco.",
    name: "Antonio Araújo",
    role: "Diretor — O Tartufo",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="trabalhos" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          Depoimentos
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          O que dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col gap-6">
              <img
                src={t.image}
                alt={`Cena de ${t.role}`}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              <p className="font-display text-lg italic text-foreground leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
