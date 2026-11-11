import { profissional } from "../config/site.js"
import { useReveal } from "../hooks/useReveal.js"

export default function Sobre() {
    const [ref, visivel] = useReveal({ threshold: 0.1 })

    return (
        <section id="sobre" className="scroll-mt-28 bg-fundo pb-20 pt-16">
            <div
                ref={ref}
                className="mx-6 flex flex-col gap-10 md:mx-10 md:grid md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:items-end md:gap-16 lg:mx-auto lg:max-w-5xl"
            >

                <div className="aspect-[4/5] w-full overflow-hidden rounded-t-full">
                    <img
                        src={profissional.foto}
                        alt={profissional.alt}
                        loading="lazy"
                        style={{ objectPosition: profissional.posicao }}
                        className={`h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${
                            visivel ? "animate-revelar-foto motion-reduce:animate-none" : "scale-110 [clip-path:inset(0_0_100%_0)]"
                        }`}
                    />
                </div>

                <div className="flex flex-col gap-5">

                    <h2
                        className={`font-display text-5xl leading-[1.05] md:text-7xl ${
                            visivel ? "animate-revelar-nome motion-reduce:animate-none" : "opacity-0"
                        }`}
                    >
                        {profissional.nome}
                    </h2>

                    <div
                        className={`flex flex-col gap-5 transition-all delay-150 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                            visivel ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"
                        }`}
                    >
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-destaque">
                            {[profissional.registro, profissional.area].filter(Boolean).join(" · ")}
                        </p>


                        <p className="max-w-lg leading-relaxed text-texto/80">
                            {profissional.bio}
                        </p>

                        <ul className="mt-2 border-b border-borda">
                            {profissional.credenciais.map((item, i) => (
                                <li
                                    key={i}
                                    style={visivel ? { animationDelay: `${150 + i * 70}ms` } : undefined}
                                    className={`flex items-center justify-between gap-4 border-t border-borda py-4 ${
                                        visivel ? "animate-subir motion-reduce:animate-none" : "opacity-0"
                                    }`}
                                >

                                    <span>{item.rotulo}</span>
                                    <span>{item.valor}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#agendar"
                            className="mt-4 inline-block self-start rounded-full bg-destaque px-8 py-4 text-xs uppercase tracking-[0.2em] text-fundo transition-all duration-200 ease-out hover:bg-destaque-escuro active:scale-[0.97]"
                        >
                            Agendar avaliação
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}