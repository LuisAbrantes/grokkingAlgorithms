# Capítulo 12 — Próximos passos 🚀

## Ideia central

O último capítulo é um **mapa de para onde ir depois**. Ele apresenta, em alto
nível, várias estruturas e técnicas que valem a pena estudar quando você quiser ir
além do básico.

## Temas para explorar

### Árvores

- **Árvores binárias de busca (BST):** busca, inserção e remoção em O(log n)
  médio. Quando você precisa de dados ordenados *e* inserções rápidas.
- **Árvores balanceadas (AVL, rubro-negra):** garantem O(log n) no pior caso,
  evitando que a árvore "degenere" numa lista.
- **B-trees:** otimizadas para disco; a base de muitos **bancos de dados** e
  sistemas de arquivos.
- **Heaps / filas de prioridade:** sempre devolvem o menor (ou maior) elemento em
  O(log n). Aceleram o Dijkstra e algoritmos de MST.

### Índices invertidos

A estrutura por trás de **motores de busca**: mapeia cada palavra → lista de
documentos onde ela aparece. Permite buscas de texto quase instantâneas.

### Transformada de Fourier (FFT)

Decompõe um sinal em suas frequências. Base de compressão de áudio (MP3), imagem
(JPEG), processamento de sinais e muito mais.

### Algoritmos paralelos e distribuídos

- **Paralelismo:** dividir o trabalho entre vários núcleos/máquinas.
- **MapReduce:** padrão para processar volumes enormes de dados em cluster
  (map = transformar; reduce = agregar).

### Filtros de Bloom e HyperLogLog

Estruturas **probabilísticas** que respondem "este item provavelmente já foi
visto?" ou "quantos itens distintos?" usando **pouquíssima memória** (com uma
pequena taxa de erro). Úteis em escala (web, big data).

### Algoritmos de busca/otimização

- **Busca local, simulated annealing, algoritmos genéticos:** para problemas
  enormes (NP-completos) onde você busca uma boa solução, não a perfeita.

### Criptografia (SHA, Diffie-Hellman)

Funções hash criptográficas (SHA) e troca de chaves (Diffie-Hellman) — a base de
senhas, assinaturas e comunicação segura.

## Como continuar estudando

!!! tip "Pratique resolvendo problemas"
    - Reimplemente os algoritmos do livro **sem olhar**.
    - Resolva problemas em plataformas (LeetCode, HackerRank, Beecrowd/URI).
    - Ao estudar um tema novo, escreva uma página de capítulo como as deste site:
      ideia central, analogia, código, Big-O, dúvidas, exercícios.

!!! note "Conecte com o que você já sabe"
    Muito do que vem a seguir reaproveita o básico: heaps usam árvores; bancos de
    dados usam B-trees; busca usa índices invertidos; otimização usa gulosos e DP.
    Revise os [capítulos anteriores](../index.md) sempre que precisar.

## Checklist de domínio

- [ ] Sei o que é uma árvore binária de busca e por que balancear.
- [ ] Conheço a ideia de heap / fila de prioridade.
- [ ] Entendo, em alto nível, índice invertido e MapReduce.
- [ ] Sei o que é uma estrutura probabilística (Bloom/HyperLogLog).
- [ ] Tenho uma lista pessoal de próximos temas para estudar.
