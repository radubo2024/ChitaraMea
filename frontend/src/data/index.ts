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
    "name": "A#",
    "type": "major",
    "root_note": "A#",
    "positions": [
      {
        "fret": 1,
        "string": 1,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 4
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
    "id": 3,
    "name": "A#m",
    "type": "minor",
    "root_note": "A#",
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
        "fret": 1,
        "string": 4,
        "finger": 1
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
    "id": 4,
    "name": "A6",
    "type": "6th",
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
        "fret": 2,
        "string": 5,
        "finger": 3
      }
    ],
    "open_strings": [
      1,
      6
    ],
    "muted_strings": [
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 5,
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
    "id": 6,
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
    "id": 7,
    "name": "Am/C",
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
      },
      {
        "fret": 3,
        "string": 2,
        "finger": 4
      }
    ],
    "open_strings": [
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 8,
    "name": "Am7",
    "type": "minor 7th",
    "root_note": "A",
    "positions": [
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
      1,
      4,
      6
    ],
    "muted_strings": [
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 9,
    "name": "Am9",
    "type": "minor 9th",
    "root_note": "A",
    "positions": [
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
      1,
      4,
      6
    ],
    "muted_strings": [
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 10,
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
    "id": 11,
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
    "id": 12,
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
    "id": 13,
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
    "id": 14,
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
    "id": 15,
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
    "id": 16,
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
    "id": 17,
    "name": "C#",
    "type": "major",
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
        "finger": 2
      },
      {
        "fret": 6,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 6,
        "string": 5,
        "finger": 4
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
    "id": 18,
    "name": "C#7",
    "type": "dominant 7th",
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
        "fret": 4,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 6,
        "string": 5,
        "finger": 4
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
    "id": 19,
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
    "id": 20,
    "name": "C7",
    "type": "dominant 7th",
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
        "fret": 3,
        "string": 4,
        "finger": 4
      },
      {
        "fret": 1,
        "string": 5,
        "finger": 1
      }
    ],
    "open_strings": [
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 21,
    "name": "C9",
    "type": "9th",
    "root_note": "C",
    "positions": [
      {
        "fret": 3,
        "string": 2,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 3,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 4,
        "finger": 1
      },
      {
        "fret": 3,
        "string": 5,
        "finger": 4
      }
    ],
    "open_strings": [
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 22,
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
    "id": 23,
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
    "id": 24,
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
    "id": 25,
    "name": "D6",
    "type": "6th",
    "root_note": "D",
    "positions": [
      {
        "fret": 2,
        "string": 4,
        "finger": 2
      },
      {
        "fret": 2,
        "string": 6,
        "finger": 3
      }
    ],
    "open_strings": [
      3,
      5
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 26,
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
    "id": 27,
    "name": "D7sus4",
    "type": "sus4",
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
    "id": 28,
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
    "id": 29,
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
    "id": 30,
    "name": "Dm7",
    "type": "minor 7th",
    "root_note": "D",
    "positions": [
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
    "open_strings": [
      3
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": {
      "fret": 1,
      "from_string": 5,
      "to_string": 6
    },
    "start_fret": 1
  },
  {
    "id": 31,
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
    "id": 32,
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
    "id": 33,
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
    "id": 34,
    "name": "Edim",
    "type": "diminished",
    "root_note": "E",
    "positions": [
      {
        "fret": 2,
        "string": 3,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 4,
        "finger": 3
      },
      {
        "fret": 2,
        "string": 5,
        "finger": 1
      }
    ],
    "open_strings": [
      1
    ],
    "muted_strings": [
      2,
      6
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 35,
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
    "id": 36,
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
    "id": 37,
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
    "id": 38,
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
    "id": 39,
    "name": "F#m",
    "type": "minor",
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
        "fret": 2,
        "string": 4,
        "finger": 1
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
    "id": 40,
    "name": "Fm",
    "type": "minor",
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
        "fret": 1,
        "string": 4,
        "finger": 1
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
    "id": 41,
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
    "id": 42,
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
    "id": 43,
    "name": "G#7",
    "type": "dominant 7th",
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
        "fret": 4,
        "string": 3,
        "finger": 1
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
    "id": 44,
    "name": "G#m",
    "type": "minor",
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
        "fret": 4,
        "string": 4,
        "finger": 1
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
    "id": 45,
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
    "id": 46,
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
  },
  {
    "id": 47,
    "name": "Gsus4",
    "type": "sus4",
    "root_note": "G",
    "positions": [
      {
        "fret": 3,
        "string": 1,
        "finger": 2
      },
      {
        "fret": 3,
        "string": 2,
        "finger": 3
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 4
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
      "D",
      "Em",
      "C",
      "B7",
      "A",
      "G",
      "Am",
      "B"
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
      "Em",
      "Am",
      "B7",
      "C"
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
      "E",
      "Am",
      "B",
      "G",
      "D",
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
      "C",
      "E7",
      "Dm",
      "E",
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
      "G",
      "G#"
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
      "G",
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
      "Bm",
      "F",
      "G",
      "Am",
      "F#"
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
      "Gm",
      "C",
      "F",
      "Bb",
      "A",
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
  },
  {
    "id": 44,
    "title": "Rău mă dor ochii, mă dor",
    "slug": "rau-ma-dor-ochii-ma-dor-44",
    "content": "Capo III\r\n\r\n   G                       C\r\n1. Rau ma dor ochii, ma dor\r\n\tD\tG\r\nDe durerea frunzelor\r\n\r\n         Em              D C\r\nR: Si ma duc si iar ma duc\r\n\tD\t\tG\r\n   Pana la izvor sub nuc\r\n         Em\t    D \t   C\r\n   Si ma fac si iar ma fac\r\n            D              G\r\n   Lemn de brad si lemn de fag\r\n\r\n\r\n 2. Rau ma dor picioarele\r\n    De batut cararile\r\n\r\n3. Rau ma dor ochii, ma dor\r\n   De lumina stelelor\r\n\r\n4. Unde ai plecat nu stiu\r\n   Dar mi-e sufletul pustiu\r\n\r\n5. Si-am sa plec fara sa stiu\r\n   Dus de dorul meu tarziu",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
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
    "id": 45,
    "title": "Râpa",
    "slug": "rapa-45",
    "content": "Em          D     Em\r\nLa marginea pantei abrupte (o-o-o-o)\r\nC         D         Em\r\nLa un han s-a oprit un strain (strain-strain)\r\nC         D               G       D   Em\r\nEra trist si avea hainele rupte o-o-o-o \r\nEm          D        Em\r\nSi pe masa o cana cu vin (cu vin-cu vin) [Era trist.... x2         \r\n\r\nOm nebun ce-nconjoara pamantul (o-o-o-o)\r\nStai la mine, ramai doar un ceas (un ceas-un ceas) \r\nSa te-ntorci inapoi nu mai ai unde o-o-o-o\r\nInainte sa maergi ti-a ramas (ramas-ramas)  [Sa te-n.... x2\r\n\r\nMi-amintesc de o vara fierbinte (o-o-o-o)\r\nDe o padure cu muguri pe ram (pe ram-pe ram)\r\nMi-amintesc de prieteni si de iubita 0-0-0-0 \r\nSi de-o casa cu mama la geam. (la geam-la geam) [Mi-amintesc... x2\r\n \r\n\r\nSi am ajuns la un han pe o stanca  (o-o-o-o)\r\nSa-mi inec tot amarul nu pot (nu pot-nu pot)\r\nSi ma-ntreb daca apa e adanca o-o-o-o \r\nSa ma-nec azi cu jale cu tot. (cu tot-cu tot) [ Si ma-.... x2\r\n\r\nL-am vazut ridicandu-se agale (o-o-o-o)\r\nAvea ochi plini de lacrimi de dor (de dor-de dor)\r\nMultumesc pentru vinul mariei tale o-o-o-o\r\nEu ma duc azi la rapa sa mor (sa mor-sa mor)  [Multumesc.... x2\r\n\r\nLinia melodica o gasiti la coverul facut de mine pe youtube\r\nhttp://www.youtube.com/watch?v=ef7sddFChaQ",
    "author": {
      "id": 22,
      "name": "Trupa Şanţ",
      "slug": "trupa-sant"
    },
    "author_id": 22,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "D",
      "C",
      "G"
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
    "id": 46,
    "title": "Castelul",
    "slug": "castelul-46",
    "content": "Am               C \r\nCandva demult un crang de brazi\r\nG              Am  \r\nPazea un vechi castel\r\nAm              C \r\nSi-o satra de tigani nomazi\r\nG            Am\r\nA poposit in el\r\n\r\nRefren:   Am      C   G       Am\r\n          Aaaaaaaaa   nananananana\r\n          Am      C   G       Am\r\n          Ooooooooo   nananananana\r\n\r\nSi-aveau tiganii ochi adanci \r\nSi galbeni prinsi in plete\r\nSi-aveau cu ei un card de tanci\r\nSi-un card de negre fete\r\n\r\nRefren: \r\n\r\n\r\n3. Si cum faceau tiganii foc \r\nDin crengile de pin\r\nTiganci cu carti si cu ghioc\r\nPlecara prin vecini\r\n\r\nRefren:\r\n\r\n4. Candva un tanar castelan\r\nPrivind prin vechi ferestre\r\nZari o fata de tigan\r\nFrumoasa ca-n poveste\r\n\r\nRefren:\r\n\r\n5.Si-avea cu el în drumul sau\r\nUn biet copil de casa\r\nL-a pus s-aduca la castel\r\nTiganca cea frumoasa\r\n\r\nRefren:\r\n\r\n6.Trecu un an, mai mult de-atunci\r\nSi-n patul de matasa\r\nFrumoasa fata de tigan\r\nEra acum craiasa\r\n\r\nRefren:\r\n\r\n7. Of, domnul meu, iubitul meu\r\nMi-ai spus acum un an\r\nC-ai vrea sa-ti fiu mireasa eu\r\nEu, fata de tigan\r\n\r\nRefren:\r\n\r\n8.Si cum statea într-un balcon\r\nSi-si acorda chitara\r\nUn cântec rasuna duios\r\nPentru tiganca seara\r\n\r\n\r\nPuteti pune capo pe 1 , dar se poate canta fara capo .....",
    "author": {
      "id": 23,
      "name": "Nae Berechet",
      "slug": "nae-berechet"
    },
    "author_id": 23,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
      "G",
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
    "id": 47,
    "title": "Refugiu Diana / Imnul Dianei",
    "slug": "refugiu-diana-imnul-dianei-47",
    "content": "1.\r\n Em        B7        Em\r\nAm pornit sa recladim Diana  \r\n      G     D       Em\r\nUn refugiu vechi si parasit\r\n    G        D          G D Em\r\nAm lasat spritul si damigeana\r\n          C     B7       Em\r\nSi spre Plaiul Foii am pornit.\r\n\r\n\r\n        Refren:\t\r\n\t\r\n\t Am   D    G     Am          Em\r\n\tMama unde esti? Bate-ma de vrei\r\n              B7        Em\r\n\tDar vino sa ma iei !\r\n\tMama unde esti? Poti sa ma si bati\r\n\tDar lasa-ma in Carpati !\r\n\r\n2.\r\nSi intr-o zi cu ploaie si cu ceata\r\nCu rucsacii-n spate si vopsea\r\nIn alertul nostru pas de rata\r\nAm atacat-o pe Diana.\r\n\r\n3.\r\nScândura mica, scândurica lata\r\nTe-am purta pana ne facem mici\r\nSi echipa noastra cocosata\r\nParca-ar fi o ceata de pitici.\r\n\r\n4.\r\nTotu-i bine pana la-nserare\r\nCând cu lacrimi calde ne rugam\r\nO, Ceresc Parinte, îndurare!\r\nFa mai cald sa nu mai înghetam.\r\n\r\n5.\r\nSi-am ajuns acolo toti o forta\r\nSi-ntr-o scurta clipa de ragaz\r\nAm aprins a tineretii torta\r\nDe indata ce-am ajuns in Crai.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 14,
        "name": "Imnuri",
        "slug": "imnuri",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "B7",
      "G",
      "D",
      "C",
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
    "id": 48,
    "title": "Ninge astazi pentru tine",
    "slug": "ninge-astazi-pentru-tine-48",
    "content": "G           Am          C       D        G\r\n1. Ninge astazi pentru tine muntele e alb de nea,\r\n   G          Am          C    D             G\r\n   Soarele din ceruri vine doar pentru iubita mea.\r\n   Acum coboara si dorul chemat de la locul lui,\r\n   Tocmai de pe Vârful Omu pâna-n Valea Cerbului.\r\n   \r\n\r\n                   R:  Când te scuturi de zapada\r\n                       Nu stii cât esti de frumoasa\r\n                       Ochii-ti verzi zapada-i alba\r\n                       Si se face cald în casa.\r\n\r\n2. Si calugarii din schit vor cu totii a te vedea,\r\n   La cabana au venit doar pentru iubita mea.\r\n   Si zapada de pe culme în vale s-a rostogolit,\r\n   Muntele e pus pe glume de când stie c-ai venit.\r\n   \r\n3. Jepii Mici ca sa te vada si-au cumparat ochelari,\r\n   Si în cea mai mare graba i-au chemat pe Jepii Mari.\r\n   Nu stiu sigur azi sau mâine pe Morar am sa te sui,\r\n   Sa ne logodim iubito sus în vârful muntelui.\r\n\r\nhttp://www.youtube.com/watch?v=0ZztyJ1zcy4&feature=player_detailpage\r\nInterpretare :Puiu Cazan",
    "author": {
      "id": 25,
      "name": "Puiu Cazan",
      "slug": "puiu-cazan"
    },
    "author_id": 25,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "Am",
      "C",
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
    "id": 49,
    "title": "Floare de Colt",
    "slug": "floare-de-colt-49",
    "content": "Em       B7          Em   \r\nVis de-argint si de petale\r\nD                    G     ( G7 )\r\nCuibul tau e sus pe creste\r\nC      D             G\r\nRaza ta-mi coboara-n cale\r\nAm     B7            Em     ( G7 )\r\nMai frumos ca-ntr-o poveste\r\nC      D              ( Bm A#m Am ) /G\r\nRaza ta-mi coboara-n cale\r\nAm      B7             Em\r\nMai frumos ca-ntr-o poveste\r\n\r\n\r\nE--0-2-3- Am  \r\n\r\nAm            Em\r\nTu floare de colt\r\nB7            Em\r\nMinune sub bolti\r\nAm         Em\r\nFrageda stea\r\nB7         Em\r\nIubita mea !\r\nX2",
    "author": {
      "id": 19,
      "name": "Ducu Bertzi",
      "slug": "ducu-bertzi"
    },
    "author_id": 19,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
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
      "D",
      "G",
      "G7",
      "C",
      "Am",
      "Bm",
      "A#m"
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
    "id": 50,
    "title": "Imnu Pietrei Craiului",
    "slug": "imnu-pietrei-craiului-50",
    "content": "   Dm             F     C          Dm\r\n1. Avem un singur Crai ce-asteapta neclintit\r\nDm          F           C       Dm\r\nCu ale sale creste ce-s rosii-n asfintit\r\nPlecam sâmbata seara, urcam toti împreuna\r\nSi liberi ca sa fim sub cerul clar de luna\r\nSa vii sa îl strabatem pe ale sale drumuri\r\nSa vezi cum cresc la brazi cu miile de muguri\r\nSa vezi si jneapanul cum creanga si-a plecat\r\nCe vitrega-i natura si-i vântu-i neîncetat\r\n\r\n   Dm                 F   C         Dm\r\nR: Si vreau sa vii si tu, sa mergem împreuna\r\nDm          F       C        Dm\r\nSa împletim acolo a Craiului cununa\r\nDm           F     C                Dm\r\nDin garofite rosii si din bujori de munte\r\nC          Am               Dm\r\nDin liliac si flori de colt carunte\r\nDm         C      Am               Dm\r\nHei, hai,  liliac si flori de colt carunte\r\n\r\n\r\n2. De pleci din Plaiul Foii pe drumul pietruit\r\nAi sa ajungi la Spirla, refugiul poleit \r\nSa-i întâlnesti pe marius, pe ghimpe si pe dan\r\nSi vei vedea ce-nseamna sa fii un muntoman \r\nDe urci înspre Ascunsa pe Hornul Nisipos\r\nE noapte si e iarna si vântul e taios \r\nSa simti rucsacu-n spate, o munca de Sisif\r\nSi mâna pe chitara lipindu-se de griff\r\n\r\n\r\n3. De pleci din Curmatura, traseu pe banda-albastra\r\nAjungi în Saua Caprei, cobori apoi sub creasta\r\nSa treci si de Gavan, de Padina Închisa\r\nDe stânca Orgii Mari si de Diana stinsa\r\nDe vrei sa stii ce-i munte, sa urci pe Crapatura\r\nSi prin zapada inalta , sa mângâi stânca dura\r\nSa treci si de-Ascutiti, Timbalele-amândoua\r\nDe stanca orgii mari cand ninge si când ploua\r\n\r\n4. Pe Lanturi de te-ncumeti în nopti cu luna plina\r\nSi prin zapada-nalta sa tai poteca lina\r\nCând ochii tai se-nalta spre bolta înstelata\r\nLa crucea unei fete sa-ngenunchezi o data\r\nCând râuri de sudoare-ti vor sirui pe fata\r\nSa ai credinta-n munte si-ncredere în viata\r\nAicea sus pe munte nimic nu e usor\r\nMai bine stati acasa în poala mamelor\r\n\r\n\r\n\r\nRitmul este foarte usor , voi poasta un video cu aceasta piesa\r\nVideoul pe care lam facut pentru aceasta piesa : http://www.youtube.com/watch?v=YaYROYlEhnI",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 14,
        "name": "Imnuri",
        "slug": "imnuri",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "F",
      "C",
      "Am",
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
    "id": 51,
    "title": "Sunt sărac",
    "slug": "sunt-sarac-51",
    "content": "Am           Dm            \r\nMă întreb ce s-ar fi întâmplat\r\nF      C         E           Am   - Am E\r\nDacă-n zori m-aș fi trezit bogat.\r\nAm         Dm\r\nDeseori la asta m-am gândit,\r\nF    C     E              Am\r\nÎnsă visul meu nu s-a-mplinit.\r\n\r\nRefren: \r\n\r\n       Dm           Am\r\nSunt sărac, sunt sărac,\r\n        Dm          Am\r\nN-am un ban în buzunar,\r\n       Dm         Am\r\nSunt sărac, și ce dacă,\r\n      E           Am      \r\nEu cu soarta mă împac.  \r\n           Dm           Am\r\n     Sunt sărac, sunt sărac,\r\n             Dm          Am\r\n     N-am un ban în buzunar,\r\n            Dm         Am\r\n     Sunt sărac, și ce dacă,\r\n           E           Am      - Am E\r\n     Eu cu soarta mă împac.  \r\n\r\n\r\nBanul e - vorba țăranului,\r\nBanul este ochiul dracului. \r\nCând îl ai îți pare foarte mic,\r\nCând nu-l ai, nu valorezi nimic.\r\n\r\nFericirea n-o poți cumpăra\r\nNici cu bani și nici cu altceva.\r\nCânt și nimeni nu mă poate-opri\r\nSă dau glas tăcerii inimii.",
    "author": {
      "id": 26,
      "name": "Karma",
      "slug": "karma"
    },
    "author_id": 26,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "F",
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
    "id": 52,
    "title": "Visul",
    "slug": "visul-52",
    "content": "G                    Em                 C               D        \r\nA fost odata un vis frumos un vis frumos cu un baiat si-o fata\r\nG                  Em                 C             D\r\nA fost un vis cam dureros cam dureros de te ranesc ma iarta.\r\nA fost un vis nascut în munti, nascut în munti crescut la o cabana\r\nUmbrit de brazi înalti carunti înalti carunti ce astazi se destrama\r\n\r\n\r\nRefren:\r\n\r\n\r\nG                       Em\r\nDe ce va destramati usor va destramati\r\nC            D\r\nVoi vise pe poteci\r\nG                       Em\r\nÎn amintirea muntilor, a muntilor\r\n      C        D\r\nSa dainuiti pe veci.\r\n\t\r\nCad stelele ard lumânari pe-al muntelui altar\r\nVin cerbii iarasi pe carari padurile tresar\r\nIzvoarele în sopot lin vestesc iubirea  noastra\r\nIar ale tale vise vin sa-ti bata la fereastra.\r\n\r\n\r\nRamâi cu bine visul meu si s-auzim de bine\r\nTe voi pastra în gând mereu voi fi mereu cu tine\r\nIar cel ce va veni apoi pe munte tu sa-l aduci\r\nVa voi veghea pe amândoi pe creste de-ai sa-l urci.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
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
    "id": 53,
    "title": "Padure Nebuna",
    "slug": "padure-nebuna-53",
    "content": "Em\r\nO vara intreaga m-a tinut padurea\r\nG\r\nCu fata in iarba si cu gandul aiuria\r\nEm\r\nIar acum in toamna la plecare\r\nG                    D            Em\r\nSe tanguie ca ma rup din inima ei si o doare\r\n\r\n\r\nrefren:\r\nG\r\nPadure, padure nebuna\r\nEm\r\nIn fiecare noapte cu luna\r\nG\r\nVoi ratacii fara tinta agale\r\nEm                  D                  Em\r\nCa o frunza manata de vant pe potecile tale\r\n\r\n\r\nEm\r\nIn fiecare noapte de iarna\r\nG\r\nUmbra mea alba va veni sa se-astearna\r\nEm\r\nCa o ursoaica cu puii ucisi\r\nG                     D          Em\r\nLa umbra stejarilor pradati de frunzis \r\n\r\n\r\nrefren:\r\nG\r\nPadure,padure nebuna\r\nEm\r\nIn fiecare noapte cu luna\r\nG\r\nVoi ratacii fara tinta agale\r\nEm                   D                 Em\r\nCa o frunza manata de vant pe potecile tale\r\n\r\n\r\nEm\r\nIn fiecare dimineata\r\nG\r\nUneori ca o umbra,alteori ca o ceata\r\nEm\r\nCa o negura sau ca o bruma\r\nG                    D                Em\r\nVoi veni,voi veni,nu te mai tangui padure nebuna",
    "author": {
      "id": 27,
      "name": "Carmen Ciocolata",
      "slug": "carmen-ciocolata"
    },
    "author_id": 27,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
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
    "id": 54,
    "title": "Muntele alb",
    "slug": "muntele-alb-54",
    "content": "Bataia: clasica (jjssjs)\r\nIntro: Am Am\r\n\"-\" reprezinta jumatati de acord\r\n\r\n    Am  -    E     Am \r\n1.Ninge cu vorbe secate\r\n        G  \r\n  Când iarna e grea\r\n        C \r\n  Si viscolul bate\r\n    Dm  -     E     Am    \r\n  Ninge cu vorbe secate.\r\n  Am   -   E      Am       \r\n  Si iarna e solitarã\r\n        G \r\n  Când stele de gheatã\r\n      C \r\n  Scânteie afarã\r\n  Dm   -   E       Am      \r\n  Si iarna e solitarã.\r\n\r\n           G              C        \r\nR: Tu esti muntele alb pe care urcãm\r\n         Dm             Am     \r\n   Si-nãltimile tale ne cad la picioare,\r\n           E       Am    \r\n   Tu esti muntele alb.\r\n   Tu esti visul meu alb În care mã-mbrac\r\n   În miresme de crin si de liliac\r\n   Tu esti visul meu alb. +Am\r\n\r\n2.Ninge cu vorbele tale\r\n  E iarnã fierbinte\r\n  Ca o rugãminte\r\n  Ninge cu vorbele tale.\r\n  Si te-as iubi în ianuarie\r\n  Ca pe-o floare de crin\r\n  Ca pe-o stea cãzãtoare\r\n  Si te-as iubi în ianuarie.\r\n\r\n\r\n3.Si îmi pãstrez jurãmântul\r\n  Sã fiu o biatã frunzã\r\n  Ce-o leagãnã vântul\r\n  Si îmi pãstrez jurãmântul.\r\n  Iar tu rãmâi ca o sete\r\n  Pe care-o astâmperi\r\n  Când iarna începe\r\n  Iar tu rãmâi ca o sete.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "C",
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
    "id": 55,
    "title": "Rau ma dor ochii",
    "slug": "rau-ma-dor-ochii-55",
    "content": "Bataia :clasica (jjssjs)\r\nIntro: c c \r\n\r\n  C       C             C   C          \r\n1. Rau ma dor ochii, ma dor\r\n  G     G           C   C   \r\n   De durerea frunzelor\r\n\r\n         Am        Am            G             G     \r\nR: Si ma duc,si ma duc,si iar ma duc,si iar ma duc\r\n                     C    C\r\n   Pana la izvor sub nuc\r\n         Am        Am            G             G   \r\n   Si ma fac,si ma fac,si iar ma fac,si iar ma fac\r\n                           C    C  \r\n   Lemn de brad si lemn de fag\r\n\r\n2. Rau ma dor picioarele\r\n   De batut cararile\r\n\r\nRefren:\r\n\r\n3. Rau ma dor ochii, ma dor\r\n   De lumina stelelor\r\n\r\nRefren:\r\n\r\n4. Rau ma doare inima\r\n   Ca iubesti pe-altcineva\r\n\r\nRefren:\r\n\r\n5. Unde ai plecat nu stiu\r\n   Dar mi-e sufletul pustiu\r\n\r\nRefren:\r\n\r\n6. Si-am sa plec fara sa stiu\r\n   Dus de dorul meu tarziu",
    "author": {
      "id": 28,
      "name": "Vârf Carpatin",
      "slug": "varf-carpatin"
    },
    "author_id": 28,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "G",
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
    "id": 56,
    "title": "Imnul Dianei",
    "slug": "imnul-dianei-56",
    "content": "Am             E        Am\r\nSi-am pornit sa recladim Diana\r\nAm        E      Am       Am\r\nUn refugiu ars si parasit/(parasit)\r\nAm    C           E        Am\r\nSi-am lasat sticla si damigeana\r\nAm     C     E       Am\r\nSi din Plaiul Foii am pornit, \r\nAm   C            E        Am\r\nSi-am lasat sticla si damigeana\r\nAm    C      E       Am\r\nSi din Plaiul Foii am pornit. \r\n\r\n\r\n                 Refren:\r\n                     Am E  Am\r\n                     O, O, O, \r\n                     Am   E    Am    Dm            Am\r\n                     Mama unde esti? Poti sa ma si bati\r\n                     E             Am\r\n                     Dar lasa-ma-n Carpati !\r\n                     Am      C     E   E   Am\r\n                     Darira, rira, ri, ra, ra\r\n                     Am   G    C     Dm         Am\r\n                     Mama unde esti? Bate-ma de vrei\r\n                     E              Am\r\n                     Dar lasa-ma cu ei !\r\n\r\n\r\n   Si intr-o zi cu ploaie si cu ceata\r\n   Cu rucsaci in spate si vopsea/ (si vopsea)\r\n   In alertul nostru pas de rata\r\n   Am atacat-o pe Diana,\r\n   In alertul nostru pas de rata\r\n   Am atacat-o pe Diana.\r\n\r\n\r\n   Scandura mica, scandura lata\r\n   O caram pana ne facem mici/ (ne facem mici)\r\n   Si echipa noastra-i cocosata\r\n   Parc-ar fi o ceata de pitici,\r\n   Si echipa noastra-i cocosata\r\n   Parc-ar fi o ceata de pitici.\r\n\r\n   Totu-i bine pan'la inserare\r\n   Cand cu calde lacrimi ne rugam/ (ne rugam)\r\n   O, Ceresc Parinte, indurare!\r\n   Fa mai cald sa nu mai inghetam,\r\n   O, Ceresc Parinte, indurare!\r\n   Fa mai cald sa nu mai inghetam.\r\n\r\n   Si-am ajuns acolo toti o forta\r\n   Si-ntr-o scurta clipa de ragaz (de ragaz)\r\n   Am aprins a tineretii torta\r\n   De indata ce-am ajuns in Crai,\r\n   Am aprins a tineretii torta\r\n   De indata ce-am ajuns in Crai.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 14,
        "name": "Imnuri",
        "slug": "imnuri",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "C",
      "Dm",
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
    "id": 57,
    "title": "Puiul de drac (Cade copacu`)",
    "slug": "puiul-de-drac-cade-copacu-57",
    "content": "G         Em              C        D \r\nHei m-am dus m-am dus, sa tai un copac\r\n\r\n       G        Em        C        D\r\nSi-a venit a venit, un mic pui de drac\r\n\r\n        G          Em       C        D\r\nSi mi-a spus mi-a spus, sa nu tai copacul,\r\n \r\n         G           Em            C            D\r\nC-o sa-mi scoata un ochi si-o sa-mi sparga si capul,\r\n\r\n      G       Em      C        D\r\nInsa eu insa eu, nu l-am ascultat\r\n \r\n         G        Em        C      D\r\nSi m-am dus m-am dus, sa tai un copac.\r\n\r\n\r\n\r\n G          D         G\r\nCadeee, da-te ba ca cadeee\r\n\r\nG           G          Em       C        D\r\nDaa-te ba ca cade cade cade cade cade copacu`\r\n\r\nG           Em          C       D\r\nCurge curge curge curge curge coniacu`\r\n\r\n\r\n\r\n           G        Em       c       D\r\nHei m-am dus m-am dus, sa beau un coniac\r\n\r\n       G       Em      C          D\r\nSi-a venit a venit, acel pui de drac\r\n\r\n         G          Em      C         D\r\nSi mi-a spus mi-a spus, sa nu beau coniacul,\r\n\r\n          G           Em             C          D\r\nC-o sa-mi scoata un ochi si-o sa-mi sparga si capul,\r\n\r\n      G       Em      C         D\r\nInsa eu insa eu, nu l-am ascultat\r\n\r\n        G       Em        C       D\r\nSi m-am dus m-am dus, sa beau un coniac.\r\n\r\n  G          D           G\r\nCurgeee, da-te ba ca curgeee\r\n\r\n   G           G          Em          C      D\r\nDaa-te ba ca curge curge curge curge curge coniacu`\r\n\r\n G        Em         C     D\r\nCade cade cade cade cade copacu`.\r\n\r\n\r\n\r\n G          D         G\r\nCadeee, da-te ba ca cadeee\r\n\r\nG           G          Em       C        D\r\nDaa-te ba ca cade cade cade cade cade copacu`\r\n\r\nG           Em          C       D\r\nCurge curge curge curge curge coniacu`",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
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
    "id": 58,
    "title": "Omul bun si pomul copt",
    "slug": "omul-bun-si-pomul-copt-58",
    "content": "F\r\n 1 Omul bun si pomul copt , dar\r\n    Bb   Dm          C\r\n   Hai mai dorule hai\r\n     F\r\n   Astia n-or avut noroc\r\n    Bb   C7         F\r\n   Hai mai dorule hai\r\n \r\n \r\n   Ref:   Bb       C         F\r\n         Stau la margine de drum\r\n           Bb     C7          F \r\n         Pomul copt si amul bun\r\n             Bb        C         F   \r\n         Si stau la margine de drum\r\n           Bb      C7           F\r\n         Pomu-i copt si omu-i bun\r\n \r\n      F\r\n  2 Dupa ce-or da ce-or avuta\r\n     Bb   Dm         C \r\n    Hai mai dorule hai\r\n      F\r\n    I-o lasat i-o parasita\r\n     Bb   Dm         F \r\n    Hai mai dorule hai\r\n\r\n      F\r\n  3 Si-asa ca-i venea sa creasca\r\n     Bb   Dm         C \r\n    Hai mai dorule hai\r\n      F\r\n    Poate-o mai rodi vreidata\r\n     Bb   Dm         F\r\n    Hai mai dorule hai",
    "author": {
      "id": 29,
      "name": "Mircea Rusu Band",
      "slug": "mircea-rusu-band"
    },
    "author_id": 29,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "F",
      "Bb",
      "Dm",
      "C",
      "C7"
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
    "id": 59,
    "title": "Tu sa stai cuminte acasa",
    "slug": "tu-sa-stai-cuminte-acasa-59",
    "content": "C                F\r\nE greu urcusul, vantul ma sfasie\r\nG                      C\r\nSi viata mi-e legata de-o franghie\r\nC                   F\r\nIn jurul meu se lasa ceata deasa\r\nG                   C\r\nIubito, tu sa stai cuminte acasa.\r\nC                   F\r\nIn jurul meu se lasa ceata deasa\r\nG                   C\r\nIubito, tu sa stai cuminte acasa.\r\n\r\nSi bate crivat rece dintr-o parte\r\nStau atarnat intre destin si moarte\r\nUn fel de liniste incet m-apasa\r\nIubito, tu sa stai cuminte acasa.\r\n\r\nMai fac un pas si-ncremenesc pe stanca\r\nSub mine e prapastie adanca\r\nSimt cum puterile incet ma lasa\r\nIubito, tu sa stai cuminte acasa.\r\n\r\nPe-o piatra mi-a alunecat piciorul\r\nSub mine se intinde negru golul\r\nSi franghia-i pe jumatate roasa\r\nIubito, tu sa stai cuminte acasa.\r\n\r\nDin clipa-n clipa vantul se-nteteste\r\nSi-n stanca inghetata ma izbeste\r\nS-a pus ca din senin o ceata deasa\r\nIubito, tu sa stai cuminte acasa.\r\n\r\nAm inghetat, nimic nu ma mai doare\r\nSi parca urla lupii-n departare\r\nUn fel de liniste incet m-apasa\r\nIubito, tu sa stai cuminte acasa.\r\n\r\nAud o voce ca din nefiinta\r\nCare-mi sopteste groaznic o sentinta\r\nSi simt o ameteala pacatoasa\r\nIubito, tu sa stai cuminte acasa.\r\n\r\nMana-nghetata-ncet mi se desprinde\r\nSi-n liniste infinitul ma cuprinde\r\nUn ultim salt de circ dar fara plasa\r\nIubito, tu sa stai cuminte acasa.\r\n\r\nSi cand in muntii goi un vant va bate\r\nTu pleaca-ti ochii in singuratate\r\nSi cand tacuta noapte-n geam se lasa\r\nIubito, tu sa stai cuminte acasa.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "F",
      "G",
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
    "id": 60,
    "title": "M-a tinut mama acasa",
    "slug": "m-a-tinut-mama-acasa-60",
    "content": "C          F              ritm:2 batai in jos 2 in sus 1 in jos 1 in sus..\r\nM-a tinut mama acasa\r\nG             C\r\nSa nu vin la tine\r\n            F\r\nInsa eu am tot rugat-o\r\nG              C\r\nPan' s-a plictisit de mine\r\n\r\n\r\nREFREN:\r\n\r\n\r\n       F\r\nNu mai pot hei hei\r\nG        C\r\nSa mai suport\r\n   F\r\nLa munte vreau\r\nG\r\n###Sa ma intorc\r\n\r\ndaca ai un ghid nebun\r\nsi-un nebun sa-ti cante \r\nori ce-ar zice-ai tai parinti\r\ntu sa te intorci la munte\r\n\r\n\r\nrefren",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
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
    "id": 61,
    "title": "Omagiu unui alpinist",
    "slug": "omagiu-unui-alpinist-61",
    "content": "Am\t    C\t  Dm   F    C\t \r\nNinge peste munte cu melancolie \r\nDm\t    E\t    Dm\t F   E\t \r\nNinge peste moartea unui alpinist \r\nNinge peste creste, ninge si sfarseste\r\nInima ce-mi bate azi in pieptu-mi trist.\r\n\r\nRefren:\r\nAm\t    E\t \r\nNinge sfant si pagan, \r\nF\t    C\t \r\nNumai ochii ne raman \r\nAm\t    E7        Am\t\r\nDespartirea s-o mai vada \r\nCaci in munti noi ne-am strans\r\nSi-am ajuns de-atata nins\r\nNiste oameni de zapada.\r\n\r\nStanca grea si dura viata i-a rapit\r\nDuhurile vaii casa i-au facut\r\nGiulgiu-i de zapada pe care-a iubit-o\r\nVantul il jeleste ca la inceput.\r\n\r\nVoi cei ce astazi dormiti in munte\r\nVoi pe care stanca dura v-a invins\r\nO, pustietatea lasa sa v-asculte\r\nIar soptirea blanda mi se pare plans.\r\n\r\nPulberea uitarii ninge pe morminte\r\nCei legati in coarda nu va vom uita\r\nCatre culmea vietii mergem inainte\r\nPana-n cllipa-n care stanca ne-o trada.",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
      "Dm",
      "F",
      "E",
      "E7"
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
    "id": 62,
    "title": "Imnul Bucegilor",
    "slug": "imnul-bucegilor-62",
    "content": "Capo I\r\n\r\nC\t \r\nDaca ai un dor ce te framanta \r\n                       Dm7\r\nNu cata ca-i drum obositor \r\nG\t \r\nHai prietene cu noi pe stanca \r\nG7                C\t \r\nPe cararile Bucegilor. \r\nPe cararile umblate doar de ciute\r\nSub aripa Caraimanului\r\nAi s-auzi povesti necunoscute\r\nSpuse doar de glasul muntelui.\r\n\r\n\r\nRefren:\r\n       C\t \r\nCand Bucegii  \r\n                        Dm\t\r\nDau zvon de piatra si izvoare \r\n           G\t \r\nOriunde-ai fi  \r\n                     C\t \r\nRaspunde la a lor chemare \r\nCaraimanul, Costila-ascunsa dup-un nor\r\nSi Morarul te vor primi la pieptul lor.\r\n\r\nPe platou la mare inaltime\r\nBabele la sfat s-au adunat\r\nNumai Baba Mare sta deoparte\r\nSi-si pune intrebari neincetat.\r\nOare Sfinxul care tace-ntr-una\r\nSi priveste in zari nepasator\r\nSe iubeste-n taina cu Batrana\r\nSau le face curte Doamnelor.\r\n\r\nJos in Pestera intunecoasa\r\nSta batranul schit uitat de ani\r\nAici doina-ti pare mai duioasa\r\nInganata de batrani ciobani.\r\nNumai staretul cu barba-i alba\r\nAdancit in rugaciunea lui\r\nSpune-ncet cu vocea lui domola\r\nPravila straveche a muntelui.\r\n\r\nPe Morar in nopti cu luna plina\r\nSau pe branele Bucsoiului\r\nVin scaldate parca in lumina\r\nZanele din Valea Cerbului.\r\nAu pe cap cununi de campanula\r\nSi in plete flori de colt de-argint\r\nCapre negre-n colt de piatra sura\r\nStrajuiesc in noapte locul sfant.\r\n\r\nDe la Varful Omu pana-n zare\r\nDunarea albastra poti s-o vezi\r\nPiatra Craiului si Piatra Mare\r\nFagarasul cu-ale lui zapezi.\r\nHoinarind vreodata pe-o carare\r\nDac-o cruce-n cale-ai intalnit\r\nNu uita sa pui macar o floare\r\nPentru cel ce muntele-a iubit.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      },
      {
        "id": 14,
        "name": "Imnuri",
        "slug": "imnuri",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "G",
      "G7",
      "Dm",
      "Dm7"
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
    "id": 63,
    "title": "Sobita",
    "slug": "sobita-63",
    "content": "Din cate am putut afla e melodia unui club de munte A.T.M. Acropolis Aiud, \r\nsa fie clar: nu este melodia unui plagiator...\r\n\r\n    \r\nR:  G       \r\n    DURU DU DURU\r\n    D\r\n    DÃ-I CU CURU'\r\n    A           D\r\n    şI-AşA MICA CUM E EA\r\n    DURU DU DURU CU CURU\t \r\n    E SOBIÞA MEA\r\n     \r\n    D                \r\n    MÃ PUSE DRACU SÃ MÃ-NSOR\r\n    A            D\r\n    CE MARE DANDANA E\r\n    G                  D\r\n    SA-MI IAU NEVASTA CU AVERE\r\n    A            D\r\n    SI SOBA DE ODAIE - BIS\r\n  \t \r\n    ÎN PRIMA NOAPTE EA N-A VRUT\r\n    A ZIS CA-I FAC DURERE\r\n    CA-I STRIC SOBIÞA CE I-A DAT\r\n    MÃICUÞA CA AVERE\r\n  \t \r\n    A DOUA NOAPTE A FOST LA FEL\r\n    N-A SCOS MÃCAR O VORBA\r\n    DAR ERAM TÂNÃR SI-AS FI VRUT\r\n    SA BAG UN LEMN IN SOBA\r\n  \t \r\n    A TREIA NOAPTE-AM ÎNCERCAT\r\n    SOBIÞA ERA SPARTA\r\n    CU MULTE LUNI ÎNAINTEA MEA\r\n    BÃGASE ALTU-O CIOATA\r\n  \t \r\n    VECINII MEI SUNT VECINI BUNI\r\n    NU SCOT MÃCAR O VORBA\r\n    MAI VIN SI EI DIN CÂND IN CÂND\r\n    SA BAGE-UN LEMN IN SOBA\r\n  \t \r\n    ACUM SOBIÞA S-A LÃRGIT\r\n    SI-NCAP LEMNE MAI MULTE\r\n    NOROC CA-S GHIZI LA ALBATROS\r\n    CE VIN SA MÃ AJUTE",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
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
    "id": 64,
    "title": "Ma intorc si pasi-s grei",
    "slug": "ma-intorc-si-pasi-s-grei-64",
    "content": "Fill            G         C\r\n1. Merg pe unduite caaaaaaaaaai\r\n                     Em\r\nIncalciti sunt pasii mei\r\n                  G          C\r\nRucsacul m-apasa greeeeeeeeeu\r\n                   Em\r\nIara eu prin munti mereu\r\n   D                    Em\r\nR: Ma intorc si pasii-s grei\r\n G        D  \r\nIa, hai, Ia, hai\r\n                   Em\r\nLas in urma muntii mei\r\n G        D\r\nIa, hai, hai, hai\r\n\r\nMa intorc si pasii-s grei\r\nIa, hai, hai, hai\r\nMa gandesc numai la ei\r\n\r\n2. Muntii cat am strabatut\r\nSa m-opresc nu am putut\r\nInfruntand si ploi si vant\r\nVreau pe creste sa ajung\r\n\r\n3. Cerul arde-n curcubeu\r\nIara eu prin munti mereu\r\nRucsacul m-apasa greu\r\nIncalc&#239;t e drumul meu",
    "author": {
      "id": 30,
      "name": "Amurg",
      "slug": "amurg"
    },
    "author_id": 30,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "C",
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
    "id": 65,
    "title": "Ciobanas cu 300 de oi",
    "slug": "ciobanas-cu-300-de-oi-65",
    "content": "D           A           D\r\nCiobanas cu trei sute de oi,\r\n   D                   G          D\r\nCând vii si treci cu turma pe la noi,\r\n    G            A            D\r\nDe-i vedea pe mândra, draga mea,\r\nSpune-i ca m-am departat de ea.\r\n\r\nCând luna-apare dintre munti în sus,\r\nPleaca-ti mândro ochii cum ti-am spus,\r\nSpune-i numai lui ca ma iubesti\r\nSi-atunci mândro tot mai draga-mi esti.\r\n\r\nCând soarele rasare dintr-un negru nor,\r\nMa cuprinde mândro al tau dor,\r\nJale mi-e si nu te pot uita,\r\nDar n-am ce face c-asa-i soarta mea.",
    "author": {
      "id": 8,
      "name": "Folclor",
      "slug": "folclor"
    },
    "author_id": 8,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
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
    "id": 66,
    "title": "Batranul refugiu",
    "slug": "batranul-refugiu-66",
    "content": "Am                                     Dm\r\n1. Departe în munti ascuns  printre stânci\r\n G                        C              E\r\nSe afla batrânul refugiu\r\nAcolo se întâlnesc acei ce iubesc\r\nPeretii de stînca si cerul.\r\n\r\nAm                                    Dm\r\nR:Nu-i nimeni sa-i înteleaga\r\nG               C                     E \r\nNu-i nimeni la fel ca ei, la fel ca noi\r\nDoar dorul în dulce leagan\r\nSa-i urce spre creste mereu.\r\n\r\n2. Mi-e inima-n furci, de vrei poti sa urci\r\nSa simti primul pas în perete\r\nSperanta apoi sa facem în doi\r\nSi-apoi tot mai sus printre creste.",
    "author": {
      "id": 3,
      "name": "Anonim",
      "slug": "anonim"
    },
    "author_id": 3,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "G",
      "C",
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
    "id": 67,
    "title": "Ana lui Manole",
    "slug": "ana-lui-manole-67",
    "content": "Am    G                 Am\r\n1.Voi ziditi în jurul meu\r\nAm    G                 Am\r\nDar aici în zid sunt eu\r\nAm    G    Em           Am\r\nDar aici în zid sunt eu, sunt eu.\r\nHai, Manole, pune zid\r\nSa nu pot sa-l mai deschid\r\nHai îmbraca-ma în zid, zid greu.\r\n\r\n               C\r\nR: Turla-mi soarbe capu-n ea\r\nDm                        Am\r\nÎn altar e fruntea mea\r\nG      Em         Am        G\r\nOchii ei feresti vor sta, spre cer\r\nVoi lucrati si va e greu\r\nÎnsa de murit, mor eu\r\nJertfa voastra sunt chiar eu, eu pier.\r\n\r\n2.Pe oriunde sunt zidiri\r\nOmul meu, sa nu te miri\r\nLe-au întruchipat doi miri de rând.\r\nDara tu de-a pururi pleci\r\nEu ramân aici pe veci\r\nPrada caramizii reci, plângând.\r\n\r\n3.Sângele mi-i înca viu\r\nVoi nu stiti ca si eu stiu\r\nC-am sa mor dintr-un pariu stupid.\r\nHai Manole fii mai demn\r\nCum sa-ti faci aripi de lemn\r\nMi se face-a moarte semn în zid.\r\n \r\n4.Sa te-nchini când vei pleca\r\nSa nu uiti, sa uiti cumva\r\nCa-nauntru-i Ana ta, om crud.\r\nMila cum nu poti sa ai\r\nVoi plecati catre alt Rai\r\nEu din zid abia va mai aud.",
    "author": {
      "id": 31,
      "name": "Magda Pușcaș",
      "slug": "magda-puscas"
    },
    "author_id": 31,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "G",
      "Em",
      "C",
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
    "id": 68,
    "title": "Noapte la mare, noapte la munte",
    "slug": "noapte-la-mare-noapte-la-munte-68",
    "content": "   Am              Dm\r\n1. Noi n-am fost niciodata doi\r\n      G             C\r\n   Ci unul singur amandoi,\r\n      Am          Dm\r\n   Salbatic cuplu-nsingurat,\r\n      E           Am\r\n   Pe care timpul l-a uitat.\r\n\r\nR: Noapte la mare, noapte la mare,\r\n   Buzele tale au gust de sare,\r\n   Pielea-ti miroase a scoici si a soare, \r\n   Noapte la mare, noapte la mare.\r\n   Noapte la munte, noapte carpatina,\r\n   Buzele tale au gust de rasina,\r\n   Paru-ti miroase a flori si a fructe,\r\n   Noapte la munte, noapte la munte.\r\n\r\n2. Noapte la mare, noapte-nstelata,\r\n   Inima mea e o scoica furata,\r\n   Perla din ea e chiar dragostea mea,\r\n   Stai langa mine, tu esti a mea.\r\n\r\n3. Buzele tale pe buzele mele\r\n   In intunericul noptii-s mai grele\r\n   Bratele tale, flacari in noapte,\r\n   Roiuri de stele, roiuri de soapte.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "G",
      "C",
      "E"
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
    "id": 69,
    "title": "Tincturi de frunze",
    "slug": "tincturi-de-frunze-69",
    "content": "G                     Em\r\n1. Nu pot sa stau drept, merg cu toamna-n piept\r\nC                 D\r\nVantu-n toate ranile ma doare\r\nG                 Em\r\nSi pe orice drum, ca-ntr-un vers postum\r\nC                  D\r\nVine frunza in intampinare\r\n\r\nR: Si-am sa-ti scriu scrisori pe tulpini de flori\r\nDe lumina stelelor patrunse\r\nSi-un roman sa-ti scriu, folosind pe viu\r\nSub umbra de nuc, tincturi de frunze\r\nTincturi de frunze\r\n\r\n2. Putredul accent a lovit atent\r\nFiecare fir de iarba verde\r\nClipe indigo, care incotro\r\nSa n-avem motive de-a ne pierde\r\n\r\n3. Frunze iti trimit, scrise cu grafit\r\nIar din albul iernii care vine\r\nCe sa-ti mai insir, frunzele-n delir\r\nTe iubesc si ma gandesc la tine\r\n\r\n4. Nu vad pe unde merg, frunze cad din cer\r\nSi in tropot mi se-aude mersul\r\nScriu scrisori pe foi, lacrimez in ploi\r\nIntr-un liber schimb cu universul\r\n\r\n5. Te iubesc profund, nu ma mai ascund\r\nIn mine e toamna si ma doare\r\nCe sa-ti spun acum, cad frunze pe drum\r\nTe astept cu multa nerabdare",
    "author": {
      "id": 32,
      "name": "Ursul Trubadur",
      "slug": "ursul-trubadur"
    },
    "author_id": 32,
    "categories": [
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
    "id": 70,
    "title": "Numai noi",
    "slug": "numai-noi-70",
    "content": "   Em           G        D\r\n1. Numai noi, suntem împreună\r\n   Em           G        D\r\n   Numai noi sub clarul de lună\r\n     G    Em      D      Em\r\n   Suntem doi fericiţi în munte\r\n   Tu şi eu cuplul fericirii\r\n   Eu şi tu vis al împlinirii\r\n   Iar în păr porţi doar flori de munte.\r\n\r\n     G                   D        Am   \r\n  R: Vom fi singuri prin văi şi pe creste\r\n     Din noi doi va rămâne o poveste\r\n     G        D      B7        Em\r\n     Împreună vom fi şi ne vom iubi.\r\n\r\n2.Numai noi, câtă poezie\r\n   Numai noi, noaptea e târzie\r\n   Focul doar mai trosneşte parcă\r\n   Sunt al tău, nu mai sunt cuvinte\r\n   Eşti a mea, ne iubim pe munte\r\n   Pat de flori, şi-mpărţim o soartă\r\n\r\nR:\r\n\r\n3.Jos sunt flori, pe cer numai stele\r\n   Ne iubim martore-s doar ele\r\n   Adormim ca şi doi copii\r\n   Numai vis sub clarul de lună\r\n   Numai vis, suntem împreună\r\n   Amândoi plini de bucurie.\r\n\r\nR:\r\n\r\n(interpretat si de Karma)",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "D",
      "Am",
      "B7"
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
    "id": 71,
    "title": "Refugiul Diana",
    "slug": "refugiul-diana-71",
    "content": "   Em        D        Em\r\nAm pornit sa recladim Diana  \r\n      G     D       Em\r\nUn refugiu vechi si parasit\r\n    G        D          G D Em\r\nAm lasat spritul si damigeana\r\n          C     D       Em\r\nSi spre Plaiul Foii am pornit.\r\n\r\n\tRefren:\t\r\n\t\r\n\t Em   D    G     C          Em\r\n\tMama unde esti? Bate-ma de vrei\r\n              D        Em\r\n\tDar vino sa ma iei !\r\n\tMama unde esti? Bate-ma de vrei\r\n\tDar vino sa ma iei !\r\n\r\nScândura mica, scândurica lata\r\nTe-am purta pana ne facem mici\r\nSi echipa noastra cocosata\r\nParca-ar fi o ceata de pitici.\r\n\r\nTotu-i bine pana la-nserare\r\nCând cu lacrimi calde ne rugam\r\nO, Ceresc Parinte, îndurare!\r\nFa mai cald sa nu mai înghetam.",
    "author": {
      "id": 33,
      "name": "Roza Vânturilor",
      "slug": "roza-vanturilor"
    },
    "author_id": 33,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "D",
      "G",
      "C",
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
    "id": 72,
    "title": "Delirul",
    "slug": "delirul-72",
    "content": "    Am                   Dm\r\n1.Curând va fi o noapte lungă\r\n          E                Am  \r\n  şi fără tine-mi va fi greu\r\n  Iubita mea vino la mine\r\n  Te aştept să vii de Anul Nou.\r\n                                      \r\n      Am               Dm\r\nR: Râd şi plâng şi te strig delirând\r\n       G                 C\r\n   E soare e ploaie e cald şi e vânt \r\n         Am                  Dm   \r\n   Din somn mă trezesc şi tresar speriat\r\n         E                  Am  \r\n   Dar nu-i nimic doar am visat.\r\n\r\n2.De vrei să vii curând cu munţii\r\n  La marea mea cu valuri verzi\r\n  Să ne jurăm credinţă pururi\r\n  Să nu te pierd să nu mă pierzi.\r\n\r\n3.Tu nu ai timp tu nu ai suflet\r\n  Nimic din tine n-ai să-mi dai\r\n  Când vii şi pleci şi nu rămâne\r\n  Nimic din serile de mai.\r\n\r\n4.Când te-am văzut ultima oară\r\n  Ah, ce frumos tu m-ai privit\r\n  Nu pot să uit a ta privire\r\n  şi parc-o văd şi parc-o simt.\r\n\r\n5.şi de vei face-o nouă punte\r\n  Să n-o arunci în amintiri\r\n  şi lasă-mă să vin la tine\r\n  Cu braţul plin de trandafiri.\r\n\r\n6.Curând va fi o noapte lungă\r\n  şi fără tine-mi va fi greu\r\n  Iubirea mea te rog revino\r\n  Te-aştept să te întorci mereu.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
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
    "id": 73,
    "title": "Ninge",
    "slug": "ninge-73",
    "content": "   D              G          A             D\r\n1.Ninge astăzi pentru tine, muntele e alb de nea\r\n   Soarele din ceruri vine doar pentru iubita mea\r\n   Și călugării din schituri vor cu toţii a te vedea\r\n   La cabană au venit doar pentru iubita mea.\r\n\r\n                   R: Când te scuturi de zăpadă\r\n                       Nu ştii cât eşti de frumoasă\r\n                       Ochii-ţi verzi, zăpada-i albă\r\n                       Și se face cald în casă.\r\n\r\n2.Și zăpada de pe culme în vale s-a rostogolit\r\n   Muntele e pus pe glumă de când ştie c-ai venit\r\n   Acum coboară şi dorul chemat de la locul lui\r\n   Tocmai de pe Vârful Omu până-n Valea Dorului.\r\n\r\n3.Jepii Mici ca să te vadă şi-au cumpărat ochelari\r\n   şi în cea mai mare grabă i-au chemat pe Jepii Mari\r\n   Nu ştiu sigur azi sau mâine pe Morar am să te sui\r\n   Să ne logodim iubito sus în vârful muntelui.",
    "author": {
      "id": 24,
      "name": "Cântece de munte",
      "slug": "cantece-de-munte"
    },
    "author_id": 24,
    "categories": [
      {
        "id": 5,
        "name": "Cântece de munte",
        "slug": "cantece-de-munte",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
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
    "id": 74,
    "title": "Sculați, boieri mari!",
    "slug": "sculati-boieri-mari-74",
    "content": "Intro: C F C F C G C\n\n\nC        G        C      F\nSculaţi, sculaţi, boieri mari,\nC       G     C\nCristos s-a născut,\nC        F      C       F\nSculaţi, voi, români plugari,\nC       G     C\nCristos s-a născut!\n\nCă vă vin colindători\nCristos s-a născut,\nNoaptea, pe la cântători,\nCristos s-a născut.\n\nŞi v-aduc pe Dumnezeu\nCristos s-a născut,\nSă vă mântuie de rău\nCristos s-a născut.\n\nDumnezeu adevărat,\nCristos s-a născut,\nSoare-n raze luminat\nCristos s-a născut.\n\nEl vă zice ”Să trăiți”,\nCristos s-a născut,\nÎntr-un ”Mulţi ani fericiţi!”,\nCristos s-a născut.\n\nȘi ca pomii să-nfloriți,\nCristos s-a născut\nȘi ca ei să-mbătrâniți,\nCristos s-a născut.\n",
    "author": {
      "id": 34,
      "name": "Dida Drăgan",
      "slug": "dida-dragan"
    },
    "author_id": 34,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
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
    "id": 75,
    "title": "O brad frumos",
    "slug": "o-brad-frumos-75",
    "content": "G  C    C       G  C   C\nO, brad frumos, o brad frumos,\nC G C F   G  G  C\nCu cetina tot verde.\nC  C    C  F F  G  F  F\nTu esti copacul credincios,\nF  F  F  G  G    F   C \nCe frunza nu si-o pierde,\nG  C    C       G  C   C\nO, brad frumos, o brad frumos,\nC G C F   G  G  C\nCu cetina tot verde.\n\nO, brad frumos, o brad frumos,\nVerdeata ta imi place.\nCand o revad sunt bucuros\nSi vesel ea ma face.\nO, brad frumos, o brad frumos,\nVerdeata ta imi place.\n\nO, brad frumos, o brad frumos,\nCu frunza neschimbata.\nMa mangai si ma faci voios\nSi ma-ntaresti indata.\nO, brad frumos, o brad frumos,\nCu frunza-ti neschimbata.",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "F"
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
    "id": 76,
    "title": "Florile dalbe",
    "slug": "florile-dalbe-76",
    "content": "Am            Dm  Am\nScoală gazdă din pătuţ\nAm       G Am\nFlorile dalbe\nAm           Dm  Am\nşi ne dă un colăcuţ\n          Dm  F   Am\nFlorile, florile dalbe\n\nAm            Dm  Am\nCă mamuca nu o făcut\nAm       G Am\nFlorile dalbe\nAm           Dm  Am\nSită rară n-o avut\n          Dm  F   Am\nFlorile, florile dalbe\nAm            Dm  Am\nPăna  sită o căpătat\nAm       G Am\nCovata i s-o crăpat\nAm            Dm  Am\nL-o sfădit mama pe tata\nAm       G Am\nDe ce s-o crăpat covata\nAm            Dm  Am\nCând covata o lipit\nAm       G Am\nCuptioru li s-o urnit\nAm            Dm  Am\nCând cuptoru l-o tocmit\nAm       G Am\nAnul Nou o şi venit\n\nAm           Dm   Am\nFlorile, florile dalbe\nAm        Dm  F   Am\nFlorile, florile dalbe",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
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
    "id": 77,
    "title": "Trei păstori",
    "slug": "trei-pastori-77",
    "content": "2/4 & 3/4 (*)\n\nD(2/4)D(3/4) D(2/4)\nTrei pastori se intalnira\nG (2/4)  D(3/4) D(2/4) \nTrei pastori se intalnira\nG(2/4) D(2/4)  A7(2/4) D(2/4)\nRaza soarelui, floarea soarelui\nG(2/4) A7(3/4) D(2/4)\nSi asa se sfatuira:\n\nD                    D \nHaideti fratilor sa mergem\nG                    D  \nHaideti fratilor sa mergem\nG         D         A7         D\nRaza soarelui, floarea soarelui\nG       A7      D\nFloricele sa culegem.\n\nD                    D \nSi sa facem o cununa\nG                    D \nSi sa facem o cununa\nG         D         A7         D\nRaza soarelui, floarea soarelui\nG       A7      D\nS-ompletim cu voie buna.\n\nD                    D \nSi s-o ducem lui Cristos\nG                    D \nSi s-o ducem lui Cristos\nG         D         A7         D\nRaza soarelui, floarea soarelui\nG       A7      D\nSa ne fie de folos.\n\n(*) Dificultatea melodiei (dar si frumusețea ei) consta în faptul ca este un mix intre masurile 2/4 si 3/4. Am încercat sa marchez trecerile în strofa 1.",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
      "A7",
      "Am"
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
    "id": 78,
    "title": "Am plecat să colindăm",
    "slug": "am-plecat-sa-colindam-78",
    "content": "G\r\nAm plecat să colindăm\r\nDomn, Domn, să-nălțăm!\r\nD             G\r\nCând boierii nu-s acasă\r\nD           G\r\nDomn, Domn să-nălțăm!\r\n\r\nG\r\nȘi-au plecat la vânătoare\r\nDomn, Domn să-nălțăm!\r\nD         G\r\nSă vâneze căprioare\r\nD          G\r\nDomn, Domn să-nălțăm!\r\n\r\nG\r\nCăprioare n-au vânat\r\nDomn, Domn să-nălțăm\r\nD              G\r\nȘi-au vânat un iepuraș\r\nD          G\r\nDomn, Domn să-nălțăm!\r\n\r\nG\r\nSă facă din blana lui\r\nDomn, Domn să-nălțăm!\r\nD               G\r\nVeștmânt frumos Domnului\r\nD          G\r\nDomn, Domn să-nălțăm!\r\n",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "Am"
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
    "id": 79,
    "title": "Linu-i lin",
    "slug": "linu-i-lin-79",
    "content": "Capo III\r\n\r\n\r\nIntro: D G / D G A / D\r\n\r\n\r\nD                  G\r\nLinu-i lin şi iară lin,\r\n                  D\r\nBate vântul cât e lin,    \r\nA                 D\r\nFrunză verde de mălin,\r\n                   G\r\nLinu-i lin şi iară lin,\r\n                  D\r\nBate vântul cât e lin,    \r\nA                 D\r\nFrunză verde de mălin.\r\n\r\n\r\n         A      D     A\r\nSculaţi, gazde, nu durmiţi,\r\nD       A      D     A\r\nCă nu-i vremea de durmit,\r\nD                  G\r\nLinu-i lin şi iară lin,\r\n                  D\r\nBate vântul cât e lin,    \r\nA                 D\r\nFrunză verde de mălin,\r\n                   G\r\nLinu-i lin şi iară lin,\r\n                  D\r\nBate vântul cât e lin,    \r\nA                 D\r\nFrunză verde de mălin.\r\n\r\n\r\nCă-i vremea de săsculat,\r\nCasăle de aşăzat,\r\nLinu-i lin şi iară lin,\r\nBate vântul cât e lin,    \r\nFrunză verde de mălin,\r\nLinu-i lin şi iară lin,\r\nBate vântul cât e lin,    \r\nFrunză verde de mălin.\r\n\r\n\r\nPă la uşă cu brânduşă,\r\nLa fereşti cu flori domneşti,\r\nLinu-i lin şi iară lin,\r\nBate vântul cât e lin,    \r\nFrunză verde de mălin,\r\nLinu-i lin şi iară lin,\r\nBate vântul cât e lin,    \r\nFrunză verde de mălin.\r\n\r\n\r\nȘi colinda nu-i mai multă,\r\nSă trăia cine-o ascultă,\r\nLinu-i lin şi iară lin,\r\nBate vântul cât e lin,    \r\nFrunză verde de mălin,\r\nLinu-i lin şi iară lin,\r\nBate vântul cât e lin,    \r\nFrunză verde de mălin.\r\n",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
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
    "id": 80,
    "title": "Flori de măr",
    "slug": "flori-de-mar-80",
    "content": "Intro: G D G\r\n\r\n\r\nG                                        D\r\nAm venit aici, la voi, am venit aici, la voi,\r\n                G                    D   G\r\nCum e datina la noi, cum e datina la noi.\r\n\r\n\r\nG                          D                 G\r\nSculați gazde, nu dormiți, vremea e să vă treziți,\r\n                           D                 G\r\nSculați gazde, nu dormiți, vremea e să vă treziți,\r\n\r\nCasa să vi-o aranjați, flori de măr,\r\n                        D        G\r\nMasa să vi-o încărcați, flori de măr,\r\n\r\nCasa să vi-o aranjați, flori de măr,\r\n                        D        G\r\nMasa să vi-o încărcați, flori de măr.\r\n\r\n\r\nNoi umblăm a colinda, pe la casa altuia,\r\nNoi umblăm a colinda, pe la casa altuia,\r\nSă trăiți, să-ntineriți, flori de măr,\r\nÎn mulți ani să-mbătrâniți, flori de măr,\r\nSă trăiți, să-ntineriți, flori de măr,\r\nÎn mulți ani să-mbătrâniți, flori de măr.\r\n\r\n\r\nȘi la anul om veni, numai dacă ni-ți pofti\r\nȘi la anul om veni, numai dacă ni-ți pofti\r\nȘi mai multe vom ura, flori de măr,\r\nUn cocuț dacă ni-ți da, flori de măr\r\nȘi mai multe vom ura, flori de măr,\r\nUn cocuț dacă ni-ți da, flori de măr.\r\n\r\n\r\nG                                             D                          \r\nȘi colinda nu-i mai multă și colinda nu-i mai multă,\r\n                  G                         D                   \r\nSă trăiască cine-ascultă, să trăiască cine-ascultă\r\nG                                  D             \r\nȘi colinda-i atâta și colinda-i atâta,\r\n                   G                      D  G                                         \r\nCine-ascultă să trăia, cine-ascultă să trăia.\r\n",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
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
    "id": 81,
    "title": "Deschide usa crestine",
    "slug": "deschide-usa-crestine-81",
    "content": "S. Hrusca totdeauna canta varianta asta. Succes\r\n\r\nE            A\r\nDeschide usa crestine\r\nE            B7\r\nDeschide usa crestine\r\nA           E\r\nCa venim si noi la tine\r\nB7                 E\r\nLa multi ani multi ani cu bine\r\n\r\nNoi la Viflaim am fost\r\nNoi la Viflaim am fost\r\nUnde s-a nascut Hristos\r\nLa multi ani multi ani cu bine\r\n\r\nSi am vazut si pe-a sa mama\r\nSi am vazut si pe-a sa mama\r\nPe care Maria o cheama \r\nLa multi ani multi ani cu bine\r\n\r\nCum umbla din casa-n casa\r\nCum umbla din casa-n casa\r\nCa pe fiul sau sa-l nasca \r\nLa multi ani multi ani cu bine\r\n\r\nUmbla-n jos si umbla-n sus\r\nUmbla-n jos si umbla-n sus\r\nCa sa-l nasca pe Iisus\r\nLa multi ani multi ani cu bine\r\n\r\nUmbla-n sus si umbla-n jos\r\nUmbla-n sus si umbla-n jos\r\nCa sa-l nasca pe Hristos\r\nLa multi ani multi ani cu bine\r\n\r\nTot umbland gasi apoi\r\nTot umbland gasi apoi\r\nUn staul mandru de oi \r\nLa multi ani multi ani cu bine\r\n\r\nIngerii din cer coboara\r\nIngerii din cer coboara\r\nStaulul de-l inconjoara \r\nLa multi ani multi ani cu bine\r\n\r\nIngerii cu flori in mana\r\nIngerii cu flori in mana \r\nImpletesc mandra cununa\r\nLa multi ani multi ani cu bine\r\n\r\nPa cununa-i scris frumos\r\nPa cununa-i scris frumos\r\nAstazi s-a nascut Hristos\r\nLa multi ani multi ani cu bine\r\n\r\nPe cununa-i scris asa\r\nPe cununa-i scris asa\r\nCa s-a nascut Mesia\r\nLa multi ani multi ani cu bine\r\n\r\nCare cu puterea sa\r\nCare cu puterea sa\r\nVa imparati lumea \r\nLa multi ani multi ani cu bine",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "E",
      "A",
      "B7"
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
    "id": 82,
    "title": "Măruț mărgăritar",
    "slug": "marut-margaritar-82",
    "content": "Capo III\r\n\r\n\r\nIntro: D   x8\r\n\r\n\r\nD\r\nNoi umblăm să colindăm,\r\n\r\nMăruț mărgăritar,\r\n                   A\r\nNoi umblăm să colindăm\r\nD\r\nPă la curți de boieri mari,\r\n\r\nMăruț mărgăritar,\r\n                      A\r\nPă la curți de boieri mari,\r\nD\r\nDa’ boierii nu-s acas’,\r\n\r\nMăruț mărgăritar,\r\n                  A\r\nDa’ boierii nu-s acasă,\r\nD\r\nCă-s plecați la vânătoare,\r\n\r\nMăruț mărgăritar,\r\n                    A\r\nCă-s plecați la vânătoare,\r\nD\r\nSă vâneze căprioare,\r\n\r\nMăruț mărgăritar,\r\n               A\r\nSă vâneze căprioare,\r\nD\r\nCăprioare n-o’ aflat\r\n\r\nMăruț mărgăritar,\r\n                A\r\nCăprioare n-o’ aflat,\r\nD\r\nNuma-un pui de iepuraș,\r\n\r\nMăruț mărgăritar,\r\n                   A\r\nNuma-un pui de iepuraș,\r\n D\r\n’Tinsă pușca să-l împuște,\r\n\r\nMăruț mărgăritar\r\n                 A\r\nȘi săjata să-l săjete,\r\nD\r\nHop-hop-hop, nu mă țîntire,\r\n\r\nMăruț mărgăritar,\r\n                    A\r\nCă io nu-s ce par a fire,\r\nD\r\nCă-s Ionu’, Sânt’ Ion,\r\n\r\nMăruț mărgăritar,\r\n                   A\r\nCă-s Ionu,’ Sânt’ Ionu’,\r\nD\r\nNănașu’ lu’ Dumnezău,\r\n\r\nMăruț mărgăritar,\r\n                 A\r\nNănașu’ lu’ Dumnezău\r\nD\r\nȘi m-o blăstămat Maica,\r\n\r\nMăruț mărgăritar\r\n                    A\r\nȘi m-o blăstămat Maica\r\nD\r\nSă fiu fiară de pădure,\r\n\r\nMăruț mărgăritar,\r\n                  A\r\nSă fiu fiară de pădure,\r\nD\r\nNouă ani și nouă luni,\r\n\r\nMăruț mărgăritar\r\n                 A\r\nȘi p-atâtea săptămâni,\r\nD\r\nDac-acelea ’plini-le-oi\r\n\r\nMăruț mărgăritar,\r\n                   A\r\nJos, la țară, lăsa-m-oi,\r\nD\r\nBiserici deschide-mi-oi,\r\n\r\nMăruț mărgăritar,\r\n                   A\r\nSlujbe mândre face-voi,\r\nD\r\nSă fii, gazdă, sănătoasă,\r\n\r\nMăruț mărgăritar,\r\n                    A\r\nC-ai primit colinda noastră\r\nD\r\nȘi la anu’ când vinim,\r\n\r\nMăruț mărgăritar,\r\n                   A\r\nMai bogați să vă găsîm\r\nD\r\nȘi la anu’ când vinim,\r\n\r\nMăruț mărgăritar,\r\n                   A\r\nMai bogați să vă găsîm.\r\n\r\n\r\nOutro: D   x5",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "D",
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
    "id": 83,
    "title": "Steaua sus răsare",
    "slug": "steaua-sus-rasare-83",
    "content": "No Capo!!!\r\n\r\nAm\r\nSteaua sus răsare \r\nCa o taina mare\r\nDm             Am\r\nSteaua strălucește\r\nE              Am\r\nȘi lumii vestește\r\nE              Am \r\nȘi lumii vestește \r\n\r\nCa astăzi Curata \r\nPreanevinovata \r\nFecioara Maria \r\nNaște pe Mesia \r\nNaște pe Mesia \r\n\r\nMagii cum zăriră \r\nSteaua și porniră\r\nMergând după rază\r\nPe Hristos sa-l vază\r\nPe Hristos sa-l vază \r\n\r\nȘi dacă porniră \r\nÎndată-L găsiră\r\nLa Dânsul intrară\r\nȘi se închinară \r\nȘi se închinară \r\n\r\nCu daruri gătite \r\nLui Hristos menite \r\nDucând fiecare \r\nBucurie mare\r\nBucurie mare \r\n\r\nCare bucurie \r\nȘi aici sa fie \r\nDe la tinerețe \r\nPan-la bătrânețe \r\nPan-la bătrânețe",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
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
    "id": 84,
    "title": "Scoala gazda din patut",
    "slug": "scoala-gazda-din-patut-84",
    "content": "Intro: Am E\r\n\r\nj  s j s s   j s j s s  <---- Bataia este aceeasi mereu.\r\n\r\nAm            G   Am        \r\nScoala gazda din patut\r\n  Am    G  Am\r\nFlorile dalbe,\r\n Am         G   Am\r\nSi ne da un colacut\r\n G       E       Am\r\nFlorile ,florile dalbe.\r\nAm         G   Am                    \r\nCa mamuca n-o facut\r\n  Am    G  Am                    \r\nFlorile dalbe,\r\nAm         G   Am                    \r\nSita rara n-o avut\r\n G       E       Am                   \r\nFlorile ,florile dalbe.",
    "author": {
      "id": 35,
      "name": "Colinde",
      "slug": "colinde"
    },
    "author_id": 35,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "Am",
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
    "id": 85,
    "title": "Flori de mar",
    "slug": "flori-de-mar-85",
    "content": "G                D                     G\r\nAm venit aici la voi, am venit aici la voi\r\n                D                    G\r\nCum e datina la noi, cum e datina la noi\r\nG             D7    G     C           D7    G\r\nSculati gazde nu durmiti, vremea e sa va treziti\r\nG             D7    G     C           D7    G\r\nSculati gazde nu durmiti, vremea e sa va treziti\r\nG                D7    C     D7 G\r\nCasa sa vi-o maturati, flori de mar\r\nG                 D7    C     D7 G\r\nMasa sa vi-o încarcati, flori de mar.\r\nG                D7    C     D7 G\r\nCasa sa vi-o maturati, flori de mar\r\nG                 D7    C     D7 G\r\nMasa sa vi-o încarcati, flori de mar.\r\n\r\nG            D7   G   C           D7   G\r\nNoi umblam a colinda, di l-o casa la alta\r\nG            D7   G   C           D7   G\r\nNoi umblam a colinda, di l-o casa la alta\r\nG                  D7   C     D7 G\r\nSi venim cu Domnul bun, flori de mar\r\nG               D7    C     D7 G\r\nCa e sara de Craciun, flori de mar.\r\nG                  D7   C     D7 G\r\nSi venim cu Domnul bun, flori de mar\r\nG               D7    C     D7 G\r\nCa e sara de Craciun, flori de mar.\r\n\r\nG          D7   G   C          D7    G\r\nSi la anul om zini, numai daca ni-ti pofti\r\nG          D7   G   C          D7    G\r\nSi la anul om zini, numai daca ni-ti pofti\r\nG                D7   C     D7 G\r\nSi mai multe vom ura, flori de mar\r\nG                   D7  C     D7 G\r\nUn pocut daca ni-ti da, flori de mar\r\nG                D7   C     D7 G\r\nSi mai multe vom ura, flori de mar\r\nG                   D7  C     D7 G\r\nUn pocut daca ni-ti da, flori de mar\r\n\r\nG                   D                          G\r\nSi colinda nu-i mai multa, si colinda nu-i mai multa\r\n                   D                         G\r\nSa traiasca cine-asculta, sa traiasca cine-asculta\r\nG               D                   G\r\nSi colinda-i atâta, si colinda-i atâta\r\n                   D                      G\r\nCine-asculta sa traia, cine-asculta sa traia.",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "D7",
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
    "id": 86,
    "title": "Florile dalbe",
    "slug": "florile-dalbe-86",
    "content": "Intro: Em Am Em\r\n\r\nEm           Am         Em      Am\r\nScoala gazda din patut, florile dalbe\r\nEm          Am       Em       Am      Em\r\nSi ne da un colacut, florile, florile dalbe.\r\n\r\nEm        Am         Em      Am\r\nCa mamuca n-o facut, florile dalbe\r\nEm       Am        Em       Am      Em\r\nSita rara n-o avut, florile, florile dalbe.\r\n\r\nEm             Am       Em      Am\r\nPe când sât' o capatat, florile dalbe\r\nEm       Am          Em       Am      Em\r\nCovata i s-o crepat, florile, florile dalbe.\r\n\r\nEm         Am            Em      Am\r\nL-o sfadit mama pe tata, florile dalbe\r\nEm           Am          Em      Am      Em\r\nDi ce s-o crepat covata, florile florile dalbe.\r\n\r\nEm          Am       Em      Am\r\nCând covata o lipit, florile dalbe\r\nEm           Am         Em       Am      Em\r\nCuptorul l-i s-o urnit, florile, florile dalbe.\r\n\r\nEm            Am        Em      Am\r\nCând cuptorul a tomnit, florile dalbe\r\nEm         Am        Em       Am      Em\r\nAnul nou a si venit, florile, florile dalbe.",
    "author": {
      "id": 10,
      "name": "Ștefan Hrușcă",
      "slug": "stefan-hrusca"
    },
    "author_id": 10,
    "categories": [
      {
        "id": 15,
        "name": "Colinde",
        "slug": "colinde",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "Am"
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
    "id": 87,
    "title": "O lume minunată",
    "slug": "o-lume-minunata-87",
    "content": "Intro: C   x4\n\n\n              C\n      Refren: E-o lume minunată, în care veți găsi\n                      G\n              Numai copii,\n\n              O lume cu mult soare și mii de jucării\n              G7       C\n              Pentru copii.\n\n\n              În lumea cu povești și flori veți întâlni\n              Numai copii\n              Și-o lume-a inocenței, păstrați-o, orice ar fi,\n              Pentru copii!\n\n\nC\nIeri am fost și noi copii,\n    D\nDar timpul ne-a schimbat,\n   G\nÎn viață am pornit și vise-am împlinit\n C               G\nAșa, cum ne-am dorit!\n\n\nC\nGânduri bune câte-am strâns\n   D\nȘi tot ce-am învățat,\n  G\nCopiilor să dăm iubirea ce-o purtăm,\n     C            G\nCe-i bun să le arătăm!\n\n\n      Refren: E-o lume minunată, în care veți găsi\n              Numai copii,\n              O lume cu mult soare și mii de jucării\n              Pentru copii.\n\n\n              În lumea cu povești și flori veți întâlni\n              Numai copii\n              Și-o lume-a inocenței, păstrați-o, orice ar fi,\n              Pentru copii!\n\n\nIeri am fost și noi copii,\nDar timpul ne-a schimbat,\nÎn viață am pornit și vise-am împlinit\nAșa, cum ne-am dorit!\n\n\nGânduri bune câte-am strâns\nȘi tot ce-am învățat,\nCopiilor să dăm iubirea ce-o purtăm,\nCe-i bun să le arătăm!\n\n\n            E7\nInterludiu: Ce zâmbet poate fi \n                Am\n            Mai sincer, mai curat,\n            D7\n            Ce ochi știu a vorbi \n             G\n            Atât de-adevărat?\n\n\n      Refren: E-o lume minunată în care poți găsi\n              Numai copii,\n              O lume cu mult soare și mii de jucării\n              Pentru copii.\n\n\n              În lumea cu povești și flori veți întâlni\n              Numai copii\n              Și-o lume-a inocenței, păstrați-o, orice ar fi,\n              Pentru copii!\n\n\nInterludiu: C# G# G#7 C#\n\n\n              C#\n      Refren: La, la, la, la, la, la, la, la, la, la, la, la, la, \n                          G#\n              La, la, la, la,\n\n              La, la, la, la, la, la, la, la, la, la, la, la, la,\n              G#7         C#\n              La, la, la, la.\n\n\n              E-o lume minunată, în care veți găsi\n              Numai copii,\n              O lume cu mult soare și mii de jucării\n              Pentru copii.\n\n\n              În lumea cu povești și flori veți întâlni\n              Numai copii\n              Și-o lume-a inocenței, păstrați-o, orice ar fi,\n              Pentru copii!",
    "author": {
      "id": 36,
      "name": "Mihai Constantinescu",
      "slug": "mihai-constantinescu"
    },
    "author_id": 36,
    "categories": [
      {
        "id": 12,
        "name": "Cântece pentru copii",
        "slug": "cantece-pentru-copii",
        "description": ""
      },
      {
        "id": 16,
        "name": "Muzică ușoară",
        "slug": "muzica-usoara",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "G",
      "G7",
      "D",
      "E7",
      "Am",
      "D7",
      "G#7",
      "C#",
      "G#"
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
    "id": 88,
    "title": "Mă Dusei",
    "slug": "ma-dusei-88",
    "content": "Capo 5\n\nAm7 C Gsus4 D7sus4\n\nAm7   C    Gsus4    D7sus4\nMă dusei,        și mă dusei să\n\nAm7       C    Gsus4    D7sus4\ntrec la Olt\n\nAm7   C    Gsus4    D7sus4\nMă dusei,        și mă dusei să\n\nAm7       C    Gsus4    D7sus4\ntrec la Olt\n\nF         G         Am           C\nCu a mea, cu a mea, cu a mea mândră cu tot\nF            G                 Am\nTra-la-la-la-la-la-la-la-la-la-la\nF         G         Am           C\nCu a mea, cu a mea, cu a mea mândră cu tot\nF            G                 Am\nTra-la-la-la-la-la-la-la-la-la-la\n\n(și tot așa)\n\nȘi podarul, și podaru-mi cere un zlot\nȘi podarul, și podaru-mi cere un zlot\nȘi pe-a mea, și pe-a mea, și pe-a mea mândră de tot\nTra-la-la-la-la-la-la-la-la-la-la\nȘi pe-a mea, și pe-a mea, și pe-a mea mândră de tot\nTra-la-la-la-la-la-la-la-la-la-la\n\nDar decât, dar decât să-i dau un zlot\nDar decât, dar decât să-i dau un zlot\nMai bine, mai bine, mai bine îl trec înot\nTra-la-la-la-la-la-la-la-la-la-la\nMai bine, mai bine, mai bine trec Oltu' înot\nTra-la-la-la-la-la-la-la-la-la-la\n\nUnde-o fi, și unde-o fi Oltul mai mare\nUnde-o fi, și unde-o fi Oltul mai mare\nM-o trece, m-o trece, m-o trece mândra-n spinare\nTra-la-la-la-la-la-la-la-la-la-la\nM-o trece, m-o trece, m-o trece mândra-n spinare\nTra-la-la-la-la-la-la-la-la-la-la\n\nȘi unde-o fi, și unde-o fi mai mititel\nȘi unde-o fi, și unde-o fi mai mititel\nO trec eu, o trec eu, o trec eu că-s voinicel\nTra-la-la-la-la-la-la-la-la-la-la\nO trec eu, o trec eu, o trec eu că-s voinicel\nTra-la-la-la-la-la-la-la-la-la-la\n\nCu a mea, cu a mea, cu a mea mândră cu tot\nTra-la-la-la-la-la-la-la-la-la-la\nCu a mea, cu a mea, cu a mea mândră cu tot\nTra-la-la-la-la-la-la-la-la-la-la",
    "author": {
      "id": 37,
      "name": "Bulz Brotherz",
      "slug": "bulz-brotherz"
    },
    "author_id": 37,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      },
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "F",
      "G",
      "Am",
      "C",
      "Am7",
      "Gsus4",
      "D7sus4"
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
    "id": 89,
    "title": "Cântă mahalaua",
    "slug": "canta-mahalaua-89",
    "content": "Intro: Dm\r\n\r\n\r\nDm\r\nTrage-te încoa, vreau să-ți spun ceva:\r\n   A#\r\nDistracția și vinul sunt mai bune-n mahala,\r\nDm \r\nSufletul deschis, dansul mai încins\r\n   A#          A\r\nȘi cheful iese mult mai aprins,\r\nDm\r\nNoaptea mai cu viață și mai cu dulceață, \r\n    A#\r\nMai plină de păcate până-n zori de dimineață,\r\n  Dm\r\nFemeia mai femeie, plăcerea mai plăcere,\r\n    A#            A\r\nIar dragostea mai fără perdele! \r\n\r\n\r\n              Dm              Gm\r\n      Refren: Cântă mahalaua, tremură podeaua, \r\n              A#  A         Dm   A\r\n              E paranghelie grea, \r\n              Dm               Gm\r\n              Urcă-te pe masă, viața-i mai frumoasă, \r\n              A#     A            Dm A\r\n              Când petreci la mahala! \r\n\r\n\r\nDacă nu mă crezi, hai, vino și-ai să vezi, \r\nLa orice colț de stradă o să dai peste dovezi:\r\nPetreceri duium, grătar pe cărbuni\r\nȘi lăutarii cântă nebuni, \r\nHaide, că poți, fă cinste la toți, \r\nDecât să-mbătrânești cu averea la chiloți,\r\nBea-o cu noi, că banii-s nasoi,\r\nCând ții de ei, te bagă-n noroi! \r\n\r\n\r\n      Refren: Cântă mahalaua, tremură podeaua, \r\n              E paranghelie grea, \r\n              Urcă-te pe masă, viața-i mai frumoasă, \r\n              Când petreci la mahala! \r\n\r\n\r\nInterludiu: Dm\r\n\r\n\r\nSimți că iei foc, nu mai sta pe loc,\r\nBate din picioare și prinde-te la joc, \r\nOrice ar fi, nu te opri,\r\nNici dacă se crapă de zi,\r\nSimte-te bine, fără de rușine\r\nȘi lasă veselia să intre în tine,\r\nNu te lăsa, ține-o tot așa,\r\nCă lumea întreagă-i o mahala. \r\n\r\n\r\n              Dm              Gm\r\n      Refren: Cântă mahalaua, tremură podeaua, \r\n              A#  A         Dm   A\r\n              E paranghelie grea, \r\n              Dm               Gm\r\n              Urcă-te pe masă, viața-i mai frumoasă, \r\n              A#     A            Dm A\r\n              Când petreci la mahala! \r\n\r\n\r\n              Dm              Gm\r\n              Cântă mahalaua, tremură podeaua, \r\n              A#  A         Dm   A\r\n              E paranghelie grea, \r\n              Dm               Gm\r\n              Urcă-te pe masă, viața-i mai frumoasă, \r\n              A#     A            Dm \r\n              Când petreci la mahala! \r\n\r\n",
    "author": {
      "id": 38,
      "name": "White Mahala",
      "slug": "white-mahala"
    },
    "author_id": 38,
    "categories": [
      {
        "id": 19,
        "name": "Experimental",
        "slug": "experimental",
        "description": ""
      },
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "A",
      "Gm",
      "A#",
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
    "id": 90,
    "title": "Atat de frageda",
    "slug": "atat-de-frageda-90",
    "content": "Intro:\r\n\r\nE A E B \r\nE A E B E\r\n\r\nN.C.                E      A E\r\nAbia atingi covorul moale,\r\n                  B     \r\nMatasa suna sub picior,\r\nA                        E   A\r\nSi de la crestet pâna-n poale\r\n B                 E\r\nPlutesti ca visul de usor.\r\nA                        E    A\r\nSi de la crestet pâna-n poale\r\n B                 E       A E B\r\nPlutesti ca visul de usor.\r\n\r\nDin încretirea lungii rochii\r\nRasai ca marmura în loc \r\nS-atârna sufletu-mi de ochii\r\nCei plini de patimi si noroc.\r\n\r\n        E\r\nO, vis ferice de iubire,\r\n         B        \r\nMireasa blânda din povesti,\r\n         E\r\nNu mai zâmbi! A ta zâmbire\r\n          G#\r\nMi-arata cât de dulce esti,\r\n               A\r\nCum poti cu-a farmecului noapte\r\n             B\r\nSa-ntuneci ochii mei pe veci,\r\n            A\r\nCu-a gurii tale calde soapte,\r\n        B\r\nCu-mbratisari de brate reci.\r\n\r\nDeodata trece-o cugetare,\r\nUn văl pe ochii tai fierbinti:\r\nE-ntunecoasa renuntare,\r\nE umbra dulcilor dorinti.\r\n\r\nTe duci, am înteles prea bine\r\nSa nu ma tin de pasul tau,\r\nPierduta vecinic pentru mine,\r\nMireasa sufletului meu!\r\nCa te-am privit e a mea vina\r\nSi vecinic n-o sa mi-o mai iert,\r\nSpasi-voi visul de lumina\r\nTinzându-mi dreapta în deşert.\r\n\r\nS-o sa-mi rasai ca o icoana\r\nA pururi verginei Marii,\r\nPe fruntea ta purtând coroana –\r\nUnde te duci? Când o sa vii?\r\n\r\n     A           E\r\nUnde te duci? Când o sa vii?\r\n     A            E\r\nUnde te duci? Când o sa vii?",
    "author": {
      "id": 39,
      "name": "Mondial",
      "slug": "mondial"
    },
    "author_id": 39,
    "categories": [
      {
        "id": 16,
        "name": "Muzică ușoară",
        "slug": "muzica-usoara",
        "description": ""
      },
      {
        "id": 20,
        "name": "Eminescu",
        "slug": "eminescu",
        "description": ""
      }
    ],
    "chords": [
      "E",
      "A",
      "B",
      "G#"
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
    "id": 91,
    "title": "Trenule, mașină mică",
    "slug": "trenule-masina-mica-91",
    "content": "Intro: G D G / G Am B7 Em\r\n\r\n\r\nEm\r\nFoaie verde și-o sipică,\r\n\r\nFoaie verde și-o sipică,\r\nG\r\nTrenule, mașină mică,\r\n\r\nUnde-l duci pe Ionică?\r\nD                     G\r\nMărioara lui nenicu’, măi-măi,\r\n\r\nTrenule, mașină mică,\r\nAm\r\nUnde-l duci pe Ionică?\r\nB7                    Em\r\nMărioara lui nenicu’, măi-măi!\r\n\r\n\r\nTu mi-l duci și-l ocolești,\r\nTu mi-l duci și-l ocolești\r\nDin Craiova la Pitești\r\nȘi-l dai jos la București,\r\nMărioara lui nenicu’, măi-măi,\r\nDin Craiova la Pitești\r\nȘi-l dai jos la București,\r\nMărioara lui nenicu’, măi-măi!\r\n\r\n\r\nInterludiu: G D G / G Am B7 Em\r\n\r\n\r\nTrenule, n-ai avea parte,\r\nTrenule, n-ai avea parte\r\nDe șuruburile toate\r\nȘi de șina de sub roate,\r\nMărioara lui nenicu’, măi-măi,\r\nC-ai dus pe neica departe,\r\nC-ai dus pe neica departe,\r\nMărioara lui nenicu’, măi-măi!\r\n\r\n\r\nTrenule, de când l-ai dus,\r\nTrenule, de când l-ai dus,\r\nEu întruna am tot plâns,\r\nEu întruna am tot plâns,\r\nMărioara lui nenicu’, măi-măi,\r\nTrenule, de când l-ai luat,\r\nEu întruna am oftat,\r\nMărioara lui nenicu’, măi-măi!\r\n\r\n\r\nInterludiu: G D G / G Am B7 Em\r\n\r\n\r\nȘi iar verde de-o sipică,\r\nTrenule, mașină mică,\r\nUnde-l duci pe Ionică,\r\nUnde-l duci pe Ionică?\r\nMărioara lui nenicu’, măi-măi,\r\nCă-l tot duci și-l ocolești\r\nDin Craiova la Pitești\r\nMărioara lui nenicu’, măi-măi!\r\n\r\n\r\nCă-l tot duci și-l ocolești\r\nDin Craiova la Pitești,\r\nMărioara lui nenicu’, măi-măi,\r\nȘi-l dai jos la București\r\nȘi-l dai jos la București\r\nMărioara lui nenicu’, măi-măi!",
    "author": {
      "id": 40,
      "name": "Maria Tănase",
      "slug": "maria-tanase"
    },
    "author_id": 40,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
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
      "Em",
      "G",
      "D",
      "Am",
      "B7"
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
    "id": 92,
    "title": "Când s-o-mpărțit norocu'",
    "slug": "cand-s-o-mpartit-norocu-92",
    "content": "(de pe albumul \"Cântece din Maramureș\")\r\n\r\nÎn original, Ducu Bertzi cântă această melodie cu capodastru pe III\r\n\r\nAm                E        Am  G\r\nMăicuța când m-o făcut, măi dorule\r\nC                  G\r\nMăicuța când m-o făcut\r\nAm                  Dm\r\nFoc în vatră n-o avut\r\nAm                    E      Am\r\nFoc în vatră n-o avut, măi dorule\r\n\r\nSo sculat și-o făcut foc, măi dorule\r\nSo sculat și-o făcut foc\r\nȘi mi-o ars al meu năroc\r\nȘi mi-o ars al meu năroc, măi dorule\r\n\r\nAşa-mi vine câteodată, dorule\r\nAsa-mi vine câteodată\r\nSă dau cu cuţitu-n piatră\r\nSă dau cu cuţitu-n piatră, dorule\r\n\r\nDin piatră să iasă foc, măi dorule\r\nDin piatră să iasă foc\r\nDacă-n viaţă n-am noroc\r\nDacă-n viaţă n-am noroc, măi dorule\r\n\r\nCând s-o-mpărţit norocu, măi dorule\r\nCând s-o-mpărţit norocu\r\nFost-am eu dus la lucru\r\nFost-am eu dus la lucru, măi dorule\r\n\r\nȘi la toţi le-o dat cu carul, dorule\r\nȘi la toţi le-o dat cu carul\r\nNumai mie cu păharul\r\nNumai mie cu păharul, dorule\r\n\r\nNici acela n-o fost plin, măi dorule\r\nNici acela n-o fost plin\r\nJumătate-o fost venin\r\nJumătate-o fost venin, măi dorule\r\n\r\nNici acela n-o fost ras, măi dorule\r\nNici acela n-o fost ras\r\nJumătate-o fost năcaz\r\nJumătate-o fost năcaz, măi dorule\r\n\r\nNalt îi ceriu şi senin, măi dorule\r\nNalt îi ceriu şi senin\r\nPe-a me parte norii vin\r\nPe-a me parte norii vin, măi dorule\r\n\r\nNalt îi ceriu şi-nstelat, măi dorule\r\nNalt îi ceriu şi-nstelat\r\nPe-a me parte norii bat\r\nPe-a me parte norii bat, măi dorule\r\n\r\nȘi-asa-mi vine câte-un gând, măi dorule\r\nȘi-asa-mi vine câte-un gând\r\nSă plec pe păduri cântând\r\nSă plec pe păduri cântând, măi dorule",
    "author": {
      "id": 19,
      "name": "Ducu Bertzi",
      "slug": "ducu-bertzi"
    },
    "author_id": 19,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "C",
      "Dm"
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
    "id": 93,
    "title": "Sanie cu zurgălăi",
    "slug": "sanie-cu-zurgalai-93",
    "content": "Dm\r\nSanie cu zurgălăi,\r\n        E7             A   D7\r\nFrumoși sunt căluții tăi,\r\nGm       \r\nDar mai frumoși sunt ai mei,\r\nC\r\nCă le dau apă cu mei\r\nF            C        F    D7\r\nȘi zboară ca niște zmei,\r\nGm\r\nMai frumoasă-i mândra mea,\r\nEb\r\nDiseară mă duc la ea,\r\nEdim     A      Dm    D7 (pentru a intra in returnela)\r\nSanie cu zurgălăi.\r\n\r\nDe-o vrea mândra, de n-o vrea\r\nSă-mi deschidă portița,\r\nDiseară mă duc la ea,\r\nObosit cum oi putea,\r\nSanie cu zurgălăi,\r\nObosit și plin de apă,\r\nMă duc la ea că mi-e dragă,\r\nSanie cu zurgălăi.\r\n\r\nSăniuță, du-mă iară\r\nUnde-am fost și-alaltăseară,\r\nSanie cu zurgălăi,\r\nDu-mă la mândruța mea\r\nSă-i mai sărut gurița,\r\nSanie cu zurgălăi.\r\n\r\nCă e dulce gurița,\r\nNu mă mai satur de ea,\r\nCa de vin dulce toamna\r\nȘi de somn primăvara,\r\nSanie cu zurgălăi,\r\nNu mă mai satur de ea,\r\nCa de vin dulce toamna,\r\nSanie cu zurgălăi.",
    "author": {
      "id": 41,
      "name": "Maria Ciobanu",
      "slug": "maria-ciobanu"
    },
    "author_id": 41,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "E7",
      "A",
      "D7",
      "Gm",
      "C",
      "F",
      "Eb",
      "Edim"
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
    "id": 94,
    "title": "Constantine, Constantine",
    "slug": "constantine-constantine-94",
    "content": "Intro (x2): Dm      Gm / Dm      Dm    \r\n            \r\n Dm           A        Dm\r\n Constantine, Constantine\r\n Dm        A        Dm\r\n Mă mir şi mă uit la tine\r\n Gm            Dm\r\n Ziua, noaptea prin pădure\r\n Gm            A     Dm\r\n Plin de rouă, ca un câine \r\n Dm\r\n Şi dacă mă uit mai bine\r\n Constantine, Constantine\r\n Gm         A         Dm\r\n Neagră-i cămaşa pe tine.\r\n\r\n    Refren (x2): Dm            Gm\r\n                 La...............la\r\n                 Dm\r\n                 La...............la.\r\n\r\n Mărioară, Mărioară\r\n Ia o tale şi mi-o spală\r\n Cu săpun de tămâioară\r\n S-o usuci în sân desară\r\n Şi pentru atâta lucru\r\n Mărioară, Mărioară\r\n Nu ţi-ar mai putrezi trupu’.\r\n\r\n A cui eşti, Mărie, dragă?\r\n A lui cu mustaţa neagră\r\n Ăl mai mare vânător\r\n M-a prins noaptea la izvor\r\n Nu mi-e ciudă că mă prinse\r\n Constantine, Constantine\r\n Dar mi-e ciudă că mă-nchise.\r\n\r\n Mărie, privighetoare\r\n Ce cânţi noaptea pe răcoare\r\n Osândi-te-ar şi te-ar bate\r\n Pernioara de-astă noapte\r\n Căpătâiul de la spate\r\n Mărioară, Mărioară\r\n Şi vorbele voastre toate.\r\n\r\n Când eu te-aşteptam pe-afară,\r\n Mărioară, Mărioară\r\n Cântecel de primăvară.\r\n\r\n Nota:dupa fiecare strofa-refren(x2)+intro(x2).",
    "author": {
      "id": 42,
      "name": "Floarea Calotă",
      "slug": "floarea-calota"
    },
    "author_id": 42,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "A",
      "Gm"
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
    "id": 95,
    "title": "Asa beau oamenii buni",
    "slug": "asa-beau-oamenii-buni-95",
    "content": "C           G\r\nAşa beau oamenii buni\r\nF          G\r\nAşa beau oamenii buni\r\nF          C\r\nDe sâmbăta până luni\r\nC      G   C\r\nDe sambata pana luni.\r\n\r\nAşa beau oamenii fraţi\r\nAşa beau oamenii fraţi\r\nDe sâmbătă până marţi\r\nDe sâmbătă până marţi.\r\n\r\nAşa beau oameni cu cecuri\r\nAşa beau oameni cu cecuri\r\nDe sâmbătă până miercuri\r\nDe sâmbătă până miercuri.\r\n\r\nAşa beau oameni ca noi\r\nAşa beau oameni ca noi\r\nDe sâmbătă până joi\r\nDe sâmbătă până joi.\r\n\r\nAşa beau oamenii tineri\r\nAşa beau oamenii tineri\r\nDe sâmbătă până vineri\r\nDe sâmbătă până vineri.\r\n\r\nC-aşa beau şi eu şi tata\r\nC-aşa beau şi eu şi tata\r\nDintr-o sâmbătă intr-alta\r\nDintr-o sâmbătă intr-alta.\r\n\r\nDe n-ar fi horinca-n sat\r\nDe n-ar fi horinca-n sat\r\nNiciodată n-aş fi bat\r\nNiciodată n-aş fi bat.\r\n\r\nDar aşa horincă este\r\nDar aşa horincă este\r\nŞi-s la lume de poveste\r\nŞi-s la lume de poveste.\r\n\r\nCa mă povestesc in sat\r\nCa mă povestesc in sat\r\nC-am băut si iară-s bat\r\nC-am băut si iară-s bat.\r\n\r\n\r\nPe toate strofele sunt aceleasi acorduri, acordurile nu sunt puse de mine, eu doar am facut rost de ele.\r\nEste transpusa in C(DO), originalul de la Fratii Petreus e in A(LA).",
    "author": {
      "id": 43,
      "name": "Frații Petreuș",
      "slug": "fratii-petreus"
    },
    "author_id": 43,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
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
    "id": 96,
    "title": "Dar-ar naiba-n tine, dragoste",
    "slug": "dar-ar-naiba-n-tine-dragoste-96",
    "content": "C                      Dm\r\nDar-ar naiba-n tine dragoste!\r\nG                         C    (merge pe coarda la trecerea do - si la)\r\nCe te tii mereu numai de mine?\r\nAm                       Dm\r\nTu esti pentru mine-o pacoste\r\nG                          c\r\nSi nu pot ca sa mai scap de tine.\r\n\r\nc                          Dm\r\nAi venit cand nici nu ma gandeam\r\nG                           c\r\nSi-ai aprins in suflet valvataie,  (la: do - si - la)\r\nAm                           Dm        \r\nNu mananc si noaptea somn nu am    (aici merge o trecere cu Em - F - G)\r\nG                        D\r\nPentru tine, dragoste balaie.\r\n\r\nTe-ai asezat la inimioara\r\nSi ai facut ca sa ma doara.\r\nMult mi-e necaz si mi-e rusine\r\nDar-ar naiba dragoste in tine!\r\n\r\nFir-ai tu sa fii de dragoste!\r\nSi mai rau sa te blestem imi vine.\r\nCand mai sunt atatea suflete\r\nCum de ma gasisi tocmai pe mine?\r\nSunt atatea alte fete-n sat\r\nMandre, frumoase din cale-afara,\r\nTocmai peste mine tu ai dat\r\nDragoste sa fii mereu de-ocara!\r\n\r\nGlumesc baietii si-au dreptate,\r\nIar fetele imi rad in spate.\r\nMult mi-e necaz si mi-e rusine\r\nDar-ar naiba dragoste in tine!\r\nIn drumul meu a fost odata\r\nO dragoste nevinovata.\r\nDe-atunci oftez si nu mi-e bine\r\nDar-ar naiba dragoste in tïne.",
    "author": {
      "id": 44,
      "name": "Ileana Sărăroiu",
      "slug": "ileana-sararoiu"
    },
    "author_id": 44,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "Dm",
      "Am",
      "G",
      "D",
      "Em",
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
    "id": 97,
    "title": "Pusca si cureaua lata",
    "slug": "pusca-si-cureaua-lata-97",
    "content": "D    F#           Bm D7\r\nCand eram tanar fecior,\r\nG     A7     D  F#\r\nEram fala muntilor,\r\nBm     B     Em  E\r\nUmblam ziua la vanat\r\nA          A7        D\r\nPrin codru verde de brad...\r\n\r\nD      E          A D7\r\nPusca si cureaua lata...\r\nG     A7      D    F#\r\nCe barbat eram odata!\r\nBm   B               Em E\r\nLa vanat prin munti si vai\r\nA   A7      D\r\nCu ortacii mei...\r\n\r\nPorneam cu roua-n picioare\r\nPe urma de caprioare...\r\nNe opream in poienita\r\nBeam apa din fantanita...\r\n\r\nPusca si cureaua lata...\r\nCe barbat eram odata!\r\nLa vanat prin munti si vai\r\nCu ortacii mei...\r\n\r\nDe-o fost vara, de-o fost toamna\r\nLuam mistretii la goana\r\nCu cetina verde-n clop\r\nSI nu oboseam deloc...\r\n\r\nPusca si cureaua lata...\r\nCe barbat eram odata!\r\nLa vanat prin munti si vai\r\nCu ortacii mei...\r\n\r\nIute vremea mi-o trecut,\r\nS-uite c-am imbatranit,\r\nSa mai merg, putere nu-i,\r\nSa iau urma cerbului!...\r\n\r\nPusca si cureaua lata...\r\nCe barbat eram odata!\r\nLa vanat prin munti si vai\r\nCu ortacii mei...\r\n\r\nCand a ninge si a-ngheta\r\nN-o sa-mi mai vedeti urma\r\nMi-oi trimite numa dorul\r\nCa sa-mi gaseasca zvorul...\r\n\r\nPusca si cureaua lata...\r\nCe barbat eram odata!\r\nLa vanat prin munti si vai\r\nCu ortacii mei...\r\n\r\nbox_bottom",
    "author": {
      "id": 45,
      "name": "Traian Ilea",
      "slug": "traian-ilea"
    },
    "author_id": 45,
    "categories": [
      {
        "id": 17,
        "name": "Etno / Folclor",
        "slug": "etno-folclor",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "F",
      "Bm",
      "D7",
      "G",
      "A7",
      "B",
      "Em",
      "E",
      "A",
      "F#"
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
    "id": 98,
    "title": "Imnul golanilor",
    "slug": "imnul-golanilor-98",
    "content": "G          C               D         G\r\nA fost odata ca-n povesti, a fost în România\r\n  G          C                D          G\r\nO gasca mare de golani ce-au alungat sclavia\r\n    G              C               D          G\r\nNoi nu ne-am confundat nicicând cu oamenii de bine\r\n  G          C            D         G\r\nVeniti si neocomunisti si fara de rusine.\r\n\r\nRefren:\r\nG             C   D          G\r\nMai bine haimana, decât tradator\r\nG            C    D          G\r\nMai bine huligan, decât dictator\r\nG          C    D         G\r\nMai bine golan, decât activist\r\nG        C     D         G\r\nMai bine mort, decât comunist.\r\n\r\nG                    C         D                 G\r\nVrem libertate, nu comunism si nici schimbari de forma\r\n   G        C             D            G\r\nSi de aceea securisti, sa nu ne puneti norma.\r\n    G          C        D            G\r\nNoi nu vrem neocomunism nici neolibertate\r\n  G             C       D                  G\r\nDemocratii originale si nici minciuni sfruntate.\r\n\r\nRefren\r\n\r\n       G           C              D          G\r\nNe-ati întrebat ce vrem aici, dar stie toata tara\r\n    G        C         D         G\r\nNoi sustinem punctul 8 de la Timisoara.\r\n  G       C     D       G\r\nA cazut 473, ce tinea TVR\r\n  G            C            D           G\r\nLegata în lanturile ei, dar tot degeaba e.\r\n\r\nRefren\r\n\r\n   G         C          D            G\r\nAlegeri fara comunisti, fara nomenclatura\r\n   G               C      D          G\r\nSi nu va temeti de golani fara coloratura.\r\n    G             C            D             G\r\nDin cei care-au murit aici, ne-am reîntors naluci\r\n   G          C             D         G\r\nSa nu mai fie cum a fost, macelul de atunci.\r\n\r\nRefren",
    "author": {
      "id": 46,
      "name": "Cristian Pățurcă",
      "slug": "cristian-paturca"
    },
    "author_id": 46,
    "categories": [
      {
        "id": 11,
        "name": "Despre Patrie",
        "slug": "despre-patrie",
        "description": ""
      },
      {
        "id": 14,
        "name": "Imnuri",
        "slug": "imnuri",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
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
    "id": 99,
    "title": "Bosquito",
    "slug": "bosquito-99",
    "content": "Melodia in cheia originala cu mici corectii pentru a suna ca inregistrarea.\r\n\r\nF#m                   E         F#m\r\nCând eram băiat acasa tare bine mai era\r\nF#m                  E         F#m\r\nAveam o gagică grasă care mă iubea\r\nBm             F#m         Bm         F#m\r\nDar când am plecat în lume ursitoarea m-a minţit\r\nBm             F#m       Bm     D   C#7\r\nC-o s-ajung un barosan bogat şi fericit\r\n\r\n       F#m   C#7       F#m\r\nÎnsă bănuţul nu s-a arătat\r\n       A     E            A\r\nşi fericirea iute s-a stricat\r\n       A           Bm       C#7 F#m\r\nAşa că beau, beau, golesc paharele\r\n        F#m   C#7       F#m\r\nCu pretenarii şi cu fetele\r\n\r\nCe-mi plăcea s-o facem lată, asta-mi era boala\r\nUnde n-ajungeam vreodată, asta era şcoala\r\nN-am nici bani, n-am nici maşină si de datorii sunt full\r\nAm o gaşcă şi-o chitară şi-asta mi-e destul\r\n \r\nÎnsă banuţul nu s-a arătat\r\nşi fericirea iute s-a stricat\r\nAşa că beau, beau, golesc paharele\r\nCu pretenarii şi cu fetele\r\n\r\nÎnsă banuţul nu s-a arătat\r\nşi fericirea iute s-a stricat\r\nAşa că beau, beau, şi-mi bag picioarele\r\nÎn tot ce ţine de tranziţie",
    "author": {
      "id": 47,
      "name": "Bosquito",
      "slug": "bosquito"
    },
    "author_id": 47,
    "categories": [
      {
        "id": 21,
        "name": "Latino",
        "slug": "latino",
        "description": ""
      }
    ],
    "chords": [
      "F#m",
      "E",
      "Bm",
      "D",
      "C#7",
      "A",
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
    "id": 100,
    "title": "Așa, și?",
    "slug": "asa-si-100",
    "content": "Capo: fret 4\n\nIntro : F C G Am x2 \n\nAsa, si? (2x)\n\nAm                      E\nCeva nu merge bine emotional\nF                         C\nAm sufletul plin de Extraveral, (Asa, si? )\nAm                     E\nNoi doi ne vedem de patru seri,\nF                         C\nFacem schimb de prea multe pareri,\nAm                        E \nRabdarea mi-am pierdut-o de ieri,\nD \nAsa am eu la doamne, \n                 G \nMulte milioane de ghinioane. (Asa, si? )\n\n\nF                       C\nAsa si ce daca stau la coada\nG                       Am                   \nPentru fericire o viata-ntreaga,\nF                       C \nO sa stau la rand si pentru tine\nG               Am\nSi-o sa-ti dau si tie.\n\nAsa si asa(4x)   F,C,G,Am x2 \n\n\nAm                      E\nCeva nu-i bine nici profesional,\nF                          C  \nAm multe locuri goale prin buzunar, \nAm                       E\nIar maine sigur mai apare ceva,\nF                          C \nNu mai conteaza, eu sunt bine si-asa,\nAm                     E \nPrietenii mei stiu asta deja\nD\nCa avem milioane de ghinioane, \n   G\nAjuta-ne Doamne! ! (Asa, si? )\n\n\n F                       C \nAsa si ce daca stau la coada\nG                        Am\nPentru fericire o viata-ntreaga,\nF                           C \nO sa stau la rand si pentru tine\nG                 Am\nSi-o sa-ti dau si tie.\n\nAsa si asa(7x)  F,C,G,Am x2 \n\n // Pana aici a fost versiunea acustica cea filmata in camera de hotel. \nDe aici aveti aceleasi acorduri Am,E,F,C numai cu un fret mai jos.\nIar la sfarsit aveti Am,E,E,Am.\n\nPai tu crezi ca ei n-au griji cu tona!? \nCei din Arizona si cei din Barcelona, \nBa au probleme cu gramada\nToti cei din Oradea si cei din Canada, \nPoate sa se umple iar paharul, \nSa se inunde barul, eu nu-i mai simt amarul, \nOrice-ar fi spun “ASA, SI?!”\n\n// Se reiau acordurile A,E,B,C#m\n\nAsa si ce daca stau la coada\nPentru fericire o viata-ntreaga, \nO sa stau la rand si pentru tine\nSi-o sa-ti dau si tie.\n\nAsa, si? \n\nAsa si ce daca stau la coada\nPentru fericire o viata-ntreaga, \nO sa stau la rand si pentru tine\nSi-o sa-ti dau si tie.\n\nAsa si asa(7x) F,C,G,Am x2 \n",
    "author": {
      "id": 48,
      "name": "Vunk",
      "slug": "vunk"
    },
    "author_id": 48,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "F",
      "C",
      "D",
      "G",
      "C#m"
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
    "id": 101,
    "title": "Perfect fara tine",
    "slug": "perfect-fara-tine-101",
    "content": "F\r\nNu mai urla \r\nC\r\nSe aude in bloc\r\nDm\r\nAm inteles ideea \r\nB\r\nAi risipit iubirea pe un dobitoc \r\n\r\nIesi naibii din casa \r\nEu asta astept iubito \r\nEsti libera sa cauti fraierul \r\n\r\nRefren:\r\n\r\nPerfect (draga mea, draga mea)\r\n Fara tine (draga mea, draga mea)\r\n E mai bine (draga mea, draga mea)\r\n Am timp si pentru mine (draga mea, draga mea)\r\n Perfect (draga mea, draga mea) \r\n \r\n Nu ma doare (draga mea, draga mea)\r\n Piesa asta (draga mea, draga mea)\r\n O cant in drum spre mare (draga mea, draga mea) \r\n\r\n Te-am inselat \r\n Ma declar vinovat \r\n Am circumstante insa \r\n Am vrut si eu sa vad cum e sa fii barbat\r\n Te-ai transformat In instanta morala\r\n Dar ai uitat Dansai prin vama goala si era\r\n\r\n Perfect (draga mea, draga mea)\r\n Fara tine (draga mea, draga mea)\r\n E mai bine (draga mea, draga mea)\r\n Am timp si pentru mine (draga mea, draga mea) \r\n Perfect (draga mea, draga mea) \r\n Nu ma doare (draga mea, draga mea)\r\n Piesa asta (draga mea, draga mea)\r\n O cant in drum spre mare (draga mea, draga mea)\r\n\r\n Ti-aduci aminte cand ne-am combinat\r\n Era frumos, era perfect, era adevarat\r\n Pe mese sau sub mese dar numai impreuna\r\n Iubirea si distractia se cam tineau de mana\r\n Apoi te-ai transformat usor, usor in profesoara\r\n Si-am inceput sa am restante in fiecare seara\r\n Ziceai ceva de genul “iubirea-i lupta grea” \r\n Dar o cam luasesi razna, luptai doar pentru ea\r\n\r\n Acum sunt singur in masina dar nu e suparare\r\n De cat premiant in inchisoare Mai bine repetent\r\n In drum spre mare Perfect (draga mea, draga mea)\r\n\r\n Fara tine (draga mea, draga mea)\r\n E mai bine (draga mea, draga mea)\r\n Am timp si pentru mine (draga mea, draga mea)\r\n Perfect (draga mea, draga mea)\r\n Nu ma doare (draga mea, draga mea)\r\n Piesa asta (draga mea, draga mea) \r\n O cant in drum spre mare (draga mea, draga mea)\r\n Perfect (draga mea, draga mea)\r\n Fara tine (draga mea, draga mea)\r\n E mai bine (draga mea, draga mea)\r\n Am timp si pentru mine (draga mea, draga mea)\r\n Perfect (draga mea, draga mea)\r\n Nu ma doare (draga mea, draga mea)\r\n Piesa asta (draga mea, draga mea)\r\n O cant in drum spre mare (draga mea, draga mea)",
    "author": {
      "id": 49,
      "name": "Vama",
      "slug": "vama"
    },
    "author_id": 49,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "F",
      "C",
      "Dm",
      "B",
      "Am",
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
    "id": 102,
    "title": "Ochii tai",
    "slug": "ochii-tai-102",
    "content": "D    A                 E A\r\nNu e usor nu e nici greu \r\n      D            A              E  A\r\nSa incerci acum sa te intorci din drum\r\n         D A   E        A\r\nPoate ca eu cu sufletul meu \r\n     D          A             E   A\r\nAs avea atat de multe sa iti spun\r\n     D      A             E\r\nInsa ochii tai se vor pierde in noapte\r\n     G          D          A\r\nLasandu-ma pe mine in urma lor\r\n        D     A          E\r\nStiu ca ochii tai vor fi doua soapte \r\n        G               A           G A\r\nSi mi-e foarte dor,mi-e tare dor de ei\r\n\r\nVreau sa simt caldura ta cand noaptea va venii\r\nDoar stelele sa stie ca ai sosit\r\nParul tau va fi iar ud de roua -n zori de zi\r\nSi as vrea sa pot sa-ti spun bine-ai venit\r\nInsa ochii tai se vor pierde in noapte\r\nLasandu-ma pe mine in urma lor\r\nStiu ca ochii tai vor fi doua soapte \r\nSi mi-e foarte dor,mi-e tare dor de ei\r\nInsa ochii tai se vor pierde in noapte\r\nLasandu-ma pe mine in urma lor\r\nStiu ca ochii tai vor fi doua soapte\r\nSi mi-e foarte dor,mi-e taaaare dor de ei!!!!!!",
    "author": {
      "id": 50,
      "name": "Holograf",
      "slug": "holograf"
    },
    "author_id": 50,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "E",
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
    "id": 103,
    "title": "Nu am chef azi",
    "slug": "nu-am-chef-azi-103",
    "content": "Intro : A   A7+  A6   A  \r\n        D   D7+  D6   D\r\n \r\nStrofa:\r\n        A    A7+        A6     A \r\n  Nu am chef azi, nu am chef azi\r\n         D         D7+  D6  D\r\n  N-am chef de nimic\r\n  Nu am chef azi, nu am chef azi\r\n  De votca sau de gin, tequila rom sau vin\r\n           Bm                   E               E7            A  \r\n  Tigari nu mai vorbesc, iar pe tine, pe tine, pe tine, te urasc\r\n  \r\n  Nu te vreau azi\r\n\r\n  Nu ma vrei azi, nu ma vrei azi\r\n  S-a ridicat usor avea un umar gol\r\n  Si zambetul amar, baiete esti prost, iar eu nu sunt o c*rva pe-un trotuar\r\n  Nu ma vrei azi, nu ma vrei azi\r\n  Nu te vreau azi, nimic mai usor\r\n  Nu ma vrei azi, nu te vreau azi\r\n  Eu voi pleca-n curand, ramai cu mine-n gand\r\n  E lapte-n frigider, iar banii, ciorapii si sapca ta sunt pe calorifer\r\n  \r\n\r\n  Ne vedem joi, ne vedem joi\r\n  Am urlat dupa ea\r\n  Vreau sa vii joi, vreau sa vii joi, \r\n  Alerg descult pe hol, dar holul este gol\r\n  Un paharel de vin, ma uit cine e, vecinul meu Dan de la mezanin\r\n \r\n  Au trecut ani, au trecut ani,\r\n  si viata s-a schimbat, mi-am luat si eu nevasta,\r\n  urata si cam proasta, am doi copii cu ea \r\n  si ma feresc cat pot de mult de soacra mea.\r\n \r\n  Au trecut ani, au trecut ani\r\n  Si viata s-a schimbat\r\n  Au trecut ani, au trecut ani\r\n  Ma duc mereu pe hol, dar holul este gol\r\n  Nu-i lapte-n frigider, iar banii, ciorapii si sapca ta, nu-s pe calorifer\r\n \r\n  Au trecut ani\r\n  Nu-s pe calorifer\r\n  Au trecut ani, am fost un fraier\r\n  Au trecut ani, nu-s pe calorifer\r\n  Am fost un mare, mare fraier\r\n  Au trecut ani, dar au trecut ani",
    "author": {
      "id": 51,
      "name": "Vama Veche",
      "slug": "vama-veche"
    },
    "author_id": 51,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "D7",
      "D6",
      "A",
      "A7",
      "A6",
      "Bm",
      "E",
      "E7",
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
    "id": 104,
    "title": "Vama Veche",
    "slug": "vama-veche-104",
    "content": "intro:  ( este facut de pian - l-am adaptat pt chitara )                \r\n                                   \r\ne|------------------0------------------------0---|\r\nB|--------3----3------1-------1--3-----3-------1-|\r\nG|----0------0----0---------0--------0-----0-----|\r\nD|------------------------2----------------------|\r\nA|----3------------------------------------------|\r\nE|-----------------------------------------------|\r\n\r\ne|--------------0-------------------------------|\r\nB|-----3----3------1----------1---0-1-0-1-------|\r\nG|--0-----0---0-------------2--------------2----|\r\nD|------------------------2---------------------|\r\nA|--3-------------------0-----------------------|\r\nE|----------------------------------------------|\r\n\r\ne|-3--3-1-1-1-----3-1--3---5-3-3-3----5-3---3-|\r\nB|----3-3-3-3-------3------3-3-3-3------3-----|\r\nG|----2--------2-----------4--------4---------|\r\nD|----0--------------------5------------------|\r\nA|--------------------------------------------|\r\nE|--------------------------------------------|\r\n\r\ne|-3--1-1-1----3-1---3-5---3----1----0-----|\r\nB|-3--3-3-3------3-------------------------|\r\nG|-2---------2-----------4----4----2-------|\r\nD|-0-------------------5---5----3----2-----|\r\nA|-----------------------------------------|\r\nE|-----------------------------------------|\r\n\r\nTrenul accelerat Bucuresti-Mangalia pleaca in 5 minute de la linia 5\r\n \r\n C9             C \r\nSe poate sa fie zi\r\n Am  \r\nSe poate sa fie noapte...\r\n C9              C\r\nSe poate sa fie vara...\r\n Am               Am9\r\nLa fel cum iarna poate fi.\r\n \r\n Dm\r\nNisiul sa fie ud\r\n G\r\nIar marea un pic amara\r\n Dm\r\nNisipul sa zgarie lin\r\n G\r\nIar marea sa fie murdara.\r\n \r\n\r\nVrei soare, soare iti dau\r\nSau pielea ti-e ruda cu luna \r\nPe stanci daca vrei te sarut\r\nSau in apa imi e totuna.\r\n \r\n\r\nSa pot sa te-aleg dintr-o suta\r\nIn ochi sa ai inima mea\r\nSa-ncerc sa m-ascund de iubire\r\nDar sa nu te mai,              \r\nSa nu te mai pot uita.\r\n \r\n\r\nIar noaptea sa ai pielea uda\r\nInsetata sa tragi din tigara\r\nPe mare se-aude sirena\r\nAl tau san imi mangaie mana\r\n \r\nPovestea merge mai departe\r\nCa vantul din Vama Veche\r\nEu nu pot sa mai continui\r\n\r\nCaci eu mi-am gasit pereche        \r\nLa Vama Veche, pereche\r\n \r\nPovestea merge mai departe\r\nCa vantul din Vama Veche\r\nEu nu pot sa mai continui\r\nSaruta-ma in ureche.\r\nLa Vama Veche, in ureche\r\n \r\nAm plecat la Vama Veche \r\nCa sa imi gasesc pereche\r\nAm ajuns la Vama Veche\r\nSi sunt apucat de streche\r\nStau pe plaja-n Vama Veche\r\nSi am sarutul in ureche\r\nDoar pe plaja-n Vama Veche\r\nNoi toti vom avea pereche\r\n \r\nStau pe plaja-n Vama Veche    \r\nCa sa imi gasesc pereche",
    "author": {
      "id": 51,
      "name": "Vama Veche",
      "slug": "vama-veche"
    },
    "author_id": 51,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "C9",
      "C",
      "Am",
      "Dm",
      "G",
      "Am9"
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
    "id": 105,
    "title": "Calul din Marlboro",
    "slug": "calul-din-marlboro-105",
    "content": "D                               G\r\nCopile nu fi prost orasul e departe\r\nAsa-mi spunea razand cel ce vindea de toate\r\n     A                                     G\r\nTu nu ma pacalesti, am sa ajung acolo\r\nM-asteapta strada mea si calul din Marlboro\r\n \r\nCand am pornit la drum, am intalnit o proasta\r\nAm incercat sa fug, mi-a devenit nevasta\r\nDe-atuncea pan-acum in oras eu ratacesc\r\nE fum si este scrum si simt ca-nebunesc, dar\r\nCe pot sa fac\r\n                 \r\n      \r\nBatrane, m-a-ntrebat un pusti julit in coate\r\nMai e mult spre oras ca vad ca vinzi de toate\r\nAm vrut sa-l ratacesc sa n-apuce spre sosea\r\nBatrane esti fricos, gasesc eu si strada ta!\r\n\r\nL-am intrebat plangand dar calul din Marlboro\r\nEl mi-a raspuns razand, vedem noi mai incolo\r\nDe-atuncea pan-acum in oras eu ratacesc\r\nE fum si este scrum si simt ca-nebunesc\r\n \r\n     And everybody knows my feelings\r\n     Of a lonely, day",
    "author": {
      "id": 51,
      "name": "Vama Veche",
      "slug": "vama-veche"
    },
    "author_id": 51,
    "categories": [
      {
        "id": 22,
        "name": "Pop-Rock",
        "slug": "pop-rock",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
      "A",
      "Am",
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
    "id": 106,
    "title": "Vine valul, imi ia calul",
    "slug": "vine-valul-imi-ia-calul-106",
    "content": "      Am       E          Am\r\nToată viaţa avere-am vrut să fac\r\n    G                    C\r\nAm pornit de la un biet căluţ\r\n        Dm    E          Am\r\nMi-am legat căluţul de copac\r\n        F      E       Am  E Am\r\nPentru apă am săpat un puţ\r\n\r\nPârâul din sat curgea-nspre mat\r\nUnde muzică-mi plăcea s-ascult\r\nÎntr-o zi pârăul s-a uflat\r\nEu ascultam refrene de demult\r\n\r\n\tRefren:\r\n\t\r\n\t                  Am\r\n\tVine valul, îmi ia calul\r\n                G            C\r\n\tÎmi ia scroafa din coteţ\r\n               Dm\r\n\tMi s-a dus averea toată\r\n               Am\r\n\tNumai soacra-n curte-noată\r\n                  F        Dm        E    F  E\r\n\tS-a dus casa şi fărâma de nutreţ\r\n\r\n\tVine valul, îmi ia calul\r\n\tMurgu-noată în aval\r\n\tSoacra-i bine ancorată\r\n\tDoamne cât de bine-noată\r\n               F           E          Am\r\n\tDe ce Doamne nu ai pus-o tu pe cal\r\n\r\nAm luat un împrumut de la Banccoop\r\nMă întorc în sat să torn ciment\r\nSă-mi refac căsuţa, am Casco\r\nDar f*cking Banccoop dă faliment\r\n\r\nMi-am luat alt căluţ de la Obor\r\nAm plătit pe el extrem de mult\r\nDar mi-l ia pârâul binişor\r\nEu stau şi-ascult refrene de demult\r\n\r\n\tRefren.\r\n\r\nIubesc ţara în care m-am născut\r\nPot să fac în ţara mea ce vreau\r\nPot să rabd, s-o iau de la-nceput\r\nMuzică s-ascult la max în timp ce beau\r\n\r\nLegea îmi dă dreptul colosal\r\nSă mai plec odată la Obor\r\nSpending money pe al treilea cal\r\nPutting bălegar pe legea lor\r\n\r\n\tRefren.\r\n\r\nIeri am împlinit 50 de ani\r\nViaţa încă nu mi-a pus capac\r\nChiar dacă n-am casă şi nici bani\r\nEste dreptul meu să spun ce.. fuck\r\n\r\nAm pierdut în viaţa mea trei cai\r\nN-am ştiut ca să-i mai ţin în frâu\r\nToţi îmi spun: \"O gloabă tot mai ai\"\r\n- Pe soacră-mea, privind către pârâu",
    "author": {
      "id": 52,
      "name": "Daniel Iancu",
      "slug": "daniel-iancu"
    },
    "author_id": 52,
    "categories": [
      {
        "id": 4,
        "name": "Satiră și umor",
        "slug": "satira-si-umor",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "E",
      "G",
      "C",
      "Dm",
      "F"
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
    "id": 107,
    "title": "Dacă ploaia s-ar opri",
    "slug": "daca-ploaia-s-ar-opri-107",
    "content": "Intro:\r\n\r\nDm G\r\nDm Am\r\nDm G Am\r\n\r\n      Dm                   Am\r\nDacă pleci, uşa nu o mai închide\r\n         Dm                  Am\r\nSper să treci poate mâine pe aici\r\n    Dm\r\nTe petrec şi mă uit la tine\r\n   Am\r\nParcă pierd ceva din mine\r\n B         E\r\nZău, îmi e greu\r\n\r\n\r\n\tRefren:\r\n\r\n\tAm               Dm\r\n\tPoate dacă ploaia s-ar opri\r\n\tG                       C    E     \r\n\tşi din cer n-o să mai cadă lacrimi\r\n\tAm          Dm           G\r\n\tStele-ar răsări, tu ai veni\r\n\tAm             Dm \r\n\tSupărat sunt Doamne iar\r\n\tG                       C     E \r\n\tStau în cârciumă să-mi 'nec amarul\r\n\tAm            Dm         G  \r\n\tBeau şi te aştept până la zi\r\n \r\n \r\n       Dm      G \r\nPlouă încet, încet\r\n            Dm G Am\r\nPlouă şi-mi este dor\r\n         Dm    G         Am \r\nDe ochii tăi căprui îmi e dor\r\n\r\nPlouă încet, încet\r\nPlouă şi-mi este dor\r\nDe ochii tăi să mor îmi e dor\r\n\r\nTe aştept să te-ntorci din nou la mine\r\nChipul tău şi de ochii tăi mi-e dor\r\nPoza ta din sertar o scot\r\nNu mă uit la ea nu pot\r\nZău, îmi e greu\r\n\r\n\tRefren",
    "author": {
      "id": 53,
      "name": "Cargo",
      "slug": "cargo"
    },
    "author_id": 53,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "G",
      "Am",
      "B",
      "E",
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
    "id": 108,
    "title": "La fereastra ta",
    "slug": "la-fereastra-ta-108",
    "content": "Em            \r\nI.Vad,la fereastra ta tarziu\r\n                B7\r\nO lumina si nu stiu\r\n                     Em\r\nDe esti treaza sau visezi\r\n   \r\n   Em     \r\nII.Vad,in spectacolul nocturn\r\n                      B7      \r\nCavaleri din vechiul turn\r\n                     Em\r\nCe te-ndeamna sa-i urmezi\r\n       \r\n       G \r\nrefren:Si as dori sa pot intra\r\n                     D\r\nSa alung din preajma ta\r\n                            G\r\nTot ce-i trist si tot ce-i rau\r\n                    \r\nSi as dori sa fiu acum\r\n                 D\r\nO romanta cu parfum\r\n                     G    G D Em\r\nSa pot sta in parul tau\r\n\r\n     Em         \r\nIII.Vad, la fereastra ta tarziu\r\n                B7\r\nO lumina si nu stiu\r\n                      Em\r\nDaca razi sau daca plangi\r\n\r\n    Em  \r\nIV.Trec,si in drumu-mi nesfarsit\r\n                      B7\r\nMa primesc cu-n bun venit\r\n                      Em\r\nNumai plopii cei natangi\r\n\r\n         G                \r\nrefren ;Dar, am sa ma intorc candva\r\n                    D\r\nSa alung din preajma ta\r\n                           G\r\nTot ce-i trist si tot ce-i rau.\r\n                          \r\nSi as dori sa pot sa-tï spun\r\n                  D\r\nO poveste de pe drum\r\n                       G   G D Em \r\nCand visam sub geamul tau\r\n\r\n        A                  \r\nrefren:Si as dori sa pot intra\r\n                     E\r\nSa alung din preajma ta\r\n                            A\r\nTot ce-i trist si tot ce-i rau\r\n\r\nSi as dori sa fiu acum\r\n                 E\r\nO romanta cu parfum\r\n                     A\r\nSa pot sta in parul tau\r\n\r\nhave fun!",
    "author": {
      "id": 54,
      "name": "Semnal M",
      "slug": "semnal-m"
    },
    "author_id": 54,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "B7",
      "G",
      "D",
      "A",
      "E"
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
    "id": 109,
    "title": "Aproape de voi",
    "slug": "aproape-de-voi-109",
    "content": "Am       C    G        Em\r\nIn seara asta vreau sa beau\r\nAm           C    G\r\nSa uit de-orice nevoi\r\nAm         C     G     Em\r\nSa sparg paharul si sa zic\r\nAm          G       Am\r\nSunt acum, aici, cu voi . . .\r\n\r\n\r\nNu stiu cat timp mi-a mai ramas\r\nDar vreau sa mi-l petrec\r\nCu voi care mi-ati fost alaturi \r\nLa bine si la greu\r\n\r\n         Am            C     G \r\nRefren:  Si de-o fi si eu sa mor\r\n                        Dm    Am\r\n         Nu vreau sa va intristati\r\n                       C    G\r\n         Sa cantati si sa jucati \r\n                Am\r\n         Pana-n zori . . . \r\n  \r\n                     C       G   \r\n         Si daca din cand in cand\r\n                    Dm      Am\r\n         O sa ma priviti in gand\r\n             C   G         Am\r\n         Voi fi aproape de voi . . .\r\n\r\n\r\nInchin paharul si va spun\r\nIi multumesc Celui de Sus\r\nCa mi va dat prieteni buni\r\nSi nu-s singur pe acest drum . . . \r\n\r\nRefren: ...\r\n\r\n\r\n\r\nPoate fi folosita orice ciupitura 4/4.\r\n\r\n*Nota: \r\nCantecul suna bine alternat de la ciupitura(pt. strofe) la bataie(pt. refren)\r\n\r\nSucces!",
    "author": {
      "id": 53,
      "name": "Cargo",
      "slug": "cargo"
    },
    "author_id": 53,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
      "G",
      "Em",
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
    "id": 110,
    "title": "Fata verde",
    "slug": "fata-verde-110",
    "content": "Em            G     D\r\nFată verde cu părul pădure\r\nFată verde cu părul pădure\r\nSimţi cum privirea lor vrea să te fure\r\n \r\n        C        G   D    Em\r\n        Noaptea mieii ţese ie\r\n        Zburătorii ca să vie\r\n        Noaptea mieii ţese ie\r\n        Nimeni urma să le-o ştie\r\n \r\nFată verde ei te sărută\r\nCu privirea lor cea mută\r\nOchii negri, ochi de ţigan\r\n \r\n\tRefren.\r\n\r\n        D             G\r\n        Umezi sunt de dor\r\n          C     G      D\r\n        şi-al lor vis plin de zbor\r\n\tD               G\r\n        Noaptea-n ei se scaldă \r\n\t C      G          D\r\n        În sclipiri ca de salbă ...\r\n         C      G         D\r\n        În sclipiri de salbă ...\r\n\r\nFată verde cu părul pădure\r\nFată verde cu părul pădure\r\nSimţi cum privirea lor vrea să te fure\r\n\r\n\tRefren",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "D",
      "C"
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
    "id": 111,
    "title": "In Umbra Marelui URSS",
    "slug": "in-umbra-marelui-urss-111",
    "content": "E o varianta modificata de mine pt cover la trupa mea.\r\n\r\n\r\nIntro:\r\n\r\nE|-3--2-3-2-5-0----------------------|\r\nB|-0--3-------0----------------------|\r\nG|-0--2-------0----------------------|\r\nD|-0--0-------2----------------------|\r\nA|-2--0-------2----0-2-3--3-2-0------|\r\nE|-3----------0--3--------------3-2-0|\r\n   G  D       Em\r\n\r\n------0-----------2-----------0-----------------------|  \r\n-------0-----------3-----------1-------1--------------|\r\n----0-----------2-----------2-----------0-------------|     \r\n---2-2---------0-0---------2-2------------------------|\r\n---------2-3-0-------3-2-0-------0-2-3-----3-2-0------|\r\n-------------------------------------------------3-2-0|\r\n  Em          D            Am          C\r\n\r\nStrofa I:\r\n\r\nEm          D\r\nStau singur si ma-ntreb\r\n   Am              C     B Em\r\nDe ce-am plecat de-acasa\r\n       D\r\nSa fie blestemul\r\n   Am            C     B Em\r\nDe veacuri ce ne-apasa\r\n             D        Am\r\nCaci n-am gresit cu nimic\r\n            C  D  Em\r\nDoar cat am patimit\r\n         D         Am\r\nHulit am fost fara rost\r\n          C    D Em\r\nDe cei ce i-am iubit\r\n\r\nIntro x3\r\n\r\n\r\nEm          D\r\nApus peste apus\r\n   Am         C     B  Em\r\nCe iute trece timpul\r\n       D\r\nSi zorile s-au dus\r\n   Am        C     B  Em\r\nCe rece bate vantul\r\n        D          Am\r\nAm asteptat infrigurat\r\n        C     D Em\r\nSa ma intorc 'napoi\r\n          D          Am\r\nM-ati judecat, condamnat\r\n          C  D       G  D  Em\r\nDar cine sunteti voi?\r\n\r\nRefren:\r\n\r\nEm                      G  D Em   \r\nCaci timpul nostru s-a scurs\r\n                 G  D Em\r\nIn umbra marelui urs\r\n                    C             A     A7\r\nDar ghearele v-au ramas in orice-mbratisare\r\n       Am      Em    G   D\r\nAstazi doare sarutul pe obraz\r\n                     G  D  Em\r\nDar dati-mi viata 'napoi\r\n                      G  D  Em\r\nCe-am risipit pentru voi\r\n                   C               A     A7\r\nUitand de dor si nevoi, ani de pribegie                              \r\n        Am  Em              D \r\nDintr-o mie multi n-au mai ramas\r\n\r\nIntro.\r\n\r\n\r\nEm       D                  \r\nCazut-au frunzele\r\n     Am         C B Em\r\nLe-a risipit furtuna\r\n          D\r\nUnde-s sperantele?                           \r\n    Am            C B Em\r\nN-a mai ramas niciuna\r\n          D         Am\r\nUn gand subit, nerostit                       \r\n         C  D     Em\r\nMa-ncremeneste-n loc\r\n           D            Am\r\nCe-am asteptat, ce-am visat\r\n         C   D       G D Em\r\nNimic nu s-a schimbat\r\n\r\n\r\n\r\nEm                  G D Em\r\nDar dati-mi viata 'napoi\r\n                     G D Em\r\nCe-am risipit pentru voi\r\n                    C\r\nUitand de tot si de voi\r\n           A     A7\r\nPrieteni de betie\r\n        Am  Em            D\r\nDintr-o mie cati au mai ramas\r\n                     G   D Em\r\nSi timpul vostru s-a scurs\r\n                 G  D  Em\r\nLa umbra marelui urs\r\n                    C\r\nDar ghearele v-au ramas\r\n              A     A7\r\nIn orice-mbratisare\r\n       Am      Em          D \r\nAstazi doare sarutul pe obraz.\r\n\r\nIntro+ Em",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "Em",
      "Am",
      "C",
      "B",
      "A",
      "A7",
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
    "id": 112,
    "title": "Baby",
    "slug": "baby-112",
    "content": "Strofa:\r\n    Am                        Em\r\n   Cat am fost de singur, tu nu ai stiut\r\n      F                            Dm\r\n   Ti-ai ferit mereu privirea, de la inceput\r\n     Am                   Em\r\n   Anii trec, si viata merge iar\r\n      F                     Fm                         C\r\n   Te caut zi si noapte, te caut, dar stiu ca e-n zadar\r\n   \r\n     \r\n   Baby stiu acum ca mergi sa intalnesti\r\n   Un strain ce te va duce, la casa din povesti\r\n\r\n\r\n     Am                Em\r\n   Ce noroc, ce mare nenoroc\r\n      F              G         C           \r\n   Ca timpul stinge totul, dar focul naste foc\r\n     F       G          C      \r\n   Mai da-i o zi din viata ta,\r\n     F                  G\r\n   Acelui om care-ti spunea\r\n \r\n           C   G            Am\r\nRef :   Baby, baby, baby, tu vei fi a mea\r\n          F               Am       Dm         G\r\n         Ca un rasarit de soare, dupa noaptea grea\r\n         C    G            Am\r\n         Baby, baby, baby, tu vei fi a mea\r\n          F                   Fm\r\n         Tu esti unica iubire, unica iubire\r\n  \r\n\r\n         \r\nBridge :\r\n Eb                                 F\r\n E toamna-n viata mea, totul este scrum\r\n Eb                                 F\r\n Stiam ca vei pleca dar lasa-ma sa-ti spun\r\n\r\n\r\n\r\nRef:",
    "author": {
      "id": 56,
      "name": "Iris",
      "slug": "iris"
    },
    "author_id": 56,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Em",
      "F",
      "Dm",
      "Fm",
      "C",
      "G",
      "Eb",
      "E"
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
    "id": 113,
    "title": "Fata din vis",
    "slug": "fata-din-vis-113",
    "content": "D         A     G   A\r\nImi amintesc de tine\r\nD          A    G  A\r\nStateai in fata mea\r\nD          A          G\r\nA fost de-ajuns o privire\r\nA       D        A     G\r\nCe n-o pot, n-o pot uita\r\n \r\nCu bratele-amandoua\r\nIncerc sa te regasesc\r\nSa fim din nou impreuna\r\nE tot ce pot sa imi doresc\r\n \r\nCu gandul pret de o clipa\r\nSa te-nteleg as fi vrut\r\nAs fi ramas cu tine\r\nC-am sa te pierd nu am crezut\r\n \r\nAfara numai vantul\r\nGonind prin noapte spunea\r\nCa lasa-n urma timpul\r\nCe mult prea, prea iute-alerga\r\n \r\n[_refren_]\r\n \r\nBm         A         G    A\r\nPornesc la drum prin noapte\r\nD            A          G   A\r\nIn noaptea-n care ti-am zis\r\nBm       A         G\r\nCa numai tu dintre toate\r\nA       D      A      G\r\nDoar tu esti fata din vis\r\n \r\n[_sfarsit_de_refren_]\r\n \r\nPrivesc la trenul care\r\nDucea nepasator\r\nCaldura soaptei tale\r\nCe-avea s-o piarda pana-n zori.\r\n \r\nAfara numai vantul\r\nGonind prin ploaie spunea\r\nCa lasa-n urma timpul ce mult prea\r\nPrea iute-alerga\r\n \r\n[_pasaj_]\r\n \r\nD          A    G\r\nDaca vrei (daca vrei)           \r\n    A     D-A-G-A\r\nVoi fi cu tine\r\nD          A    G\r\nDaca vrei (daca vrei)\r\n    A         D-A-G\r\nVoi sta langa tine",
    "author": {
      "id": 57,
      "name": "Compact",
      "slug": "compact"
    },
    "author_id": 57,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "A",
      "G",
      "Bm",
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
    "id": 114,
    "title": "Flori de mai (simplificat)",
    "slug": "flori-de-mai-simplificat-114",
    "content": "(Originalul - Capo pe 3)\r\n\r\n\r\nintro: Dm  G  Am\r\n   \r\n  Dm\r\nLacata prinsa-n lemn, ascunde-ma ne-atins\r\n  Am\r\nPazeste-ma de ger, azi-noapte iar a nins\r\n     Dm          F\r\nCand tu visai \r\n                  Am\r\nAlbastre flori de mai\r\n    Dm\r\nCe flori în toiul iernei opreste-te-ti sopteam\r\n  Am\r\nAcum doar geru-n sticla picteaza flori la geam\r\n    Dm          F\r\nTu n-ascultai \r\n                   Am\r\nVisai doar flori de mai.\r\n\r\n           G     Dm\r\n     Mai stai\r\n                     Am\r\n     Si nu pleca de n-ai\r\n            G                        Dm\r\n     Sa-mi dai (nu ti-am cerut sa-mi dai)\r\n                       Am\r\n     Albastre flori de mai.\r\n\r\n   Dm \r\nDe ochi străini ma tem ce-n strada ard nestins\r\n   Am\r\nPrivind la ei te chem, tin minte tot ce-ai zis\r\n   Dm            F\r\nAtunci spuneai \r\n                     Am\r\n\"Plec dupa flori de mai\".\r\n   Dm\r\nVibrează pasii mei de parca merg pe clape\r\n   Am\r\nCu mine insumi cant refren-singuratate\r\n   Dm          F\r\nDe cand plecai \r\n              Am\r\nDupa flori de mai\r\n\r\n           G      Dm\r\n     Mai stai\r\n                      Am\r\n     Si nu pleca de n-ai\r\n             G                       Dm\r\n     Sa-mi dai (nu ti-am cerut sa-mi dai)\r\n                        Am\r\n     Albastre flori de mai.",
    "author": {
      "id": 58,
      "name": "Alternosfera",
      "slug": "alternosfera"
    },
    "author_id": 58,
    "categories": [
      {
        "id": 23,
        "name": "Din Republica Moldova",
        "slug": "din-republica-moldova",
        "description": ""
      },
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "Am",
      "F",
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
    "id": 115,
    "title": "Mica tiganiada",
    "slug": "mica-tiganiada-115",
    "content": "-are capodastru la tasta 4, deci e in C#m;\r\n-eu l-am scris in Am;\r\n\r\nintro:\r\n   Am    C    G      D           Am    \r\ne|----0----0---------2-----2p0------0-|\r\nB|----1----1------3--3---3-----3----1-|\r\nG|--------------0------2--------------|\r\nD|-------------------0----------------|\r\nA|--0----3------------------------0---|\r\nE|------------3-----------------------|\r\n\r\n   C      D      Am  C    G     D     C     E    Am\r\ne|--------2--------0---0--------3----|----0----0-----0---0-|\r\nB|-----1--3---3----1---1------3-2---3|----1----0----2-2----|\r\nG|---0------2---------------0-----2--|-------------2---2---|\r\nD|--------0---------------------0----|---------------------|\r\nA|-3-------------0---3---------------|--3----2----0--------|\r\nE|------------------------3----------|---------------------|\r\n\r\n\r\nHmmm hmmmm hmmmmmmm......\r\n\r\n    G       C           se repeta Am     \r\ne|--3---3---3------0------|----|\r\nB|--3-----3-----3----1----|----|\r\nG|----0-------0--------0--|----|\r\nD|------------------------|----|\r\nA|-----------------3------|----|\r\nE|--3---3---3-------------|----|\r\n\r\ne|--0---0---0-----0------0---0---0-----0------0-----|\r\nB|--1-1---1---1-----1------1---0-1-------1----------|\r\nG|--------------2-----2--------------2-----2--------|\r\nD|---------------------------------2----------------|\r\nA|--0---0---0-----0------3---2---0------------------|\r\nE|--------------------------------------------------|\r\n\r\nVers 1: \r\n\r\n   Am   C    G     D    Am   C          D\r\n   Trec tigani pe drum, drumu-i plin de fum\r\n   Am   C    G     D     C   E  Am\r\n   Fumu-i plin de scrum, foc ardea\r\n   Vai tigani, tigani, gipsy si gitani \r\n   Fara cer si ani, trec pe drum.\r\n\r\nVers 2:\r\n  \r\n   G       C    G         C\r\n   Tiganie rai, rai care erai\r\n   Am            C  E  Am\r\n   Caravan serai giacardea\r\n   Raiul meu beteag de pe alt meleag\r\n   Cat imi esti de drag, nu stiu cum.\r\n\r\nvers 1:\r\n   Trec tigani prin colb, colbul este orb\r\n   Orbul e un corb giacardea\r\n   Cade seara-n camp soarele-i scalamb\r\n   Cortul este stramb foc ardea.\r\n\r\nvers2:\r\n   Fac tiganii foc, focu-i la mijloc\r\n   Fete cu ghioc\r\n   Si cu carti de joc, hai noroc, noroc\r\n   Vino la soroc.\r\n\r\nvers 1\r\n   Vino sa-ti ghicesc cartile vorbesc\r\n   Si nu ne mintesc, giacardea\r\n   Fata de caro sub cer indigo\r\n   Sa-ti spun incotro foc ardea.\r\n\r\nvers 2\r\n   Ca multi ani s-au scurs de cand el s-a dus\r\n   Cu un pui de urs pe un drum\r\n   Cu belciug si lant fara nici un sfant \r\n   Spre un targ bizant foc ardea.\r\n\r\nvers 1\r\n   Zaiafet acum lautari duium\r\n   Numai tu nicicum, giacardea\r\n   Noaptea de-ar veni pe pamantul gri\r\n   De ne-ar adormi orisicum.\r\n\r\nvers2\r\n   O dar azi dar azi ceru-i de atlaz\r\n   Soarele-n extaz\r\n   Ei se duc la pas spre un alt popas\r\n   Satra de pripas\r\n   Pana nu-i mai vezi, pana nu-i mai crezi\r\n   Si din ochi ii pierzi\r\n   Printre ceturi verzi, ceturi de livezi\r\n   Vezi ca nu-i mai vezi.\r\n\r\nvers1\r\nGiacardea, cardea\r\nGialino mura\r\nGia mura mura\r\nCe misto ...",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
      "G",
      "D",
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
    "id": 116,
    "title": "Mugur de fluier",
    "slug": "mugur-de-fluier-116",
    "content": "G  D  G  D\r\nG  D Am C G D G D\r\nG  D Am C G D G D\r\n\r\n\r\nG        D         Am       C   G  D  G  D\r\nÎmi simt sufletul mugur de fluier\r\nCe-a doinit cântec cu şuier\r\nPetru zilele ce-au fost trecute\r\nPentru nopţile negre si slute\r\n\r\nG D Am\r\nEm D Em D\r\n\r\nG        D       Am    C     G    D  G  D\r\nAm pornit cu roua-n picioare\r\nCa să cânt un cântec de soare\r\nPentru zilele ce au să vie\r\nPentru nopţile cu iasomie\r\n\t\r\n\tG      D     Am\r\n\tFreamătul apelor\r\n\tEm     D        Em    D\r\n\tşi foşnetul codrilor\r\n\tG      D      Am\r\n\tÎn el se intâlnesc\r\n\tEm      D       Em\r\n\tşi sufletu-mi încălzesc\r\n\t\r\n\tG    D      C       D\r\n\tHei, hei, verde e iarba\r\n\tC        D        G      D\r\n\tSoarele-i sus pe cer\r\n\tG     D     C      D\r\n\tHei, hei, dusă e iarna \r\n\tC      D         G       D\r\n\tCu dinţii ei de fier (2 ori)\r\n\r\nSolo\r\n\r\nHei, hei, verde e iarba\r\nSoarele-i sus pe cer\r\nHei, hei, dusă e iarna \r\nCu dintii ei de fier (se repetă până la sfârsit)",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "Am",
      "C",
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
    "id": 117,
    "title": "Strada ta",
    "slug": "strada-ta-117",
    "content": "INTRO: G D C D\r\n\r\n\r\nVERSURI:\r\n G     D      C    D    G   D C D \r\nIeri am trecut pe strada ta\r\nG   D   C    D      G  D  C  D\r\nSi soarele se tot juca\r\nG     D   C    D        G D C D\r\nCand aparea, cand disparea\r\nG     D    C   D     G D C D\r\nDin calea norilor fugea.\r\n\r\nEm        C   Em           D\r\nDoar o privire, atata asteptam\r\nEm        C            D\r\nDoar o privire, mai speram\r\n\r\n\r\nAi aparut la geam tarziu\r\nCe ora era nici nu mai stiu.\r\nO clipa doar tu m-ai zarit\r\nSi te-am strigat, dar n-ai venit.\r\n\r\nDoar o privire, atata asteptam\r\nDoar o privire, mai speram\r\n\r\n\r\nREFREN:\r\n          G  D C D              \r\nTe voi astepta, \r\n                G    D C D\r\nvoi veni pe strada ta\r\n        G      D C\r\nTe astept mereu, \r\nC               D\r\nfara tine mï-e greu\r\n\r\n.........\r\n\r\nOOOOUUAHHH!!!\r\n        A     E D E\r\nTe voi astepta, \r\n               A      E D E\r\nvoi veni pe strada ta\r\n     A         E D\r\nTe astept mereu, \r\nD               E\r\nfara tine mï-e greu\r\n\r\n\r\nZRANGA ZDRANGA......ne vedem in vama ;)",
    "author": {
      "id": 56,
      "name": "Iris",
      "slug": "iris"
    },
    "author_id": 56,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "D",
      "C",
      "Em",
      "A",
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
    "id": 118,
    "title": "Ziua vrajitoarelor",
    "slug": "ziua-vrajitoarelor-118",
    "content": "Em \r\nIntr-o zi de joi\r\nG\r\nCa asa-i la noi\r\nD\r\nSeara se lasa\r\nEm D   Em\r\nFara folos\r\nEm\r\nPoate nu-i asa\r\nG\r\nSi e altceva\r\nD\r\nNorii se lasau\r\nEm D Em\r\nPana jos\r\nG\r\nAzi e ziua lor\r\nD\r\nZiua ielelor\r\n\r\nVrajitoarelor\r\nEm D   Em\r\nPana-n zori\r\nG\r\nIata se pornesc\r\nD\r\nSi se sfatuiesc\r\n\r\nOalele pocnesc\r\nEm D  Em\r\nCu licori\r\nEm\r\nBoabe si furnici\r\nG\r\nIerburi si urzici\r\nD\r\nTot ce e aici\r\nEm D Em\r\nMana lor\r\nEm\r\nDragoste si vis\r\nG\r\nIad si paradis\r\nD\r\nIn palma ti-au scris\r\nEm D Em\r\nSoarta ta\r\n\r\n\r\nEm  G       D       Em\r\nO,o,o ai un mare noroc\r\nEm  G      D      Em\r\nO,o,o ghinioane deloc\r\nEm     G          D\r\nTot ce vezi sa nu crezi\r\n\r\nCa asa ti-e Soarta\r\nEm       G          D\r\nPoti sa-ntrebi,daca vrei\r\nEm\r\nVRAJITOARELE",
    "author": {
      "id": 53,
      "name": "Cargo",
      "slug": "cargo"
    },
    "author_id": 53,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
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
    "id": 119,
    "title": "Strunga",
    "slug": "strunga-119",
    "content": "Em    G     F      Dm    Em\r\nÎn pădurea de la strungă\r\nSunt de cei cu puşca lungă\r\nCare dau chiorâş la pungă\r\n\r\n\r\nEm    G       F       Em\r\nSunt de cei ce-mpuşcă-n lună\r\nCare noaptea-n frunze sună\r\nFeciori de lele nebună\r\n\r\n\r\nFă-te-n lături măi creştine, măi\r\nDacă vrei să treci cu bine\r\nSă rămâi cu viaţă-n tine\r\n\r\n\r\nOpt voinici cu spete late\r\nşi cu mâneci suflecate\r\nStau cu puştile-ncărcate\r\n\r\n\r\nOleleu, ciocoi bogate, hei\r\nIci te-i trece din păcate, hei\r\nSă-ţi arunc doi glonţi în spate, hei\r\n\r\n\r\nCă mi-e puşca hultuită \r\nşi mi-i ghioaga tintuită\r\nşi mi-e inima-ncoltită",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Em",
      "G",
      "F",
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
    "id": 120,
    "title": "Vremuri",
    "slug": "vremuri-120",
    "content": "Tonalitate originala F#\r\n\r\n G     C           D             G\r\nHei, tramvai, cu etaj şi tras de cai\r\nHei, joben, ce umblai la mon jardin\r\nHei, bunic, cu monoclu erai şic\r\nHei, can-can, cu picioarele-n tavan.\r\n\r\n        \t\tEm\r\nToate-au fost la timpul lor\r\n      C         D\r\nCeva exagerat\r\nAnii au trecut în zbor\r\nşi lumea le-a uitat.\r\n\r\nHei, pletoşi, cu pantaloni strâmţi şi soioşi\r\nChitarişti, zgomotoşi şi fantezişti\r\nMini-jupe, foarte scurt şi strâns pe trup\r\nHei, to shake, îndrăcit ca un berbec.\r\n\r\nToate sunt la modă acum\r\nCeva exagerat\r\nTimpul trece ca un fum\r\nşi tot va fi uitat.\r\n\r\nPrima strofa inca o data",
    "author": {
      "id": 55,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 55,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
      "D",
      "Em",
      "F#"
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
    "id": 121,
    "title": "Floare de iris",
    "slug": "floare-de-iris-121",
    "content": "Am         Dm      E           E7  E\nFloare de iris....floare de colt,\nAm         Dm       E          E7  E\nNe-ai ocrotit , ne-ai dat un rost\n             F           G\nIar cand noi nu vom mai fi\nDm        Am         C     G    Am\nVa veti aminti ca a fost odata Iris\n\n           F             G\nIar cand noi nu vom mai fi\nDm          Am        C     G    Am\nVa veti aminti ca a fost odata Iris \n\nla fel peste tot....;)\n\n\nPe strazile viselor am alergat\nSi v-am iubit si v-am cantat\nIar cand noi nu vom mai fi\nIar noaptea va fi zi\nVa veti aminti ca-a fost odata Iris\n\nIar cand noi nu vom mai fi\nVa veti aminti ca a fost odata Iris x2\nCa a fost odata Iris\n\n have fun! ne vedem la vama veche :D:D:D:D:D",
    "author": {
      "id": 56,
      "name": "Iris",
      "slug": "iris"
    },
    "author_id": 56,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "Dm",
      "E",
      "E7",
      "F",
      "G",
      "C",
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
    "id": 122,
    "title": "Singur",
    "slug": "singur-122",
    "content": "[1]\r\n  Am\r\nO vad tremurand cu ochii inchisi\r\n                              G\r\nCu poze in jur, genunchii stransi\r\n                                 Am \r\nSlabita si trista, cu cearcani adanci\r\n\r\n\r\n[2]\r\n    Am\r\nSi vrea sa-i promit ca n-o sa uit\r\n                         G\r\nImagini si locuri din trecut\r\n                          Am\r\nSi visele-n care noi am crezut\r\n\r\n\r\n\r\nAnterefren:\r\nF\r\nSunt nopti intregi cand palng\r\n    C\r\nSi-adorm cu tine-n gand\r\n  Dm\r\nPleacta esti ep veci\r\n    E\r\nDeparte-n umbre reci\r\n\r\n\r\nRefren:\r\n   C-G    Dm     C    \r\nSingur, atat de singur\r\n   Am           F \r\nSimt dureri pe care\r\n        C          G\r\nNu mai pot sa le-ndur\r\nC     G   Dm      Am  \r\nLacrimi, nopti in lacrimi\r\n   C        G             Am\r\nSi-n inima mea, doar lacrimi\r\n\r\n\r\n[3]\r\n  Am\r\nSi sta in genunchi la piept tinant\r\n                         G\r\nO veche scrisoare si plangand\r\n\r\nSi-mi spune prin lacrimi \r\n                  Am\r\nCe mult i-a palcut\r\n\r\n\r\n[4]\r\n Am\r\nMa roaga sa jur ca n-am mintit\r\n                                G   \r\nIn tot ce i-am scris si mi-a soptit\r\n\r\nCa pleaca cu gandul\r\n                Am \r\nCa noi ne'am iubit\r\n\r\n\r\nAnterefren + Refren\r\n\r\n\r\n[5]\r\n\r\nRevad ochii tai cum s-au stins\r\n\r\nCum tamplele reci le-am cuprins\r\n\r\nDestinul pe ne-a invins.\r\n\r\nSpor la zdranganit!",
    "author": {
      "id": 59,
      "name": "Talisman",
      "slug": "talisman"
    },
    "author_id": 59,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "G",
      "F",
      "C",
      "Dm",
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
    "id": 123,
    "title": "Doina haiducului",
    "slug": "doina-haiducului-123",
    "content": "Dm                     F \r\nFreamătă frunza în vânt\r\nGm            C\r\nMurmură apa în râu\r\nBb                 Gm\r\nSpicul plecat la pământ\r\n  C \r\nVălura lanul de grâu.\r\nF\r\nFiul codrului sunt,\r\nGm                C\r\nLiber ca pasărea-n zbor\r\nBb                Gm\r\nDoina haiducului cânt\r\nBb       Gm       Dm\r\nPlină de jale si dor\r\n\r\nPuşca-i logodnica mea,\r\nMurgul e fratele meu\r\nViaţa în codru e grea\r\nTraiul haiducului greu\r\nPune-ţi pistoalele-n brâu\r\nBoierul la târg a pornit\r\nSloboade armăsarul din frâu\r\nRăsplata prin noi a venit\r\n\r\n\tF                   C\r\n\tşi cum îmi place să dorm\r\n\tGm                   Dm  C\r\n\tNoaptea-n pădure la foc\r\n\tF                C\r\n\tStăm împreună cu toţi\r\n\tGm          Bb  Dm\r\n\tVisul, lângă izvor.\r\n \r\nSeara la rug, obositi\r\nCântă haiducii de dor\r\nLaşii au fost pedepsiti\r\nDe bogătiile lor\r\nDrumul omului - greu\r\nPână la ultima stea\r\nLiber e sufletul meu,\r\nLiberă-i inima mea.\r\n\r\n\tRefren",
    "author": {
      "id": 60,
      "name": "Zdob și Zdub",
      "slug": "zdob-si-zdub"
    },
    "author_id": 60,
    "categories": [
      {
        "id": 18,
        "name": "Rock",
        "slug": "rock",
        "description": ""
      }
    ],
    "chords": [
      "Dm",
      "F",
      "Gm",
      "C",
      "Bb"
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
    "id": 124,
    "title": "Adio, deci pe curand",
    "slug": "adio-deci-pe-curand-124",
    "content": "D             G        D    G D\r\nIubito, poti fugi cât vrei,\r\nD             G         D   G D\r\nÎn gând vei auzi pasii mei.\r\nD                  G        D  \r\nPoti spune vorbe multe în vânt,\r\n   A\r\nEu n-am sa ascult,\r\nOh! N-am sa le-ascult!\r\n\r\nIubito, poti în lume umbla\r\nDe mine nu mai poti scapa.\r\nVoi trece zilnic prin gândul tau\r\nPrin ochii tai.\r\nPrin ochii tai.\r\n\r\nRefren:\r\n              G             D\r\nDar spune-mi cine te-a mai purtat prin nori?\r\n              G             D\r\nSi spune-mi cine te-a mai visat în culori?\r\n             G              D\r\nSi stii tu cine de toate a uitat,\r\n             G               A\r\nDe când cu tine, prin ploaie   s-a plimblat?\r\n\r\nNu uiti tu zilele de mister\r\nNici clipa când stele pier\r\nNu uiti ziua aceea de mai\r\nCând îmi spuneai:\r\nMai stai, mai stai!\r\n\r\nNu uiti tu zilele de mister\r\nNici clipa când stele pier\r\nCând timpul pentru noi disparea\r\nSi inima ta\r\nBatea, batea!\r\n\r\nRefren\r\n\r\nTe vad acum grabita sa pleci\r\nCum cauti doar cuvinte mai reci\r\nLe spui, dar în spatele lor\r\nMai simt cum te dor.\r\nMai simt cum te dor.\r\n\r\nTe vad cum mai încerci sa zâmbesti\r\nDar ochii tai fug de povesti\r\nSi nu te uiti la mine plecând\r\nDeci, pe curând!\r\nDa, pe curând!",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
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
    "id": 125,
    "title": "Canarul",
    "slug": "canarul-125",
    "content": "E                         C#m\r\nCanarul galben ca un galbenus\r\nE        B  A           E\r\nCu pene moi  si ochii dusi\r\n                           C#m\r\nCanta de dupa sarmele de-argint\r\nE            B A            E\r\nSi viersu-i se  pierdea in vant\r\n                               C#m\r\nDeodata ochii tristi din cap tresar\r\nE           A   F#m          E\r\nSi da din aripi,   dar in zadar\r\n                               C#m\r\nLovind cu pieptul sarmele de argint\r\nB        A  F#m              E\r\nCade in jos     cu pieptul frant\r\n  A      B             E\r\nSarman canar, ti s-a parut\r\n    A  B              E\r\nCa zarile ti s-au deschis\r\n     A        B             C#m\r\nDar n-a fost doar, decat un vis\r\nA             E\r\nRanit tu ai cazut\r\n\r\nE                         C#m\r\nCanarul galben ca un galbenus\r\nE        B  A           E\r\nCu pene moi  si ochii dusi\r\n                          C#m\r\nCanta de dupa sarmele de-argint\r\n            A  B               E\r\nSi viersu-i se     pierdea in vant\r\nSi viersu-i se pierdea in vant\r\nSi viersu-i se pierdea in vant",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "E",
      "C#m",
      "B",
      "A",
      "F#m"
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
    "id": 126,
    "title": "Cantec soptit",
    "slug": "cantec-soptit-126",
    "content": "Intro pian: D Em C Am D Em C Am G D G D G A Am C Bm G D\r\nD             G    D\r\nOdata am ucis   o vrabie.\r\n                                A\r\nAm tras cu prastia in ea si-am lovit-o.\r\nG          D   G                D\r\n Pe urma o zi   si o noapte intreaga  |\r\nG        A                   D        |  x2\r\n Am tot plans-o si am tot jelit-o.    |\r\n\r\nPian:\r\nD Em C Am D Em C Am\r\n\r\nNu m-a batut mama, nu m-a certat.\r\nIn mana tineam o bucata de paine.\r\nDegeaba mi-a spus, degeaba mai plangi,\r\nCe-ai omorat, omorat ramane.\r\n\r\nMai tarziu am crescut flacaiandru,\r\nM-am indragostit nebuneste de-o fata.\r\nNu stiu de ce, intr-o zi a murit\r\nSi-n alta zi a fost ingropata.\r\n\r\nDe mult nu mai trag cu prastia-n vrabii,\r\nDe mult nu mai merg la nici o-ngropare.\r\nSoarele apune dupa niste maguri\r\nSi rasare in flacari din mare.",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Em",
      "C",
      "Am",
      "G",
      "A",
      "Bm"
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
    "id": 127,
    "title": "Daca ai ghici",
    "slug": "daca-ai-ghici-127",
    "content": "Intro: C Am F C G   C Am F G C\r\n\r\nC\r\nDaca ai ghici\r\n               Am\r\nTot ce-ti pot dori,\r\nEu ti-as prinde-n par\r\n            F\r\nCununa de sori,\r\n            C    G \r\nStopita cu floooori.\r\n\r\nC\r\nIncearca sa zambesti\r\n             Am\r\nFar'sa te-amagesti\r\nSi sa iti doresti\r\n           F  G\r\nUn lucru usor\r\n              C        \r\nFiindca-i trecator.\r\n\r\nA||---0--2----|\r\nAm                     \r\nDaca iei un strop de ploaie\r\n     Em\r\nIn palma ai sa vezi\r\nDm                      C\r\nCa nu-i atat de greu sa speri.\r\n\r\nA||---0--2----|\r\nAm\r\nFur-o raza de lumina,\r\nEm\r\nIncearca-n ea sa crezi\r\nDm                         G\r\nSi ridica-ti fruntea spre cer.\r\n\r\nC\r\nDaca ai ghici\r\n               Am\r\nTot ce-ti pot dori,\r\nEu ti-as prinde-n par\r\n            F\r\nCununa de sori,\r\n            C    G \r\nStopita cu floooori.\r\n\r\nC\r\nIncearca sa zambesti\r\n             Am\r\nFar'sa te-amagesti\r\nSi sa iti doresti\r\n           F  G\r\nUn lucru usor\r\n              C        \r\nFiindca-i trecator.\r\n\r\nIa un strop de fericire\r\nDintr-un colt de cer,\r\nOchii oglindeste-i in el.\r\nIa un fluture din soare,\r\nPuneti-l in par,\r\nLanga o cununa de mar.\r\n\r\n\r\nDaca ai ghici\r\nTot ce-ti pot dori,\r\nEu ti-as prinde-n par\r\nCununa de sori,\r\nStopita cu flori.\r\n\r\nIncearca sa zambesti\r\nFar'sa te-amagesti\r\nSi sa iti doresti\r\nUn lucru usor\r\nFiindca-i trecator.",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "C",
      "Am",
      "F",
      "G",
      "Em",
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
    "id": 128,
    "title": "Esarfa in dar",
    "slug": "esarfa-in-dar-128",
    "content": "Capo pe II\r\n \r\nD\r\nCu ape de rosu-n ochi,\r\nBm\r\nValuri largi de alb,\r\nF#m\r\nMov si verde zboara cald\r\n              Em   A\r\nPe chipul tau drag,\r\n            D  G A\r\nEsarfa in dar.\r\n\r\nD\r\nTin minte si-acum\r\nBm\r\nNe-am oprit din drum\r\nF#m\r\nCe bine-mi amintesc, ce clar,\r\n          Em    A\r\nTi-am infasurat\r\n           G\r\nEsarfa in dar.\r\n\r\nPasaj: B E B E B \r\n\r\nD\r\nCulorile alergau,\r\nBm\r\nIn vant se certau\r\nF#m\r\nFata toata-ti lumina\r\n            Em   A\r\nCu albul de var,\r\n           D  G\r\nEsarfa in dar.\r\n\r\nAveam optsprezece ani,\r\nEram Beatles fani\r\nSi umblam in tenisi albi.\r\nPrimavara-n par\r\nSi miros de mar.\r\n\r\nRefren:\r\nBm         F#m\r\nAaaaaaaaaa mai trecut de-atunci ceva,\r\nBm           F#m\r\nAaaaaaaalbul de var nu-i chiar la fel\r\n      G\r\nTu gandesti altceva\r\nD           Bm\r\nSi mai e si el.\r\nEm\r\nEu, aici, tu, acolo,\r\nE          A\r\nNiciodata noi.\r\n\r\n\r\nTe mai vad, cand si cand,\r\nEl in stanga ta,\r\nSi nu pot sa-ti spun ce gandesc\r\nCand la gatu-i vad\r\nEsarfa in dar.\r\n\r\nCu ape de rosu-n ochi,\r\nValuri largi de alb,\r\nMov si verde zboara cald\r\nPe chipul tau drag,\r\nEsarfa in dar.\r\nPe chipul tau drag,\r\nEsarfa in dar...\r\nPe chipul tau drag...\r\nEsarfa in dar...\r\n \r\n\r\n\r\n\r\n\r\nE\r\nCu ape de rosu-n ochi,\r\nC#m\r\nValuri largi de alb,\r\nG#m\r\nMov si verde zboara cald\r\n              F#m  B\r\nPe chipul tau drag,\r\n            E  A B\r\nEsarfa in dar.\r\n\r\nE\r\nTin minte si-acum\r\nC#m\r\nNe-am oprit din drum\r\nG#m\r\nCe bine-mi amintesc, ce clar,\r\n          F#m   B\r\nTi-am infasurat\r\n           A\r\nEsarfa in dar.\r\n\r\nPasaj: B E B E B \r\n\r\nE\r\nCulorile alergau,\r\nC#m\r\nIn vant se certau\r\nG#m\r\nFata toata-ti lumina\r\n            F#m  B\r\nCu albul de var,\r\n           E  A\r\nEsarfa in dar.\r\n\r\nAveam optsprezece ani,\r\nEram Beatles fani\r\nSi umblam in tenisi albi.\r\nPrimavara-n par\r\nSi miros de mar.\r\n\r\nRefren:\r\nC#m        G#m\r\nAaaaaaaaaa mai trecut de-atunci ceva,\r\nC#m          G#m \r\nAaaaaaaalbul de var nu-i chiar la fel\r\n      A\r\nTu gandesti altceva\r\nE           C#m\r\nSi mai e si el.\r\nF#m\r\nEu, aici, tu, acolo,\r\nF#         B\r\nNiciodata noi.\r\n\r\n\r\nTe mai vad, cand si cand,\r\nEl in stanga ta,\r\nSi nu pot sa-ti spun ce gandesc\r\nCand la gatu-i vad\r\nEsarfa in dar.\r\n\r\nCu ape de rosu-n ochi,\r\nValuri largi de alb,\r\nMov si verde zboara cald\r\nPe chipul tau drag,\r\nEsarfa in dar.\r\nPe chipul tau drag,\r\nEsarfa in dar...\r\nPe chipul tau drag...\r\nEsarfa in dar...",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Bm",
      "F#m",
      "Em",
      "A",
      "G",
      "E",
      "C#m",
      "G#m",
      "B",
      "F",
      "F#"
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
    "id": 129,
    "title": "Hanul lui Manuc",
    "slug": "hanul-lui-manuc-129",
    "content": "C              F\r\nFata frumoasa, fata straina,\r\nC                G\r\nDiseara am sa te duc\r\n    C                 F\r\nPentru convorbiri pentru cina\r\n   C     G     C\r\nLa Hanul lui Manuc,\r\n   F     G     C\r\nLa Hanul lui Manuc.\r\n\r\nRefren:\r\nC          F\r\nNu sînt trasuri,\r\n   G       C\r\nNu poti sa pleci,\r\nF       G     C\r\nSecolul e douazeci.\r\nC          F\r\nNu sînt trasuri,\r\n     G      C\r\nN-ai cum sa pleci,\r\nF       G     C\r\nSecolul e douazeci.\r\n\r\nC             F\r\nDiseara sa fi pregatita,\r\n  C              G\r\nDiseara am sa te duc\r\n         C               F\r\nPentru o cafea turceasca si-o clatita,\r\n   C     G     C\r\nLa Hanul lui Manuc,\r\n   F     G     C\r\nLa Hanul lui Manuc.\r\n\r\nRefren\r\n\r\nC                F\r\nNu vin haiducii, sînt ospatarii\r\nC                G\r\nDulce iubito, eu sînt\r\n       C             F\r\nGândul meu afla-l tu si tîlharii,\r\n   C     G     C\r\nLa Hanul lui Manuc,\r\n   F     G     C\r\nLa Hanul lui Manuc.\r\n\r\nRefren\r\n\r\nC               F\r\nHaide frumoaso, haide straino,\r\nC                  G\r\nDragostea mea fara leac\r\nC               F\r\nVino cu mine, surâzi si vino,\r\n   C     G      C\r\nLa Hanul lui Nalbea,\r\n   F     G      C\r\nLa Hanul lui Nalbea.\r\n\r\nC          F\r\nSînt si trasuri,\r\nG          C\r\nPoti si sa pleci,\r\nF          C     G       C\r\nMai e un mileniu pâna sa fie\r\nF       G     C\r\nSecolul e douazeci.\r\nC          F\r\nSînt si trasuri,\r\nG          C\r\nPoti si sa pleci,\r\nF          C     G       C\r\nMai e un mileniu pâna sa fie\r\nF       G     C\r\nSecolul e douazeci.\r\nF          C     G       C\r\nMai e un mileniu pâna sa fie\r\nF       G     C\r\nSecolul e douazeci.",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
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
      "G"
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
    "id": 130,
    "title": "Intoarcera la Orient",
    "slug": "intoarcera-la-orient-130",
    "content": "Intro: Va jucati pe Re si nota C (fretul 3)\r\n\r\nD                     C   \r\nSe intoarce iar acasa Fat Frumos din pribegie \r\nG                  D\r\nLa batranii sai parinti \r\n\r\nLa batranii sai parinti \r\nD                           C   \r\nSi cu gand sa-si ia mireasa ca un fir de papadie \r\nG                   D\r\nNumai bun de rupt in dinti \r\n\r\nNumai bun de rupt in dinti \r\n\r\nDar obloanele-s lasate pe o lipsa de mirese \r\nSi-asta inca nu-i destul \r\nSi-asta inca nu-i destul \r\nUmbla zvonul ca-s plecate sa devina-mparatese \r\nUndeva prin Istambul \r\nUndeva prin Istambul \r\n\r\nPrin dughene si tramvaie cu confort sporit de cusca \r\nTatal zvon e imparat \r\nTatal zvon e imparat \r\nSi se-arata ades pe ploaie zvon de mite goale pusca \r\nPrin Orient dupa vanat \r\nPrin Orient dupa vanat \r\n\r\nG            C         G            D    G\r\nRadeti voi, radeti voi vechi amici din Bizant \r\nG            C          G         D  \r\nRadeti voi dar priviti diligenta zace-n sant \r\nG         C         G        D        G\r\nChiar si calul abia mai respira de-un sfant \r\nG             C        G         D\r\nIar sub noi, ce belea, bicicleta n-are lant \r\n\r\nAlte zvonuri vand comploturi cu savante tevi de pusca \r\nSlugi marunte si mai mari \r\nSlugi marunte si mai mari \r\nUnele cu doua poturi ca sa-l afle in timp ce musca \r\nBiata lume de salvari \r\nBiata lume de salvari \r\nSub escorta din savana cic-ar fi sosit aseara \r\nIntr-un tren accelerat \r\nIntr-un tren accelerat \r\nChipul zeului banana ce va fi expus in gara \r\nSi apoi sanctificat \r\nSi apoi sanctificat \r\n\r\nRadeti voi, radeti voi, vechi amici din Bizant \r\nRadeti voi dar priviti diligenta zace-n sant \r\nChiar si calul abia mai respira de-un sfant \r\nIar sub noi, ce belea, bicicleta n-are lant \r\n\r\nPoate nu-i exact decorul, poate-mparatia-i trista \r\nInsa plina de umor \r\nInsa plina de umor \r\nHai sa tragem zdrang zavorul realitatea nu exista \r\nNoapte buna tuturor \r\nDoamnelor si domnilor.",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "C",
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
    "id": 131,
    "title": "Laptaria lui Enache",
    "slug": "laptaria-lui-enache-131",
    "content": "D\r\nIti amintesti, se inserase,\r\n                    Em \r\nUmblam pe starzi intortocheate,\r\n                       G\r\nMergeam firesc pana la urma\r\n                   D\r\nLa Laptaria lui Enache.\r\n\r\nD\r\nIubito, hai, prin poarta noptii,\r\n                             Em\r\nSa trecem si-o sa-mi dai dreptate,\r\n                           G\r\nSa stam macar un ceas sau doua,\r\n                  D\r\nLa Laptaria lui Enache.\r\n\r\nF#m          G\r\n   Habar nu am, habar nu ai,\r\n        D                     A\r\n   Ca timpul trece, se prea poate,\r\nF#m         G\r\n   Pana la ziua sa ramanem,\r\n          D                    A\r\n   Deci iarasi suntem pusi pe fapte.\r\n\r\nIti mai spuneam din cand in cand,\r\nC-o sa ma pierd cu tine-n noapte,\r\nDar tot ne-oprim sa bem o bere,\r\nLa Laptaria lui Enache.\r\n\r\nErai usor infiorata,\r\nE-adevarat, trecuse anu',\r\nO, Doamne, cat de mult doreai\r\nSa cante Johnny Raducanu.\r\n\r\nHabar nu am, habar nu ai,\r\nCa timpul trece, se prea poate,\r\nPana la ziua sa ramanem,\r\nDeci iarasi suntem pusi pe fapte.\r\n\r\n(solo )\r\n\r\nHabar nu am, habar nu ai,\r\nCa timpul trece, se prea poate,\r\nPana la ziua sa ramanem,\r\nDeci iarasi suntem pusi pe fapte.\r\n                      E\r\nLa umbra ochilor tai mari,\r\n                        F#m\r\nSa stau s-ascult e-o sarbatoare,\r\n                     A\r\nAm reusit s-avem un loc\r\n                  E\r\nSi asta este de mirare.\r\n\r\nE\r\nSi fiindca te doresc prea mult\r\n                        F#m\r\nSi casa mea nu-i prea departe,\r\n                      A\r\nTe iau de mana si te duc\r\n                  E\r\nDin Laptaria lui Enache.\r\n\r\nE        A \r\nLaptaria  lui Enache (x5 & fade out)",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Em",
      "G",
      "F#m",
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
    "id": 132,
    "title": "Mica Tiganiada",
    "slug": "mica-tiganiada-132",
    "content": "Pasarea Colibri-Mica tiganiada\r\n\r\nINTRO: Am\r\n\r\nAm      C      G\r\nTrec tigani pe drum,\r\nAm       C      G\r\nDrumu-i plin de fum,\r\nAm     C       G\r\nFumu-i plin de scrum,\r\nE     Am\r\nFoc ardea!\r\n\r\nVai tigani, tigani,\r\nGipsies si gitani,\r\nFara cer si ani,\r\nTrec pe drum!\r\n\r\nG        C\r\nTiganie, rai\r\nG         C\r\nRai care erai\r\nG   C   G\r\nCaravan serai\r\nE     Am\r\nGiacardea.\r\n\r\nRaiul meu beteag,\r\nDe pe alt meleag\r\nCat imi esti de drag,\r\nNu stiu cum.\r\n\r\n\r\nTrec tigani prin colb\r\nColbul este orb,\r\nOrbul e un corb,\r\nGiacardea.\r\nCade seara-n camp,\r\nSoarele-i scalamb,\r\nCortul este stramb,\r\nFoc ardea.\r\n\r\nFac tiganii foc,\r\nFocu-i la mijloc,\r\nFete cu ghioc.\r\nSi cu carti de joc,\r\nHai, noroc, noroc,\r\nVino la soroc.\r\n\r\nVino sa-ti ghicesc,\r\nCartile vorbesc\r\nSi nu ne mintesc,\r\nGiacardea.\r\nFata de caro,\r\nSub cer indigo,\r\nSa-ti spun incotro\r\nFoc ardea.\r\n\r\nCa multi ani s-au scurs\r\nDe cand el s-a dus\r\nCu un pui de urs\r\nPe un drum.\r\nCu belciug si lant,\r\nFara nici un sfant,\r\nSpre un targ bizant,\r\nFoc ardea.\r\n\r\nZaiafet acum,\r\nLautari duium,\r\nNumai tu nicicum,\r\nGiacardea.\r\nNoaptea de-ar veni,\r\nPe pamantul gri,\r\nDe ne-ar adormi,\r\nOrisicum.\r\n\r\nO, dar azi, dar azi,\r\nCeru-i de atlaz,\r\nSoarele-n extaz.\r\nEi se duc la pas\r\nSpre un alt popas,\r\nSatra de pripas.\r\nPana nu-i mai vezi,\r\nPana nu-i mai crezi\r\nSi din ochi ii pierzi.\r\nPrintre ceturi verzi,\r\nCeturi de livezi,\r\nVezi ca nu-i mai vezi.\r\n\r\nGiacardea, cardea,\r\nGialino mura,\r\nGia mura, mura,\r\nCe misto...\r\nGiacardea, cardea,\r\nGialino mura,\r\nGia mura, mura,\r\nCe misto...\r\nGiacardea, cardea,\r\nGialino mura,\r\nGia mura, mura,\r\nCe misto...\r\nGiacardea, cardea,\r\nGialino mura,\r\nGia mura, mura,\r\nCe misto...\r\n\r\nFoarte simplu si foarte corect asa. Nu inteleg de ce se compica toata lumea \r\ncu o gramada de acorduri la melodia asta :-?\r\nOricat de mult v-ati chinui, n-o sa va iasa niciodata ca lui Baniciu :))\r\n(Capodastru pe tasta 4 daca vreti sa sune ca originalul)\r\n\r\nzdranga-zdranga, fun fun fun :)",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "Am",
      "C",
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
    "id": 133,
    "title": "Miruna",
    "slug": "miruna-133",
    "content": "Suna bine din D, cu capo pe III (originalul e in F)\r\n\r\nD\r\nDragă Miruna îţi spun printre şoapte\r\n    G\r\nÎmi place cămaşa ta de noapte\r\n    A\r\nDar mai ales vreau să-ţi dau de ştire\r\n        G        A\r\nSă mi-o laşi ca amintire,\r\n        G         A\r\nSă mi-o laşi ca amintire\r\n\r\nNespus de frumos dormeai o noapte blândă\r\nZâmbeai prin somn iau eu stăteam la pândă\r\nSă nu te trezesc, să tulbur visele tale\r\nDar vreau să-ţi iau şi costumul de baie\r\nSă te-admir cu şi fără costumul de baie\r\n\r\n     Bm                       G\r\nÎn Grădina Botanică, într-o duminică\r\n      D        A\r\nEa se plimbă\r\n          Bm                   G\r\nNe-am fotografiat cu un vechi aparat\r\n   D       A\r\nAutomat\r\n\r\nUn celebru şi bun coleg de facultate\r\nSpunea c-aveai blugii rupţi la spate\r\nVeneai spre casă când afară plouă\r\nCu troleibuzul 89\r\nBlondă şi tristă cum ne-ai plăcut nouă\r\n\r\nCu pălăria de paie cu panglică mov\r\nIeşeai din clădirea de pe strada Snagov\r\nUşor te-ndreptai spre calea Moşilor\r\nSă-ţi iei bluză pepit de la Bucur Obor\r\nBluză pepit de la Bucur Obor\r\n\r\nVenind din practică poşetă galbenă\r\nEa îşi luă\r\nÎn magazine-a intrat, fustă şi-a cumpărat\r\nMaxi-nflorat\r\n\r\nDragă Miruna, ce rost are să-ţi cumperi toate lucrurile acestea – cheltuieşti o... \r\nsumă prea mare de bani. De fapt, ştii foarte bine ce-ţi spuneam in seara aceea, \r\nprintre şoapte...\r\n\r\n...Îmi place cămaşa ta de noapte\r\nDar mai ales vreau să-ţi dau de ştire\r\nSă mi-o laşi ca amintire\r\nSă mi-o laşi ca amintire\r\n\r\nAcum mă priveşti dintr-o poză cu zimţi \r\nAtunci aveai nervi dar şi buze fierbinţi\r\nşi te auzeam cum strigai printre şoapte\r\nUnde-i cămaşa mea de noapte\r\nUnde-i cămaşa mea de noapte\r\nLa mine-i cămaşa ta de noapte\r\nLa mine-i cămaşa ta de noapte\r\nPlâng pe cămaşa ta de noapte\r\nPlâng pe cămaşa ta de noapte",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "G",
      "A",
      "Bm"
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
    "id": 134,
    "title": "Ploaia care va veni",
    "slug": "ploaia-care-va-veni-134",
    "content": "(adaptare de Dorin Liviu Zaharia dupa\r\no piesa a grupului \"ECHIPA '84\", Dorin Liviu Zaharia)\r\n\r\nD                          F#m\r\nSunt un frate tanar, care crede in dreptate,\r\n         A                    D\r\nAm ochi negri dar am mainile curate.\r\nD                            F#m\r\nIubesc pletele si ploaia si camasile-nflorate,\r\n      A                               D\r\nNu raspund cand mi se-arunca vorbe-n spate.\r\n\r\nEm                 D\r\nUn fapt fara importanta\r\nEm                D\r\nma poate face sa sper,\r\nEm                  D\r\nMa-nclin si pun in balanta\r\nEm                   D\r\nce-i sfant cu ce-i efemer.\r\n                  Em\r\nPeste tot atarna greu\r\nA                D\r\n Teama de sinceritate...\r\n\r\nDar de cate ori, prieteni, n-am suras cu intristare\r\nCand sperantele pareau inselatoare.\r\nCand necinstea si prostia\r\nsi-ascundeau prin gropi norocul,\r\nStiti de cate ori, prieteni, le-am prins jocul.\r\n\r\nNe-am saturat de palavre,\r\nde carti si filme de soc,\r\nCu vampe, regi si cadavre,\r\ncu stele de iarmaroc.\r\nPloaia care va veni\r\nLe va potopi pe toate.\r\n\r\nNi-e lehamite de marsuri,\r\nde tromboane si plocoane,\r\nDe blazoane, de canoane si fasoane.\r\nFiindca banul si prostia\r\nsunt pericole morale\r\nCircul vietii ne-a impus salturi mortale.\r\n\r\nDeasupra florilor noastre\r\nciuperca cheama a pustiu,\r\nDin cer cad pasari albastre\r\nsi totusi nu e prea tarziu.\r\n\r\nPloaia care va veni\r\nLe va potopi pe toate.\r\nSa-ncercam sa facem noi\r\nUn oras fara pacate.\r\n4*| Ploaia care va veni\r\n| Le va potopi pe toate.",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "F#m",
      "A",
      "Em",
      "Am"
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
    "id": 135,
    "title": "Sfarsitul nu-i aici",
    "slug": "sfarsitul-nu-i-aici-135",
    "content": "(original: \"Death is not the end\") \r\nAutor muzica: Bob Dylan \r\nAutor versuri: Bob Dylan, trad. Florian Pittis\r\n\r\nA\r\nCand necazuri te doboara\r\nSi prieteni n-ai sa-i strigi,\r\n      E\r\nTine minte\r\n                A\r\nsfarsitul nu-i aici.\r\n\r\nA\r\nSi ce slaveai in taina\r\nE-asa cum nu-ti explici,\r\n       E\r\nTine minte\r\n                A\r\nsfarsitul nu-i aici.\r\n\r\nRefren\r\nA\r\nNu-i aici, (nu, nu)\r\nNu-i aici, (nu, nu)\r\n      E\r\nTine minte\r\n D       E     A\r\nsfarsitul nu-i aici. (nu, nu)\r\n\r\nCand oprit la o rascruce,\r\nDrumul nu stii sa-l prezici,\r\nTine minte\r\nsfarsitul nu-i aici.\r\n\r\nCand nu mai ai nici vise\r\nSi nu stii cum sa te ridici,\r\nTine minte\r\nsfarsitul nu-i aici.\r\n\r\nRefren\r\n\r\nCand se-aduna norii negri,\r\nPloaia cade ca un brici,\r\nTine minte\r\nsfarsitul nu-i aici.\r\n\r\nMangaiere n-ai, nu vezi acum\r\nMaini intinse de amici\r\nTine minte\r\nsfarsitul nu-i aici.\r\n\r\nRefren\r\n\r\nBridge\r\n        D\r\nPomul vietii creste mandru\r\n       A\r\nUnde spiritul e viu,\r\n     D\r\nLumineaza ea, salvarea,\r\n       A           E\r\nCerul gol si cenusiu.\r\n\r\n\r\nCand orasele-s in flacari,\r\nMusuroaie de furnici,\r\nTine minte\r\nsfarsitul nu-i aici.\r\n\r\nSi cand cauti in zadar un om\r\nPrintre-atatea mii de venetici,\r\nTine minte\r\nsfarsitul nu-i aici.\r\n\r\nRefren & fade out",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
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
    "id": 136,
    "title": "Vanare de vant",
    "slug": "vanare-de-vant-136",
    "content": "C               F     G7      C\nCate drumuri un om ar avea de facut \nC               F      G7\nPana ei sa-l considere om?\nCate mari pescarusii mai au de batut\nPan-ajung pe nisip pentru somn?\nCate bombe vor mai sfarteca vieti intregi\nPan'sa le interzicem pe veci?\n\n            F          G7         C       Am\nRefren : Raspunsul, prieteni, e vanare de vant\n            F          G7      C\n         Raspunsul e vanare de vant\n         Raspunsul, prieteni, e vanare de vant\n         Raspunsul e vanare de vant.\n\n\nCati ani poate-un munte in lume trai\nPana marea sa-l spele-ntr-o zi?\nSi cati ani si oamenii pot vietui\nPana liberi permis li-i a fi?\nDe cate ori omul vede un rau\nSi tace intorcand capul sau?\n\n\nRefren: ...\n\n\nDe cate ori omul in sus va privi\nPana cerul sa-l vada de-ajuns?\nCat de multe urechi necesare ii sunt\nCa s-auda al gurilor plans?\nCati mai au de murit ca s-aflam in sfarsit\nca oameni prea multi au pierit?\n\n\nRefren: ...\n\n\n\n*Nota: Cantec folk de referinta.\n\nSucces!",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 24,
        "name": "Country",
        "slug": "country",
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
      "G7",
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
    "id": 137,
    "title": "Viata la tara",
    "slug": "viata-la-tara-137",
    "content": "              \r\n  G\r\n| La, ra-ra-ru, la-p-ta,\r\n\r\n| La, ri-ra-ra-ra,\r\n  C\r\n| La, ri-li-lu-li-p-ti\r\n\r\n| La-la-ri-lu-la-la,\r\n  D\r\n| Lu, li-li-lu-li-p-ti,\r\n   \r\n| Lu-lu-lu-li-lu, \r\n                             G C G\r\n| Li-lu-lu, li-lu-lu, li-lu-lu !\r\n\r\nG    \r\nLocuinta mea de vara \r\nC\r\nE la tara ...\r\nD               G C G\r\nAcolo era sa mor \r\nG      \r\nDe urat si de-ntristare\r\nC\r\nBeat de soare\r\nD                 G C G              \r\nSi parlit ingrozitor!\r\n\r\n\r\nAcolo, cand n-are treaba, \r\nOrice baba\r\nEste medic comunal. (medic!)\r\nViata ce aci palpita\r\nE lipsita\r\nDe confort occidental.\r\n\r\nNu exista berarie, (au!)\r\nNici regie ...\r\nDoar un hot de carciumar (hot de carciumar! ha-ha!)\r\nCare are marfa proasta\r\nSi-o nevasta \r\nCe se tine c-un jandar'.\r\n\r\n| La, ra-ra-ru, la-p-ta,\r\n| La, ri-ra-ra-ra,\r\n| La, ri-li-lu-li-p-ti\r\n2* | La-la-ri-lu-la-la,\r\n| Lu, li-li-lu-li-p-ti,\r\n| Lu-lu-lu-li-lu, \r\n| Li-lu-lu, li-lu-lu, li-lu-lu !\r\n\r\nCand te duci pe drumul mare\r\nLa plimbare\r\nEste praf de nu te vezi: \r\nTrec, miscand domol din coada,\r\nSpre livada\r\nAle satului cirezi. (mmmmmmuu!)\r\n\r\nSi te poarta sub escorta\r\nO cohorta\r\nDe tantari subtiri la glas, (sss! tz-tz-tz-tz!)\r\nInzestrati la cap c-o scula\r\nMinuscula,\r\nCu pretentie de nas... (o-ho-hopa!)\r\n\r\n| La, ra-ra-ru, la-p-ta,\r\n| La, ri-ra-ra-ra,\r\n| La, ri-li-lu-li-p-ti\r\n2* | La-la-ri-lu-la-la,\r\n| Lu, li-li-lu-li-p-ti,\r\n| Lu-lu-lu-li-lu, \r\n| Li-lu-lu, li-lu-lu, li-lu-lu !\r\n\r\nCand se ia cate-o masura,\r\nLumea-njura\r\nPe agentul sanitar\r\nSi-l intreaba fara noima:\r\n\"CE-AI CU NOI, MA ?\r\nPENTRU CE SA DAM CU VAR ?\"\r\n\r\nAle satului mari fete\r\nFara ghete\r\nIes la garduri pe-nserat... (aaah!)\r\n(Am vazut aici-ntr-o noapte\r\nNiste fapte\r\nCare m-au scandalizat !)\r\n\r\n        A       \r\nDar in zori incep cocosii\r\nD\r\nPacatosii,\r\nE                   A D A\r\nCa sa faca iar scandal, (cucurigu!)\r\nA          \r\nSa te saturi de viata\r\nD\r\nSi dulceata\r\nE                 A D A\r\nTraiului patriarhal !\r\n\r\n\r\nD-aia zic eu, prin urmare,\r\nVorba mare:\r\nCa de-acuma, sa ma tai,\r\nNu-mi mai trebuie alta cura (nu!)\r\nIn natura\r\nSa ma duceti cu alai !\r\n\r\n| La, ra-ra-ru, la-p-ta,\r\n| La, ri-ra-ra-ra,\r\n| La, ri-li-lu-li-p-ti\r\n2* | La-la-ri-lu-la-la,\r\n| Lu, li-li-lu-li-p-ti,\r\n| Lu-lu-lu-li-lu, \r\n| Li-lu-lu, li-lu-lu, li-lu-lu !\r\n\r\nMearga pictorii la tara (da!)\r\nCa sa piara\r\nDe caldura si de praf ! (asa le trebuie!)\r\nMie dati-mi strazi pavate, (se-aude, primaria?)\r\nMaturate, (da!)\r\nDati-mi cinematograf ! (SI BINGO!)\r\n\r\nDati-mi, dati-mi strada-ngusta\r\nUnde gusta\r\nOmul viata mai din plin,\r\nCu trasuri, femei cochete (ee!)\r\nSi cu fete (EEE!)\r\nIncaltate cel putin ! (hei!)\r\n\r\n| La, ra-ra-ru, la-p-ta,\r\n| La, ri-ra-ra-ra,\r\n| La, ri-li-lu-li-p-ti\r\n2* | La-la-ri-lu-la-la,\r\n| Lu, li-li-lu-li-p-ti,\r\n| Lu-lu-lu-li-lu, \r\n| Li-lu-lu, li-lu-lu, lï-lu-lu !\r\n\r\n\r\nThis one is really easy ;););)    zdranga-zdranga :D:D:D",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "G",
      "C",
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
    "id": 138,
    "title": "Vinovatii fara vina",
    "slug": "vinovatii-fara-vina-138",
    "content": "D \r\nSunt curat la trup, curat la suflet,\r\n                             Em\r\nVreau sa-i inteleg si sa-i iubesc.\r\n                           D\r\nNu conteaza cat de lung am parul,\r\nA                           D\r\nImportant e cat de mult gandesc.\r\n\r\nSimt in trup pletosii daci, comati,\r\nFirea mea e saltul omenesc.\r\nNu conteaza cat de lung am parul,\r\nImportant e cat si cum gandesc.\r\n\r\nG           C    G\r\nLume, lume, sora lume,\r\nG           C    G\r\nLume, lume, sora lume,\r\nC               G      \r\nDe ce esti rea, rea de gura,\r\nD                     G\r\nDe ce ne privesti cu ura?\r\nC               G\r\nVinovatii fara vina\r\nD                  G\r\nCer sa se faca lumina.\r\n\r\nVrea sa-nalt castele de gandire,\r\nVreau sa fiu lasat sa simt cum cresc.\r\nNu conteaza cat de lung am parul,\r\nImportant e cat si cum gandesc.\r\n\r\nNu e loc de noi in lumea voastra,\r\nNu-s din noi acei ce ne muncesc\r\nSi tin cont de cat de lung am parul,\r\nNu de cum si cat de mult gandesc.\r\n\r\nLume, lume, sora lume,\r\nLume, lume, sora lume,\r\nDe ce esti rea, rea de gura,\r\nDe ce ne privesti cu ura?\r\nVinovatii fara vina\r\nCer sa se faca lumina.\r\n\r\nE    \r\nHei, voi, neatenti la soarta noastra\r\n                               F#m\r\nHei, voi, ce ne credeti pui de drac!\r\n                          E\r\nGandurile voastr-s si-ale noastre,\r\nB                     E\r\nGusturile insa nu ne plac.\r\n\r\n\r\nHei, voi, care-ati fost odata tineri,\r\nHei, voi, care stiti ce-i omenesc!\r\nNu conteaza cat de lung am parul,\r\nMai presus e cat si cum gandesc.\r\n\r\nLume, lume, sora lume,\r\nLume, lume, sora lume,\r\nDe ce esti rea, rea de gura,\r\nDe ce ne privesti cu ura?\r\nVinovatii fara vina\r\nCer sa se faca lumïna.\r\n\r\nACORDURILE SUNT SIMPLE, VEDETI VOI CUM VA DESCURCATI KU RITMUL :)",
    "author": {
      "id": 61,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 61,
    "categories": [
      {
        "id": 3,
        "name": "Folk",
        "slug": "folk",
        "description": ""
      }
    ],
    "chords": [
      "D",
      "Em",
      "A",
      "G",
      "C",
      "E",
      "F#m",
      "B"
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
    "song_count": 7
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
    "song_count": 2
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
    "song_count": 9
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
    "song_count": 3
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
  },
  {
    "id": 22,
    "name": "Trupa Şanţ",
    "slug": "trupa-sant",
    "song_count": 1
  },
  {
    "id": 23,
    "name": "Nae Berechet",
    "slug": "nae-berechet",
    "song_count": 1
  },
  {
    "id": 24,
    "name": "Cântece de munte",
    "slug": "cantece-de-munte",
    "song_count": 13
  },
  {
    "id": 25,
    "name": "Puiu Cazan",
    "slug": "puiu-cazan",
    "song_count": 1
  },
  {
    "id": 26,
    "name": "Karma",
    "slug": "karma",
    "song_count": 1
  },
  {
    "id": 27,
    "name": "Carmen Ciocolata",
    "slug": "carmen-ciocolata",
    "song_count": 1
  },
  {
    "id": 28,
    "name": "Vârf Carpatin",
    "slug": "varf-carpatin",
    "song_count": 1
  },
  {
    "id": 29,
    "name": "Mircea Rusu Band",
    "slug": "mircea-rusu-band",
    "song_count": 1
  },
  {
    "id": 30,
    "name": "Amurg",
    "slug": "amurg",
    "song_count": 1
  },
  {
    "id": 31,
    "name": "Magda Pușcaș",
    "slug": "magda-puscas",
    "song_count": 1
  },
  {
    "id": 32,
    "name": "Ursul Trubadur",
    "slug": "ursul-trubadur",
    "song_count": 1
  },
  {
    "id": 33,
    "name": "Roza Vânturilor",
    "slug": "roza-vanturilor",
    "song_count": 1
  },
  {
    "id": 34,
    "name": "Dida Drăgan",
    "slug": "dida-dragan",
    "song_count": 1
  },
  {
    "id": 35,
    "name": "Colinde",
    "slug": "colinde",
    "song_count": 6
  },
  {
    "id": 36,
    "name": "Mihai Constantinescu",
    "slug": "mihai-constantinescu",
    "song_count": 1
  },
  {
    "id": 37,
    "name": "Bulz Brotherz",
    "slug": "bulz-brotherz",
    "song_count": 1
  },
  {
    "id": 38,
    "name": "White Mahala",
    "slug": "white-mahala",
    "song_count": 1
  },
  {
    "id": 39,
    "name": "Mondial",
    "slug": "mondial",
    "song_count": 1
  },
  {
    "id": 40,
    "name": "Maria Tănase",
    "slug": "maria-tanase",
    "song_count": 1
  },
  {
    "id": 41,
    "name": "Maria Ciobanu",
    "slug": "maria-ciobanu",
    "song_count": 1
  },
  {
    "id": 42,
    "name": "Floarea Calotă",
    "slug": "floarea-calota",
    "song_count": 1
  },
  {
    "id": 43,
    "name": "Frații Petreuș",
    "slug": "fratii-petreus",
    "song_count": 1
  },
  {
    "id": 44,
    "name": "Ileana Sărăroiu",
    "slug": "ileana-sararoiu",
    "song_count": 1
  },
  {
    "id": 45,
    "name": "Traian Ilea",
    "slug": "traian-ilea",
    "song_count": 1
  },
  {
    "id": 46,
    "name": "Cristian Pățurcă",
    "slug": "cristian-paturca",
    "song_count": 1
  },
  {
    "id": 47,
    "name": "Bosquito",
    "slug": "bosquito",
    "song_count": 1
  },
  {
    "id": 48,
    "name": "Vunk",
    "slug": "vunk",
    "song_count": 1
  },
  {
    "id": 49,
    "name": "Vama",
    "slug": "vama",
    "song_count": 1
  },
  {
    "id": 50,
    "name": "Holograf",
    "slug": "holograf",
    "song_count": 1
  },
  {
    "id": 51,
    "name": "Vama Veche",
    "slug": "vama-veche",
    "song_count": 3
  },
  {
    "id": 52,
    "name": "Daniel Iancu",
    "slug": "daniel-iancu",
    "song_count": 1
  },
  {
    "id": 53,
    "name": "Cargo",
    "slug": "cargo",
    "song_count": 3
  },
  {
    "id": 54,
    "name": "Semnal M",
    "slug": "semnal-m",
    "song_count": 1
  },
  {
    "id": 55,
    "name": "Phoenix",
    "slug": "phoenix",
    "song_count": 6
  },
  {
    "id": 56,
    "name": "Iris",
    "slug": "iris",
    "song_count": 3
  },
  {
    "id": 57,
    "name": "Compact",
    "slug": "compact",
    "song_count": 1
  },
  {
    "id": 58,
    "name": "Alternosfera",
    "slug": "alternosfera",
    "song_count": 1
  },
  {
    "id": 59,
    "name": "Talisman",
    "slug": "talisman",
    "song_count": 1
  },
  {
    "id": 60,
    "name": "Zdob și Zdub",
    "slug": "zdob-si-zdub",
    "song_count": 1
  },
  {
    "id": 61,
    "name": "Pasărea Colibri",
    "slug": "pasarea-colibri",
    "song_count": 15
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
    "song_count": 7
  },
  {
    "id": 3,
    "name": "Folk",
    "slug": "folk",
    "description": "",
    "song_count": 33
  },
  {
    "id": 4,
    "name": "Satiră și umor",
    "slug": "satira-si-umor",
    "description": "",
    "song_count": 3
  },
  {
    "id": 5,
    "name": "Cântece de munte",
    "slug": "cantece-de-munte",
    "description": "",
    "song_count": 35
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
    "song_count": 3
  },
  {
    "id": 12,
    "name": "Cântece pentru copii",
    "slug": "cantece-pentru-copii",
    "description": "",
    "song_count": 2
  },
  {
    "id": 13,
    "name": "De iarnă",
    "slug": "de-iarna",
    "description": "",
    "song_count": 1
  },
  {
    "id": 14,
    "name": "Imnuri",
    "slug": "imnuri",
    "description": "",
    "song_count": 5
  },
  {
    "id": 15,
    "name": "Colinde",
    "slug": "colinde",
    "description": "",
    "song_count": 13
  },
  {
    "id": 16,
    "name": "Muzică ușoară",
    "slug": "muzica-usoara",
    "description": "",
    "song_count": 2
  },
  {
    "id": 17,
    "name": "Etno / Folclor",
    "slug": "etno-folclor",
    "description": "",
    "song_count": 9
  },
  {
    "id": 18,
    "name": "Rock",
    "slug": "rock",
    "description": "",
    "song_count": 18
  },
  {
    "id": 19,
    "name": "Experimental",
    "slug": "experimental",
    "description": "",
    "song_count": 1
  },
  {
    "id": 20,
    "name": "Eminescu",
    "slug": "eminescu",
    "description": "",
    "song_count": 1
  },
  {
    "id": 21,
    "name": "Latino",
    "slug": "latino",
    "description": "",
    "song_count": 1
  },
  {
    "id": 22,
    "name": "Pop-Rock",
    "slug": "pop-rock",
    "description": "",
    "song_count": 6
  },
  {
    "id": 23,
    "name": "Din Republica Moldova",
    "slug": "din-republica-moldova",
    "description": "",
    "song_count": 1
  },
  {
    "id": 24,
    "name": "Country",
    "slug": "country",
    "description": "",
    "song_count": 1
  }
];
