import { contato, procedimentos } from "../config/site";
import { useState } from "react";
import { useReveal } from "../hooks/useReveal.js";
import { AlertCircle } from "lucide-react";
import avaliacaoForm from "../assets/images/avaliacao-form.webp";
import contatoDestaque from "../assets/images/contato-destaque.webp";


export default function Contato() {

    const [refTitulo, visivelTitulo] = useReveal({ threshold: 0.1 });
    const [refContatos, visivelContatos] = useReveal({ threshold: 0.1 });
    const [refForm, visivelForm] = useReveal({ threshold: 0.1 });


    const [proced, setProced] = useState(["Avaliação facial"]);
    const alternarProc = (nome) => setProced((atual) => atual.includes(nome) ? atual.filter((p) => p !== nome) : [...atual, nome])
    const [periodo, setPeriodo] = useState("Qualquer horário");


    const [name, setName] = useState("");
    const [telefone, setTelefone] = useState("");

    const [erroForm, setErrorForm] = useState({})

    


    const enviar = (e) => {
        e.preventDefault()

            const aviso = {}

        if (name.trim() === "" || name.trim().length < 4) {
            aviso.nome = "Digite o seu nome!"
        }
        if (telefone.length < 11) {
            aviso.telefone = "Digite um telefone valido!"
        }


        setErrorForm(aviso)

        if (Object.keys(aviso).length > 0 ) return
            
        const texto = `Olá tudo bem? Eu gostaria de agendar uma avaliação.
        
        Nome: ${name.trim()}
        WhatsApp: ${telefone}
        Procedimento: ${proced.join(", ")}
        Melhor periodo: ${periodo}
        
        Teriam disponibilidade para esse periodo?`

        window.open( `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(texto) }`, "_blank", "noopener")
    }



    const periodos = [
        { tempo: "Manhã" },
        { tempo: "Tarde" },
        { tempo: "Qualquer horário" }
    ];
    /*const alternarPeriodo = (per) => setPeriod((datual) => datual.includes(per) ? datual.filter((e)=> e !== per) : [ ...datual, per])*/



    const infos = [
        {
            nome: "WhatsApp",
            valor: `${contato.whatsappExibicao}`
        },
        {
            nome: "Instagram",
            valor: `${contato.instagram}`
        },
        {
            nome: "E-mail",
            valor: `${contato.email}`
        },
        {
            nome: "Atendimento",
            valor: `${contato.atendimento}`
        },
        {
            nome: "Horário",
            valor: `${contato.horario}`
        }

    ]
    return (
        <section
            id="contato"
            className="scroll-mt-28 border-t border-borda bg-fundo px-6 pb-20 pt-16 selection:bg-amarelo selection:text-destaque-escuro md:px-10 lg:px-[calc((100%-64rem)/2)]"
        >

            <div ref={refTitulo}>
                <h2
                    className={`text-balance font-display text-5xl leading-[1.05] md:text-7xl ${visivelTitulo ? "animate-revelar-nome motion-reduce:animate-none" : "opacity-0"
                        }`}
                >
                    Vamos conversar sobre o{" "}
                    <span className="italic text-destaque">seu rosto.</span>
                </h2>

                <p
                    className={`mt-6 max-w-lg leading-relaxed text-texto/80 transition-all delay-150 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${visivelTitulo ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"
                        }`}
                >
                    A avaliação é o primeiro passo. Conte o que você tem em mente e respondemos com um horário, com calma e sem pressa.
                </p>
            </div>

            {/* CONTATOS */}
            <div className="mt-12 flex flex-col gap-6 lg:flex-row">
                <div
                    ref={refContatos}
                    className="max-w-xl flex-1 rounded-2xl bg-borda p-6 sm:p-10"
                >
                    <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-suave">
                        Contato
                    </p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {infos.map((item, i) => (
                            <div
                                key={i}
                                style={visivelContatos ? { animationDelay: `${i * 70}ms` } : undefined}
                                className={`flex flex-col gap-1 rounded-2xl bg-fundo px-5 py-3 ${i === 0 ? "sm:col-span-2" : ""} ${visivelContatos ? "animate-subir motion-reduce:animate-none" : "opacity-0"
                                    }`}
                            >
                                <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-suave">
                                    {item.nome}
                                </p>
                                <p className="break-words text-sm font-semibold text-texto">
                                    {item.valor}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <img
                    src={contatoDestaque}
                    alt="Close do rosto de uma mulher, com a pele iluminada por luz natural"
                    loading="lazy"
                    className="hidden rounded-2xl object-cover lg:block lg:w-72 lg:shrink-0 xl:w-80"
                />
            </div>

            {/* FORMULÁRIO */}
            <div id="agendar" className="mt-5 flex flex-col gap-6 scroll-mt-28 lg:flex-row lg:items-start">
                <img
                    src={avaliacaoForm}
                    alt="Sala de espera em tons neutros, com poltrona, cortina translúcida e planta, criando um ambiente calmo"
                    loading="lazy"
                    className="hidden rounded-2xl object-cover lg:sticky lg:top-24 lg:block lg:aspect-[3/4] lg:w-72 lg:shrink-0 xl:w-80"
                />

                <div
                    ref={refForm}
                    className={`max-w-xl flex-1 rounded-2xl bg-borda p-6 sm:p-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${visivelForm ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"
                        }`}
                >
                    <h2 className="text-balance font-display text-4xl leading-[1.1]">
                        Agende sua <span className="italic text-destaque">Avaliação</span>
                    </h2>
                    <p className="mb-8 mt-2 text-sm text-texto/70">
                        Preencha em menos de um minuto. A conversa continua no whatsapp
                    </p>

                    <form onSubmit={enviar} noValidate className="flex flex-col" >
                        <label
                            htmlFor=""
                            className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-texto/70"
                        >
                            SEU NOME
                        </label>
                        <input
                            type="text"                        
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                                setErrorForm({ ...erroForm, nome: "" })
                            }}

                            placeholder="Como posso te chamar?"
                            className="min-h-12 w-full rounded-lg bg-fundo px-4 py-3 text-base text-texto caret-destaque outline-none transition-shadow duration-200 placeholder:text-suave focus:ring-2 focus:ring-destaque motion-reduce:transition-none"
                        />
                      {erroForm.nome && (
                          <p className="mt-1.5 flex animate-erro items-center gap-1.5 text-xs font-medium text-destaque motion-reduce:animate-none">
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                              {erroForm.nome}
                          </p>
                      )}

                        <label
                            htmlFor=""
                            className="mb-2 mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-texto/70"
                        >
                            SEU WHATSAPP
                        </label>
                        <input
                            type="tell"
                            value={telefone}
                            onChange={(e) => {
                                setTelefone(e.target.value)
                                setErrorForm({...erroForm, telefone: ""})
                            }}
                            placeholder="(88) 91111-2222"
                            className="min-h-12 w-full rounded-lg bg-fundo px-4 py-3 text-base text-texto caret-destaque outline-none transition-shadow duration-200 placeholder:text-suave focus:ring-2 focus:ring-destaque motion-reduce:transition-none"
                        />
                            {erroForm.telefone && (
                                <p className="mt-1.5 flex animate-erro items-center gap-1.5 text-xs font-medium text-destaque motion-reduce:animate-none">
                                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                                    {erroForm.telefone}
                                </p>
                            )}
                        {/* SERVIÇOS */}
                        <fieldset className="mt-6 flex min-w-0 flex-wrap gap-2">
                            <legend className="mb-2 p-0 text-[11px] font-medium uppercase tracking-[0.2em] text-texto/70">
                                Qual Serviço deseja?
                            </legend>
                            {procedimentos.map((item) => (
                                <label key={item.nome} className="relative cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        className="peer sr-only"
                                        checked={proced.includes(item.nome)}
                                        onChange={() => alternarProc(item.nome)}
                                    />
                                    <span className="inline-flex min-h-11 items-center rounded-full bg-fundo px-4 text-sm transition-[background-color,color,transform,box-shadow] duration-200 ease-out hover:ring-1 hover:ring-destaque/40 peer-checked:bg-destaque peer-checked:text-fundo peer-focus-visible:ring-2 peer-focus-visible:ring-destaque peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-borda peer-active:scale-[0.97] motion-reduce:transition-none">
                                        {item.nome}
                                    </span>
                                </label>
                            ))}
                        </fieldset>

                        {/* PERÍODO */}
                        <fieldset className="mt-6 flex min-w-0 flex-wrap gap-2">
                            <legend className="mb-2 p-0 text-[11px] font-medium uppercase tracking-[0.2em] text-texto/70">
                                Melhor período
                            </legend>
                            {periodos.map((it) => (
                                <label key={it.tempo} className="relative cursor-pointer select-none">
                                    <input
                                        type="radio"
                                        name="periodo"
                                        className="peer sr-only"
                                        checked={periodo === it.tempo}
                                        onChange={() => setPeriodo(it.tempo)}
                                    />
                                    <span className="inline-flex min-h-11 items-center rounded-full bg-fundo px-4 text-sm transition-[background-color,color,transform,box-shadow] duration-200 ease-out hover:ring-1 hover:ring-destaque/40 peer-checked:bg-destaque peer-checked:text-fundo peer-focus-visible:ring-2 peer-focus-visible:ring-destaque peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-borda peer-active:scale-[0.97] motion-reduce:transition-none">
                                        {it.tempo}
                                    </span>
                                </label>
                            ))}
                        </fieldset>
                       

                        <button
                            type="submit"
                            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-destaque px-8 py-4 text-xs uppercase tracking-[0.2em] text-fundo transition-all duration-200 ease-out hover:bg-destaque-escuro active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destaque focus-visible:ring-offset-2 focus-visible:ring-offset-borda"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}   
