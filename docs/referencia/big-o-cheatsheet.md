# Big-O — Cheatsheet ⏱️

A notação **Big-O** descreve como o número de operações de um algoritmo **cresce**
conforme a entrada (`n`) aumenta. Ela mede o **pior caso** por padrão e ignora
constantes — o que importa é o formato do crescimento.

## As complexidades mais comuns (da mais rápida à mais lenta)

| Big-O | Nome | Exemplo do livro | `n = 100` ≈ |
|-------|------|------------------|-------------|
| O(1) | constante | acessar `lista[i]`; buscar em tabela hash | 1 |
| O(log n) | logarítmica | **busca binária** | ~7 |
| O(n) | linear | **busca linear**; percorrer uma lista | 100 |
| O(n log n) | log-linear | **quicksort** (médio), merge sort | ~700 |
| O(n²) | quadrática | **selection sort**; comparar todos os pares | 10 000 |
| O(2ⁿ) | exponencial | tentar todos os subconjuntos | 10³⁰ |
| O(n!) | fatorial | **caixeiro-viajante** (força bruta) | enorme |

:::tip[Intuição do log]
`O(log n)` aparece quando você **divide o problema pela metade** a cada passo
(busca binária). Dobrar a entrada custa só **+1** passo. É quase tão bom
quanto O(1).
:::

## Crescimento visual

```
operações
  ^
  |                                   O(2ⁿ)   O(n²)
  |                                  /       /
  |                                 /      /
  |                                /     /        O(n log n)
  |                               /    /        /
  |                              /   /        /          O(n)
  |                             /  /        /         /
  |                            / /       /        /
  |                           //      /       /         _____ O(log n)
  |                          //____/_____/_______------          O(1)
  +----------------------------------------------------------> n
```

## Complexidade dos algoritmos do livro

| Algoritmo | Tempo (médio) | Tempo (pior) | Espaço | Capítulo |
|-----------|---------------|--------------|--------|----------|
| Busca binária | O(log n) | O(log n) | O(1) | [1](../capitulos/01-introducao-busca-binaria.md) |
| Busca linear | O(n) | O(n) | O(1) | [1](../capitulos/01-introducao-busca-binaria.md) |
| Selection sort | O(n²) | O(n²) | O(n) | [2](../capitulos/02-selection-sort.md) |
| Quicksort | O(n log n) | O(n²) | O(log n) | [4](../capitulos/04-quicksort.md) |
| Tabela hash (busca/inserção) | O(1) | O(n) | O(n) | [5](../capitulos/05-tabelas-hash.md) |
| BFS | O(V + A) | O(V + A) | O(V) | [6](../capitulos/06-busca-em-largura.md) |
| Dijkstra (com heap) | O(A log V) | O(A log V) | O(V) | [7](../capitulos/07-dijkstra.md) |

> `V` = número de vértices (nós), `A` = número de arestas.

## Regras práticas para calcular

1. **Ignore constantes**: O(2n) → O(n); O(n/2) → O(n).
2. **Mantenha só o termo dominante**: O(n² + n) → O(n²).
3. **Loops aninhados multiplicam**: dois loops de `n` → O(n²).
4. **Dividir pela metade a cada passo** → O(log n).
5. **Recursão**: tempo ≈ (nº de chamadas) × (trabalho por chamada).

:::warning[Big-O não é tudo]
Para `n` pequeno, constantes importam. Um O(n²) simples pode ser mais rápido
que um O(n log n) cheio de sobrecarga para listas pequenas. Big-O descreve o
comportamento **quando `n` cresce**.
:::
