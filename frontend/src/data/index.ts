import type { Song, Author, Category, Chord } from '@/types';

export const chordsData: Chord[] = [
  {
    "id": 1,
    "name": "A",
    "type": "major",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 3
      }
    ],
    "open_strings": [
      2,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 2,
    "name": "A7",
    "type": "dominant 7th",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 3
      }
    ],
    "open_strings": [
      2,
      4,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 3,
    "name": "Am",
    "type": "minor",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      }
    ],
    "open_strings": [
      2,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 4,
    "name": "Am/C",
    "type": "unknown",
    "root_note": "AC",
    "positions": [],
    "open_strings": [],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 5,
    "name": "Asus4",
    "type": "sus4",
    "root_note": "A",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 3
      }
    ],
    "open_strings": [
      2,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 6,
    "name": "B",
    "type": "major",
    "root_note": "B",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 4,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 4,
        "string": 5,
        "finger": 4
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 2,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 7,
    "name": "B7",
    "type": "dominant 7th",
    "root_note": "B",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 4
      }
    ],
    "open_strings": [
      5
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 8,
    "name": "Bb",
    "type": "major",
    "root_note": "Bb",
    "positions": [
      {
        "fret": 1,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 4
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 1,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 9,
    "name": "Bdim",
    "type": "diminished",
    "root_note": "B",
    "positions": [
      {
        "fret": 1,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 2
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1,
      2,
      6
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 10,
    "name": "Bm",
    "type": "minor",
    "root_note": "B",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 4,
        "string": 4,
        "finger": 4
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 2,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 11,
    "name": "C",
    "type": "major",
    "root_note": "C",
    "positions": [
      {
        "fret": 3,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      }
    ],
    "open_strings": [
      4,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 12,
    "name": "C#m",
    "type": "minor",
    "root_note": "C#",
    "positions": [
      {
        "fret": 4,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 6,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 6,
        "string": 4,
        "finger": 4
      },
      {
        "fret": 5,
        "string": 5,
        "finger": 2
      },
      {
        "fret": 4,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 4,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 4
  },
  {
    "id": 13,
    "name": "Cdim",
    "type": "diminished",
    "root_note": "C",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 2
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1,
      2,
      6
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 14,
    "name": "Cm",
    "type": "minor",
    "root_note": "C",
    "positions": [
      {
        "fret": 3,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 5,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 5,
        "string": 4,
        "finger": 4
      },
      {
        "fret": 4,
        "string": 5,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1
    ],
    "barre": {
      "fret": 3,
      "from_string": 2,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 15,
    "name": "D",
    "type": "major",
    "root_note": "D",
    "positions": [
      {
        "fret": 2,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 2
      }
    ],
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 16,
    "name": "D7",
    "type": "dominant 7th",
    "root_note": "D",
    "positions": [
      {
        "fret": 2,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 2
      }
    ],
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 17,
    "name": "Ddim",
    "type": "diminished",
    "root_note": "D",
    "positions": [
      {
        "fret": 1,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 2
      }
    ],
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 18,
    "name": "Dm",
    "type": "minor",
    "root_note": "D",
    "positions": [
      {
        "fret": 2,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 19,
    "name": "E",
    "type": "major",
    "root_note": "E",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 1,
        "string": 4,
        "finger": 1
      }
    ],
    "open_strings": [
      1,
      5,
      6
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 20,
    "name": "E7",
    "type": "dominant 7th",
    "root_note": "E",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 4,
        "finger": 1
      }
    ],
    "open_strings": [
      1,
      3,
      5,
      6
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 21,
    "name": "Eb",
    "type": "major",
    "root_note": "Eb",
    "positions": [
      {
        "fret": 1,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 4,
        "string": 5,
        "finger": 4
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 3
      }
    ],
    "open_strings": [],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 22,
    "name": "Em",
    "type": "minor",
    "root_note": "E",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 3,
        "finger": 3
      }
    ],
    "open_strings": [
      1,
      4,
      5,
      6
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 23,
    "name": "F",
    "type": "major",
    "root_note": "F",
    "positions": [
      {
        "fret": 1,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 1,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 24,
    "name": "F#",
    "type": "major",
    "root_note": "F#",
    "positions": [
      {
        "fret": 2,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 4,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 2,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 25,
    "name": "F#7",
    "type": "dominant 7th",
    "root_note": "F#",
    "positions": [
      {
        "fret": 2,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 3,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 2,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 26,
    "name": "G",
    "type": "major",
    "root_note": "G",
    "positions": [
      {
        "fret": 3,
        "string": 1,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 2,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 3
      }
    ],
    "open_strings": [
      3,
      4,
      5
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 27,
    "name": "G#",
    "type": "major",
    "root_note": "G#",
    "positions": [
      {
        "fret": 4,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 6,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 6,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 5,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 4,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 4,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 4,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 4
  },
  {
    "id": 28,
    "name": "G7",
    "type": "dominant 7th",
    "root_note": "G",
    "positions": [
      {
        "fret": 3,
        "string": 1,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 1,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [
      3,
      4,
      5
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 29,
    "name": "Gm",
    "type": "minor",
    "root_note": "G",
    "positions": [
      {
        "fret": 3,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 5,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 5,
        "string": 3,
        "finger": 4
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 1
      }
    ],
    "open_strings": [],
    "muted_strings": [],
    "barre": {
      "fret": 3,
      "from_string": 1,
      "to_string": 6
    },
    "start_fret": 1
  }
];

export const songsData: Song[] = [
  {
    "id": 1,
    "title": "Se mărită Mona mea",
    "slug": "se-marita-mona-mea-1",
    "content": "Intro : B   Em \n\nRefren : \n\n            D   Em \nAoleu!\n                     D \nCe să mă fac, Doamne eu? \n                 C\nSe mărită Mona mea\n                            B7\n Nu știu Doamne ce-i cu ea\n\n\nEm         A \n Aoleu,\n                      D                       G\n ce să mă fac, Doamne eu?\n                    C             Am \n Se mărită Mona mea\n                             B7\n Nu știu Doamne ce-i cu ea\n\n\nBridge : \n\nEm        D            C              B\n Vino la mine ca pasărea în zbor\nEm        D            C              B\n Eu vin la tine, la tine cu dor \n\n\nVers \n\nEm \nAseară pe stradă\nA                     D\n am întâlnit o fată \nG                 C\nAvea părul negru\nAm                B\n și ochii căprui ",
    "author": {
      "id": 1,
      "name": "Azur",
      "slug": "azur"
    },
    "author_id": 1,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      },
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      }
    ],
    "chords": [
      "B",
      "Em",
      "D",
      "C",
      "B7",
      "A",
      "G",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 2,
    "title": "Ce mult te-am iubit Paraschivo (fingerstyle)",
    "slug": "ce-mult-te-am-iubit-paraschivo-fingerstyle-2",
    "content": "Pentru a simplifica tabulatura, notez\nAmbA acord de Am pe care se ciupeste \ncoarda La in bas și AmbE, acord de Am cu \nMi in bas. \n\nCiupitura pe toate acordurile \nse face coarda bas o data, dupa ciupire \nprimele 3 corzi de langa coarda de bas de\n2 ori, cele 3 fiind in masura egala (de \ntriolet).\n\nE destul de usoara, doar trebuie sa va\nobișnuiți cu ritmul.\n\nIntro: AmbA AmbE AmbA AmbE \n\nDupa care se canta pe coarda E: E, F#,G\nsi se continua cu AmbA AmbE\n\n\nStrofa:\n\nAmbA        AmbE         AmbA  AmbE  \nCe mult te-am iubit Paraschivo\nDm x2                  AmbA AmbE\nTi-am zis-o d-o mie da ori\nDm x2\nSi ca drept dovada                  |\nAmbA              AmbE.             |\nTi-am adus gramada                  | bis\nE x2                     AmbA  AmbE |     \nVreo trei basculante da flori.      |\n\nTe-am luat de la ma-ta de acasa\nIn fusta si far' de jupon\nTi-am luat si poseta\nTi-am luat si jacheta\nSi-o geaca mishto da nailon\nTI-am luat si posheta\nTi-am luat si jacheta\nSi-o rochie misto da nailon\n\nTe-am si cultivat Paraschivo\nTe-am dus la chermeza si meci\nTI-am luat si bomboane ba\nTi-am luat si samantza\nTu faci pe nasoala si pleci\nTi-am luat si bomboane\nTi-am luat si samantza\nFa tu faci pe nasoala si pleci\n\nPa frati-tu si pa tot neamu\nSa nu va mai prind ca ma rogi\nV-am scos dintr-o pivnitza\nCand v-a spart geamu\nPa f**-va-n gat da milogi\nV-am scos dintr-o pivnitza\nCand v-a spart geamu\nPai f**-va-n *** da milogi\n\nLa dragostea mea aia mare\nMai spun 2 vorbe sh-atat\nCa cand iese luna eu scot bracinarii\nPa ma spanzur cu ma-ta pa gat\nCa cand iese luna\nImi scot bracinarii\nMa spanzur cu mata da gat\n\nCand tactu bolnav de holera\nIn 3-4 zile a crepat\nSi bani da tamaie si bani de coliva\nTot Mandea saracu tia dat\nSi bani da coliva\nSi bani da tamaie\nTot Mandea saracu ti-a dat!\n\nDar daca te prind Paraschivo\nLa brat cu-un alt gealat\nIti iau si posheta\nIti bat si gagiul\nSi o suta de pumni iei in cap\nIti bat si posheta\nIti iau si gagiul\nSi-o suta da pumni iei in cap!",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "-",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Fingerstyle"
      }
    ],
    "views": 0
  },
  {
    "id": 3,
    "title": "Jeana",
    "slug": "jeana-3",
    "content": "Ultimul vers din fiecare strofa se poate canta liber, sau folosind acordul E (eu prefer fara). Ca bataie, folosesc jos-jos, pauza, jos-jos.\r\n\r\nAm\r\nJeana era croitoreasă\r\nDm\r\nJan frizeru' o iubea\r\nE\r\nŞi-a murit tuberculoasă\r\nE\r\nJan frizerul o jelea.  Am E\r\n\r\nRefren:\r\nNu mai plânge Jane\r\nPlânsul e de formă\r\nJeana nu e moartă\r\nJeana să transformă.\r\n\r\nŞi când a fost la înmormântare\r\nPlângea şi ultimu' calic\r\nŞi când Jănel mai puse o floare\r\nDoamne plângea şi caii dă la dric.\r\n\r\nNu mai plânge Jane\r\nPlânsul e de formă\r\nJeana nu e moartă\r\nJeana se transformă\r\n\r\nColo-n deal la croitorie\r\nStătea cearceafuri la uscat\r\nCurgea bacilii de fizie\r\nCurgea încet treptat treptat\r\n\r\nNu mai plânge Jane\r\nPlânsul e de formă\r\nJeana nu e moartă\r\nJeana se transformă\r\n\r\nStă paduchii întinţi la soare\r\nStă paduchii câte doi\r\nPăi cum stăteau odinioară\r\nJan şi Jeana amandoi.\r\n\r\nNu mai plânge Jane\r\nPlânsul e de formă\r\nJeana nu e moartă\r\nJeana se transformă.",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "E",
      "Am",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 4,
    "title": "Jana era croitoreasa",
    "slug": "jana-era-croitoreasa-4",
    "content": "capo pe tasta 3\r\nEm, Am, B7, C\r\n\r\ndoua batai diferite:\r\npe strofa bataie lautareasca: j sjs j sj j\r\npe refren bataie de vals: s jj\r\n\r\nEm\r\nJeana era croitoreasă\r\nAm\r\nJan frizeru' o iubea\r\nB7                 Em  Am\r\nŞi-a murit tuberculoasă\r\nC            B7   Em\r\nJan frizerul o jelea\r\n\r\nEm\r\nNu mai plânge Jane\r\nAm           Em        \r\nPlânsul e de formă\r\nB7\r\nJeana nu e moartă\r\nAm    B7      Em\r\nJeana să transformă\r\n\r\nŞi când a fost la înmormântare\r\nPlângea şi ultimu' calic\r\nŞi când Jănel mai puse o floare\r\nDoamne plângea şi caii dă la dric\r\n\r\nNu mai plânge Jane\r\nPlânsul e de formă\r\nJeana nu e moartă\r\nJeana se transformă\r\n\r\nColo-n deal la croitorie\r\nStătea cearceafuri la uscat\r\nCurgea bacilii de fizie\r\nCurgea încet treptat treptat\r\n\r\nNu mai plânge Jane\r\nPlânsul e de formă\r\nJeana nu e moartă\r\nJeana se transformă\r\n\r\nStă paduchii întinţi la soare\r\nStă paduchii câte doi\r\nPăi cum stăteau odinioară\r\nJan şi Jeana amandoi.\r\n\r\nNu maï plânge Jane\r\nPlânsul e de formă\r\nJeana nu e moartă\r\nJeana se transformă.",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "Em",
      "Am",
      "B7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "U",
          "U"
        ],
        "timeSignature": "3/4",
        "name": "Vals"
      }
    ],
    "views": 0
  },
  {
    "id": 5,
    "title": "Sobita din odaie",
    "slug": "sobita-din-odaie-5",
    "content": "D\r\n1. Ma puse dracu sa ma-nsor\r\nA             D\r\nCe mare dandanaie\r\nD\r\nSa-mi iau nevasta cu avere\r\nA         D\r\nO soba de odaie.\r\n\r\n  Ref:\r\nG             D\r\nDur-dur-duru da-i cu cu*u\r\nA            D\r\nS-asa mica cum e ea\r\nG             D\r\nDur-dur-duru da-i cu cu*u\r\nA            D\r\nE sobita mea...\r\n\r\n2. In prima noapte ea n-a vrut\r\nA zis ca-i fac durere\r\nCa-i stric sobita ce i-a dat-o\r\nMa-sa ca avere...\r\n\r\n3. A doua noapte tot la fel\r\nN-a scos macar o vorba\r\nDar eram tanar s-as fi vrut\r\nSa bag un lemn in soba\r\n\r\n4. A treia noapte-am incercat\r\nSobita era sparta\r\nCu multe luni-naitea mea\r\nBagase altu-o cioata\r\n\r\n5. Acum sobita s-a largit \r\nIncap lemne mai multe\r\nNoroc ca am prieteni buni \r\nSa vina sa m-ajute\r\n\r\n6. Vecinii mei sunt oameni buni\r\nNu scot nici ei o vorba\r\nMai vin si ei din cand in cand\r\nSa bage-un lemn in soba...\r\n\r\n\r\nVarianta studenteasca...de munte...de chef..de betie :))\r\n...simplu cu bass si bataie-n jos..",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      },
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "G",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 6,
    "title": "M-am dus sa tai un copac (cadee')",
    "slug": "m-am-dus-sa-tai-un-copac-cadee-6",
    "content": "G        Em\r\nHei hei m-am dus m-am dus\r\n    C        D\r\nSa tai un copac,\r\n              G       Em\r\nHei hei m-am dus m-am dus\r\n       C        D\r\nSa-mi tai un copac,\r\n      G      Em\r\nCu prietenii mei\r\n    C         D\r\nSa tai un copac,\r\n            G     Em\r\nCu toti prietenii mei\r\n      C       D\r\nSa tai un copac,\r\n           G\r\nSi-atunci, am strigat:\r\n\r\nG         \r\nCADEEEEEEEE!!!!!!!!\r\nD            G        \r\nDa-te ba ca cade!\r\nD            G              \r\nDa-te ba ca cade,\r\nG          Em        C     D             \r\ncade cade cade cade cade copacul!\r\n\r\nHei hei m-am dus m-am dus\r\nSa beau un coniac,\r\nHei hei m-am dus m-am dus\r\nSa beau un coniac,\r\nCu toti prietenii mei\r\nSa beau un coniac,\r\nCu prietenii mei\r\nSa tai un copac\r\nSi-atunci am strigat\r\nCade copacul!\r\nSi-atunci am urlat\r\nCurge coniacul!\r\nSi-atunci a venit\r\nUn mic pui de drac,\r\nSi-atunci am urlat:\r\n\r\nCURGEEEEEE!!!!!!!!\r\nCurge coniacul!\r\nPana ne ia dracu'\r\nCurge coniacul,curge \r\nCade copacul\r\n\r\nHei hei m-am dus m-am dus\r\nSa tai un copac,\r\nHei hei m-am dus m-am dus\r\nSa-mi tai un copac,\r\nCu prietenii mei\r\nSa tai un copac,\r\nCu toti prietenii mei\r\nSa tai un copac,\r\nSi-atunci am strigat\r\nCade copacul!\r\nSi-atunci am urlat\r\nCurge coniacul!\r\nSi-atunci a venit\r\nUn mic pui de drac\r\nSi-atunci am urlat:\r\n\r\nCADEEEEEEEE!!!!!!!!!\r\nDa-te ba ca cade!\r\nDa-te ba ca cade\r\ncade cade cade cade cade copacul!",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      },
      {
        "id": 4,
        "name": "Satiră și umor",
        "slug": "satira-si-umor",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "Em",
      "C",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 7,
    "title": "Ma iubeste femeile",
    "slug": "ma-iubeste-femeile-7",
    "content": "Am\r\nMa iubeste femeile\r\nDm          Am      \r\nSi e moarte dupa mine\r\nDm             Am       \r\nToata ziua imi sade pe cap\r\nE                       Am \r\nNu stiu ce sa fac ca sa scap\r\n\r\nAm                   Dm\r\nDom'ne toate ma cere,toate ma vrea\r\nE                Am      \r\nZice ca le place destinctia mea\r\nAm                  Dm    \r\nEu nu stiu ce-i aia dar daca or vrea\r\nE                       Am\r\nLe-o dau pe toata ce sa fac eu cu ea\r\n\r\nMa iubeste femeile\r\nSi e moarte dupe mine,\r\nToata ziua imi sade pe cap,\r\nNu stiu ce sa fac\r\nCa sa scap\r\n\r\nE cate unii dom'ne,n-are noroc,\r\nNu place dom'ne la dame deloc,\r\nDegeaba umbla dupa fomei,\r\nCa nu se uita nici dracu' la ei.\r\n\r\nMa iubeste femeile\r\nSi e moarte dupe mine,\r\nToata ziua imi sade pe cap,\r\nNu stiu ce sa fac\r\nCa sa scap\r\n\r\nCand ies afara ma-mbrac frumos,\r\nImi pun un trening si pantofi cu toc,\r\nToate femeile se uita la mine,\r\nNu stiu da ce, da' cred ca-i da bine.\r\n\r\nMa iubeste femeile\r\nSi e moarte dupe mine,\r\nToata ziua imi sade pe cap,\r\nNu stiu ce sa fac\r\nCa sa scap\r\n\r\nDa'-mi iau nevasta, sa fie-a mea,\r\nNu ca tramvaiul, s-o ia cine vrea,\r\nCa este unii dom'ne, care netoti\r\nIsi ia nevasta biblioteca pentru toti.\r\n\r\nMa iubeste femeile\r\nSi e moarte dupe mine,\r\nToata ziua imi sade pe cap,\r\nNu stiu ce sa fac\r\nCa sa scap\r\n\r\nMa iubeste femeile\r\nSi e moarte dupe mine,\r\nToata ziua imi sade pe cap,\r\nNu stiu ce sa fac\r\nCa sa scap",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      },
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 8,
    "title": "La cap de pod",
    "slug": "la-cap-de-pod-8",
    "content": "C\r\nCand ti-o fi lumea mai draga\r\n  Am\r\n5 bani 10 bani ajutor pt golani\r\nSa-ti cada dreapta beteaga\r\n5 centi 10 centi ajutor pt studenti\r\nSi-am ajuns la cap de pod\r\nCersetor sunt si olog\r\n\r\n                C                   Am\r\nR: La cap de pooood...la cap de poood...\r\n                C                        Am\r\n   La cap de pooood... sa ti-o dau la boooot...\r\n   Si ce-ai sa faci...\r\n   Exercitii umeri craci..\r\n\r\nCand erai la ma-ta fata\r\n5 bani 10 bani ajutor pt golani\r\nTe pisai cat o galeata \r\n5 centi 10 centi ajutor pt studenti\r\nIar acum la maritiiis\r\nNiagara cand te piiiiisi\r\n\r\nR:\r\n\r\nAi jurat ca esti virgina\r\n5 bani 10 bani ajutor pt golani\r\nIar eu fac penicilina \r\n5 centi 10 centi ajutor pt studenti\r\nM-ai facut din om neoooom\r\nCand ma pis ma tin de poooom\r\n\r\nR:\r\n\r\nErai mica n-ai stiut\r\n5 bani 10 bani ajutor pt golani\r\nSi-ai picat la asternut\r\n5 centi 10 centi ajutor pt studenti\r\nAcum esti mare si proasta \r\nAi picat in posta noastra\r\n\r\nR:",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 9,
    "title": "Cand te scuturi de zapada",
    "slug": "cand-te-scuturi-de-zapada-9",
    "content": "G              Am/C             D                G\r\nCand te scuturi de zapada nu stii cat esti de frumosa\r\nOchii-ti verzi, zapada-i alba si se face cald in casa\r\n\r\nJepii Mici ca sa te vada si-au cumparat ochelari\r\nSi in cea mai mare graba i-au chemat pe Jepii Mari\r\nSi calugarii din schit vor cu toti a te vedea\r\nLa cabana au venit, doar pentru iubita mea\r\n\r\nCand te scuturi de zapada nu stii cat esti de frumosa\r\nOchii-ti verzi, zapada-i alba si se face cald in casa\r\n\r\nCrivatul cand te-a zarit n-a mai vrut s-o ia din loc\r\nSi se-aud in departari toti cainii latrand la stana(foc)\r\nDar nu stiu sigur, azi sau maine, pe Morar am sa te sui\r\nSa ne logodim iubit-o, sus in varful muntelui\r\n\r\nCand te scuturi de zapada nu stii cat esti de frumosa\r\nOchii-ti verzi, zapada-i alba si se face cald in casa\r\n\r\nSi calugarii din schit vor cu toti a te vedea\r\nLa cabana au venit, la cabana Padina...\r\nNu stiu sigur, azi sau maine,(pe Morar) pe Morar am sa te sui\r\nSa ne logodim iubit-o, sus la mama dracului\r\n\r\nCand te scuturi de zapada nu stii cat esti de frumosa\r\nOchii-ti verzi, zapada-i alba si se face cald in casa",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      },
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "Am/C",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 10,
    "title": "Femei, femei...",
    "slug": "femei-femei-10",
    "content": "Intro:\r\nDm Am E Am\r\n\r\nI:\r\n\t\tDm\r\nNu e nimeni pe strada\r\n\t\tAm\r\nOchii tristi sa mi-i vada...\r\n\t\tE\r\nA, nu-i nimeni pe strada\r\n\t\tAm\r\nSa ma vada cum plang.\r\n\r\nDoar un gabor de seara,\r\nCe-a venit ca sa-mi ceara\r\nSa-si aprind-o tigara\r\nM-a vazut lacrimand...\r\n\r\nRefren:\r\nFemei, femei, (asa...)\r\nE plina lumea de nebune, (da' cum...)\r\nCine v-a adus pe lume, (cine?)\r\nCine oare v-a facut? (cine oare, ce oare?)\r\nFemei, femei, \r\nE plina lumea de nebune, (buneee)\r\nCine v-a adus pe lume, \r\nCine oare v-a facut? (eu nu)\r\n\r\nII:\r\n\r\nSi-acel gabor de seara, (a gabor)\r\nCe-a venit ca sa-mi ceara, (aaa)\r\nA zis razand catre mine (a, deci gaboru' a zis razand)\r\n\"Wai, decat sa-ti fie rau mai bine sa-ti fie bine!\" (al dracu' bai)\r\n\r\nRefren:\r\n\r\nFemei, femei, (ia zi ba ce)\r\nE plina lumea de nebune, (ei nu mai spune, frate)\r\nCine v-a adus pe lume, (hai, ba, fii serios acuma)\r\nCine oare v-a facut? (aha, aha! aha...)\r\nBarbati, barbati, (aicea, hahahaha)\r\nE plina lumea de c*cati, (aoleu)\r\nDe suparati si de-ncordati, (ia vezi, alo...)\r\nNu stiti decat sa va-mbatati! (ia stai sa te prind o data beat sa vezi tu care-i treaba...)\r\n\r\nDeci autoru' a vrut sa spuna in urmatoarele versuri\r\nCa se plimba singur pe strada si a nimerit de un gabor care a cerut o tigara\r\nCare tigara cand i-a dat-o el a zis ba femeile el era inlacrimat\r\nDe fapt tigara plangea cu niste lacrimi cat crocodilu'\r\nMargineanu era politist si politistu' era\r\nBai femei femei la care politistu' zice \"C*cat!\" nu...\r\nPolitistii zice... zice lu' Margineanu\r\nBa, Margineanu, femeile sunt niste ratati!\r\nMargineanu, baaa analflabetilor!\r\nSi dupa aia ii zice stati sa spun eu ca de fapt C*cati, c*cati, Cine? Ratati,\r\nVoi, cine? Noi? si ei a inteles si ei plangea.\r\nMargineanu plangea la final si era o nebuna care tipa pe fundal.\r\n\r\nAha, ia...\r\n\r\nRefren:\r\n\r\nBarbati, barbati, \r\nE plina lumea de c*cati,\r\nDe suparati si de-ncordati,\r\nNu stiti decat sa va-mbatati!",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "Am",
      "E",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 11,
    "title": "Eu te-am iubit Paraschivo",
    "slug": "eu-te-am-iubit-paraschivo-11",
    "content": "personal folosesc o trecere intre acorduri, ca mai jos:\r\n\r\n   Dm         C           Bm          C          Dm         \r\ne -1----------0-----------2-----------0----------1-----------\r\nB -3----------1-----------3-----------1----------3-----------\r\nG -2----------0-----------4-----------0----------2-----------\r\nD -0----------2-----------4-----------2----------0-----------\r\nA -----3--2---3---2---0---2---0---2---3--------------3---2---\r\nE -----------------------------------------------------------\r\n\r\n C          E           Am\r\n0----------0-----------0----------------\r\n1----------0-----------1----------------\r\n0----------1-----------2----------------\r\n2----------2-----------2----------------\r\n3---2---0--2-----------0----------------\r\n-----------0---2---4--------------------\r\n\r\nascultati melodia si va dati seama repede\r\nimi cer scuze pentru ortografie, nu sunt foarte la curent cu noile reguli.\r\n\r\n\tAm                  E\r\n\tCe mult te am iubit Paraschivo\r\n\r\n\tDm                      Am\r\n\tTi am zis-o de-o mie de ori\r\n\r\n\tDm                       C\r\n\tSi ca drept dovada ti-am adus gramada\r\n\r\n        Bm                      C\r\n\tVreo trei basculante de flori\r\n\r\n\tDm                       C\r\n\tSi ca drept dovada ti-am adus gramada\r\n\r\n        E                       Am      E Am\r\n\tVreo trei basculante de flori\r\n\r\n\r\n\r\n\r\n\tTe-am luat de la mata d'acasa\r\n\tIn fusta si far' de jupon\r\n\tTi-am luat si poseta, ti-am luat si jacheta\r\n\tSi-o geaca misto de nylon\r\n\tTi-am luat si poseta, ti-am luat si jacheta\r\n\tSi-o rochie misto de nylon\r\n\r\n\tTe-am si cultivat Paraschivo\r\n\tTe-am dus la chermeza si meci\r\n\tTi-am luat si bomboane, ti-am luat si samanta fa,\r\n\tTu faci pe nasoala si pleci\r\n\tTi-am luat si bomboane, ti-am luat si samanta fa,\r\n\tTu faci pe nasoala si pleci\r\n\t\r\n\tPe frati-tu si pe tot neamu'\r\n\tSa nu va mai prind ca ma rogi\r\n\tV-am scos dintr-o pivnita cand v-a spart geamu'\r\n\tPai f____a-n gat de milogi\r\n\tV-am scos dintr-o pivnita cand v-a spart geamu'\r\n\tPai f____a-n c_r de milogi\r\n\r\n\tLa dragostea mea aia mare\r\n\tMai spun doua vorbe si-atat\r\n\tCand iese luna imi scot bracinarii fa\r\n\tMa spanzur cu ma-ta de gat,\r\n\tCa cand iese luna imi scot bracinarii\r\n\tMa spanzur cu ma-ta de gat,\r\n\r\n\tCand tac-tu bolnav de holera\r\n\tIn trei patru zile-a crapat\r\n\tSi bani de tamaie si bani de coliva\r\n\tTot mandea saracu ti-a dat\r\n\tSi bani de coliva si bani de tamaie\r\n\tTot mandea saracu ti-a dat\r\n\r\n\tDar daca te prind Paraschivo\r\n\tLa brat cu alt gealat\r\n\tIti iau si poseta iti bat si gagiul\r\n\tSi o suta de pumni iei in cap\r\n\tIti bat si poseta iti iau si gagiul\r\n\tSi-o suta de pumni iei in cap",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      },
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "C",
      "Bm",
      "B",
      "G",
      "D",
      "A",
      "E",
      "Am"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 12,
    "title": "Apa de izvor",
    "slug": "apa-de-izvor-12",
    "content": "G            C              D\r\n1.Marine, Marine, m-as f*te cu tine\r\n  Hai siktir marine, c-am glumit cu tine\r\n\r\n         G                Em\r\n     R:  Ah, ah, apa de izvor,\r\n         C               D\r\n         Mai repede ca mor, mai repede, ca nu mai pot\r\n\r\n2.Pentr-o sticla de Martini\r\n  M-ai lasat sa-ti vad bikinii\r\n  Pentru sticla de Vermut\r\n  M-ai lasat ca sa te f*t\r\n\r\n3.Maria, fetita mea\r\n  Nu mai da din c*r asa\r\n  Nebunatica cum esti\r\n  S-ar putea sa mi-o belesti\r\n\r\n4.Doua babe cracanate\r\n  Faceau scoala de karate\r\n  Ca sa-nvete o figura\r\n  Cum sa stea in cap de p**a\r\n\r\n5.-Ce faci mosule-n tarina?\r\n  -Ma caznesc sa f*t o rima\r\n  Si de mult ce m-am caznit\r\n  Pi**a rimii n-am gasit\r\n\r\n6.Iese popa din Altar\r\n  Cu p**a facuta par\r\n  Preoteasa cum il vede\r\n  Drept la p**a se repede\r\n\r\n7.-Ia fa mina de pe p**a\r\n  Ca-ti dau una peste gura\r\n  -Poti sa-mi dai si peste nas\r\n   Eu de p**a nu ma las\r\n\r\n8.Fata popii cea mai mica\r\n  Si-a bagat in c*r supica\r\n  Si-acum baga degetelul\r\n  Ca sa scoata castronelul",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
      "Em"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 13,
    "title": "A fost odată",
    "slug": "a-fost-odata-13",
    "content": "G Em C D\r\n\r\nG                     Em                  C               D        \r\nA fost odată un vis frumos un vis frumos cu un băiat şi-o fată\r\nG                     Em                  C               D G Em C D\r\nA fost un vis cam dureros cam dureros de te rănesc mă iartă.\r\nA fost un vis născut în munţi, născut în munţi crescut la o cabană\r\nUmbrit de brazi înalţi cărunţi înalţi cărunţi ce astăzi se destramă\r\n\r\n\tRefren:\r\n\r\n\tG                       Em\r\n\tDe ce va destrămaţi uşor vă destrămaţi\r\n\tC            D\r\n\tVoi vise pe poteci\r\n\tG                           Em\r\n\tÎn amintirea munţilor, a munţilor\r\n\tC              D\r\n\tSă dăinuim pe veci\r\n\tG                    Em C D\r\n\tSă dăinuim-im-dim-di....\r\n\t\r\nA fost odată un vis frumos un vis frumos cu un băiat şi-o fată\r\nA fost un vis cam dureros cam dureros de te rănesc mă iartă.\r\nA fost un vis născut în munţi, născut în munţi crescut la o cabană\r\nUmbrit de brazi înalţi cărunţi înalţi cărunţi ce astăzi se destramă\r\n\r\nDim-di-di-di...",
    "author": {
      "id": 2,
      "name": "Mihai Mărgineanu",
      "slug": "mihai-margineanu"
    },
    "author_id": 2,
    "categories": [
      {
        "id": 1,
        "name": "Cântece de mahala",
        "slug": "cantece-de-mahala",
        "description": ""
      },
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "Em",
      "C",
      "D",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 14,
    "title": "Inima de tiganca",
    "slug": "inima-de-tiganca-14",
    "content": "A        E    A\r\nInima de tiganca,\r\nA        E    A\r\nInima de tiganca\r\nA               D\r\nTe cheama si te vrea\r\n          A\r\nSa fim alaturea\r\nA        E    A\r\nInima de tiganca:|\r\n\r\nA              E  A\r\nSi mama a fost neagra\r\nA                 E  A\r\nSi tatii i-a fost draga\r\nA                 D\r\nSi findca s-au placut\r\n               A\r\nPe mine m-au facut\r\nA                   E  A\r\nSi spun ca lor li-s draga\r\n\r\nA               E  A\r\nMai sunt fete negrute\r\nA                 E A\r\nMai mari si mai micute\r\nA                   D\r\nDar toate stiu c-ar vrea\r\n              A\r\nSa aibe inima mea\r\nA        E    A\r\nInima de tiganca\r\n\r\nA                 E A\r\nCând înfloresc castanii\r\nA               E A\r\nSe-aduna toti tiganii\r\nA               D\r\nSi fac afara un foc\r\n                A\r\nSi se încing la joc\r\nA        E    A\r\nInima de tiganca\r\n\r\nA           E  A\r\nDuminica la nunta\r\nA               E  A\r\nCu toti tiganii cânta\r\nA            D\r\nCânta se veselesc\r\n               A\r\nFindca ei se iubesc\r\nA        E    A\r\nInima de tiganca",
    "author": {
      "id": 4,
      "name": "Aurel Moldoveanu",
      "slug": "aurel-moldoveanu"
    },
    "author_id": 4,
    "categories": [
      {
        "id": 6,
        "name": "Cântece țigănești",
        "slug": "cantece-tiganesti",
        "description": ""
      }
    ],
    "chords": [
      "A",
      "E",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 15,
    "title": "Tigancusa",
    "slug": "tigancusa-15",
    "content": "Am         E\r\nLa o margine de sat\r\n             Am\r\nEste-o şatră de ţigani\r\nDm            Am\r\nȘi-o ţigancă frumuşică\r\nE                 Am\r\nMi-a ghicit pe sub castani\r\nDm             Am\r\nȘi-o ţigancă frumuşică\r\nE               Am E Am\r\nMi-a ghicit pe sub castani\r\n\r\n\tRefren (x2):\r\n\r\n\tDm\r\n\tȚigăncuşă eşti frumoasă,\r\n\tAm\r\n\tȚigăncuşa mea\r\n\tE            Am\r\n\tTe iubesc şi nu te pot iuta\r\n\tȚigăncuşă eşti frumoasă, \r\n\tȚigăncuşa mea\r\n\tTe iubesc şi nu te pot iuta\r\n\tLa-rai-ra...\r\n\r\nȚigăncuşă eşti frumoasă\r\nȘi ştii bine să ghiceşti\r\nȘi cu ochii tăi cei negri\r\nPe oricine cucereşti\r\nȘi cu ochii tăi cei negri\r\nPe oricine cucereşti\r\n\r\n\tRefren.\r\n\r\nTrece vara, vine iarna\r\nPleacă şatra de ţigani\r\nȘi cu ea pleacă ţiganca\r\nCe-am iubit-o sub castani\r\nȘi cu ea pleacă ţiganca\r\nCe-am iubit-o sub castani\r\n\r\n\tRefren.",
    "author": {
      "id": 4,
      "name": "Aurel Moldoveanu",
      "slug": "aurel-moldoveanu"
    },
    "author_id": 4,
    "categories": [
      {
        "id": 6,
        "name": "Cântece țigănești",
        "slug": "cantece-tiganesti",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 16,
    "title": "Trec tiganii",
    "slug": "trec-tiganii-16",
    "content": "Intro:\r\n\r\nA7 Dm\r\nG C\r\nAm Dm\r\nE Am\r\n\r\n Am                         E\r\nÎn căruţe colorate trec ţiganii\r\nE7                          Am\r\nO ţigancă-n părul ei şi-adună banii\r\n Dm                        Am\r\nAlta şade într-un colţ, dă cu ghiocul \r\n E                              Am\r\nSă-i ghicească unei fete mari norocul\r\nDm                              Am\r\nUn ţigan cântă cu foc dintr-o vioară\r\nE                            Am\r\nDe cu zori şi pân-se lasă seara.\r\n\r\nAm               E\r\nTrec ţiganii, trec,\r\nE7   \t\t  Am\r\nSe duc şi petrec     \r\n A7                        Dm\r\nTrec ţiganii, nu se mai opresc\r\nE             Am\r\nDar ei se iubesc.\r\n\r\nA7            Dm\r\nSe-aude o vioara\r\nG           C\r\nSe-aude un ţambal\r\nAm               Dm\r\nSe-aude  vocea caldă \r\nE        Am\r\nA unui lăutar\r\nA7         Dm\r\nSe-aude o vioara \r\nG           C\r\nSe-aude un arcuş\r\nAm              Dm\r\nSe-aude glasul dulce \r\nE         Am\r\nAl unui ţigănuş\r\n\r\nLa o margine de drum au aprins focul\r\nşi în jurul focului au încins jocul\r\nNoaptea e cu lună plină fermecată\r\nSeara cu ţiganii n-o uiţi niciodată\r\nCaii pasc la iarbă verde liniştiţi,\r\nIar ţiganii cânta şi sunt fericiţi.",
    "author": {
      "id": 5,
      "name": "Șatra",
      "slug": "satra"
    },
    "author_id": 5,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 6,
        "name": "Cântece țigănești",
        "slug": "cantece-tiganesti",
        "description": ""
      }
    ],
    "chords": [
      "A7",
      "Dm",
      "G",
      "C",
      "Am",
      "E",
      "E7",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 17,
    "title": "Satra",
    "slug": "satra-17",
    "content": "Am                G        C\r\nN-am nici rochii, nici pantofi\r\nF                   C     A7\r\nNici castel cu slujitori\r\nDm               Am\r\nÎn căruţă m-am născut\r\nE            Am E Am\r\nDin căruţă ştiu să cânt.\r\n\r\nLai ra rai ra… (pe aceleaşi acorduri ca şi strofa)\r\n\r\n(2 ori)\r\n\r\nÞiganco cu bani în păr\r\nşi cu sânii ca de măr\r\nHai cu mine-n lumea mare\r\nSă vezi cum e cu parale\r\n\r\nLai ra rai ra…\r\n\r\n(2 ori)\r\n\r\nMăi străine, măi străine\r\nStai în lumea ta cu bine\r\nEu nu-mi las ţiganii mei \r\nPoţi să-mi dai tu mii de lei.",
    "author": {
      "id": 5,
      "name": "Șatra",
      "slug": "satra"
    },
    "author_id": 5,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 6,
        "name": "Cântece țigănești",
        "slug": "cantece-tiganesti",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "G",
      "C",
      "F",
      "A7",
      "Dm",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 18,
    "title": "Asfintit",
    "slug": "asfintit-18",
    "content": "Am             E7     Am\r\nUn asfinţit de soare roşu poleit\r\n      C     G7        C    E7\r\nSe zăresc mii de coviltire\r\n       Am       E7         Am\r\nSunt ţiganii, aurari şi argintari\r\n       F          E7          Am\r\nCare nu au, care n-au niciun hotar\r\n\r\n Am              \r\nHoţi de cai şi de parale\r\n\r\nCe străbat lumea cea mare\r\n Dm\r\nVesel cântă din chitară\r\n  Am\r\nSă se-audă-n depăratare\r\nE7                     Am\r\nLa-la-lai la-la la-la la-la\r\n\r\n\tRefren:\r\n\r\n\tDm\r\n\tLa-la..\r\n\tAm\r\n\tLa-la..\r\n\tE7\r\n\tLa-la..\r\n\tAm\r\n\tLa-la..\r\n\r\n\r\nSeara-n crâşmă ei intrau\r\nCu vin roşu se cinsteau\r\nBanii toţi şi-i cheltuiau\r\nşi din gură, şi din gură-aşa cântau\r\n\r\nZi din strună lăutare\r\nSă se-audă-n depărtare\r\nCă şi tu cu struna ta\r\nAduci ţiganii să bea\r\n\r\n\tRefren.\r\n\r\n\r\nVinul mintea lor o seacă\r\nşi cuţite ies din teacă\r\nSângele curgea şiroaie\r\nCa şi vinul, ca şi vinul din butoaie\r\n\r\nZi din strună lăutare\r\nSă se-audă-n depărtare\r\nCă şi tu cu struna ta\r\nAduci ţiganii să bea\r\n\r\n\tRefren.",
    "author": {
      "id": 5,
      "name": "Șatra",
      "slug": "satra"
    },
    "author_id": 5,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 6,
        "name": "Cântece țigănești",
        "slug": "cantece-tiganesti",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E7",
      "C",
      "G7",
      "F",
      "Dm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 19,
    "title": "La multi ani!",
    "slug": "la-multi-ani-19",
    "content": "G\r\nMulti ani traiasca!\r\nG\r\nMulti ani traiasca!\r\n D   C   G\r\nLa multi ani!\r\n\r\nG\r\nCine sa traiasca?\r\nG\r\nCine sa traiasca?\r\n D  C    G\r\nLa multi ani!\r\n\r\n   G \r\n[prenumele] sa traiasca!\r\n   G\r\n[prenumele] sa traiasca!\r\n D  C    G\r\nLa multi ani!\r\n\r\nG                     C\r\nLa multi ani cu sanatate\r\nC            D            G\r\nSa va dea Domnul tot ce doriti\r\n    G          C\r\nZile senine si fericire\r\n C       D   D    G\r\nLa multi ani sa traiti!\r\n  C               G\r\nMulti ani La multi ani            X2\r\nD          D                 G              G\r\nLa multi ani fericiti sa traiti !La multi ani!",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 20,
    "title": "Asta seara nimeni sa nu doarma",
    "slug": "asta-seara-nimeni-sa-nu-doarma-20",
    "content": "intro C - Dm - G - C - Am - Dm - G - C \r\n\r\n\r\nC                        Dm\r\nAsta seara nimeni sa nu doarma\r\nG                         C\r\nPa-n la ziua toti sa ne distram,\r\nAm                    Dm\r\nOspatarii in pahar sa toarne\r\nG                 C\r\nSi cu lautarii sa cantam,\r\nC                              Dm\r\nAsta seara-n dans ne strange-n brate\r\nG                   C\r\nO fata frumoasa nui pacat ,\r\nAm                     Dm\r\nSeara asta le rugam pe soate\r\nG                   D\r\nSa se faca ca n-au observat.\r\n\r\nC                    Dm\r\nTine-o pe DO, tine-o pe Si, \r\nG                     C\r\nTine-o pe la mandruta mea\r\nAm                      Dm\r\nTine-o pe MI, tine-o pe RE,\r\nG             C\r\nTine-o intr-o petrecere\r\n\r\nAsta seara nimeni sa nu doarma,\r\nCa tot oi dormi cand noi mai fi\r\nNevestico un pahar mai toarna,\r\nBea cu mine nu am cicali\r\nAzi cu alutari dupa mine,\r\nOi porni hai-hui prin Bucuresti\r\nMoi opri unde mi-o fi mai bine,\r\nC-asta seara-i bine sa traiesti\r\n\r\nTine-o pe DO, tine-o pe Si, \r\nTine-o pe la mandruta mea\r\nTine-o pe MI, tine-o pe RE,\r\nTine-o intr-o petrecere\r\n\r\nSa-mi cante si mie lautarul,\r\nCa eu ani in sir va-m tot cantat\r\nSa-l ascult si sa-mi golesc paharul,\r\nInca-un DO Major si am plecat\r\nNui nici un pacat de seara aceasta,\r\nMa mai ametesc eu cu-n cotnar\r\nJur de maine spun la sprituri basta,\r\nN-am sa mai beau decat murfatlar\r\n\r\nTine-o pe DO, tine-o pe Si, \r\nTine-o pe la mandruta mea\r\nTine-o pe MI, tine-o pe RE,\r\nTine-o ïntr-o mere, mereu asa",
    "author": {
      "id": 6,
      "name": "Gică Petrescu",
      "slug": "gica-petrescu"
    },
    "author_id": 6,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      },
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "Dm",
      "G",
      "Am",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 21,
    "title": "Mai intoarce, Doamne roata",
    "slug": "mai-intoarce-doamne-roata-21",
    "content": "Am                                             Dm\r\nMai intoarce doamne roata Sa-mi mai vad o data soarta\r\nAm                        Dm                          |\r\nSa-mi vad anii tineretii Sa-mi vad stralucirea vietii |\r\nE                     Am                              | x2\r\nCare doamne fara rost s-au dus                        |\r\n\r\nAm                                            Dm   \r\nCind aveam vreo 16 ani Doamne ah ce viata mai duceam\r\nAm                       Dm                           |\r\nPrin restaurante baruri, cafenele si localuri         |\r\nE                  Am                                 | x2\r\nDoamne ah ce viata mai duceam                         |\r\n\r\nCind aveam vre-o 20 de ani Doamne ah ce viata mai duceam\r\nMa dusei la primarie sa declar casatorie\r\nDoamne ah ce viata mai duceam\r\n\r\nCind aveam vre-o 30 de ani Doamne ah ce viata mai duceam\r\nO duceam bine cu casa Ma-ntelegeam cu nevasta\r\nSi aveam si doi copii frumosi\r\n\r\nCind aveam vre-o 40 de ani Doamne ah ce viata mai duceam\r\nCopii-mi crescura mari Falnici ca si doi stejari\r\nDoamne ah ce viata mai duceam\r\n\r\nCand am implinit 50 de ani Doamne ah ce viata mai duceam\r\nS-a dus jumatatea vietii, S-au dus anii tineretii \r\nDoamne ah ce viata mai duceam\r\n\r\nCind aveam vre-o 55 de ani Doamne ah ce viata mai duceam\r\nZi si noapte nu dormeam pe copii ii ajutam\r\nDoamne ah ce viata mai duceam\r\n\r\nCind aveam vre-o 60 de ani Ma plimbam prin parcul cu castani\r\nVedeam frunzele picand anii vietii numarind\r\nDoamne ah ce viata am mai dus",
    "author": {
      "id": 1,
      "name": "Azur",
      "slug": "azur"
    },
    "author_id": 1,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      },
      {
        "id": 8,
        "name": "Romanțe",
        "slug": "romante",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 22,
    "title": "Cavaleri ai Mesei Rotunde",
    "slug": "cavaleri-ai-mesei-rotunde-22",
    "content": "D\r\nCavaleri ai Mesei Rotunde\r\n     A              D\r\nSa vedem daca vinu-i bun.  – bis\r\n\r\nRef:\r\nD    G                     D\r\nSa vedem, da, da. da, sa vedem, nu, nu, nu,\r\n      A              D   A   D\r\nSa vedem daca vinu-i bun sau nu . – bis\r\n\r\nEu as bea cinci sau sase sticle\r\nC-o studenta pe genunchii mei . – bis\r\n\r\nRef:\r\nEu as bea, da, da, da, eu as bea, nu, nu, nu,\r\nEu as bea cinci sau sase sticle.\r\n\r\nCioc, cioc, cioc, bate la fereastra,\r\nSa vedem daca-i sotul meu. – bis\r\n\r\nRef:\r\nSa vedem, da, da, da, sa vedem, nu, nu, nu,\r\nSa vedem daca-i sotul meu sau nu. – bis\r\n\r\nDaca-i el, duca-se la dracu’\r\nC-a stricat placerea mea si-a ta. – bis\r\n\r\nRef:\r\nDaca-i el, da, da, da, daca-i el, nu, nu, nu,\r\nDaca-i el, duca-se la dracu’. – bis\r\n\r\nDaca mor vreau sa ma ingroape\r\nIntr-o crasma undevinu-i bun. – bis\r\n\r\nRef:\r\nIntr-o crasma, da, da, da,  intr-o crasma, nu, nu, nu,\r\nIntr-o crasma unde vinu-i bun sau nu. – bis\r\n\r\nIar la cap vreau sa mi se scrie:\r\nAici zace un student betiv! – bis\r\n\r\nRef:\r\nAici zace, da, da, da, aici zace, nu, nu, nu,\r\nAici zace un student betiv sau nu. - bis",
    "author": {
      "id": 7,
      "name": "Necunoscut",
      "slug": "necunoscut"
    },
    "author_id": 7,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      },
      {
        "id": 9,
        "name": "Școala și profesorii",
        "slug": "scoala-si-profesorii",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 23,
    "title": "Marie si Marioara",
    "slug": "marie-si-marioara-23",
    "content": "D               Ddim   Am  Cdim Em\r\nSi-am zis verde salcioara(aaaaaaaaa...)\r\n         A      D\r\nMarie si Marioara\r\nD        Ddim  Am  Cdim  Em\r\nMarie si Marioara(aaaaaaaaaa....)\r\n             A       D\r\nIa un par de ma omoara\r\n\r\nA        D A      D\r\nParul sa fie de plop\r\nB7       Em Bdim F#7          Bm\r\nSa nu ma oooooooomori de tot (mai)\r\nA     D  A      D\r\nMarie si Marioara\r\nB7        Em  Bdim  F#7    Bm\r\nIa un par deeeeeeee ma omoara\r\n\r\nCa de trei zile zac in boala\r\nsi nu-mi zice nimeni \"scoala\"\r\nDe trei zile zac in boala\r\nsi nu-mi zice nimeni \"scoala\"\r\n\r\nDar de-i zice dumneata\r\nM-ar mai trage inima\r\nDar de-i zice dumneata\r\nM-ar mai trage inima (mai)\r\n\r\nSi-am zis verde salcioara\r\nMarie si Marioara\r\nIa un par de ma omoara\r\nIa un par de ma omoara\r\n\r\nParul sa fie de plop\r\nSa nu ma omori de tot (mai)\r\nMarie si Marïoara\r\nIa un par de ma omoara",
    "author": {
      "id": 8,
      "name": "Folclor",
      "slug": "folclor"
    },
    "author_id": 8,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      },
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Ddim",
      "Am",
      "Cdim",
      "Em",
      "A",
      "B7",
      "Bdim",
      "F#7",
      "Bm"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 24,
    "title": "Costică, Costică",
    "slug": "costica-costica-24",
    "content": "Refren:\r\n\r\n\tG\r\n\tCostică, Costică\r\n\t\r\n\tFă lampa mai mică\r\n\t\r\n\tCostică, Costică\r\n\tAm    B7       Em     D\r\n\tAmândoi când stăm\r\n\r\n\tCostică, Costică\r\n\tFă lampa mai mică\r\n\tCostică, Costică\r\n\tCând ne sărutăm\r\n\r\nG\r\nRea e lumea-n mahala\r\nD7           G\r\nCostică, Costică\r\n              Am\r\nSă nu ştie nimenea\r\nB7            Em\r\nFă lampa mai mică\r\n\r\nDe vecini să ne ferim\r\nCostică, Costică\r\nSă putem să ne iubim\r\nCostică, Costică\r\n\r\n\tRefren.\r\n\r\nMii de stele-am împletit\r\nAlbei nopţi cununa\r\nşi-n fereastră s-a ivit \r\nSă ne vadă luna\r\nStau femei în mahala\r\nLângă porticică\r\nSă nu vadă că glumim\r\nFă lampa mai mică\r\n\r\n\tRefren.\r\n\r\n\tEm\r\n\tIa papucii, dă papucii\r\n\tIa papucii, dă papucii...",
    "author": {
      "id": 6,
      "name": "Gică Petrescu",
      "slug": "gica-petrescu"
    },
    "author_id": 6,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      },
      {
        "id": 2,
        "name": "Lăutărești",
        "slug": "lautaresti",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "Am",
      "B7",
      "Em",
      "D",
      "D7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 25,
    "title": "Lunile anului",
    "slug": "lunile-anului-25",
    "content": "G                  C           D        D7       G\r\nCine-i nascut în ianuarie, hai sus, hai sus, hai sus.\r\nG                  C           D        D7       G\r\nCine-i nascut în ianuarie, hai sus, hai sus, hai sus.\r\n\r\nRefren:\r\nG        D     C       D7\r\nSa bea paharul pâna la fund,\r\nEm       D     C       D7\r\nSa bea paharul pâna la fund,\r\n     C         D         G\r\nStai jos, stai jos, stai jos,\r\n    C    D      G\r\nIti multumim frumos.\r\n\r\nG                  C            D        D7       G\r\nCine-i nascut în februarie, hai sus, hai sus, hai sus.\r\nG                  C            D        D7       G\r\nCine-i nascut în februarie, hai sus, hai sus, hai sus.\r\n\r\n...si tot asa,la rand, toate lunile anului...\r\n\r\nG                 C          D        D7       G\r\nCine-i nascut din flori, hai sus, hai sus, hai sus.\r\nG                 C          D        D7       G\r\nCine-i nascut din flori, hai sus, hai sus, hai sus.\r\n\r\nG                 C            D        D7       G\r\nCine s-a renascut vreodat, hai sus, hai sus, hai sus.\r\nG                 C            D        D7       G\r\nCine s-a renascut vreodat, hai sus, hai sus, hai sus.\r\n\r\nG                     C        D        D7       G\r\nSi cine-o sa se nasca iar, hai sus, hai sus, hai sus.\r\nG                     C        D        D7       G\r\nSi cine-o sa se nasca iar, hai sus, hai sus, hai sus.",
    "author": {
      "id": 9,
      "name": "Atlantic",
      "slug": "atlantic"
    },
    "author_id": 9,
    "categories": [
      {
        "id": 7,
        "name": "Aniversări",
        "slug": "aniversari",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
      "D7",
      "Em"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 26,
    "title": "Tu Ardeal",
    "slug": "tu-ardeal-26",
    "content": "Refren:\r\nDm                      Gm    C     F  \r\nTu Ardeal, tu Ardeal, iti suntem osteni, \r\n Dm                          Gm    C  Dm \r\nTemplu sfant, templu sfant, muntii Apuseni.\r\n\r\n\r\nDm              Gm    C             Dm\r\nCa tu ne esti vatra si din piatra-n piatra, \r\n         Gm     C     F \r\nE taria unui neam de moti, \r\nDm              Gm    C              Dm \r\nAsta-i tara noastra, noi nu stam in gazda, \r\n                Gm   C     Dm\r\nHorea nostru-i risipit pe roti.\r\n\r\nRefren\r\n\r\nNe-au furat barbarii, ne-au caznit mai marii, \r\nDar avem in piepturi sapte vieti.\r\nNe vibreaza-n sange, pan' la Putna n-a plÃ¢nge, \r\nClopotul ce bate la Ramet.\r\n\r\nRefren\r\n\r\nNu vrem razbunare, dar atat ne doare, \r\nCa se pierde amintirea-n val.\r\nDoamne da-i tarie, unei maini sa scrie, \r\nBiblia latinului Ardeal.\r\n\r\nRefren\r\n\r\nRauri cresc purtate, tari ce nu sunt toate\r\nDar veni-vor si mai bune vesti\r\nPentru toti romanii care-si sint stapanii\r\nSoarele rasare-n Bucuresti\r\n\r\nRefren\r\n\r\nUnde-i Avram Iancu, sa mai franga rangul, \r\nCelor ce Ardealul vor pustiu.\r\nIata ca rasare, Iancu din oricare, \r\nE-n puterea fiecarui fiu.\r\n\r\nRefren\r\n\r\nPentru aceasta tara, poate sa si moara, \r\nFiecare dintre noi razand.\r\nRestul e dorinta, de ingaduinta, \r\nSi sa fie pace pe pamÃ¢nt.\r\n\r\nRefren\r\n\r\nNu uitati aceasta, dreapta ne e brazda, \r\nCe-am lucrat cu ale noastre maini.\r\nFiecare munte stie aici sa cante, \r\nImnul \"Desteptati-va romani\".",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 11,
        "name": "Despre Patrie",
        "slug": "despre-patrie",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "Gm",
      "C",
      "F",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 27,
    "title": "Nebun de alb",
    "slug": "nebun-de-alb-27",
    "content": "Acorduri: \n\nAm: 002210\nF: 133211\nBm7-5: 023230\nE: 022100\nC: 032013 \nE7: 002434\nDm: 000231\nG: 320033\nC: 332010\n\n---------------------------------------------------------\n\nIntro: Am , F , Bm7-5, E , Am (Am x 2, dupa care urmeaza \nstrofa)\n\nUrmat de:\n\nAm                        F  \nAcum sunt mai pustiu ca-ntotdeauna \nC                        E7 \nDe cand ma simt tot mai bogat de tine \nAm                        F\nImi stau pe tample soarele si luna \nDm              E             Am\nAcum e cel mai rau si cel mai bine \n\nAm                        F\nSi uite n-are cine sa ne-ajute \nC                         E7\nAbia-si mai tine lumea ale sale \nAm                            F\nSi-ntr-un perete alb de muze mute \nDm            E       Am \nNebunii negri cauta o cale \n\nRefren x 2:\n\nDm             G           C  \nSi te iubesc cu mila si cu groaza\n Dm                         E7\nTot ce-i al tau mi se cuvine mie \n F              E           Am\nCa un nebun de alb ce captureaza \n F             E           Am\nRegina neagra pentru o vesnicie \n\nAici se repeta intro-ul:\nAm F Bm7-5 E Am\n\n(ca mai sus)\nPrin gari descreierate accidente \nMarfare triste vin in miezul verii \nIar eu sunt plin de gesturi imprudente \nCa sa te apropii si sa te sperii \n\nJur imprejur privelisti aberante \nCopii fragili ducand parintii-n spate \nPatrund cu sanii gri de os pe pante \nSi albastrosi venind spre zari uscate\n\n---------------------------------------------------------\n\nSucces! Ptr. mai multe informatii imi puteti lasa un mesaj si o sa va raspund cu placere \n:)",
    "author": {
      "id": 11,
      "name": "Emeric Imre",
      "slug": "emeric-imre"
    },
    "author_id": 11,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "F",
      "E",
      "C",
      "E7",
      "Dm",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 28,
    "title": "La o cana cu vin",
    "slug": "la-o-cana-cu-vin-28",
    "content": "cipitura :  T:3-2-1-2-3 pentru acordurile normale(intregi)\r\n            1-2-3-6-2-1 pentru jumatati (D-E)\r\n\r\n\"-\" la acorduri reprezinta jumatate de masura.\r\n\r\nIntro: A A D-E A D-E A A\r\n\r\n   A                A\r\n1.Aseara te-am asteptat\r\n  E         A  \r\n  Si n-ai venit\r\n  A               A\r\n  Poate te-ai suparat\r\n      D  -  E      A \r\n  Sau poate-ai adormit\r\n\r\n     A               D\r\nR: Deseara sa nu m-astepti\r\n     E             A  \r\n   Deseara n-am sa vin  \r\n   A           D \r\n   Pentru doua vorbe\r\n E              A \r\n   La o cana cu vin \r\n              D\r\n   Deseara sa nu m-astepti\r\n      E           A  \r\n   O, nu, n-am sa vin\r\n   A               D  \r\n   Pentru-un \"buna seara\"\r\n   E                 Intro   \r\n   Atat,si-o cana cu vin\r\n\r\n\r\n2.Speram ca intr-o zi\r\n  Si tu sa ma iubesti\r\n  Dar din romante stiu\r\n  Ca sperand gresesti\r\n\r\nRefren:\r\n\r\n3.De-acuma poti sa pleci\r\n  La alta linistit\r\n  Mi-am pierdut si timpul\r\n  Si tot nu m-ai iubit",
    "author": {
      "id": 12,
      "name": "Ecoul",
      "slug": "ecoul"
    },
    "author_id": 12,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      }
    ],
    "chords": [
      "A",
      "E",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 29,
    "title": "Copaci fara padure",
    "slug": "copaci-fara-padure-29",
    "content": "Dm          Asus4   Dm\r\nÎn povestea copacilor goi\r\n                         Gm  \r\nScârţâind într-o singură uşă\r\n                     Dm\r\nEste vorba de noi amândoi\r\n         Asus4          Dm\r\nEste vorba de foc şi cenuşă\r\nDm             Asus4     Dm\r\nDoi copaci fără frunze pe drum\r\n                         Gm  \r\nDupă cum îi priveşte înaltul\r\n                      Dm\r\nDoi copaci prin sărutul de scrum\r\n     Asus4                A \r\nAplecându-se unul spre altul.\r\n\t\r\n\tRefren:\r\n\t\r\n\tDm                       A\r\n\tSpune-mi pădure cu frunza rară\r\n                   A           Dm\r\n\tUnde-i iubirea de astă vară?\r\n                             Gm\r\n\tNu ştie iarna să se îndure\r\n                   Dm    A     Dm\r\n\tDe noi, copacii fără pădure.\r\n\r\nToată vara a fost numai foc\r\nşi-au fost stele în nopţi fără stele\r\nşi prin toamna şederii pe loc\r\nCade ultima frunză spre ele\r\nÎn zadar către tine întind\r\nNişte crengi ce-mi fuseseră braţe\r\nAlte uşi se aud scârţâind\r\nDe tomnatecul vânt să se agaţe.\r\n\r\nNu mai suntem decât doi copaci\r\nVor veni taietori să ne tundă\r\nVor lua crengi toţi copiii săraci\r\nPentru flacăra lor muribundă\r\nşi chiar dacă mă vei mai iubi\r\nPeste crivăţul iernii ce vine\r\nFără braţe cu ochii pustii\r\nN-am să am ce întinde spre tine.\r\n\r\n\r\n\r\nhttp://www.youtube.com/watch?v=9OceatS7ZkM\r\n\r\ncam asa sunt din ce mi-am dat eu seama de-aici .",
    "author": {
      "id": 13,
      "name": "Tatiana Stepa",
      "slug": "tatiana-stepa"
    },
    "author_id": 13,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "Asus4",
      "Gm",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 30,
    "title": "Ostasii luminii colinda",
    "slug": "ostasii-luminii-colinda-30",
    "content": "C#m             E      B    G#    C#m\r\nLarg deschideti poarta sufletelor noastre\r\nE      B      E      B       G#     C#m\r\nN-am venit sa cerem, ci-am venit sa dam.   - bis\r\n\r\nRefren:\r\nE            B     E      B   C#m\r\nDalbe si iar dalbe flori adevarate\r\nE            C#m  B           C#m\r\nCa si vestea buna ce v-o colindam.\r\nE            B     E      B   C#m\r\nDalbe si iar dalbe flori adevarate\r\nE            C#m   B          C#m\r\nDalbe si iar dalbe florile de mar.\r\n\r\n\r\nDincolo de muntii vietii si-ai himerii\r\nLe-am cules azi noapte florile de mar.\r\nLe-am cules din muntii unde vesnic merii\r\nRoditori de aur cresc intr-adevar.\r\n\r\nFlorile pe care le-am cules azi noapte\r\nVor rodi in brazda sufletelor toate.\r\nMerele de aur, merele visate\r\nDe colindatorii veacurïlor toate.",
    "author": {
      "id": 14,
      "name": "2 și jumătate",
      "slug": "2-si-jumatate"
    },
    "author_id": 14,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "C#m",
      "E",
      "B",
      "G#",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 31,
    "title": "Totusi, iubirea",
    "slug": "totusi-iubirea-31",
    "content": "Am                   Dm\r\nSi totusi e stare de veghe\r\n   C        E       Am\r\nSi totusi murim repetat\r\nAm                      Dm\r\nSi totusi mai cred în pereche\r\n   C        E         Am\r\nSi totusi ceva sa-ntâmplat.\r\n\r\nPretentii nici n-am de la lume\r\nUn pat, întuneric si tu\r\nIntrăm în amor fără nume\r\nFiorul ca fulger căzu. \r\n\r\nRefren:\r\n\r\n    Am                 Dm\r\nSi totusi există iubire\r\n   E                 Am\r\nSi totusi există blestem\r\nAm                      Dm\r\nDau lumii, dau lumii de stire\r\n  E                 Am\r\nIubesc, am curaj si mă tem.\r\n\r\nMotoarele lumii sunt stinse\r\nRetele pe căi au căzut\r\nUn mare pustiu pe cuprins e\r\nTrezeste-le tu c-un sărut.\r\n\r\nAcum te declar Dumnezee\r\nEu însumi mă simt Dumnezeu\r\nContinuă lumea femeie\r\nCu plozi scrisi în numele meu.\r\n\r\nRef:\r\n\r\nAfară roiesc întunerici\r\nAici suntem noi luminosi\r\nSe ceartă-ntre ele biserici\r\nFăcându-si acelasi repros.\r\n\r\nSi tu si iubirea există\r\nSi moartea există în ea\r\nImi place mai mult când esti tristă\r\nTristetea, de fapt, e a ta.\r\n\r\nRef:\r\n\r\nGenunchii mi-i plec pe podele\r\nCu capul mă sprijin de cer,\r\nTu esti în puterile mele,\r\nDesi închizitii te cer.\r\n\r\nCe spun se aude aiurea,\r\nMă-ntorc la silaba dintâi,\r\nPrăval peste tine pădurea:\r\nAdio, adica ramai.\r\nRef:",
    "author": {
      "id": 15,
      "name": "Mayai Gyozo",
      "slug": "mayai-gyozo"
    },
    "author_id": 15,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "C",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 32,
    "title": "Amor cubist",
    "slug": "amor-cubist-32",
    "content": " Dm               A7                  Dm\r\n Sa mergem într-o seara departe-n mahalale\r\n                  A7             Dm\r\n Si noaptea sa ne lege cu negurile ei\r\n       F          C                    Dm\r\n Sa-ti dau îmbratisarea mai vrei sau nu mai vrei\r\n                 A7                 Dm\r\n Si eu sa cad în focul îmbratisarii tale.\r\n\r\nRrfren:\r\nDm            A7               Dm\r\nLa margini te chem sa fugim undeva\r\n               A7        Dm\r\nCa si sufletul meu e o mahala.\r\n    F          C               Dm\r\nLa margini te chem sa fugim undeva\r\n               A7        Dm\r\nCa si sufletul meu e o mahala.\r\n\r\n\r\nAi vrea sa fie iarna, ai vrea sa fie toamna\r\nAi vrea ca liliacul sa înfloreasca brusc\r\nSa-ti fiu arheologul tu vasul meu de trusc\r\nAi vrea sa fie-o vreme ce nu stii ce înseamna.\r\n\r\nRrfren...\r\n\r\nDar hai în mahalale tinându-ne de mâna\r\nPe strazi cu becuri stranii de-un galben violet\r\nCând picura cismele pe lânga un bufet\r\nCu firma posomorâta si preturi la-ndemâna.\r\n\r\nRrfren...\r\n\r\nParalelipipedic traim în nopti egale\r\nIubirea noastra moare într-un oras cubist\r\nS-o inventam întreaga cât esti, cât mai exist\r\nÎmbraca-te aiurea si hai în mahalale.",
    "author": {
      "id": 16,
      "name": "Andrei Păunescu",
      "slug": "andrei-paunescu"
    },
    "author_id": 16,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "A7",
      "F",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 33,
    "title": "Cantec pentru Charlie Chaplin",
    "slug": "cantec-pentru-charlie-chaplin-33",
    "content": "Am                              Dm           E \r\nRîdeţi, rîdeţi, rîdeţi, rîdeţi, cu pămînt cu tot\r\nAm                       E           Am\r\nPînă cînd vă mai suportă ultimul Charlot.\r\nAm                            Dm            E \r\nNu de el cînd rîdeţi, rîdeţi, rîdeţi voi de voi, \r\nAm                           E             Am\r\nCă sunteţi grăbiţi şi cinici şi inculţi şi goi.\r\n\r\nE                             Am\r\nCharlie Chaplin calcă-n dodii cu pantofi strîmbaţi,\r\nDm                         E  \r\nHohotiţi dar n-aveţi ştire voi ce strîmb călcaţi.\r\nAm                    Dm       E\r\nFace el cum face raţa şi e caraghios\r\nAm                          E                Am\r\nDar ce cîrduri mari de raţe trec în sus şi-n jos.\r\n\r\nRefren:\r\nDm         G                  C\r\nO, Charlie Chaplin, înger vagabond\r\nDm            Am   E         Am\r\nHai, bătrîne, vino de sub orizont.\r\nDm         G                   C\r\nO, Charlie Chaplin, hohot interzis\r\nDm         Am      E            Am \r\nRedeschide teatrul ce ni l-au închis!\r\n\r\nAm                        Dm        E  \r\nNu mai sunt deloc parale, casierii, trişti, \r\nAm                    E            Am\r\nAstăzi dau autografe, nu bani la artişti.\r\nAm                                 Dm        E \r\nS-au născut prea mulţi pragmatici, muzica nu pot,\r\nAm                          E              Am\r\nHai, Pămînt, reaminteşte-ţi că ai fost Charlot!\r\n\r\nE                      Am\r\nUn şofer cu leafă mică şi cu mult umor\r\nDm                      E\r\nMi te-a readus în minte ca pe-un luptător.\r\nAm                         Dm          E \r\nCă ai fost al celor simpli şi al lor rămîi,\r\nAm                      E          Am\r\nPeste toată lumea veche hohotul dintîi.\r\n\r\n\r\nRefren...\r\n\r\nAm                 Dm             E\r\nLăutarii împrumută bani pentru sacîz,\r\nAm                       E          Am\r\nCifra noastră de afaceri hohotul de rîs.\r\nAm                   Dm          E \r\nFacem bancă mondială şi băgăm în ea\r\nAm                      E             Am\r\nRîsul sărăcimii triste, ca dobînzi să dea.\r\n\r\nE                Am \r\nNu există omenie unde nu eşti tu,\r\nDm                        E\r\nCă tu eşti curajul nostru de a spune NU!\r\nAm                         Dm             E \r\nÎnvîrteşte-te prin Cosmos, spune ce-ai de spus, \r\nAm                        E          Am\r\nÎntre-atîtea stele moarte tu Planeta Rîs!\r\n\r\nRefren...\r\n\r\n(cat despre mana dreapta...)\r\n\r\ne|----0---0---0---0-\r\nB|----1---1---1---1-\r\nG|----2---2---2---2-\r\nD|------------------\r\nA|--0---0---0---0---\r\nE|------------------\r\n\r\n(e o piesa destul de simplutza, asha ca... have fun playing it! :) )",
    "author": {
      "id": 17,
      "name": "Victor Socaciu",
      "slug": "victor-socaciu"
    },
    "author_id": 17,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E",
      "G",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 34,
    "title": "Trăiască România",
    "slug": "traiasca-romania-34",
    "content": "Mkay, dacă ignoraţi versurile cu partidul şi cu Ceauşescu, este un cântec\r\npatriotic fain (adică dacă se scot anumite versuri şi refrenul legat de nea \r\nNicu, este chiar OK).\r\n\r\nNu sunt prea sigur de acorduri pe alocuri, aşadar dacă aveţi sugestii, băgaţi\r\n şi voi un comentariu. De asemenea, la final am lăsat şi acorduri pentru cei \r\npe care nu-i duce vocea atât de sus (ca mine, par example). În plus, la un \r\nmoment dat nu se înţeleg versurile foarte bine, aşadar acolo am lăsat trei \r\nsemne de întrebare.\r\n\r\nAm                         E             Am\r\nDacă ne-nfruntă munţii, cu munţii ne vom bate\r\nAm                     E           Am\r\nPentru lumina ţării şi pentru libertate\r\nC           G           C          G\r\nAici ne e cuvântul când îl avem de spus\r\nC              G       E               Am\r\nDecât slujirea ţării nimic nu-i mai presus\r\nAm                       E            Am\r\nJurăm credinţă luptei oricât ar fi de grea\r\nAm                      E              Am\r\nJurăm că pentru ţară şi viaţa ne-o vom da\r\nC              G          C             G\r\nJurăm să nu ne mintă nici clipa, nici vecia\r\n\r\nRefren:\r\nC             G         E         Am\r\nTrăiască libertatea, trăiască România\r\nC             G         E         Am\r\nTrăiască libertatea, trăiască România\r\nC\r\nTrăiască-n fericire şi linişte poporul\r\nC                    E          Am\r\nTrăiască România, trăiască tricolorul\r\nC\r\nTrăiască-n fericire şi linişte poporul\r\nC                    E          Am\r\nTrăiască România, trăiască tricolorul\r\n\r\nDar ţara nu se face cu laşi, cu apatrizi\r\nIubirea nu te scuză când ochii îi inchizi\r\nSă curăţăm tot răul din viaţa României\r\nCă noi suntem partidul şi ţara omeniei\r\nNu creadă hoţii muncii că ei sunt mari si tari\r\nNoi suntem patrioţii revoluţionari\r\nAvem contract pe viaţă cu visul şi cu glia\r\n\r\nRefren\r\n\r\nA noastră este ţara, o moştenim din plin\r\nVa trebui întreagă s-o dam celor ce vin\r\nLa cei nascuţi şi astăzi, şi mâine, şi poimâine\r\nNici pâine fără muncă, nici muncă fără pâine\r\nNici călăreţi pe aer, nici cai fără călări\r\nNici ţară fără lume, nici lume fără ţări\r\nSa crească-n lume pacea, dreptatea, bucuria\r\n\r\nRefren\r\n\r\nTrăiască muncitorii, ţăranii, cărturarii\r\nTrăiască demnitatea cea fără de avarii\r\nDacă renunţi la luptă n-ai ce sa mai aştepţi\r\nNimica nu se face-n poziţie de drepţi\r\nSă facem România prin tot şi pentru toţi\r\nUn teritoriu liber de-orice prejudecăţi\r\nSă fie al nostru dreptul şi-a noastră datoria\r\n\r\nRefren 2:\r\nTrăiască libertatea, trăiască România\r\nTrăiască libertatea, trăiască România\r\nTrăiască Ceauşescu, partidul şi poporul\r\nTrăiască România, trăiască tricolorul\r\nTrăiască Ceauşescu, partidul şi poporul\r\nTrăiască România, trăiască tricolorul\r\n\r\nJurăm din milioane de inimi şi destine\r\nDin orice fel de sânge ne murmura în vine\r\nJurăm bătrân şi tânăr, femeie şi bărbat\r\nCredinţa României necondiţionat\r\nCă ţara-i bogăţia ce veşnic ne rămâne\r\nşi glasul ei ce îndamnă ”Deşteaptă-te, române!”\r\nNu ne-nspăimântă nimeni cu forţa sau pustia\r\n\r\nRefren 2\r\n\r\nSuntem de e nevoie o ţară de soldaţi\r\nSuntem de e nevoie un lanţ de munţi Carpaţi\r\nDurerea ţării noastre facută-i să ne doară\r\nNe place libertatea ca oameni şi ca ţară\r\nşi soarele dreptăţii să lumineze sfânt\r\nO ţară-n roşu, galben şi albastru pe pământ\r\nAceasta-i viaţa noastră, aceasta ni-i tăria\r\n\r\nRefren\r\n\r\nAlte acorduri:\r\nAm devine Em\r\nE devine B (sau B7, că-i mai comod aşa şi sună bine)\r\nC devine G\r\nG devine D",
    "author": {
      "id": 18,
      "name": "Nicu Alifantis",
      "slug": "nicu-alifantis"
    },
    "author_id": 18,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 11,
        "name": "Despre Patrie",
        "slug": "despre-patrie",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "C",
      "G",
      "A",
      "Em",
      "B",
      "D"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 35,
    "title": "Cand s-o-mpartit norocu (S-asa-mi vine cateodata)",
    "slug": "cand-s-o-mpartit-norocu-s-asa-mi-vine-cateodata-35",
    "content": "intro\r\n   Am\r\n|---0---0-----0---0---|\r\n|---1---1-----1---1---|\r\n|---2---2-----2---2---|\r\n|---2---2-----2---2---|\r\n|-0-0---0---0-0---0---|\r\n|-----0---------0-----|\r\n\r\n   Am        E        Am     G         C       G        Am\r\n|---0---0----0---0----0--0----3---3-----0---0---3---3----0---0--\r\n|---1---1----0---0----1--1----3---3-----1---1---3---3----1---1--\r\n|---2---2----1---1----2--2----0---0-----0---0---0---0----2---2--\r\n|---2---2----2---2----2--2----0---0---2-2-2-2---0---0----2---2--\r\n|-0-0---0--2-2---2--0-0--0--2-2-2-2---3-3-3-3-2-2-2-2--0-0---0--\r\n|-----0------0-0-0------0---3-3-3-3-----------3-3-3-3------0----\r\n\r\n  E         Am      E       Am\r\n|---0---0----0---0----0---0--0---0----|\r\n|---0---0----1---1----0---0--1---1----|\r\n|---1---1----2---2----1---1--2---2----|\r\n|---2---2----2---2----2---2--2---2----|\r\n|-2-2---2--0-0---0--2-2---2--0---0----|\r\n|---0-0-0------0-0----0-0-0----0------|\r\n\r\n  Am            E          Am   G\r\n  S-asa-mi vine cateoadata dorule\r\n  C             G\r\n  S-asa-mi vine cateodata\r\n  Am           E\r\n  Sa dau cu cutitu-n piatra\r\n  Am           E            Am      Am\r\n  Sa dau cu cutitu-n piatra dorule.......\r\n\r\n  Una din cele mai frumoase melodii romanesti, m-am mirat cand n-am\r\n vazut-o transpusa pe site.",
    "author": {
      "id": 19,
      "name": "Ducu Bertzi",
      "slug": "ducu-bertzi"
    },
    "author_id": 19,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "C"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 36,
    "title": "Amintire cu haiduci",
    "slug": "amintire-cu-haiduci-36",
    "content": "Capo pe fretul 1 sau pe fretul 2.Varianta de pe albumul Cenaclul flacara este cu \r\ncapo pe fretul 1. Cea de pe albumul Best of...este cu capo pe fretul 2.\r\n\r\n\r\nIntro: Em D Em G D Em\r\n\r\nEm         G     D        Em\r\nÎn codru verde nu se mai vede \r\nD          G      D      Em\r\nNu se mai pierde urmă de cal\r\nEm         G     D     Em\r\nPe la izvoare nu mai apare \r\nD        G      D         Em\r\nUmbra călare a vreunui haiduc.\r\n\r\n\r\nEm         G    D        Em\r\nUnde s-au dus, când au apus \r\nD        G      D      Em\r\nAnii de sus ai gloriei lor\r\nEm         G         D        Em\r\nUnde-s pistoalele, unde-s pumnalele \r\nD          G      D      Em\r\nCaii si flintele haiducilor.\r\n\r\n\r\nRefren:Aceleasi acorduri ca pe strofe.\r\n\r\n\r\nEm         G    D        Em\r\nLa drumul mare nu mai apare \r\nD         G     D        Em\r\nSă mai omoare câte-un ciocoi\r\nEm            G     D        Em\r\nSă-i ia toti banii pentru ţăranii\r\nD          G      D        Em\r\nPentru sărmanii plini de nevoi.\r\n\r\n\r\nEm         G     D      Em\r\nUnde s-au dus, când au apus \r\nD        G      D      Em\r\nAnii de sus ai gloriei lor\r\nEm         G         D        Em\r\nUnde-s pistoalele, unde-s pumnalele \r\nD          G      D      Em\r\nCaii şi flintele haiducilor.",
    "author": {
      "id": 20,
      "name": "Valeriu Sterian",
      "slug": "valeriu-sterian"
    },
    "author_id": 20,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "D",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 37,
    "title": "Cana cu vin",
    "slug": "cana-cu-vin-37",
    "content": "C\r\nAseara te-am asteptat\r\nG                  C\r\nSi n-ai venit\r\n           C\r\nPoate te-ai suparat\r\nF     G            C\r\nPoate-ai adormit.\r\n\r\nC                   F\r\nR: Deseara sa nu m-astepti\r\nG                   C\r\nDeseara n-am sa vin\r\nPentru doua vorbe\r\nLa o cana cu vin.\r\n\r\nDeseara sa nu m-astepti\r\nO, nu, n-am sa vin\r\nPentru \"Buna, seara!\"\r\nAtât, si-o cana cu vin.\r\n\r\n2.Speram ca într-o zi\r\nSi tu sa ma iubesti\r\nDar din romante stiu\r\nCa sperând gresesti.\r\n\r\n3.De-acuma poti sa pleci\r\nLa alta linistit\r\nMi-am pierdut si timpul\r\nSi tot nu m-ai iubit.",
    "author": {
      "id": 12,
      "name": "Ecoul",
      "slug": "ecoul"
    },
    "author_id": 12,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "G",
      "F"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 38,
    "title": "Ruga pentru parinti",
    "slug": "ruga-pentru-parinti-38",
    "content": "Gm                         Cm\r\nEnigmatici şi cuminţi\r\n\r\nE||-------|-------3--------3--------|-------3--------3--------|\r\nB||-------|----------3--------3-----|----------4--------4-----|\r\nG||-------|-------------3--------3--|-------------5--------5--|\r\nD||-------|-------------------------|-------------------------|\r\nA||-------|-------------------------|--3----------------------|\r\nE||-------|--3----------------------|-------------------------|\r\n\r\n\r\n     F                     Bb \r\n   Terminându-şi   rostul lor\r\n                      \r\n-------1--------1--------|-------1--------1--------||\r\n----------1--------1-----|----------3--------3-----||\r\n-------------2--------2--|-------------3--------3--||\r\n-------------------------|-------------------------||\r\n-------------------------|--1----------------------||\r\n--1----------------------|-------------------------||\r\n\r\netc.. pe următoarele acorduri:\r\n\r\nGm              Cm\r\nEnigmatici şi cuminţi\r\nF                Bb\r\nTerminându-şi rostul lor\r\nGm              Cm\r\nLângă noi se sting şi mor\r\nF                     Bb\r\nDragii noştri, dragi părinţi\r\n\r\nCm              Gm\r\nDă-ni-i Doamne înapoi\r\nEb                   Dm\r\nCăci şi-aşa au dus-o prost\r\nCm                    Gm\r\nşi fă-i tineri cum au fost\r\nEb          D         Gm\r\nFă-i mai tineri decât noi\r\n\r\nPentru cei ce ne-au făcut\r\nDă un ordin, dă ceva\r\nSă-i mai poţi întârzia\r\nSă o ia de la început. \r\n \r\nAu plătit cu viata lor\r\nAle fiilor erori,\r\nDoamne fă-i nemuritori\r\nPe părinţii care mor. \r\n \r\nIa priviţi-i cum se duc,\r\nIa priviţi-i cum se sting,\r\nLumânări în cuib de cuc,\r\nParcă tac, si parcă ning. \r\n \r\nPlini de boli si suferinţi\r\nNe întoarcem în pământ,\r\nCât mai suntem, cât mai sunt,\r\nMângâiati-i pe parinti. \r\n \r\nE pământul tot mai greu,\r\nDespărţirea-i tot mai grea,\r\nSărut-mâna, tatăl meu,\r\nSărut-mâna, mama mea. \r\n \r\nDar de ce priviţi asa,\r\nFata mea si fiul meu,\r\nEu sunt cel ce va urma \r\nDragii mei mă duc si eu.\r\n\r\nSărut-mâna, tatăl meu,\r\nSărut-mâna, mama mea.\r\nRămas bun, băiatul meu,\r\nRămas bun, fetita mea, \r\n \r\nTatăl meu, băiatul meu,\r\nMama mea, fetiţa mea.",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Gm",
      "Cm",
      "F",
      "Bb",
      "Eb",
      "Dm",
      "D",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 39,
    "title": "La nunta ta",
    "slug": "la-nunta-ta-39",
    "content": "Originalul e în F#m, dar pentru comoditate am transcris în Em\r\n\r\nEm          B7       Em\r\nEu vin la nunta ta, iubito\r\n                    Am\r\nȘi nu voiesc nimic să-ți cer\r\n                C        B\r\nDar roagă-ți nașii să mă lase\r\n       Am      C       B7\r\nSă-ți cânt la nuntă lerui-ler\r\n\r\nColindător fără de casă\r\nColindător fără noroc\r\nUn strop de vin și-un strop de pâine\r\nÎți cânt și-apoi o iau din loc\r\n\r\n\tRefren:\r\n\t\r\n\tAm          D        G\r\n\tDreptul să colind îl cer\r\n                Am  C       B7\r\n\tDalbe flori și lerui-ler\r\n\tAm     D              G\r\n\tPentru ea, doar pentru ea\r\n\tC   B7   Em\r\n\tMăritata mea\r\n\r\nAm drum în față și în urmă\r\nDin când mai mor prin munți\r\nDar am venit să-ți cânt colindul \r\nPreafericitei tale nunți\r\n\r\nPot să-l rostesc și din picioare\r\nNu am pretenții de mesean\r\nUn strop de vin și-un strop de pâine\r\nȘi-am să-ți colind nepământean\r\n\r\n\tRefren.\r\n\r\nIubita mea vândută lumii\r\nNimic n-aș mai putea să sper\r\nCă florile nu mai sunt dalbe\r\nȘi \"lerui\" nu mai este \"ler\"\r\n\r\nDar eu colind bătut de lacrimi\r\nColind și voi mai colinda\r\nLa toate nunțile din lume\r\nAfară doar de nunta mea\r\n\r\n\tRefren.",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "B7",
      "Am",
      "C",
      "B",
      "D",
      "G"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 40,
    "title": "Broasca Țestoasă",
    "slug": "broasca-testoasa-40",
    "content": "D                   A\r\nAm ani o mie, asta-i tot\r\nBm                F#\r\nȘi vin asupră-mi alţii\r\nG                   D\r\nSub Teobald, regele got\r\nA                D\r\nCrescui în rezervaţii\r\nG                   D\r\nSub Teobald, regele got\r\nA                D\r\nCrescui în rezervaţii\r\n\r\n\tRefren:\r\n\tD          A\r\n\tHai lin, hai lon\r\n\tBm                 F#\r\n\tCiu-daga-dinghi-langhi-lo\r\n\tG                         D\r\n\tCiu-daga-dinghi-langhi-dobobldinghi\r\n\tA                        D\r\n\tDaghi-dobobldinghi-daghi-dobobldinghi\r\n\tG                        D\r\n\tCiu-daga-dinghi-langhi-dobobldinghi\r\n\tA                          D A D\r\n\tDaghi-dobo-bldinghi-langhi-lo\r\n\r\nAtâte-au fost în aceşti ani\r\nDin care nu ştiu boabă\r\nAcum expusă-s pentru bani\r\nLa moşi într-o tarabă\r\n\r\n\tRefren\r\n\r\nStafia morţii nu-mi dă ghes\r\nNu ştiu de muta coasă\r\nSunt broasca ţest, sunt broasca ţest\r\nSunt broasca ţestoasă\r\n\r\n\tRefren 3x (accelerând tempoul)",
    "author": {
      "id": 21,
      "name": "Radu Gheorghe",
      "slug": "radu-gheorghe"
    },
    "author_id": 21,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      },
      {
        "id": 12,
        "name": "Cântece pentru copii",
        "slug": "cantece-pentru-copii",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "Am",
      "Bm",
      "F#",
      "G",
      "F"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "D",
          "U",
          "D",
          "-",
          "D",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 41,
    "title": "Decembre",
    "slug": "decembre-41",
    "content": "Ciupitura:\r\n\r\nDm                 A7\r\n----1h3p1--1---   ----0h3-3---0---\r\n---3------3-2--   ---2------2---2-\r\n--2------------   --0-------------\r\n-0-------------   -2--------------\r\n---------------   ----------------\r\n---------------   ----------------\r\n\r\n\r\nDm\r\nTe uită cum ninge decembre\r\nA7 \r\nSpre geamuri iubito privește\r\nDm\r\nMai spune s-aducă jăratec\r\nA7                     Dm\r\nȘi focul s-aud cum trosneşte\r\n\r\nȘi mână fotoliul spre sobă\r\nLa horn să ascult vijelia\r\nSau zilele mele totuna\r\nAş vrea să le-nvăţ simfonia\r\n\r\nMai spune s-aducă şi ceaiul\r\nȘi vino şi tu mai aproape\r\nCiteşte-mi ceva de la poluri,\r\nȘi ningă, zăpada ne-ngroape\r\n\r\nCe cald e aicea la tine\r\nȘi toate din casă-mi sunt sfinte\r\nTe uite cum ninge decembre\r\nNu râde, citeşte-nainte\r\n\r\nE ziuă şi ce întuneric\r\nMai spune s-aducă şi lampa\r\nTe uită zăpada-i cât gardul \r\nȘi-a prins promoroacă şi clampa\r\n\r\nEu nu mă mai duc azi acasă\r\nPotop e-napoi şi-nainte\r\nTe uită cum ninge decembre\r\nNu râde, citeşte-nainte\r\n\r\nOutro:\r\n\r\nI-a oara:\r\n\r\nDm Gm\r\nMmmmmm...\r\nC  F\r\nMmmmmm...\r\nBb Gm\r\nMmmmmm...\r\nA  Dm\r\nMmmmmm...\r\n\r\nII-a oara:\r\n\r\nDm Gm\r\nMmmmmm...\r\nC  F\r\nMmmmmm...\r\nBb Gm\r\nMmmmmm...\r\nA  Dm\r\nMmmmmm...\r\nBb A  Dm\r\nMmmmmm...",
    "author": {
      "id": 18,
      "name": "Nicu Alifantis",
      "slug": "nicu-alifantis"
    },
    "author_id": 18,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 13,
        "name": "De iarnă",
        "slug": "de-iarna",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "A7",
      "E",
      "Gm",
      "C",
      "F",
      "Bb",
      "A"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "-",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Fingerstyle"
      }
    ],
    "views": 0
  },
  {
    "id": 42,
    "title": "Copacii fara padure",
    "slug": "copacii-fara-padure-42",
    "content": "Dm             A7     Dm\r\nÎn povestea copacilor goi\r\nF                         Gm  \r\nScârţâind într-o singură uşă\r\n                     Dm\r\nEste vorba de noi amândoi\r\n         A     A7      Dm\r\nEste vorba de foc şi cenuşă\r\nDm             A7     Dm\r\nDoi copaci fără frunze pe drum\r\nF                         Gm  \r\nDupă cum îi priveşte înaltul\r\n                      Dm\r\nDoi copaci prin sărutul de sus\r\n     A                 A7  \r\nAplecându-se unul spre altul.\r\n\t\r\n\tRefren:\r\n\t\r\n\tDm                       A\r\n\tSpune-mi pădure cu frunza rară\r\n                   A7            Dm\r\n\tUnde-i iubirea de astă vară?\r\n                          D7  Gm\r\n\tNu ştie iarna să se îndure\r\n                   Dm    A      Dm\r\n\tDe noi, copacii fără pădure.\r\n\r\nToată vara au fost numai ploi\r\nşi-au fost stele în nopţi fără stele\r\nşi prin toamna şederii pe nori\r\nCade ultima frunză spre ele\r\nÎn zadar către tine întind\r\nNişte crengi ce-mi fuseseră braţe\r\nAlte uşi se aud scârţâind\r\nDe tomnatecul vânt să se agaţe.\r\n\r\nNu mai suntem decât doi copaci\r\nVor veni călători să ne tundă\r\nVor lua crengi toţi copiii săraci\r\nPentru flacăra lor muribundă\r\nşi chiar dacă mă vei mai iubi\r\nPeste crivăţul iernii ce vine\r\nFără braţe cu ochii pustii\r\nN-am să am ce întinde spre tine.",
    "author": {
      "id": 13,
      "name": "Tatiana Stepa",
      "slug": "tatiana-stepa"
    },
    "author_id": 13,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "A7",
      "F",
      "Gm",
      "A",
      "D7"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "D",
          "U",
          "-",
          "U",
          "D",
          "U",
          "-"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  },
  {
    "id": 43,
    "title": "Taina",
    "slug": "taina-43",
    "content": "C\r\nDacă n-am să vin deseară\r\nF    G         C\r\nMamă uşa n-o-ncuia\r\nC\r\nSpune-i tatei că-s în poartă\r\nF        C          F        C          F  G7   C\r\nSau găseşte tu, sau găseşte tu, sau găseşte tu ceva.\r\n\r\n\r\nF          G        C\r\nÎn seara asta mamă lumea e a mea\r\nO lume de douăzeci de ani\r\nPriveşte, mamă, jocul şi taci, nu întreba:\r\nE foarte simplu, este ziua mea.\r\n\r\n\r\nNu pune nici-o întrebare\r\nDe întrebări m-am săturat\r\nNelămurită să rămână\r\nFie taina mea, fie taina mea, n-o-mpart cu nimenea.\r\n\r\n\r\nÎn seara asta mamă lumea e a mea\r\nO lume de douăzeci de ani\r\nPriveşte, mamă, jocul şi taci, nu întreba:\r\nE foarte simplu, este seara mea.\r\n\r\n\r\nDe te-apucă miezul nopţii\r\nşi eu, mamă, n-am venit\r\nLasă telefonu-n pace\r\nFiindcă-n noaptea asta, noaptea asta, mamă nu-s de găsit. \r\n\r\n\r\nÎn seara asta mamă lumea e a mea\r\nO lume de douăzeci de ani\r\nPriveşte, mamă, jocul şi taci, nu întreba:\r\nE foarte simplu, este noaptea mea.",
    "author": {
      "id": 12,
      "name": "Ecoul",
      "slug": "ecoul"
    },
    "author_id": 12,
    "categories": [
      {
        "id": 10,
        "name": "Cenaclul 'Flacăra'",
        "slug": "cenaclul-flacara",
        "description": ""
      },
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "F",
      "G",
      "G7",
      "E"
    ],
    "strumming": [
      {
        "pattern": [
          "D",
          "-",
          "U",
          "-",
          "D",
          "U",
          "-",
          "U"
        ],
        "timeSignature": "4/4",
        "name": "Bază"
      }
    ],
    "views": 0
  }
];

export const authorsData: Author[] = [
  {
    "id": 1,
    "name": "Azur",
    "slug": "azur",
    "song_count": 2
  },
  {
    "id": 2,
    "name": "Mihai Mărgineanu",
    "slug": "mihai-margineanu",
    "song_count": 10
  },
  {
    "id": 3,
    "name": "Anonim",
    "slug": "anonim",
    "song_count": 3
  },
  {
    "id": 4,
    "name": "Aurel Moldoveanu",
    "slug": "aurel-moldoveanu",
    "song_count": 2
  },
  {
    "id": 5,
    "name": "Șatra",
    "slug": "satra",
    "song_count": 3
  },
  {
    "id": 6,
    "name": "Gică Petrescu",
    "slug": "gica-petrescu",
    "song_count": 2
  },
  {
    "id": 7,
    "name": "Necunoscut",
    "slug": "necunoscut",
    "song_count": 1
  },
  {
    "id": 8,
    "name": "Folclor",
    "slug": "folclor",
    "song_count": 1
  },
  {
    "id": 9,
    "name": "Atlantic",
    "slug": "atlantic",
    "song_count": 1
  },
  {
    "id": 10,
    "name": "Ștefan Hrușcă",
    "slug": "stefan-hrusca",
    "song_count": 3
  },
  {
    "id": 11,
    "name": "Emeric Imre",
    "slug": "emeric-imre",
    "song_count": 1
  },
  {
    "id": 12,
    "name": "Ecoul",
    "slug": "ecoul",
    "song_count": 3
  },
  {
    "id": 13,
    "name": "Tatiana Stepa",
    "slug": "tatiana-stepa",
    "song_count": 2
  },
  {
    "id": 14,
    "name": "2 și jumătate",
    "slug": "2-si-jumatate",
    "song_count": 1
  },
  {
    "id": 15,
    "name": "Mayai Gyozo",
    "slug": "mayai-gyozo",
    "song_count": 1
  },
  {
    "id": 16,
    "name": "Andrei Păunescu",
    "slug": "andrei-paunescu",
    "song_count": 1
  },
  {
    "id": 17,
    "name": "Victor Socaciu",
    "slug": "victor-socaciu",
    "song_count": 1
  },
  {
    "id": 18,
    "name": "Nicu Alifantis",
    "slug": "nicu-alifantis",
    "song_count": 2
  },
  {
    "id": 19,
    "name": "Ducu Bertzi",
    "slug": "ducu-bertzi",
    "song_count": 1
  },
  {
    "id": 20,
    "name": "Valeriu Sterian",
    "slug": "valeriu-sterian",
    "song_count": 1
  },
  {
    "id": 21,
    "name": "Radu Gheorghe",
    "slug": "radu-gheorghe",
    "song_count": 1
  }
];

export const categoriesData: Category[] = [
  {
    "id": 1,
    "name": "Cântece de mahala",
    "slug": "cantece-de-mahala",
    "description": "",
    "song_count": 13
  },
  {
    "id": 2,
    "name": "Lăutărești",
    "slug": "lautaresti",
    "description": "",
    "song_count": 6
  },
  {
    "id": 3,
    "name": "Folk",
    "slug": "folk",
    "description": "",
    "song_count": 17
  },
  {
    "id": 4,
    "name": "Satiră și umor",
    "slug": "satira-si-umor",
    "description": "",
    "song_count": 1
  },
  {
    "id": 5,
    "name": "Cântece de munte",
    "slug": "cantece-de-munte",
    "description": "",
    "song_count": 5
  },
  {
    "id": 6,
    "name": "Cântece țigănești",
    "slug": "cantece-tiganesti",
    "description": "",
    "song_count": 5
  },
  {
    "id": 7,
    "name": "Aniversări",
    "slug": "aniversari",
    "description": "",
    "song_count": 7
  },
  {
    "id": 8,
    "name": "Romanțe",
    "slug": "romante",
    "description": "",
    "song_count": 1
  },
  {
    "id": 9,
    "name": "Școala și profesorii",
    "slug": "scoala-si-profesorii",
    "description": "",
    "song_count": 1
  },
  {
    "id": 10,
    "name": "Cenaclul 'Flacăra'",
    "slug": "cenaclul-flacara",
    "description": "",
    "song_count": 18
  },
  {
    "id": 11,
    "name": "Despre Patrie",
    "slug": "despre-patrie",
    "description": "",
    "song_count": 2
  },
  {
    "id": 12,
    "name": "Cântece pentru copii",
    "slug": "cantece-pentru-copii",
    "description": "",
    "song_count": 1
  },
  {
    "id": 13,
    "name": "De iarnă",
    "slug": "de-iarna",
    "description": "",
    "song_count": 1
  }
];
