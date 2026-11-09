import { useState, useEffect } from "react"
import { menu, clinica } from "../config/site.js"
import { useScrollHeader } from "../hooks/useScrollHeader.js"

export default function Header() {
    const [aberto, setAberto] = useState(false)
    const rolado = useScrollHeader()

    // divide o menu: metade à esquerda do logo, metade à direita
    const metade = Math.ceil(menu.length / 2)
    const esquerda = menu.slice(0, metade)
    const direita = menu.slice(metade)

    // Esc fecha + trava a rolagem da página com o menu aberto
    useEffect(() => {
        if (!aberto) return
        const fechar = (e) => e.key === "Escape" && setAberto(false)
        window.addEventListener("keydown", fechar)
        document.body.style.overflow = "hidden"
        return () => {
            window.removeEventListener("keydown", fechar)
            document.body.style.overflow = ""
        }
    }, [aberto])

    // visual do header: 3 estados
    const estilo = aberto
        ? "border-borda bg-fundo text-destaque"
        : rolado
          ? "border-borda bg-fundo/90 text-destaque backdrop-blur-md"
          : "border-fundo/25 bg-linear-to-b from-black/40 to-transparent text-fundo"

    const link =
        "relative inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.2em] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-amarelo after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:after:w-full motion-reduce:after:transition-none"

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 motion-reduce:transition-none ${estilo}`}
            >
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:grid lg:h-20 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
                    {/* esquerda (desktop) */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-6 xl:gap-8">
                            {esquerda.map((item, i) => (
                                <li key={i}>
                                    <a href={item.link} className={link}>
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* logo (centro no desktop) */}
                    <a
                        href="#inicio"
                        onClick={() => setAberto(false)}
                        className="font-display text-3xl lowercase leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amarelo focus-visible:ring-offset-2 lg:text-4xl"
                    >
                        {clinica[0].nome}
                        <span className="text-amarelo">.</span>
                    </a>

                    {/* direita (desktop) */}
                    <div className="hidden items-center justify-end gap-6 lg:flex xl:gap-8">
                        <ul className="flex items-center gap-6 xl:gap-8">
                            {direita.map((item, i) => (
                                <li key={i}>
                                    <a href={item.link} className={link}>
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#agendar"
                            className="inline-flex min-h-11 items-center rounded-full bg-amarelo px-5 text-xs uppercase tracking-[0.2em] text-destaque-escuro transition-all duration-200 hover:bg-fundo active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amarelo focus-visible:ring-offset-2"
                        >
                            Agendar
                        </a>
                    </div>

                    {/* botão MENU (celular/tablet) */}
                    <button
                        onClick={() => setAberto(!aberto)}
                        className="flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.2em] underline decoration-amarelo decoration-2 underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amarelo lg:hidden"
                        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={aberto}
                    >
                        {aberto ? "Fechar" : "Menu"}
                    </button>
                </div>
            </header>

            {/* escurece a página atrás; tocar fora fecha o menu */}
            <div
                onClick={() => setAberto(false)}
                aria-hidden="true"
                className={`fixed inset-0 z-30 bg-black/30 transition-opacity duration-300 motion-reduce:transition-none lg:hidden ${
                    aberto ? "visible opacity-100" : "invisible opacity-0"
                }`}
            />

            {/* painel que desce do header (fora do <header> de propósito:
                backdrop-blur no pai quebraria o "fixed") */}
            <nav
                aria-hidden={!aberto}
                className={`fixed inset-x-0 top-16 z-40 border-b border-borda bg-fundo px-5 pb-6 pt-2 text-texto shadow-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:hidden ${
                    aberto ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                }`}
            >
                <ul>
                    {menu.map((item, i) => (
                        <li key={i} className="border-b border-borda">
                            <a
                                href={item.link}
                                onClick={() => setAberto(false)}
                                className="flex min-h-14 items-center font-display text-2xl focus-visible:outline-none focus-visible:text-destaque active:text-destaque"
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#agendar"
                    onClick={() => setAberto(false)}
                    className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-destaque text-xs uppercase tracking-[0.2em] text-fundo transition-transform active:scale-[0.96]"
                >
                    Agendar avaliação
                </a>
            </nav>
        </>
    )
}