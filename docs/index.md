# Grokking Algorithms — Guia de Estudos 📘

Bem-vindo ao seu site de estudos do livro **Grokking Algorithms: An Illustrated
Guide for Programmers and Other Curious People**, de **Aditya Y. Bhargava**.

Este site é um **resumo navegável e pesquisável** em português: um lugar para
revisar conceitos, conferir complexidades, praticar exercícios e **tirar dúvidas**
sem precisar reabrir o livro a cada vez.

!!! tip "Como tirar dúvidas rápido"
    Use a **busca** no topo da página (ícone 🔍). Ela indexa todo o conteúdo:
    conceitos, "dúvidas comuns", exercícios e glossário. Procure por termos como
    `pivô`, `memoização`, `fila`, `O(log n)`...

## O que é o livro?

*Grokking Algorithms* ensina os algoritmos fundamentais da ciência da computação
de forma **visual e intuitiva**, com muitas ilustrações e analogias do dia a dia,
em vez de provas matemáticas pesadas. Os exemplos de código são em **Python**.

A 2ª edição cobre 12 capítulos, da busca binária até algoritmos de grafos e
aprendizado de máquina (K-vizinhos).

## Mapa dos capítulos

| # | Capítulo | Você aprende a... |
|---|----------|-------------------|
| 1 | [Introdução e busca binária](capitulos/01-introducao-busca-binaria.md) | Medir velocidade com Big-O e buscar rápido em listas ordenadas |
| 2 | [Selection sort](capitulos/02-selection-sort.md) | Entender arrays vs. listas ligadas e um primeiro algoritmo de ordenação |
| 3 | [Recursão](capitulos/03-recursao.md) | Funções que chamam a si mesmas, caso-base e pilha de chamadas |
| 4 | [Quicksort](capitulos/04-quicksort.md) | Dividir para conquistar e ordenar de forma eficiente |
| 5 | [Tabelas hash](capitulos/05-tabelas-hash.md) | Buscas, inserções e remoções em tempo O(1) médio |
| 6 | [Busca em largura (BFS)](capitulos/06-busca-em-largura.md) | Representar grafos e achar o caminho mais curto (sem pesos) |
| 7 | [Algoritmo de Dijkstra](capitulos/07-dijkstra.md) | Caminho mais curto em grafos com pesos |
| 8 | [Algoritmos gulosos](capitulos/08-algoritmos-gulosos.md) | Resolver problemas difíceis com boas aproximações (NP-completo) |
| 9 | [Programação dinâmica](capitulos/09-programacao-dinamica.md) | Quebrar problemas em subproblemas e reaproveitar respostas |
| 10 | [K-vizinhos mais próximos](capitulos/10-k-vizinhos-mais-proximos.md) | Classificar e recomendar com base em semelhança |
| 11 | [Algoritmos de grafos](capitulos/11-algoritmos-de-grafos.md) | Árvore geradora mínima, ordenação topológica e mais |
| 12 | [Próximos passos](capitulos/12-proximos-passos.md) | Para onde ir depois: árvores, B-trees, transformadas, paralelismo |

## Como usar este site

Para cada capítulo, siga este ciclo (comprovadamente eficaz para fixar):

1. **Leia** a "Ideia central" e a "Analogia" para pegar a intuição.
2. **Acompanhe** o "Como funciona" e a "Implementação em Python".
3. **Confira** a complexidade (Big-O) — saber explicar o *porquê* é o que importa.
4. **Resolva** os exercícios *antes* de abrir a resposta (active recall).
5. **Revise** as "Dúvidas comuns" — elas pegam as armadilhas clássicas.
6. **Marque** o "Checklist de domínio" do capítulo. Só avance quando todos os
   itens estiverem marcados.

!!! note "Material complementar"
    - [Guia de estudos](guia-de-estudos.md) — cronograma e técnicas de aprendizado.
    - [Cheatsheet de Big-O](referencia/big-o-cheatsheet.md) — todas as complexidades num lugar.
    - [Glossário PT/EN](referencia/glossario.md) — termos traduzidos.
    - [FAQ / Tirar dúvidas](faq-duvidas.md) — perguntas frequentes de todos os capítulos.

## Onde está o código

As implementações em Python ficam nas pastas `chapterNN/` do repositório
(ex.: `chapter01/binarySearch.py`). Cada página de capítulo mostra e comenta esse
código. O link do repositório está no topo da página (ícone do GitHub).
