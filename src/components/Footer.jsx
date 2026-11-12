import { clinica, contato, menu, profissional } from "../config/site.js";

export default function Footer() {
    const link =
        "w-fit text-sm text-fundo/90 transition-colors hover:text-amarelo focus-visible:outline-none focus-visible:text-amarelo";

    return (
        <footer className="bg-destaque-escuro px-6 py-16 text-fundo selection:bg-amarelo selection:text-destaque-escuro md:px-10 md:py-20 lg:px-[calc((100%-64rem)/2)]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div className="flex min-w-0 flex-col gap-3">
                    <a
                        href="#inicio"
                        className="w-fit font-display text-3xl leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amarelo focus-visible:ring-offset-2 focus-visible:ring-offset-destaque-escuro"
                    >
                        {clinica.nome}
                        <span className="text-amarelo">.</span>
                    </a>
                    <p className="font-display text-sm italic text-fundo/70">
                        {profissional.frase}
                    </p>
                    <a
                        href="#agendar"
                        className="mt-2 inline-flex min-h-11 w-fit items-center rounded-full bg-amarelo px-5 text-xs uppercase tracking-[0.2em] text-destaque-escuro transition-all duration-200 hover:bg-fundo active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amarelo focus-visible:ring-offset-2 focus-visible:ring-offset-destaque-escuro"
                    >
                        Agendar avaliação
                    </a>
                </div>

                <div className="flex min-w-0 flex-col gap-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-fundo/55">
                        Navegação
                    </p>
                    {menu.map((item, i) => (
                        <a key={i} href={item.link} className={link}>
                            {item.text}
                        </a>
                    ))}
                </div>

                <div className="flex min-w-0 flex-col gap-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-fundo/55">
                        Contato
                    </p>
                    <a
                        href={`https://wa.me/${contato.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={link}
                    >
                        {contato.whatsappExibicao}
                    </a>
                    <a
                        href={`https://instagram.com/${contato.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={link}
                    >
                        {contato.instagram}
                    </a>
                    <a href={`mailto:${contato.email}`} className={link}>
                        {contato.email}
                    </a>
                </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-fundo/15 pt-6 text-[11px] text-fundo/55">
                <p>© {new Date().getFullYear()} {clinica.nome}. Todos os direitos reservados.</p>
                <a
                    href="#inicio"
                    className="transition-colors hover:text-amarelo focus-visible:outline-none focus-visible:text-amarelo"
                >
                    Voltar ao topo ↑
                </a>
            </div>
        </footer>
    );
}
