# Função recursiva infinita

def regressiva(i):
    print(i)
    regressiva(i-1)
    
i = int(input('i = '))
regressiva(i)

# RecursionError: maximum recursion depth exceeded while calling a Python object