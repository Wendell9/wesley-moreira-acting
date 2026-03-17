import heroImg from "@/assets/hero.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex flex-col gap-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Ator · Diretor · Escritor
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-foreground">
            Wesley<br />Moreira<br />Guindani
          </h1>
          <p className="font-body text-base text-muted-foreground max-w-md leading-relaxed">
            Formado em Artes Cênicas pela ECA-USP. Atuando em São Paulo com paixão pelo teatro, cinema e narrativas que transformam.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase px-10 py-4 hover:opacity-80 transition-opacity w-fit"
          >
            [AÇÃO]
          </a>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={heroImg}
            alt="Wesley Moreira Guindani — Ator em São Paulo"
            className="w-full aspect-[3/4] object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
