# FAQ / Tirar dúvidas ❓

Perguntas frequentes que cruzam vários capítulos. Para dúvidas específicas, veja
a seção **"Dúvidas comuns"** de cada capítulo — e use a **busca** no topo.

## Conceitos gerais

??? question "Por que eu preciso aprender Big-O?"
    Porque ele te diz se um programa vai continuar rápido quando os dados
    crescerem. Dois algoritmos podem parecer iguais com 10 itens e um ser
    inviável com 1 milhão. Big-O é a linguagem para comparar algoritmos sem
    depender da máquina. Veja o [cheatsheet](referencia/big-o-cheatsheet.md).

??? question "Qual a diferença entre tempo e espaço (de complexidade)?"
    **Tempo** = quantas operações o algoritmo faz. **Espaço** = quanta memória
    extra ele usa. Às vezes você troca um pelo outro: a programação dinâmica gasta
    memória (tabela) para economizar tempo.

??? question "Recursão ou loop (iteração) — qual usar?"
    Os dois resolvem os mesmos problemas. **Recursão** costuma deixar o código
    mais legível quando o problema é naturalmente "auto-similar" (dividir para
    conquistar, árvores). **Loops** costumam ser mais eficientes em memória
    (não enchem a pilha de chamadas). Veja o [cap. 3](capitulos/03-recursao.md).

??? question "Array ou lista ligada?"
    **Array**: acesso por índice em O(1), mas inserir/remover no meio é O(n).
    **Lista ligada**: inserir/remover é O(1) (se você já está no ponto), mas
    acessar o i-ésimo elemento é O(n). Escolha pelo que você mais faz: ler ou
    modificar. Veja o [cap. 2](capitulos/02-selection-sort.md).

## Ordenação e busca

??? question "Por que a busca binária exige a lista ordenada?"
    Porque ela decide "ir para a esquerda ou direita" comparando com o elemento
    do meio. Isso só funciona se os elementos estiverem em ordem. Sem ordenação,
    use busca linear (O(n)). Veja o [cap. 1](capitulos/01-introducao-busca-binaria.md).

??? question "Quicksort é O(n log n) ou O(n²)?"
    Depende do **pivô**. No caso médio (pivô razoável) é O(n log n). No pior caso
    (pivô sempre o menor/maior, ex.: lista já ordenada com pivô na ponta) vira
    O(n²). Escolher um pivô aleatório evita o pior caso na prática.
    Veja o [cap. 4](capitulos/04-quicksort.md).

??? question "Por que quicksort é preferido a selection sort?"
    Selection sort é sempre O(n²). Quicksort é O(n log n) no caso médio — muito
    mais rápido para listas grandes. Para `n = 1000`, isso é ~10 000 vs. ~1 milhão
    de operações.

## Grafos

??? question "BFS ou Dijkstra — qual usar?"
    **BFS** acha o caminho mais curto em grafos **sem peso** (menor número de
    arestas). **Dijkstra** acha o caminho de **menor custo** em grafos com peso.
    Se todas as arestas têm o mesmo peso, BFS já resolve.
    Veja [cap. 6](capitulos/06-busca-em-largura.md) e [cap. 7](capitulos/07-dijkstra.md).

??? question "Dijkstra funciona com pesos negativos?"
    Não. Com arestas de peso negativo, use **Bellman-Ford**. Dijkstra assume que
    adicionar uma aresta nunca diminui o custo total.

## Técnicas avançadas

??? question "Quando um problema é 'guloso' e quando é 'programação dinâmica'?"
    Use **guloso** quando a melhor escolha local leva à melhor global (e você
    aceita aproximação em problemas NP-completos). Use **programação dinâmica**
    quando há **subproblemas sobrepostos** e você precisa da solução **ótima**
    exata (ex.: mochila). Veja [cap. 8](capitulos/08-algoritmos-gulosos.md) e
    [cap. 9](capitulos/09-programacao-dinamica.md).

??? question "O que significa 'NP-completo'?"
    São problemas para os quais não se conhece algoritmo rápido (polinomial) que
    sempre dê a resposta ótima. Sinais: precisa testar todas as combinações, o
    problema envolve "todos os subconjuntos/permutações". Solução prática: usar
    algoritmos gulosos para uma boa aproximação.
    Veja o [cap. 8](capitulos/08-algoritmos-gulosos.md).

## Sobre o estudo

??? question "Em que ordem devo estudar?"
    Na ordem dos capítulos — eles se constroem uns sobre os outros (recursão antes
    de quicksort; grafos antes de Dijkstra). Veja o
    [guia de estudos](guia-de-estudos.md).

??? question "Não entendi um capítulo. E agora?"
    Releia a "Analogia", refaça o código digitando, e tente explicar em voz alta.
    Se travar num termo, consulte o [glossário](referencia/glossario.md). Muitas
    dúvidas já estão respondidas na seção "Dúvidas comuns" do próprio capítulo.
