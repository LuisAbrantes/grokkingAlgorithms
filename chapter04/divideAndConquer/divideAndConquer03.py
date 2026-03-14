def maximo(lista):
    if len(lista) == 2:
        return lista[0] if lista[0] > lista[1] else lista[1] 
    subMax = maximo(lista[1:])
    return lista[0] if lista[0] > subMax else subMax