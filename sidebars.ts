import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  estudosSidebar: [
    'index',
    'guia-de-estudos',
    {
      type: 'category',
      label: 'Capítulos',
      collapsed: false,
      items: [
        'capitulos/introducao-busca-binaria',
        'capitulos/selection-sort',
        'capitulos/recursao',
        'capitulos/quicksort',
        'capitulos/tabelas-hash',
        'capitulos/busca-em-largura',
        'capitulos/dijkstra',
        'capitulos/algoritmos-gulosos',
        'capitulos/programacao-dinamica',
        'capitulos/k-vizinhos-mais-proximos',
        'capitulos/algoritmos-de-grafos',
        'capitulos/proximos-passos',
      ],
    },
    {
      type: 'category',
      label: 'Referência',
      collapsed: false,
      items: ['referencia/big-o-cheatsheet', 'referencia/glossario'],
    },
    'faq-duvidas',
  ],
};

export default sidebars;
