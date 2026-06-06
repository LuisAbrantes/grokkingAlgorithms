# Capítulo 9 — Programação dinâmica 🎒

## Ideia central

**Programação dinâmica** (DP) resolve um problema difícil quebrando-o em
**subproblemas** menores e combinando suas soluções, **sem recalcular** o que já
foi resolvido. Funciona quando os subproblemas se **sobrepõem**. O exemplo clássico
é o **problema da mochila** (knapsack).

## Analogia

:::note[Analogia: preencher uma grade célula por célula]
Você monta uma **tabela** linha a linha. Cada célula usa o valor de células já
preenchidas (subproblemas menores já resolvidos). No fim, a última célula tem a
resposta ótima — e você nunca refez uma conta.
:::

## O problema da mochila

Você tem uma mochila que aguenta um peso máximo e vários itens, cada um com
**peso** e **valor**. Quais itens levar para **maximizar o valor** sem estourar o
peso? A força bruta testaria todos os subconjuntos (O(2ⁿ)); a DP resolve com uma
tabela.

### A receita da DP

1. Crie uma **tabela**: linhas = itens, colunas = capacidades de 1 até o máximo.
2. Para cada célula, a melhor escolha é o **máximo** entre:
   - **não** levar o item atual (valor da linha de cima, mesma coluna);
   - **levar** o item: valor do item + melhor valor do peso restante (célula da
     linha de cima na coluna `capacidade - peso_do_item`).

## Implementação em Python

```python title="Mochila 0/1 com programação dinâmica"
def mochila(pesos, valores, capacidade):
    n = len(pesos)
    # tabela (n+1) x (capacidade+1) preenchida com zeros
    tabela = [[0] * (capacidade + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for c in range(1, capacidade + 1):
            if pesos[i - 1] <= c:                  # o item cabe?
                levar = valores[i - 1] + tabela[i - 1][c - pesos[i - 1]]
                nao_levar = tabela[i - 1][c]
                tabela[i][c] = max(levar, nao_levar)
            else:
                tabela[i][c] = tabela[i - 1][c]    # não cabe: ignora o item
    return tabela[n][capacidade]

pesos   = [1, 3, 4]      # ex.: violão(1), aparelho(3), notebook(4)
valores = [1500, 2000, 3000]
print(mochila(pesos, valores, 4))   # 3500
```

## Outro exemplo: maior subsequência comum (LCS)

DP também resolve a **maior subsequência comum** entre duas strings (útil para
"diff" e busca aproximada):

```python title="Maior subsequência comum (LCS)"
def lcs(a, b):
    tab = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            if a[i - 1] == b[j - 1]:
                tab[i][j] = tab[i - 1][j - 1] + 1     # letras iguais
            else:
                tab[i][j] = max(tab[i - 1][j], tab[i][j - 1])
    return tab[-1][-1]

print(lcs("fish", "fosh"))   # 3  (f, s, h)
```

## Complexidade (Big-O)

:::info[Tempo e espaço]
- **Mochila: O(n × capacidade)** — uma célula por item × capacidade.
- **LCS: O(m × n)** — tamanhos das duas strings.

Muito melhor que a força bruta O(2ⁿ).
:::

## Dúvidas comuns

<details>
<summary>Quando usar programação dinâmica?</summary>

Quando o problema tem **subproblemas sobrepostos** e você precisa da solução
**ótima**. Sinais: "maximizar/minimizar dada uma restrição", grade/tabela
natural, escolhas discretas (levar ou não levar).

</details>

<details>
<summary>Qual a diferença entre DP e memoização?</summary>

Memoização = guardar resultados de chamadas (top-down, recursivo). DP por tabela
= preencher de baixo para cima (bottom-up). As duas evitam recalcular.

</details>

<details>
<summary>DP × guloso?</summary>

Guloso faz escolhas locais e aceita aproximação. DP explora as combinações via
tabela e dá a solução **ótima** exata. Veja o
[cap. 8](08-algoritmos-gulosos.md).

</details>

## Exercícios

<details>
<summary>9.1 — Por que a mochila não é resolvida de forma gulosa (pegar o mais valioso)?</summary>

Porque o item mais valioso pode ocupar peso demais e impedir uma combinação
melhor. A DP avalia as combinações via tabela.

</details>

<details>
<summary>9.2 — Big-O da mochila por DP?</summary>

**O(n × capacidade)**.

</details>

<details>
<summary>9.3 — O que cada célula da tabela representa?</summary>

O **maior valor** possível usando os primeiros `i` itens com capacidade `c`.

</details>

## Checklist de domínio

- [ ] Entendo a ideia de subproblemas sobrepostos.
- [ ] Consigo montar a tabela da mochila e explicar cada célula.
- [ ] Sei a diferença entre DP, memoização e guloso.
- [ ] Sei o Big-O da mochila e da LCS.
