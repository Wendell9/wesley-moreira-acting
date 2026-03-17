import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg font-semibold text-foreground">Wesley Guindani</p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1} />
          </a>
          <a
            href="mailto:wesleyguindani@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors font-body text-xs tracking-widest uppercase"
          >
            Email
          </a>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Wesley Moreira Guindani. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
