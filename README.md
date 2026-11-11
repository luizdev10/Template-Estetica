# Template Estética

Template de site para clínicas de estética e harmonização facial, feito com React 18, Vite e Tailwind CSS v4. Página única (sem rotas), com seções de início, procedimentos, sobre, localização, contato (com formulário de agendamento) e um botão flutuante de WhatsApp.

## Como rodar

```bash
npm install
npm run dev
```

Isso abre o site em modo desenvolvimento (com recarregamento automático). Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos finais vão para a pasta `dist/`.

## Como personalizar para um cliente

Quase todo o conteúdo do site vem de `src/config/site.js`. É só editar os valores — nada de mexer em JSX para trocar texto.

- **`profissional`** — nome, `registro` (CRO, CRBM, CREFITO... ou deixe vazio se não tiver), `area` de atuação, foto, posição de enquadramento da foto (`posicao`), `bio`, `frase` de destaque e a lista de `credenciais` (formação, cursos, atendimento).
- **`clinica`** — nome, telefone e endereço básicos da clínica (usados no cabeçalho).
- **`contato`** — WhatsApp (`whatsapp`, só números, com DDI; `whatsappExibicao`, formatado), Instagram, e-mail, texto de atendimento, horário de funcionamento e `endereco` (usado na seção de localização e no mapa).
- **`menu`** — itens do menu de navegação do cabeçalho.
- **`procedimentos`** — lista de procedimentos exibidos na grade (nome, descrição, imagem, texto alternativo da imagem e, opcionalmente, `posicao` do enquadramento).

### Fotos

Troque as imagens em `src/assets/images/`. Prefira o formato `.webp` (mais leve) e mantenha os mesmos nomes de arquivo, ou atualize os `import` no topo de `src/config/site.js` se renomear algum arquivo.

### Cores

Os tokens de cor e fonte ficam em `src/temas/paletas.css`, dentro do bloco `@theme`: `--color-fundo`, `--color-texto`, `--color-suave`, `--color-borda`, `--color-destaque`, `--color-destaque-escuro`, `--color-amarelo`, além de `--font-display` e `--font-sans`. Troque os valores ali — o resto do site usa essas variáveis através das classes do Tailwind (`bg-fundo`, `text-destaque` etc.), então a cor muda em todo lugar de uma vez.

### Título e metatags (SEO)

Em `index.html`, logo abaixo do comentário `<!-- TROCAR POR CLIENTE: title, description, og:* -->`, troque o `<title>`, a `<meta name="description">` e as tags `og:*` (título, descrição e imagem usados quando o link é compartilhado em redes sociais). Depois do deploy, troque o `content` da tag `og:image` para a URL completa (`https://seu-dominio/og-image.jpg`), já que redes sociais não aceitam caminho relativo.

## Checklist antes de publicar

- [ ] Trocar todos os textos de exemplo (nome da clínica, profissional, procedimentos, endereço, etc.)
- [ ] Buscar no projeto por `exemplo` e `00000` para achar qualquer placeholder esquecido
- [ ] Testar o botão de WhatsApp (flutuante e o do formulário) — confirmar que abre a conversa certa
- [ ] Testar o mapa da seção de localização e o link "Abrir no Google Maps"
- [ ] Abrir o site no celular e conferir o layout (menu, formulário, mapa)
- [ ] Trocar o título, a descrição e as metatags `og:*` em `index.html`
- [ ] Trocar `public/og-image.jpg` e `public/favicon.svg` pelos do cliente

## Publicar no GitHub Pages

Em `vite.config.js`, o campo `base` precisa ser o nome do repositório no GitHub (ex.: `/nome-do-repositorio/`), senão os arquivos (CSS, imagens) não carregam depois do deploy. Com o repositório conectado ao GitHub e um workflow de deploy configurado, basta dar `push` na branch principal para publicar automaticamente.
