# Grokking Algorithms — Estudos

Este repositório contém minhas implementações em Python dos exemplos do livro
**Grokking Algorithms** (Aditya Bhargava) e um **site de estudos em português**
(feito em **Docusaurus / TypeScript**) para revisar conceitos, ver complexidades,
praticar exercícios e tirar dúvidas.

## 📁 Estrutura

```
.
├── chapter01/ … chapter04/   # código Python dos capítulos (acompanhando o livro)
├── docs/                     # conteúdo do site de estudos (Markdown/MDX)
├── src/                      # CSS e customizações do site
├── static/                   # imagens e assets estáticos
├── docusaurus.config.ts      # configuração do site
├── sidebars.ts               # navegação lateral
└── package.json              # dependências (Docusaurus, busca, mermaid)
```

## 🚀 Rodar o site localmente

```bash
npm install
npm start            # abre em http://localhost:3000 com hot-reload
```

Outros comandos úteis:

```bash
npm run build        # gera o site estático em build/
npm run serve        # serve o build/ localmente para conferir
npm run typecheck    # checagem de tipos TypeScript
```

A **busca** no topo da página (offline, em português) indexa todo o conteúdo —
conceitos, dúvidas e exercícios.

## ▲ Publicar na Vercel

O projeto é **Docusaurus padrão**, então a Vercel o detecta automaticamente —
não precisa de configuração especial:

1. Acesse [vercel.com/new](https://vercel.com/new) e importe
   `LuisAbrantes/grokkingAlgorithms`.
2. **Framework Preset:** a Vercel detecta **Docusaurus** sozinha
   (Build Command `npm run build`, Output `build`).
3. Clique em **Deploy**. A cada `git push` na `main`, a Vercel republica.

> Alternativa via CLI: `npm i -g vercel && vercel`.

## 📚 O que tem no site

- Uma página por capítulo (1–12) com: ideia central, analogia, passo a passo
  (com diagramas Mermaid), implementação em Python, complexidade (Big-O),
  dúvidas comuns, exercícios resolvidos e checklist de domínio.
- **Guia de estudos** com cronograma e técnicas de aprendizado.
- **Referência**: cheatsheet de Big-O e glossário PT/EN.
- **FAQ** central + busca para tirar dúvidas.
