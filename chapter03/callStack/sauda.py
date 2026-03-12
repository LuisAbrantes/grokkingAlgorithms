def sauda(nome):
    print(f'Ola, ${nome}!')
    sauda2(nome)
    print('Preparando para dizer tchau...')
    tchau()

def sauda2(nome):
    print(f'Tudo bem ${nome}')
    
def tchau():
    print('Tchau!')