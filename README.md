# Grokking Algorithms — Estudos

Este repositório contém minhas implementações em Python dos exemplos do livro
**Grokking Algorithms** (Aditya Bhargava) e um **site de estudos em português**
para revisar conceitos, ver complexidades, praticar exercícios e tirar dúvidas.

## 📁 Estrutura

```
.
├── chapter01/ … chapter04/   # código Python dos capítulos (acompanhando o livro)
├── docs/                     # conteúdo do site de estudos (Markdown)
├── mkdocs.yml                # configuração do site (MkDocs Material)
└── requirements.txt          # dependências do site
```

## 🚀 Rodar o site de estudos localmente

```bash
# 1. Criar e ativar um ambiente virtual (recomendado)
python3 -m venv .venv
source .venv/bin/activate         # Windows: .venv\Scripts\activate

# 2. Instalar as dependências
pip install -r requirements.txt

# 3. Subir o site com hot-reload
mkdocs serve
```

Abra **http://localhost:8000** no navegador. A busca no topo da página indexa
todo o conteúdo (conceitos, dúvidas, exercícios).

## ▲ Publicar na Vercel

> O site é **estático**: o Python (MkDocs) roda só no *build* e gera HTML/CSS/JS.
> Nenhum Python roda quando alguém visita o site — é 100% front-end, igual a um
> projeto Next/Vite, só que o gerador é Python e o conteúdo é Markdown.

O `vercel.json` já está configurado:

```json
{
  "installCommand": "pip3 install -r requirements.txt",
  "buildCommand": "python3 -m mkdocs build",
  "outputDirectory": "site"
}
```

Passos no painel da Vercel:

1. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório
   `LuisAbrantes/grokkingAlgorithms`.
2. **Framework Preset:** deixe em **Other** (o `vercel.json` cuida do resto).
3. Clique em **Deploy**. A cada `git push` na `main`, a Vercel rebuilda e republica.

> Alternativa via CLI: `npm i -g vercel && vercel` (na raiz do projeto).

## 📦 Publicar (alternativa) no GitHub Pages

```bash
mkdocs gh-deploy
```

O site fica disponível em `https://LuisAbrantes.github.io/grokkingAlgorithms/`.

## 📚 O que tem no site

- Uma página por capítulo (1–12) com: ideia central, analogia, passo a passo,
  implementação em Python, complexidade (Big-O), dúvidas comuns, exercícios
  resolvidos e checklist de domínio.
- **Guia de estudos** com cronograma e técnicas de aprendizado.
- **Referência**: cheatsheet de Big-O e glossário PT/EN.
- **FAQ** central para tirar dúvidas.
