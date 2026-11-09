
import toxina from "../assets/images/Toxinabotulínica.webp"
import preenchimento from "../assets/images/Preenchimentofacial.webp"
import bioestimuladores from "../assets/images/Bioestimuladoresdecolágeno.webp"
import skinbooster from "../assets/images/Skinbooster.webp"
import fios from "../assets/images/fiosdepdo.webp"
import avaliacao from "../assets/images/fundoinimb.webp" 
import fotoProfissional from "../assets/images/dra.webp"

export const profissional = {
  nome: "Dra. Nome Sobrenome",
  registro: "CRO 00000",
  area: "Harmonização facial",
  foto: fotoProfissional,
  alt: "Retrato da Dra. Nome Sobrenome, em fundo neutro e luz natural",
  posicao: "center 20%",
  bio: "Cada atendimento começa com uma avaliação detalhada. A proposta é respeitar as proporções do seu rosto e indicar apenas o que faz sentido para você, com calma e sem pressa.",
  frase: "Realçar, nunca transformar.",
  credenciais: [
    { rotulo: "Formação", valor: "Graduação e instituição" },
    { rotulo: "Cursos", valor: "Pós-graduação" },
    { rotulo: "Atendimento", valor: "Cidade, UF · com hora marcada" },
  ],
}

export const clinica = [
    {nome: "exemplo"},
    {telefone: "1199999999"},
    {endereco: "Rua exemplo, 123"}
];

export const contato = {
    whatsapp: "5511999999999",
    whatsappExibicao: "(11) 99999-9999",
    instagram: "exemplo.estetica",
    email: "contato@exemplo.com",
    atendimento: "Cidade, UF · com hora marcada",
    horario: "Seg a sáb, 9h às 19h",
}

export const menu = [
    {text: "Início", link: "#inicio"},
    {text: "Procedimentos", link: "#procedimentos"},
    {text: "Sobre", link: "#sobre"},
    {text: "Contato", link: "#contato"},
]

export const procedimentos = [
  {
    nome: "Toxina botulínica",
    descricao: "Suavização de linhas de expressão com naturalidade, conforme avaliação.",
    imagem: toxina,
    alt: "Close do rosto de uma mulher, com foco na testa e nos olhos, em expressão relaxada",
  },
  {
    nome: "Preenchimento facial",
    descricao: "Reposição de volume e definição de contornos, em proporção com o seu rosto.",
    imagem: preenchimento,
    alt: "Mulher em três quartos, com luz lateral destacando o contorno do rosto",
  },
  {
    nome: "Bioestimuladores de colágeno",
    descricao: "Estímulo gradual à produção natural de colágeno, conforme cada pele.",
    imagem: bioestimuladores,
    alt: "Mulher com a mão apoiada suavemente na bochecha, pele com brilho natural",
    posicao: "center 15%"
  },
  {
    nome: "Skinbooster",
    descricao: "Hidratação profunda da pele, com protocolo definido em avaliação.",
    imagem: skinbooster,
    alt: "Close da bochecha e dos lábios de uma mulher, com a pele iluminada",
  },
  {
    nome: "Fios de PDO",
    descricao: "Sustentação para áreas com flacidez, indicada caso a caso.",
    imagem: fios,
    alt: "Mulher de perfil, com o queixo levemente elevado e o cabelo preso",
    posicao: "center 15%"
  },
  {
    nome: "Avaliação facial",
    descricao: "Conversa e análise individual para definir o que faz sentido para você.",
    imagem: avaliacao,
    alt: "Retrato de uma mulher olhando para a câmera, com as mãos juntas sob o queixo",
  },
]





