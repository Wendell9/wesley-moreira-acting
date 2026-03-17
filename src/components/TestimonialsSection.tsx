import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import t1 from "@/assets/testimonial1.jpg";
import t2 from "@/assets/work-footloose.jpg";
import t3 from "@/assets/work-sonho.jpg";
import t4 from "@/assets/testimonial2.jpg";
import t5 from "@/assets/work-querela.jpg";
import t6 from "@/assets/testimonial3.jpg";

const works = [
  {
    image: t1,
    title: "Elle: Ser Quem Você É",
    year: "2018",
    role: "Emmet Forrest",
    group: "Arteatro · Dir. Fernanda Camargo",
  },
  {
    image: t2,
    title: "Footloose",
    year: "2019",
    role: "Ren McCormack",
    group: "Arteatro · Dir. Fernanda Camargo",
  },
  {
    image: t3,
    title: "Sonho de Uma Noite de Verão",
    year: "2022",
    role: "Rei Oberon",
    group: "Spark Produções · Dir. Greg Olegário",
  },
  {
    image: t4,
    title: "Em Busca de Justiça",
    year: "2022",
    role: "Promotor",
    group: "ECA-USP · Orient. Cibele Forjaz",
  },
  {
    image: t5,
    title: "Querela",
    year: "2022",
    role: "Gavião Pai",
    group: "ECA-USP · Orient. Cibele Forjaz",
  },
  {
    image: t6,
    title: "O Tartufo",
    year: "2023",
    role: "Molière",
    group: "ECA-USP · Dir. Antonio Araújo",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(updateScrollState, 400);
  };

  return (
    <section id="trabalhos" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          Trabalhos
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          O que dizem
        </h2>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur p-2 border border-border hover:bg-background transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur p-2 border border-border hover:bg-background transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {works.map((w) => (
              <div
                key={w.title}
                className="flex-shrink-0 w-72 snap-start flex flex-col gap-4"
              >
                <img
                  src={w.image}
                  alt={`${w.title} — ${w.role}`}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-body text-xs text-muted-foreground">{w.year}</p>
                  <h3 className="font-display text-lg font-semibold text-foreground">{w.title}</h3>
                  <p className="font-body text-sm text-foreground">Personagem: {w.role}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{w.group}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
