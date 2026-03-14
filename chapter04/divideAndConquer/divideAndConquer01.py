def soma(lista):
    if lista == 0:
        return 0
    return lista[0] + soma(lista[1:])