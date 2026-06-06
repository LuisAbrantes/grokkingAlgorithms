# Capítulo 10 — K-vizinhos mais próximos (KNN) 🍊

## Ideia central

O **K-vizinhos mais próximos** (K-nearest neighbors, KNN) classifica ou prevê algo
olhando os **K itens mais parecidos**. É um dos algoritmos mais simples de
**aprendizado de máquina** e serve para **classificação** (que categoria?) e
**regressão** (qual número?).

## Analogia

!!! note "Analogia: a fruta desconhecida"
    Você tem uma fruta e quer saber se é laranja ou toranja. Olha as frutas mais
    **parecidas** (tamanho, cor) que você já conhece. Se a maioria das `K` mais
    próximas são laranjas, você chuta "laranja". É votação por semelhança.

## Como funciona

1. Represente cada item como um conjunto de **características** (features), ou seja,
   um ponto num espaço (ex.: `[doçura, tamanho]`).
2. Para um novo item, calcule a **distância** até todos os itens conhecidos.
3. Pegue os **K mais próximos**.
4. **Classificação:** a categoria mais votada entre eles.
   **Regressão:** a média dos valores deles.

### Medindo distância

- **Distância euclidiana:** `sqrt((x1-x2)² + (y1-y2)² + ...)` — "linha reta".
- **Semelhança por cosseno:** compara o **ângulo** entre vetores (útil quando a
  magnitude não importa, ex.: gostos de filmes).

## Implementação em Python

```python title="KNN simples: classificação por votação"
import math
from collections import Counter

def distancia(a, b):
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(a, b)))

def knn_classificar(treino, novo, k=3):
    # treino: lista de (features, rotulo)
    vizinhos = sorted(treino, key=lambda item: distancia(item[0], novo))
    k_mais_proximos = vizinhos[:k]
    rotulos = [rotulo for _, rotulo in k_mais_proximos]
    return Counter(rotulos).most_common(1)[0][0]   # rótulo mais votado

# features: [doçura, tamanho]
treino = [
    ([7, 7], "laranja"),
    ([8, 6], "laranja"),
    ([2, 9], "toranja"),
    ([3, 8], "toranja"),
    ([7, 8], "laranja"),
]

print(knn_classificar(treino, [6, 7], k=3))   # laranja
```

??? note "Variante: regressão (prever um número)"
    ```python
    def knn_regressao(treino, novo, k=3):
        vizinhos = sorted(treino, key=lambda item: distancia(item[0], novo))
        valores = [valor for _, valor in vizinhos[:k]]
        return sum(valores) / len(valores)   # média dos K vizinhos
    ```
    Útil para prever, por exemplo, quantas unidades um produto vai vender com base
    em produtos parecidos.

## Escolhendo features e K

!!! tip "As features são o que mais importa"
    Boas características (relevantes e bem escaladas) valem mais que o algoritmo.
    Normalize escalas diferentes (ex.: preço em milhares × nota de 0 a 5).

!!! info "Quanto vale K?"
    Regra prática comum: **K ≈ √N** (N = número de exemplos). K pequeno é sensível
    a ruído; K grande "borra" as fronteiras. Use número ímpar para evitar empates.

## Dúvidas comuns

??? question "KNN serve para quê na prática?"
    Sistemas de **recomendação** (itens/usuários parecidos), classificação simples
    (spam/não-spam, OCR), e regressão (estimar valores por semelhança).

??? question "Classificação × regressão no KNN?"
    Classificação devolve uma **categoria** (votação dos vizinhos). Regressão
    devolve um **número** (média dos vizinhos).

??? question "Por que normalizar as features?"
    Porque features em escalas muito diferentes distorcem a distância — a de maior
    magnitude domina. Normalizar coloca todas em pé de igualdade.

## Exercícios

??? success "10.1 — KNN com K=1 é boa ideia?"
    Geralmente não: fica muito sensível a ruído/outliers. K maior (ímpar) costuma
    ser mais estável.

??? success "10.2 — Recomendar filmes é classificação ou regressão?"
    Pode ser regressão (prever a **nota** que o usuário daria) usando vizinhos
    parecidos.

??? success "10.3 — O que mais influencia a qualidade do KNN?"
    A escolha e a normalização das **features**.

## Checklist de domínio

- [ ] Entendo a ideia de classificar/prever por semelhança.
- [ ] Sei calcular distância euclidiana entre pontos.
- [ ] Diferencio classificação de regressão no KNN.
- [ ] Sei por que features e normalização importam.
- [ ] Tenho uma regra para escolher K.
