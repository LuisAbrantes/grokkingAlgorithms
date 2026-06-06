# FAQ / Tirar dúvidas ❓

Perguntas frequentes que cruzam vários capítulos. Para dúvidas específicas, veja
a seção **"Dúvidas comuns"** de cada capítulo — e use a **busca** no topo.

## Conceitos gerais

<details>
<summary>Por que eu preciso aprender Big-O?</summary>

Porque ele te diz se um programa vai continuar rápido quando os dados
crescerem. Dois algoritmos podem parecer iguais com 10 itens e um ser
inviável com 1 milhão. Big-O é a linguagem para comparar algoritmos sem
depender da máquina. Veja o [cheatsheet](referencia/big-o-cheatsheet.md).

</details>

<details>
<summary>Qual a diferença entre tempo e espaço (de complexidade)?</summary>

**Tempo** = quantas operações o algoritmo faz. **Espaço** = quanta memória
extra ele usa. Às vezes você troca um pelo outro: a programação dinâmica gasta
memória (tabela) para economizar tempo.

</details>

<details>
<summary>Recursão ou loop (iteração) — qual usar?</summary>

Os dois resolvem os mesmos problemas. **Recursão** costuma deixar o código
mais legível quando o problema é naturalmente "auto-similar" (dividir para
conquistar, árvores). **Loops** costumam ser mais eficientes em memória
(não enchem a pilha de chamadas). Veja o [cap. 3](capitulos/03-recursao.md).

</details>

<details>
<summary>Array ou lista ligada?</summary>

**Array**: acesso por índice em O(1), mas inserir/remover no meio é O(n).
**Lista ligada**: inserir/remover é O(1) (se você já está no ponto), mas
acessar o i-ésimo elemento é O(n). Escolha pelo que você mais faz: ler ou
modificar. Veja o [cap. 2](capitulos/02-selection-sort.md).

</details>

## Ordenação e busca

<details>
<summary>Por que a busca binária exige a lista ordenada?</summary>

Porque ela decide "ir para a esquerda ou direita" comparando com o elemento
do meio. Isso só funciona se os elementos estiverem em ordem. Sem ordenação,
use busca linear (O(n)). Veja o [cap. 1](capitulos/01-introducao-busca-binaria.md).

</details>

<details>
<summary>Quicksort é O(n log n) ou O(n²)?</summary>

Depende do **pivô**. No caso médio (pivô razoável) é O(n log n). No pior caso
(pivô sempre o menor/maior, ex.: lista já ordenada com pivô na ponta) vira
O(n²). Escolher um pivô aleatório evita o pior caso na prática.
Veja o [cap. 4](capitulos/04-quicksort.md).

</details>

<details>
<summary>Por que quicksort é preferido a selection sort?</summary>

Selection sort é sempre O(n²). Quicksort é O(n log n) no caso médio — muito
mais rápido para listas grandes. Para `n = 1000`, isso é ~10 000 vs. ~1 milhão
de operações.

</details>

## Grafos

<details>
<summary>BFS ou Dijkstra — qual usar?</summary>

**BFS** acha o caminho mais curto em grafos **sem peso** (menor número de
arestas). **Dijkstra** acha o caminho de **menor custo** em grafos com peso.
Se todas as arestas têm o mesmo peso, BFS já resolve.
Veja [cap. 6](capitulos/06-busca-em-largura.md) e [cap. 7](capitulos/07-dijkstra.md).

</details>

<details>
<summary>Dijkstra funciona com pesos negativos?</summary>

Não. Com arestas de peso negativo, use **Bellman-Ford**. Dijkstra assume que
adicionar uma aresta nunca diminui o custo total.

</details>

## Técnicas avançadas

<details>
<summary>Quando um problema é 'guloso' e quando é 'programação dinâmica'?</summary>

Use **guloso** quando a melhor escolha local leva à melhor global (e você
aceita aproximação em problemas NP-completos). Use **programação dinâmica**
quando há **subproblemas sobrepostos** e você precisa da solução **ótima**
exata (ex.: mochila). Veja [cap. 8](capitulos/08-algoritmos-gulosos.md) e
[cap. 9](capitulos/09-programacao-dinamica.md).

</details>

<details>
<summary>O que significa 'NP-completo'?</summary>

São problemas para os quais não se conhece algoritmo rápido (polinomial) que
sempre dê a resposta ótima. Sinais: precisa testar todas as combinações, o
problema envolve "todos os subconjuntos/permutações". Solução prática: usar
algoritmos gulosos para uma boa aproximação.
Veja o [cap. 8](capitulos/08-algoritmos-gulosos.md).

</details>

## Sobre o estudo

<details>
<summary>Em que ordem devo estudar?</summary>

Na ordem dos capítulos — eles se constroem uns sobre os outros (recursão antes
de quicksort; grafos antes de Dijkstra). Veja o
[guia de estudos](guia-de-estudos.md).

</details>

<details>
<summary>Não entendi um capítulo. E agora?</summary>

Releia a "Analogia", refaça o código digitando, e tente explicar em voz alta.
Se travar num termo, consulte o [glossário](referencia/glossario.md). Muitas
dúvidas já estão respondidas na seção "Dúvidas comuns" do próprio capítulo.

</details>
