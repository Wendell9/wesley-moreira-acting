import aboutImg from "@/assets/about.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <img
          src={aboutImg}
          alt="Wesley Guindani em cena — Sonho de Uma Noite de Verão"
          className="w-full aspect-[4/5] object-cover grayscale"
          loading="lazy"
        />
        <div className="flex flex-col gap-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Sobre mim
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Wesley Moreira Guindani
          </h2>
          <div className="flex flex-col gap-4 font-body text-sm text-muted-foreground leading-relaxed">
            <p>
              Natural do Grande ABC e radicado em São Paulo, sou formado em Artes Cênicas pelo CAC — ECA-USP (2021–2024). Minha trajetória começa no teatro musical, onde interpretei personagens como Emmet Forrest em <em>Elle: Ser Quem Você É</em> e Ren McCormack em <em>Footloose</em>.
            </p>
            <p>
              Na universidade, aprofundei meu trabalho em montagens como <em>Sonho de Uma Noite de Verão</em> (Rei Oberon), <em>Em Busca de Justiça</em>, <em>Querela</em> e <em>O Tartufo</em>, sob orientação de mestres como Cibele Forjaz e Antonio Araújo.
            </p>
            <p>
              Busco projetos que desafiem e expandam os limites da narrativa — no palco, na tela ou no papel.
            </p>
          </div>
          <div className="flex gap-8 mt-2 font-body text-xs tracking-widest uppercase text-foreground">
            <div>
              <span className="font-display text-2xl font-bold block">1,82m</span>
              Altura
            </div>
            <div>
              <span className="font-display text-2xl font-bold block">DRT</span>
              0058360/SP
            </div>
            <div>
              <span className="font-display text-2xl font-bold block">ECA</span>
              USP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
