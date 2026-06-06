# Capítulo 11 — Algoritmos de grafos 🕸️

## Ideia central

A 2ª edição amplia o tema de grafos com dois clássicos: a **árvore geradora
mínima** (conectar tudo com o menor custo) e a **ordenação topológica** (ordenar
tarefas respeitando dependências). São ferramentas para redes, dependências e
agendamento.

## Árvore geradora mínima (MST)

:::note[Analogia: ligar cidades com cabos]
Você quer conectar várias cidades com cabos de fibra, gastando o **mínimo** de
cabo, sem deixar cidade isolada. A **árvore geradora mínima** é exatamente esse
conjunto de conexões de custo total mínimo.
:::

Dois algoritmos clássicos:

- **Kruskal:** ordena as arestas por peso e vai adicionando a mais barata que
  **não forma ciclo** (usa estrutura *union-find*).
- **Prim:** cresce a árvore a partir de um nó, sempre puxando a aresta mais barata
  que leva a um nó novo (usa fila de prioridade).

```python title="Kruskal (MST) com union-find"
def kruskal(n, arestas):
    # arestas: lista de (peso, u, v); nós numerados de 0 a n-1
    pai = list(range(n))

    def achar(x):
        while pai[x] != x:
            pai[x] = pai[pai[x]]   # compressão de caminho
            x = pai[x]
        return x

    mst, custo_total = [], 0
    for peso, u, v in sorted(arestas):     # arestas em ordem crescente de peso
        ru, rv = achar(u), achar(v)
        if ru != rv:                       # não forma ciclo
            pai[ru] = rv
            mst.append((u, v, peso))
            custo_total += peso
    return mst, custo_total

arestas = [(1, 0, 1), (3, 1, 2), (2, 0, 2), (4, 2, 3)]
print(kruskal(4, arestas))   # ([(0, 1, 1), (0, 2, 2), (2, 3, 4)], 7)
```

## Ordenação topológica

:::note[Analogia: a ordem de vestir roupa]
Você precisa pôr a meia antes do sapato, a camisa antes do paletó. A
**ordenação topológica** dá uma sequência válida de tarefas respeitando todas
as dependências (só funciona em grafos **direcionados e sem ciclos** — DAGs).
:::

```python title="Ordenação topológica (algoritmo de Kahn)"
from collections import deque

def ordenacao_topologica(grafo):
    grau_entrada = {n: 0 for n in grafo}
    for n in grafo:
        for viz in grafo[n]:
            grau_entrada[viz] += 1

    fila = deque(n for n in grafo if grau_entrada[n] == 0)
    ordem = []
    while fila:
        n = fila.popleft()
        ordem.append(n)
        for viz in grafo[n]:
            grau_entrada[viz] -= 1
            if grau_entrada[viz] == 0:
                fila.append(viz)

    if len(ordem) != len(grafo):
        raise ValueError("O grafo tem ciclo — não há ordenação topológica.")
    return ordem

grafo = {
    "acordar": ["cafe", "banho"],
    "cafe": ["trabalhar"],
    "banho": ["trabalhar"],
    "trabalhar": [],
}
print(ordenacao_topologica(grafo))
# ['acordar', 'cafe', 'banho', 'trabalhar']  (uma ordem válida)
```

## Complexidade (Big-O)

:::info[Tempo]
- **Kruskal: O(A log A)** — dominado pela ordenação das arestas.
- **Prim (com heap): O(A log V)**.
- **Ordenação topológica (Kahn): O(V + A)**.
:::

## Dúvidas comuns

<details>
<summary>Qual a diferença entre MST e caminho mais curto?</summary>

MST conecta **todos** os nós com custo total mínimo (sem ciclos). Caminho mais
curto (Dijkstra) minimiza o custo **entre dois** nós específicos. São objetivos
diferentes.

</details>

<details>
<summary>Quando uso ordenação topológica?</summary>

Quando há **dependências**: build de software, currículos com pré-requisitos,
agendamento de tarefas. Exige um grafo **acíclico** e direcionado (DAG).

</details>

<details>
<summary>O que é union-find?</summary>

Uma estrutura que diz rapidamente se dois nós já estão no mesmo grupo
(componente). O Kruskal a usa para detectar ciclos ao montar a MST.

</details>

## Exercícios

<details>
<summary>11.1 — Kruskal ou Prim: qual ordena as arestas?</summary>

**Kruskal** — ele percorre as arestas em ordem crescente de peso.

</details>

<details>
<summary>11.2 — O que impede a ordenação topológica de existir?</summary>

Um **ciclo** no grafo direcionado.

</details>

<details>
<summary>11.3 — Big-O do Kruskal?</summary>

**O(A log A)** — pela ordenação das arestas.

</details>

## Checklist de domínio

- [ ] Sei o que é uma árvore geradora mínima e para que serve.
- [ ] Diferencio Kruskal de Prim.
- [ ] Sei quando e como aplicar ordenação topológica.
- [ ] Entendo o papel do union-find no Kruskal.
- [ ] Distingo MST de caminho mais curto.
