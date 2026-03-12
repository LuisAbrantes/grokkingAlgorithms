# Não usa recursão 
def procurePelaChave(caixaPrincipal):
    pilha = caixaPrincipal.crieUmaPilhaParaBusca()
    while pilha is not vazia:
        caixa = pilha.pegueCaixa()
        for item in caixa:
            if item.ehUmaCaixa():
                pilha.append(item)
            elif item.ehUmaChave():
                print('Chave encontrada!')
            