def conta(lista):
    if lista == 0:
        return 0
    return 1 + conta(lista[1:])