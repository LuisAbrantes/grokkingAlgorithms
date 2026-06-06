# Guia de estudos 🗺️

Um plano para aproveitar o livro ao máximo, sem pressa e sem decoreba.

## Cronograma sugerido (~1 capítulo por semana)

O ritmo abaixo é um ponto de partida — ajuste à sua rotina. O importante é a
**consistência** (um pouco todo dia) e o **active recall** (testar a si mesmo).

| Semana | Capítulo(s) | Foco prático |
|--------|-------------|--------------|
| 1 | Cap. 1 — Busca binária | Implementar busca binária; contar passos vs. busca linear |
| 2 | Cap. 2 — Selection sort | Implementar selection sort; entender arrays × listas ligadas |
| 3 | Cap. 3 — Recursão | Reescrever loops como recursão; desenhar a pilha de chamadas |
| 4 | Cap. 4 — Quicksort | Implementar quicksort; analisar pior × caso médio |
| 5 | Cap. 5 — Tabelas hash | Usar `dict`; pensar em colisões e fator de carga |
| 6 | Cap. 6 — BFS | Representar grafo com `dict`; achar caminho mais curto com `deque` |
| 7 | Cap. 7 — Dijkstra | Implementar Dijkstra com tabela de custos e pais |
| 8 | Cap. 8 — Gulosos | Cobertura de conjuntos; reconhecer problemas NP-completos |
| 9 | Cap. 9 — Programação dinâmica | Mochila (knapsack); maior subsequência comum |
| 10 | Cap. 10 — KNN | Distância/cosseno; classificação e regressão simples |
| 11 | Cap. 11 — Grafos | Árvore geradora mínima; ordenação topológica |
| 12 | Cap. 12 — Próximos passos | Mapear o que estudar a seguir |

:::tip[Revisão espaçada]
No fim de cada semana, releia rapidamente os **checklists** dos capítulos
anteriores. Reveja com mais força o que você não conseguir explicar de cabeça.
:::

## Como estudar cada capítulo

### 1. Pegue a intuição antes do código
Leia "Ideia central" + "Analogia". Tente explicar o conceito em voz alta, com
suas palavras, *antes* de ver a implementação.

### 2. Digite o código você mesmo
Não copie e cole. Digitar fixa o raciocínio e revela os detalhes (índices,
caso-base, condições de parada).

### 3. Teste-se com os exercícios
Resolva **antes** de abrir a resposta. Errar e corrigir ensina mais do que
acertar de primeira lendo a solução.

### 4. Explique o Big-O
Para cada algoritmo, saiba dizer:

- Qual é a complexidade de **tempo** (melhor, médio, pior caso)?
- E a de **espaço**?
- **Por quê?** (qual operação domina o crescimento?)

### 5. Marque o checklist
Cada capítulo tem um "Checklist de domínio". Use-o como critério objetivo para
saber se pode avançar.

## Técnicas que funcionam

- **Active recall**: feche o livro/site e tente reconstruir o algoritmo de memória.
- **Repetição espaçada**: revise em intervalos crescentes (1 dia, 3 dias, 1 semana).
- **Ensinar para aprender**: explique o algoritmo para alguém (ou para uma planta).
- **Desenhar**: rabisque a pilha de chamadas, o array sendo ordenado, o grafo.
- **Variar os dados**: rode o código com listas vazias, de 1 elemento, já ordenadas.

## Registrando seu progresso

Os checklists usam caixas de seleção. Para registrar de verdade o que já domina,
você pode marcar `- [x]` direto no arquivo `.md` do capítulo e commitar — assim
seu progresso fica versionado no Git.

:::note[Onde você está agora]
Pelas pastas do repositório, você já implementou os capítulos **1 a 4**.
Os próximos a atacar são **Tabelas hash (5)** e **BFS (6)**.
:::
