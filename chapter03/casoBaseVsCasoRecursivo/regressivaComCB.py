def regressiva(i):
    print(i)
    if i <= 1: # Caso-base inserido 
        return
    else:
        regressiva(i-1) # Caso-recursivo
        
i = int(input('i= '))
regressiva(i)