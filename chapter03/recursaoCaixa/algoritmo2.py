# Usa recursão

def procurePelaChave(caixa):
    for item in caixa:
        if item.ehUmaCaixa():
            procurePelaChave(item) # Recursão!
        elif item.ehUmaChave():
            print('chave encontrada!')