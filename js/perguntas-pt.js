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
  },

    {
      question: "Qual é a principal diferença entre ditongo e hiato?",
      answers: [
        "No ditongo, as vogais se separam; no hiato, elas ficam juntas.",
        "No ditongo, as vogais ficam na mesma sílaba; no hiato, ficam em sílabas diferentes.",
        "O ditongo ocorre apenas com a vogal 'A', enquanto o hiato ocorre com todas.",
        "Não há diferença prática, ambos são nomes para encontros vocálicos."
      ],
      correct: 1 // (Ex: 'Noite' vs 'Sa-ú-de')
    },
    {
      question: "O que são ditongos abertos e quais são os principais exemplos?",
      answers: [
        "São sons fechados como 'ou' e 'ei' em todas as palavras.",
        "São os encontros 'ai', 'au' e 'iu', acentuados em qualquer posição.",
        "São os sons pronunciados com a boca mais aberta: 'éi', 'éu' e 'ói'.",
        "São encontros vocálicos que nunca recebem acento gráfico."
      ],
      correct: 2
    },
    {
      question: "Por que 'ideia' perdeu o acento, mas 'herói' continua acentuado?",
      answers: [
        "Porque o novo acordo retirou o acento de ditongos abertos em paroxítonas, mas manteve em oxítonas.",
        "Porque 'ideia' é uma palavra muito comum e 'herói' é considerada rara.",
        "Porque palavras terminadas em 'A' nunca podem ser acentuadas.",
        "Houve um erro na reforma ortográfica e ambas deveriam ter acento."
      ],
      correct: 0
    },
    {
      question: "Por que 'Méier' e 'destróier' são exceções e continuam acentuadas?",
      answers: [
        "Porque são nomes próprios e termos estrangeiros adaptados.",
        "Porque a regra de acentuação das paroxítonas terminadas em 'R' prevalece sobre a do ditongo aberto.",
        "Porque o ditongo nestas palavras é considerado fechado na pronúncia carioca.",
        "Porque são palavras oxítonas terminadas em ditongo."
      ],
      correct: 1
    },
    {
      question: "Qual é a regra para acentuar o 'I' ou 'U' em hiatos?",
      answers: [
        "Devem ser a primeira vogal do hiato e estar acompanhados de 'S'.",
        "Sempre recebem acento se estiverem no final da palavra.",
        "Devem ser a segunda vogal do hiato, estar sozinhos na sílaba (ou com 'S') e não vir antes de 'NH'.",
        "Apenas o 'U' recebe acento quando forma hiato com a vogal 'O'."
      ],
      correct: 2 // (Ex: 'Sa-í-da', 'Ba-ú')
    },
    {
      question: "Por que a palavra 'rainha' não é acentuada, apesar de possuir um hiato?",
      answers: [
        "Porque o 'I' está seguido de 'NH', o que proíbe o acento pela regra do hiato.",
        "Porque é uma palavra oxítona terminada em 'A'.",
        "Porque o 'I' do hiato não é a vogal tônica da palavra.",
        "Porque palavras com mais de três sílabas perdem o acento no hiato."
      ],
      correct: 0
    },
    {
      question: "Por que palavras como 'história' e 'túneis' recebem acento?",
      answers: [
        "Porque todas as palavras com mais de três sílabas devem ser acentuadas.",
        "Porque são paroxítonas terminadas em ditongo.",
        "Porque o acento serve apenas para indicar que a vogal é aberta.",
        "Porque são proparoxítonas eventuais que terminam em hiato."
      ],
      correct: 1
    }


];

