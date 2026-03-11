def buscaMenor(arr):
    menor = arr[0]
    menorIndice = 0
    for i in range(1, len(arr)):
        if arr[i] < menor:
            menor = arr[i]
            menorIndice = i
    return menorIndice

def ordenacaoPorSelecao(arr):
    novoArr = []
    for i in range(len(arr)):
        menor = buscaMenor(arr)
        novoArr.append(arr.pop(menor))
    return novoArr

print(ordenacaoPorSelecao([5, 3, 2, 9, 10, 2.5]))