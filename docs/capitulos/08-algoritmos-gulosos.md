# Capítulo 8 — Algoritmos gulosos 💰

## Ideia central

Um **algoritmo guloso** (greedy) resolve um problema escolhendo, a cada passo, a
**melhor opção local** — na esperança de chegar a uma boa solução global. É
simples e rápido, e muitas vezes dá uma **boa aproximação** para problemas que não
têm solução exata eficiente conhecida (**NP-completos**).

## Analogia

!!! note "Analogia: encher a mochila com o item mais valioso"
    Numa loja com tempo limitado, você pega sempre o item mais caro que ainda cabe
    na mochila. Nem sempre é a combinação ótima, mas é uma estratégia rápida e
    geralmente boa.

## Problema da cobertura de conjuntos

O exemplo clássico: escolher o **menor número de estações de rádio** para cobrir
todos os estados. Achar a solução exata é muito caro (testar todos os
subconjuntos = O(2ⁿ)). A solução **gulosa** dá uma ótima aproximação rápida:

> A cada passo, escolha a estação que cobre o **maior número de estados ainda não
> cobertos**. Repita até cobrir todos.

## Implementação em Python

```python title="Cobertura de conjuntos (aproximação gulosa)"
estados_necessarios = {"mt", "wa", "or", "id", "nv", "ut", "ca", "az"}

estacoes = {
    "kone":   {"id", "nv", "ut"},
    "ktwo":   {"wa", "id", "mt"},
    "kthree": {"or", "nv", "ca"},
    "kfour":  {"nv", "ut"},
    "kfive":  {"ca", "az"},
}

estacoes_finais = set()

while estados_necessarios:
    melhor_estacao = None
    estados_cobertos = set()
    # Guloso: a estação que cobre mais estados ainda faltantes
    for estacao, estados in estacoes.items():
        cobertos = estados_necessarios & estados   # interseção
        if len(cobertos) > len(estados_cobertos):
            melhor_estacao = estacao
            estados_cobertos = cobertos
    estados_necessarios -= estados_cobertos
    estacoes_finais.add(melhor_estacao)

print(estacoes_finais)   # ex.: {'ktwo', 'kthree', 'kone', 'kfive'}
```

## Problemas NP-completos

Sinais de que um problema pode ser **NP-completo** (e, portanto, candidato a uma
solução gulosa/aproximada):

- O algoritmo fica lento com **muitos itens**.
- "**Todas as combinações** de X" — você precisa testar todos os subconjuntos.
- Não dá para quebrar em subproblemas menores; precisa considerar **todos os
  casos**.
- Envolve uma **sequência** (caixeiro-viajante) ou um **conjunto** (cobertura).

!!! info "Big-O proibitivo"
    - Caixeiro-viajante (força bruta): **O(n!)**.
    - Cobertura de conjuntos (exata): **O(2ⁿ)**.

    Para esses, o guloso troca a garantia de otimalidade por **velocidade** e uma
    resposta "boa o suficiente".

## Dúvidas comuns

??? question "Guloso sempre dá a resposta ótima?"
    **Não.** Ele dá a melhor escolha **local**, que nem sempre leva à ótima global.
    Mas costuma ser uma aproximação muito boa — e às vezes é ótima (depende do
    problema).

??? question "Como reconheço um problema NP-completo?"
    Quando ele exige testar combinações/permutações de tudo e não há forma de
    quebrá-lo eficientemente. Veja a lista de sinais acima.

??? question "Guloso × programação dinâmica?"
    Guloso: rápido, aproximação, escolha local. DP: solução **ótima** exata quando
    há subproblemas sobrepostos. Veja o [cap. 9](09-programacao-dinamica.md).

## Exercícios

??? success "8.1 — Por que não resolver a cobertura de conjuntos de forma exata?"
    Porque seria O(2ⁿ): testar todos os subconjuntos de estações é inviável com
    muitas estações.

??? success "8.2 — A estratégia gulosa da cobertura dá sempre o mínimo?"
    Não necessariamente — dá uma **boa aproximação**, geralmente próxima do ótimo.

??? success "8.3 — Cite dois problemas NP-completos do capítulo."
    Caixeiro-viajante e cobertura de conjuntos.

## Checklist de domínio

- [ ] Sei explicar a estratégia gulosa (escolha local ótima).
- [ ] Consigo implementar a cobertura de conjuntos gulosa.
- [ ] Reconheço sinais de problemas NP-completos.
- [ ] Sei quando aceitar uma aproximação em vez da solução exata.
