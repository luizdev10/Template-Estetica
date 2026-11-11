import { contato } from "../config/site.js"
import { useReveal } from "../hooks/useReveal.js"

export default function Localizacao() {
    const [ref, visivel] = useReveal({ threshold: 0.1 })

    return (
        <section id="localizacao" className="scroll-mt-28 bg-fundo pb-20 pt-16">
            <div
                ref={ref}
                className={`mx-6 flex flex-col gap-10 md:mx-10 md:grid md:grid-cols-[minmax(0,380px)_minmax(0,1fr)] md:items-start md:gap-16 lg:mx-auto lg:max-w-5xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                    visivel ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"
                }`}
            >
                <div className="flex flex-col gap-5">
                    <h2 className="font-display text-4xl leading-[1.1] md:text-5xl">
                        Onde nos <span className="text-destaque-escuro">encontrar.</span>
                    </h2>

                    <div className="flex flex-col gap-1">
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-suave">
                            Endereço
                        </p>
                        <p className="text-texto/80">{contato.endereco}</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-suave">
                            Horário
                        </p>
                        <p className="text-texto/80">{contato.horario}</p>
                    </div>

                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contato.endereco)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block self-start rounded-full bg-destaque px-8 py-4 text-xs uppercase tracking-[0.2em] text-fundo transition-all duration-200 ease-out hover:bg-destaque-escuro active:scale-[0.97]"
                    >
                        Abrir no Google Maps
                    </a>
                </div>

                <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(contato.endereco)}&output=embed`}
                    title="Mapa com a localização da clínica"
                    loading="lazy"
                    className="h-72 w-full rounded-lg border-0 md:h-[28rem]"
                />
            </div>
        </section>
    )
}
