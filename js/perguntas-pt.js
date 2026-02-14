const questionsPt = [
  {
    question: "1. O que o acento agudo (´) indica e em quais vogais ele pode ser usado?",
    answers: [
      "Indica som fechado e é usado apenas em 'a', 'e' e 'o'.",
      "Indica a sílaba tônica com som aberto e pode ser usado em todas as vogais (a, e, i, o, u).",
      "Indica que a vogal é nasal e só aparece em 'i' e 'u'.",
      "Serve apenas para marcar o plural das palavras terminadas em vogais."
    ],
    correct: 1
  },
  {
    question: "2. O que o acento circunflexo (^) indica e qual sua principal diferença em relação ao agudo?",
    answers: [
      "Indica som aberto, enquanto o agudo indica som fechado.",
      "Indica que a letra deve ser pronunciada mais rapidamente que o acento agudo.",
      "Indica som fechado (ou anasalado) e só é usado nas vogais 'a', 'e' e 'o', ao contrário do agudo que é aberto.",
      "Não há diferença de som, a escolha entre eles depende apenas do tamanho da palavra."
    ],
    correct: 2
  },
  {
    question: "3. Para que serve o acento diferencial e o que mudou com o Novo Acordo Ortográfico na palavra 'pára'?",
    answers: [
      "Serve para distinguir palavras homógrafas; o acento de 'pára' (verbo) foi eliminado, tornando-se 'para'.",
      "Serve para indicar o plural; a palavra 'pára' agora deve ser escrita com trema.",
      "Serve para marcar verbos no passado; 'pára' mudou para 'parra' para evitar confusão.",
      "Serve para destacar gírias; nada mudou na escrita de 'pára' com o novo acordo."
    ],
    correct: 0
  },
  {
    question: "4. Qual é a função comum entre o acento agudo e o circunflexo?",
    answers: [
      "Ambos servem exclusivamente para indicar que a palavra é um substantivo.",
      "Ambos indicam a sílaba tônica da palavra, embora diferenciem o timbre (aberto ou fechado).",
      "Ambos são usados apenas no final das palavras para indicar a entonação de pergunta.",
      "Ambos servem para indicar que uma vogal deve ser muda na pronúncia."
    ],
    correct: 1
  },
  {
    question: "5. Por que os acentos agudo e circunflexo não indicam apenas a tonicidade, mas também o timbre?",
    answers: [
      "Porque o agudo sempre indica som nasal e o circunflexo som mudo.",
      "Porque eles orientam se a vogal tônica deve ser pronunciada de forma aberta (café) ou fechada (você).",
      "Porque o timbre só muda se a palavra for escrita em letras maiúsculas.",
      "Na verdade, eles indicam apenas a força da voz, o som da vogal nunca muda."
    ],
    correct: 1
  },
  {
    question: "6. Por que o conhecimento sobre o acento diferencial ainda é importante hoje?",
    answers: [
      "Porque ele foi totalmente abolido e não existe mais em nenhuma palavra da língua.",
      "Porque ajuda a entender a evolução da língua, embora não existam mais exceções.",
      "Porque alguns acentos diferenciais permanecem, como em 'pôde' (passado) e 'pode' (presente), ou 'pôr' (verbo) e 'por' (preposição).",
      "Porque o acento diferencial agora é obrigatório em todas as palavras repetidas."
    ],
    correct: 2
  },
  {
    question: "7. Por que a palavra 'para' pode ter mais de um significado mesmo sendo escrita da mesma forma?",
    answers: [
      "Devido à existência de palavras homógrafas, onde a grafia é igual, mas a classe gramatical (verbo ou preposição) difere.",
      "Porque o português permite que o escritor invente significados novos para 'para' livremente.",
      "Porque 'para' é uma palavra que sempre deve ser lida de trás para frente.",
      "Porque o acento agudo em 'para' tornou-se invisível, mas continua lá."
    ],
    correct: 0
  },
  {
    question: "8. Qual é o papel do contexto para entender palavras que perderam o acento diferencial?",
    answers: [
      "O contexto é irrelevante, pois a gramática sempre define o sentido isolado.",
      "O contexto é fundamental para identificar se a palavra funciona como verbo, nome ou preposição na frase.",
      "O contexto serve apenas para decidir se a palavra deve ser escrita com letra maiúscula.",
      "O papel do contexto é indicar onde o usuário deve colocar o acento manualmente."
    ],
    correct: 1
  },
  {
    question: "9. Por que não se pode afirmar que todo acento serve apenas para diferenciar palavras?",
    answers: [
      "Porque a maioria dos acentos tem a função primária de marcar a sílaba tônica e a qualidade vocálica (som).",
      "Porque todos os acentos do português são, na verdade, decorativos.",
      "Porque a única função dos acentos é separar as sílabas das palavras complexas.",
      "Porque os acentos só existem para diferenciar palavras estrangeiras."
    ],
    correct: 0
  },
  {
    question: "10. Em síntese, qual a diferença entre os acentos agudo, circunflexo e diferencial?",
    answers: [
      "O agudo é para nomes, o circunflexo para verbos e o diferencial para adjetivos.",
      "Agudo indica som aberto, circunflexo som fechado e diferencial distingue palavras de sentidos diferentes.",
      "Agudo é para o plural, circunflexo para o singular e diferencial para o gênero feminino.",
      "Não há diferença prática, os três podem ser usados alternadamente dependendo da região."
    ],
    correct: 1
  },


  {
    question: "O que é sílaba tônica e como as palavras são classificadas quanto à sua posição?",
    answers: [
      "É a sílaba mais forte da palavra; as palavras podem ser oxítonas, paroxítonas ou proparoxítonas",
      "É a sílaba mais fraca da palavra; as palavras podem ser simples ou compostas",
      "É a sílaba inicial da palavra; as palavras podem ser longas ou curtas",
      "É a sílaba final da palavra; as palavras podem ser acentuadas ou não"
    ],
    correct: 0
  },
  {
    question: "O que são monossílabos tônicos e quando eles recebem acento gráfico?",
    answers: [
      "São palavras de uma sílaba sem som forte e nunca recebem acento",
      "São palavras de uma sílaba com som forte e recebem acento quando terminam em A, E ou O",
      "São palavras de duas sílabas com som forte na última",
      "São palavras de uma sílaba com som fraco e recebem acento sempre"
    ],
    correct: 1
  },
  {
    question: "Quais terminações fazem uma palavra oxítona receber acento gráfico?",
    answers: [
      "Apenas quando terminam em consoante",
      "Quando terminam em A, E, O, EM ou ENS",
      "Quando terminam em I ou U",
      "Quando terminam em ditongo fechado"
    ],
    correct: 1
  },
  {
    question: "Qual é a regra geral de acentuação das palavras paroxítonas?",
    answers: [
      "Todas as paroxítonas são acentuadas",
      "As paroxítonas são acentuadas quando terminam em A, E ou O",
      "As paroxítonas não são acentuadas quando terminam em A, E, O, EM ou ENS",
      "As paroxítonas só são acentuadas se forem longas"
    ],
    correct: 2
  },
  {
    question: "Qual é a regra específica de acentuação das paroxítonas?",
    answers: [
      "São acentuadas quando terminam em consoantes comuns como N ou S",
      "São acentuadas quando terminam em L, N, R, X, PS, Ã, ÃS, UM, UNS, I ou US",
      "Nunca são acentuadas",
      "São acentuadas apenas se tiverem ditongo"
    ],
    correct: 1
  },
  {
    question: "O que mudou no Novo Acordo Ortográfico em relação aos ditongos EI e OI?",
    answers: [
      "Eles passaram a ser sempre acentuados",
      "Deixaram de ser acentuados apenas nas oxítonas",
      "Deixaram de ser acentuados nas paroxítonas, mas continuam nas oxítonas",
      "Foram eliminados da língua portuguesa"
    ],
    correct: 2
  },
  {
    question: "Qual é a regra de acentuação das palavras proparoxítonas?",
    answers: [
      "Nenhuma proparoxítona é acentuada",
      "Somente algumas proparoxítonas recebem acento",
      "Todas as proparoxítonas são acentuadas",
      "As proparoxítonas só recebem acento se forem longas"
    ],
    correct: 2
  },
  {
    question: "O que são proparoxítonas aparentes e por que recebem acento?",
    answers: [
      "São palavras oxítonas disfarçadas",
      "São palavras com ditongo que parecem paroxítonas, mas são proparoxítonas e por isso são acentuadas",
      "São palavras sem sílaba tônica",
      "São palavras que nunca recebem acento"
    ],
    correct: 1
  }
];

