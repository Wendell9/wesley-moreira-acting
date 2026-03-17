import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const mailtoLink = `mailto:wesleyguindani@gmail.com?subject=Contato de ${encodeURIComponent(name)}&body=${encodeURIComponent(`De: ${name} (${email})\n\n${message}`)}`;
    window.open(mailtoLink, "_blank");
    setSent(true);
    form.reset();
  };

  return (
    <section id="contato" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          Vamos conversar
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          Contato
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <MapPin size={20} strokeWidth={1} className="text-foreground mt-1 shrink-0" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">Localização</p>
                <p className="font-body text-sm text-muted-foreground">São Paulo, SP — Brasil</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} strokeWidth={1} className="text-foreground mt-1 shrink-0" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">Telefone</p>
                <p className="font-body text-sm text-muted-foreground">(11) 96920-0784</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={20} strokeWidth={1} className="text-foreground mt-1 shrink-0" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">Email</p>
                <p className="font-body text-sm text-muted-foreground">wesleyguindani@gmail.com</p>
              </div>
            </div>

            <div className="mt-4">
              <iframe
                title="Localização São Paulo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488418!2d-46.87529!3d-23.6821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                className="w-full h-64 border-0 grayscale"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={1000}
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground"
                placeholder="Conte sobre seu projeto..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase px-10 py-4 hover:opacity-80 transition-opacity w-fit"
            >
              Enviar mensagem
            </button>
            {sent && (
              <p className="font-body text-sm text-muted-foreground">
                Obrigado! Sua mensagem foi preparada para envio.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
