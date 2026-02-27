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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
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
    "id": 6,
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
    "id": 7,
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
    "id": 8,
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
    "id": 9,
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
    "id": 10,
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
    "id": 11,
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
    "id": 12,
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
    "id": 13,
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
    "id": 14,
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
    "id": 15,
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
    "id": 16,
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
    "id": 17,
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
    "id": 18,
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
    "id": 19,
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
    "id": 20,
    "name": "F7",
    "type": "dominant 7th",
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
        "fret": 1,
        "string": 3,
        "finger": 1
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
    "id": 21,
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
    "id": 22,
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
    "id": 23,
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
    "id": 24,
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
    "id": 25,
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
    "id": 26,
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
    "id": 27,
    "name": "Ab",
    "type": "major",
    "root_note": "Ab",
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
    "id": 29,
    "name": "Asus2",
    "type": "sus2",
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
      }
    ],
    "open_strings": [
      2,
      5,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 30,
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
    "id": 31,
    "name": "Dsus2",
    "type": "sus2",
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
      }
    ],
    "open_strings": [
      3,
      6
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 32,
    "name": "Dsus4",
    "type": "sus4",
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
        "finger": 2
      },
      {
        "fret": 3,
        "string": 6,
        "finger": 3
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
    "id": 33,
    "name": "Esus4",
    "type": "sus4",
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
        "fret": 2,
        "string": 4,
        "finger": 4
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
    "id": 34,
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
    "id": 35,
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
    "id": 36,
    "name": "Em7",
    "type": "minor 7th",
    "root_note": "E",
    "positions": [
      {
        "fret": 2,
        "string": 2,
        "finger": 1
      }
    ],
    "open_strings": [
      1,
      3,
      4,
      5,
      6
    ],
    "muted_strings": [],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 37,
    "name": "Cmaj7",
    "type": "major 7th",
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
      }
    ],
    "open_strings": [
      4,
      5,
      6
    ],
    "muted_strings": [
      1
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 38,
    "name": "Fmaj7",
    "type": "major 7th",
    "root_note": "F",
    "positions": [
      {
        "fret": 3,
        "string": 3,
        "finger": 3
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
      }
    ],
    "open_strings": [
      6
    ],
    "muted_strings": [
      1,
      2
    ],
    "barre": null,
    "start_fret": 1
  },
  {
    "id": 39,
    "name": "Gmaj7",
    "type": "major 7th",
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
        "fret": 2,
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
  }
];

export const songsData: Song[] = [
  {
    "id": 1,
    "title": "Om pe munte",
    "slug": "om-pe-munte-1",
    "content": "G                                  D\n1.Rucsacul, frontala, bocancii și-un cort\nC                                   G\nChitara și-un cântec la foc să te-ncânte\nC                                         G\nTe rog să le-ncerci să nu rămâi un viu mort, te rog\nC                 D                   G\nTe rog să devii OM PE MUNTE\n\nAcolo trăiești tot ce-ai putea să visezi\nAcolo iubirea-ți este hrană și punte\nSpre lumea mereu din care să evadezi, te rog\nTe rog să rămâi OM PE MUNTE\n\nRefren:\nC                           G\nZâmbește puțin, iubește senin\nD                               G\nFără niciun suspin și trăiește din plin\nC                               G\nFă drumul mai lin și alintă-l destin\nD                          G\nVorbește puțin și trăiește din plin\n\n2. Adună-ți în jur doar oameni ce vor păstra\nPetale-argintii de fericire mărunte\nȘi cântă cu ei când drumul te va chema, te rog\nTe rog, fii OM PE MUNTE\n\nȘi lasă-l așa cum ți-ai dori să-l găsești\nFără-ntrebări fără prea multe-amănunte\nÎnvață să-l urci, învață să-l prețuiești, te rog\nTe rog, fii OM PE MUNTE",
    "author": {
      "id": 1,
      "name": "CALEnDAR",
      "slug": "calendar"
    },
    "author_id": 1,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "G",
      "D",
      "C"
    ],
    "strumming": [{"pattern":["D","-","D","U","-","U","D","U"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","x","U","-","U","D","x","U"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 2,
    "title": "Ea mi-a dat bocancii",
    "slug": "ea-mi-a-dat-bocancii-2",
    "content": "G              C           G\nEa mi-a dat bocancii,\n                     D\nEa mi-a dat rucsacul,\nG              C           G\nEa m-a învățat să calc pe munte,\n              D            G\nEa mi-a arătat cum pot să-mi iau zborul\n\nRefren:\nC                G\nȘi de atunci eu merg,\nD                G\nMerg prin munți cu ea,\nC                G\nPasul ni-e ușor,\nD                G\nDrumul e poveste\n\n2. Ea mi-a dat curaj,\nEa mi-a dat putere,\nEa m-a învățat că viața-i frumoasă,\nCând ești liber sus pe creste",
    "author": {
      "id": 1,
      "name": "CALEnDAR",
      "slug": "calendar"
    },
    "author_id": 1,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "G",
      "C",
      "D"
    ],
    "strumming": [{"pattern":["D","-","U","-","D","U","-","U"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","-","-","U","-","-","D","-"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 3,
    "title": "Cântec între noi",
    "slug": "cantec-intre-noi-3",
    "content": "Em                        C\nUrcăm pe munte, pas cu pas,\nG                          D\nPe poteci de piatră, prin abur și ceață,\nEm                        C\nNe-așteaptă sus un loc frumos,\nG                          D\nUn colț de cer, un cântec printre stele\n\nRefren:\nC                G\nHai să cântăm,\nD                Em\nUn cântec între noi,\nC                G\nSus pe munte,\nD                Em\nUnde visul e mereu viu\n\n2. Focul arde-n noapte-adânc,\nChitara sună, și munții ascultă,\nNe-adunăm în cerc, cântând,\nUn cântec vechi ce nu se mai uită",
    "author": {
      "id": 1,
      "name": "CALEnDAR",
      "slug": "calendar"
    },
    "author_id": 1,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":5,"name":"Tradiționale","slug":"traditionale","description":""}],
    "chords": [
      "Em",
      "C",
      "G",
      "D"
    ],
    "strumming": [{"pattern":["D","D","U","-","U","D","U","-"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 4,
    "title": "Din dragoste de oameni și de munte",
    "slug": "din-dragoste-de-oameni-si-de-munte-4",
    "content": "Am                         G\nDin dragoste de oameni și de munte,\nF                          C\nAm pornit pe drumuri lungi,\nAm                         G\nCu rucsacul plin de vise multe,\nF                          E\nȘi cu pasul tot mai ușor\n\nRefren:\nF                    C\nSalvamont, Salvamont,\nG                    Am\nEști mereu acolo sus,\nF                    C\nCând natura ne cheamă,\nG                    Am\nTu ești cel dintâi ajuns\n\n2. Pe creste bate vântul rece,\nDar inima ne-ncălzește drumul,\nCu brațe deschise ne primesc\nȘi stâncile și cerul",
    "author": {
      "id": 1,
      "name": "CALEnDAR",
      "slug": "calendar"
    },
    "author_id": 1,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "Am",
      "G",
      "F",
      "C",
      "E"
    ],
    "strumming": [{"pattern":["D","-","D","U","-","U","D","U"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","x","U","-","U","D","x","U"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 5,
    "title": "Libertate-n vârf de munți",
    "slug": "libertate-n-varf-de-munti-5",
    "content": "Em                    Am\nSus pe munte, vântul bate,\nC                     G\nȘi mă cheamă depărtările,\nEm                    Am\nVreau să urc pe toate crestele,\nC                     D\nSă găsesc libertatea\n\nRefren:\nG                     C\nLibertate-n vârf de munți,\nD                     Em\nUnde cerul se deschide,\nG                     C\nLibertate pentru toți,\nD                     Em\nCei ce-au curajul să viseze\n\n2. Pasul greu pe piatra rece,\nDar sufletul e plin de pace,\nCând ajungi pe creastă sus,\nTotul capătă sens",
    "author": {
      "id": 2,
      "name": "Tiberiu Andrei",
      "slug": "tiberiu-andrei"
    },
    "author_id": 2,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "Em",
      "Am",
      "C",
      "G",
      "D"
    ],
    "strumming": [{"pattern":["D","-","U","-","D","U","-","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 6,
    "title": "Schiorița",
    "slug": "schiorita-6",
    "content": "D                     A\nPe pârtia albă, cu schiurile-n picioare,\nG                     D\nCobor ca o pasăre-n zbor,\nD                     A\nCu vântul în față și soarele-n spate,\nG                     A          D\nMă simt cea mai fericită sub cer\n\nRefren:\nG                     D\nSchiorița, schiorița,\nA                     D\nZboară pe zăpadă,\nG                     D\nSchiorița, schiorița,\nA                     D\nIarna-i în paradă",
    "author": {
      "id": 3,
      "name": "Carmen Ciocolata",
      "slug": "carmen-ciocolata"
    },
    "author_id": 3,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""},{"id":5,"name":"Tradiționale","slug":"traditionale","description":""}],
    "chords": [
      "D",
      "A",
      "G"
    ],
    "strumming": [{"pattern":["D","-","U","-","U","-"],"timeSignature":"3/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 7,
    "title": "Popasul Țiganilor",
    "slug": "popasul-tiganilor-7",
    "content": "Am                    Dm\nLa popasul țiganilor, sus pe munte,\nAm                    E\nFocul arde vesel, stelele privesc,\nDm                    Am\nChitara cântă blând, cu melodii frunte,\nE                     Am\nȘi drumeții toți se odihnesc\n\nRefren:\nDm                    Am\nHai la foc, hai la cântec,\nE                     Am\nNoaptea-i lungă, drumul greu,\nDm                    Am\nDar pe munte-ntre prieteni,\nE                     Am\nTotul pare un muzeu",
    "author": {
      "id": 4,
      "name": "Vârf Carpatin",
      "slug": "varf-carpatin"
    },
    "author_id": 4,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "Am",
      "Dm",
      "E"
    ],
    "strumming": [{"pattern":["D","D","U","-","U","D","U","-"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","x","U","-","U","D","x","U"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 8,
    "title": "Balada drumetului obosit",
    "slug": "balada-drumetului-obosit-8",
    "content": "Am                         Em\nDrumețul obosit pe munte-a ajuns,\nF                          C\nCu picioarele grele și sufletul plin,\nAm                         Em\nDe amintiri și vise ce nu s-au mai spus,\nF                     G        Am\nDe doruri ascunse în colțul de vin\n\nRefren:\nC                      G\nHai drumeț, mai urcă-o dată,\nAm                     F\nCă pe creastă te-așteaptă zarea,\nC                      G\nHai drumeț, nu te lăsa,\nAm            F        Am\nCă merită-ntreaga cărarea",
    "author": {
      "id": 5,
      "name": "Albatros (Galați)",
      "slug": "albatros-galati"
    },
    "author_id": 5,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "Am",
      "Em",
      "F",
      "C",
      "G"
    ],
    "strumming": [{"pattern":["D","-","D","U","-","U","D","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 9,
    "title": "Am iubit (ciupitură)",
    "slug": "am-iubit-ciupitura-9",
    "content": "G                     Em\nAm iubit un munte-nalt,\nC                     D\nAm iubit o vale-adâncă,\nG                     Em\nAm iubit un cer senin,\nC                     D\nȘi-o pădure deasă, lungă\n\nRefren:\nC                     G\nCiupitură, ciupitură,\nD                     Em\nDe la viață, de la drum,\nC                     G\nCiupitură, ciupitură,\nD                     G\nNu mai vreau să stau pe loc",
    "author": {
      "id": 6,
      "name": "Plus Noi",
      "slug": "plus-noi"
    },
    "author_id": 6,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":5,"name":"Tradiționale","slug":"traditionale","description":""}],
    "chords": [
      "G",
      "Em",
      "C",
      "D"
    ],
    "strumming": [{"pattern":["D","-","U","-","D","U","-","U"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","-","-","U","-","-","D","-"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 10,
    "title": "Andrii Popa",
    "slug": "andrii-popa-10",
    "content": "Am                    Dm\nPrin codrul des, pe-un drum de munte,\nAm                    E\nAndrii Popa călărea,\nDm                    Am\nCu paloșul la brâu și-n frunte\nE                     Am\nSteaua dreptății strălucea\n\nRefren:\nDm                    Am\nAndrii Popa, haiduc viteaz,\nE                     Am\nDin Carpați coborâtor,\nDm                    Am\nLumea-ntreagă te știa,\nE                     Am\nCa pe-un mare apărător\n\n2. Cine fură de la săraci,\nAndrii Popa nu-i ierta,\nEl le dădea înapoi cu drag,\nTot ce boierii le lua",
    "author": {
      "id": 7,
      "name": "Pasărea Colibri",
      "slug": "pasarea-colibri"
    },
    "author_id": 7,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "Am",
      "Dm",
      "E"
    ],
    "strumming": [{"pattern":["D","-","-","U","D","U"],"timeSignature":"3/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 11,
    "title": "Muntele cu dor",
    "slug": "muntele-cu-dor-11",
    "content": "Em                    Am\nMuntele cu dor mă cheamă,\nD                     Em\nPe poteci de suflet lin,\nAm                    Em\nVreau s-ajung pe creastă-n zare,\nB7                    Em\nUnde cerul e senin\n\nRefren:\nAm                    Em\nMunte, munte, munte sfânt,\nD                     Em\nTe-am purtat mereu în gând,\nAm                    Em\nCu tine-am crescut pe lume,\nB7                    Em\nTu mi-ai fost cel mai bun prieten",
    "author": {
      "id": 8,
      "name": "Phoenix",
      "slug": "phoenix"
    },
    "author_id": 8,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "Em",
      "Am",
      "D",
      "B7"
    ],
    "strumming": [{"pattern":["D","-","D","U","-","U","D","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 12,
    "title": "Floare de colț",
    "slug": "floare-de-colt-12",
    "content": "Am                    Dm\nSus pe munte, floare de colț,\nG                     C\nCrești în stâncă, frumoasă și rară,\nAm                    Dm\nNimeni nu te poate atinge,\nE                     Am\nEști regina munților, floare\n\nRefren:\nF                     C\nFloare de colț, floare de vis,\nG                     Am\nNăscută pe creste-nalte,\nF                     C\nFloare de colț, dar de suflet,\nG                     Am\nÎn inima mea rămâi mereu",
    "author": {
      "id": 9,
      "name": "Compact",
      "slug": "compact"
    },
    "author_id": 9,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""},{"id":5,"name":"Tradiționale","slug":"traditionale","description":""}],
    "chords": [
      "Am",
      "Dm",
      "G",
      "C",
      "E",
      "F"
    ],
    "strumming": [{"pattern":["D","D","U","-","U","D","U","-"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","x","U","-","U","D","x","U"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 13,
    "title": "Cântec de munte",
    "slug": "cantec-de-munte-13",
    "content": "G                     C\nMerg pe poteci de munte-n sus,\nD                     G\nCu chitara pe umăr,\nC                     G\nȘi cânt un cântec nespus,\nD                     G\nDe fericire și dor\n\nRefren:\nC                     G\nCântec de munte, cântec de dor,\nD                     Em\nMelodie pe creste,\nC                     G\nCântec de munte, cântec de joc,\nD                     G\nCu chitara-mi poveste",
    "author": {
      "id": 10,
      "name": "Ducu Bertzi",
      "slug": "ducu-bertzi"
    },
    "author_id": 10,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "G",
      "C",
      "D",
      "Em"
    ],
    "strumming": [{"pattern":["D","-","U","-","D","U","-","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 14,
    "title": "Prin Carpați",
    "slug": "prin-carpati-14",
    "content": "Em                    Am\nPrin Carpați, pe drumuri vechi,\nC                     G\nUnde codrul este strajă,\nEm                    Am\nPasul meu nu-i niciodată greu,\nC                     D          Em\nCând natura-i priveliștea mea dragă\n\nRefren:\nC                     G\nPrin Carpați, prin Carpați,\nD                     Em\nMereu acasă mă simt eu,\nC                     G\nPrin Carpați, prin Carpați,\nD                     Em\nSub cerul munților mereu",
    "author": {
      "id": 11,
      "name": "Semnal M",
      "slug": "semnal-m"
    },
    "author_id": 11,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "Em",
      "Am",
      "C",
      "G",
      "D"
    ],
    "strumming": [{"pattern":["D","-","D","U","-","U","D","U"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","-","-","U","-","-","D","-"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 15,
    "title": "Amintire cu haiduci",
    "slug": "amintire-cu-haiduci-15",
    "content": "Am                    Dm\nSus pe munte la izvor,\nG                     C\nHaiducii se adunau,\nAm                    Dm\nCu paloșul și cu dor,\nE                     Am\nCântece de dor cântau\n\nAm                    Dm\nEra timpul de demult,\nG                     C\nCând prin codri răsuna,\nAm                    Dm\nUn cântec vechi de munte,\nE                     Am\nCe inima-ți încălzea\n\nRefren:\nF                     C\nHai la munte, hai la joc,\nG                     Am\nHai la hora haiducească,\nF                     C\nHai la foc, hai la noroc,\nG                     Am\nViața toată să-ți zâmbească",
    "author": {
      "id": 12,
      "name": "Valeriu Sterian",
      "slug": "valeriu-sterian"
    },
    "author_id": 12,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":5,"name":"Tradiționale","slug":"traditionale","description":""}],
    "chords": [
      "Am",
      "Dm",
      "G",
      "C",
      "E",
      "F"
    ],
    "strumming": [{"pattern":["D","-","U","-","U","-"],"timeSignature":"3/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 16,
    "title": "Munții nostri",
    "slug": "muntii-nostri-16",
    "content": "Em                    Am\nMunții noștri-s frumuseți,\nD                     G\nCu păduri de brazi stufoși,\nEm                    Am\nIzvoarele curg cristalin,\nD                     Em\nPrintre stânci și flori de colț\n\nRefren:\nAm                    Em\nMunții noștri, munții mari,\nD                     Em\nCarpații ne cheamă,\nAm                    Em\nMunții noștri, vechi gardieni,\nD                     Em\nAi sufletului de mamă\n\n2. Pe poteci de munte vechi,\nPașii noștri răsunau,\nEcoul din văi adânci,\nCântece frumoase dau",
    "author": {
      "id": 13,
      "name": "Zdob și Zdub",
      "slug": "zdob-si-zdub"
    },
    "author_id": 13,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "Em",
      "Am",
      "D",
      "G"
    ],
    "strumming": [{"pattern":["D","-","D","-","D","U","D","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 17,
    "title": "Drumuri de munte",
    "slug": "drumuri-de-munte-17",
    "content": "Am                         G\nDrumuri de munte, prin ceață și vânt,\nF                          C\nPas cu pas urcăm în sus,\nAm                         G\nCu visuri în minte și dor în cuvânt,\nF                          E        Am\nDrumul nostru nu-i apus\n\nRefren:\nF                     C\nDrumuri de munte, drumuri de vis,\nG                     Am\nCărări ce duc spre cer,\nF                     C\nDrumuri de munte, nu le-am deschis,\nG                     Am\nLe-am luat doar cu un mister\n\n2. Asfințitul arde pe creste de aur,\nȘi noaptea coboară blând,\nLa foc de tabără, sub cerul albastru,\nCântăm un cântec vechi pe rând",
    "author": {
      "id": 14,
      "name": "Cargo",
      "slug": "cargo"
    },
    "author_id": 14,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "Am",
      "G",
      "F",
      "C",
      "E"
    ],
    "strumming": [{"pattern":["D","-","D","U","-","U","D","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 18,
    "title": "Munte, codru și izvor",
    "slug": "munte-codru-si-izvor-18",
    "content": "G                     D\nMunte, codru și izvor,\nEm                    C\nTrei prieteni de demult,\nG                     D\nMă primesc cu mult amor,\nEm                    C\nCând mă-ntorc la ei pe munte\n\nRefren:\nC                     G\nHai la munte, hai pe creste,\nD                     Em\nUnde sufletul se-ntoarce,\nC                     G\nHai la munte, sunt poveste,\nD                     G\nDrumuri vechi și cărări proaste\n\n2. Focul arde la refugiu,\nStelele sunt mari și clare,\nȘi un cântec vechi de demult,\nSună prin văi și prin zări late",
    "author": {
      "id": 15,
      "name": "Mircea Vintilă",
      "slug": "mircea-vintila"
    },
    "author_id": 15,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""},{"id":5,"name":"Tradiționale","slug":"traditionale","description":""}],
    "chords": [
      "G",
      "D",
      "Em",
      "C"
    ],
    "strumming": [{"pattern":["D","-","U","-","D","U","-","U"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","x","U","-","U","D","x","U"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 19,
    "title": "Noapte pe munte",
    "slug": "noapte-pe-munte-19",
    "content": "Am                    Em\nNoaptea coboară pe munte,\nF                     C\nStelele ard în văzduh,\nAm                    Em\nFocul pâlpâie și-mi spune,\nF                     G        Am\nPovești de demult, fără glas\n\nRefren:\nF                     C\nNoapte pe munte, noapte de vis,\nG                     Am\nCu luna plină-n zenit,\nF                     C\nNoapte pe munte, timp nescris,\nG                     Am\nUnde sufletul e fericit\n\n2. Codrul foșnește ușor,\nȘi un buhoc se aude-n depărtare,\nLupul urlă la senin,\nȘi eu cânt sub stele clare",
    "author": {
      "id": 16,
      "name": "Roza Vânturilor",
      "slug": "roza-vanturilor"
    },
    "author_id": 16,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "Am",
      "Em",
      "F",
      "C",
      "G"
    ],
    "strumming": [{"pattern":["D","D","U","-","U","D","U","-"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 20,
    "title": "Sus pe culmea muntelui",
    "slug": "sus-pe-culmea-muntelui-20",
    "content": "G                     C\nSus pe culmea muntelui,\nD                     G\nUnde aerul e curat,\nC                     G\nVăd pământul de departe,\nD                     G\nȘi mă simt eliberat\n\nRefren:\nEm                    C\nSus pe culme, sus pe culme,\nG                     D\nLumea pare mică jos,\nEm                    C\nSus pe culme, sus pe culme,\nG                     D          G\nTotul este grandios\n\n2. Nori de aur trec pe cer,\nVântul cântă melodii,\nSus pe munte mă simt bine,\nPrintre brazi și stânci pustii",
    "author": {
      "id": 17,
      "name": "Bosquito",
      "slug": "bosquito"
    },
    "author_id": 17,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "G",
      "C",
      "D",
      "Em"
    ],
    "strumming": [{"pattern":["D","-","-","U","-","U","D","-"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 21,
    "title": "Trec tiganii pe la munte",
    "slug": "trec-tiganii-pe-la-munte-21",
    "content": "Am                    Dm\nTrec țiganii pe la munte,\nE                     Am\nCu căruțe și cu cai,\nDm                    Am\nMuzica lor sună-n frunte,\nE                     Am\nParcă-i rai, parcă-i rai\n\nRefren:\nDm                    Am\nHai, hai, hai la drum,\nE                     Am\nMuntele ne cheamă,\nDm                    Am\nHai, hai, hai pe drum,\nE                     Am\nLibertatea-i mama\n\n2. Focul arde lângă pădure,\nCopiii dansează-n cerc,\nBătrânii povestesc cu dor,\nDe munți, de codri și de cer",
    "author": {
      "id": 18,
      "name": "Șatra",
      "slug": "satra"
    },
    "author_id": 18,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":5,"name":"Tradiționale","slug":"traditionale","description":""}],
    "chords": [
      "Am",
      "Dm",
      "E"
    ],
    "strumming": [{"pattern":["D","-","D","U","-","U","D","U"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","-","-","U","-","-","D","-"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 22,
    "title": "Acasă pe munte",
    "slug": "acasa-pe-munte-22",
    "content": "G                     D\nAcasă pe munte, acolo mă simt bine,\nEm                    C\nUnde aerul e curat și cerul e albastru,\nG                     D\nAcasă pe munte, totul e pentru mine,\nEm                    C          G\nUn loc de vis, un colț de rai frumos\n\nRefren:\nC                     G\nAcasă, acasă, pe munte-s acasă,\nD                     Em\nCu brazi înalți și izvoare reci,\nC                     G\nAcasă, acasă, inima-mi e trează,\nD                     G\nCând munții mă primesc cu brațe moi și leci",
    "author": {
      "id": 19,
      "name": "Smiley",
      "slug": "smiley"
    },
    "author_id": 19,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "G",
      "D",
      "Em",
      "C"
    ],
    "strumming": [{"pattern":["D","-","U","-","D","U","-","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 23,
    "title": "Crestele munților",
    "slug": "crestele-muntilor-23",
    "content": "Am                    F\nPe crestele munților, sus,\nC                     G\nUnde vulturii zboară liberi,\nAm                    F\nAm ajuns și eu, nu mi-e greu,\nC                     E        Am\nCând natura mă-ntâmpină cu aripi\n\nRefren:\nF                     C\nCreste de munte, creste de vis,\nG                     Am\nUnde sufletul se-nalță,\nF                     C\nCreste de munte, paradis,\nG                     Am\nCea mai frumoasă fața\n\n2. Ceața se ridică-ncet,\nSoarele apare-n zare,\nȘi pe creste aurii,\nMunții ard în dimineață mare",
    "author": {
      "id": 20,
      "name": "Holograf",
      "slug": "holograf"
    },
    "author_id": 20,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "Am",
      "F",
      "C",
      "G",
      "E"
    ],
    "strumming": [{"pattern":["D","-","U","-","U","-"],"timeSignature":"3/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 24,
    "title": "Potecile munților",
    "slug": "potecile-muntilor-24",
    "content": "Em                    C\nPe potecile munților merg,\nG                     D\nCu pașii grei și sufletul ușor,\nEm                    C\nVântul mă poartă ca un cerb,\nG                     D          Em\nPrin păduri de brad și de mister\n\nRefren:\nC                     G\nPotecile munților, mereu acasă,\nD                     Em\nUnde natura e regină,\nC                     G\nPotecile munților, viața-i frumoasă,\nD                     Em\nCu fiecare pas, o nouă mină",
    "author": {
      "id": 21,
      "name": "Voltaj",
      "slug": "voltaj"
    },
    "author_id": 21,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""},{"id":5,"name":"Tradiționale","slug":"traditionale","description":""}],
    "chords": [
      "Em",
      "C",
      "G",
      "D"
    ],
    "strumming": [{"pattern":["D","-","D","-","D","U","D","U"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","x","U","-","U","D","x","U"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 25,
    "title": "Brazi și stele",
    "slug": "brazi-si-stele-25",
    "content": "G                     Em\nBrazi și stele pe cer,\nC                     D\nNoaptea-i lungă pe munte,\nG                     Em\nFocul arde și eu sper,\nC                     D          G\nCă ne-om întâlni-n curând pe frunte\n\nRefren:\nC                     G\nBrazi și stele, brazi și vise,\nD                     Em\nSus pe munte, lângă cer,\nC                     G\nBrazi și stele nescrise,\nD                     G\nUn cântec vechi de ieri\n\n2. Codrul doarme sub zăpadă,\nIar noi cântăm la foc,\nCu chitara ne-ntoarce-n grădina,\nDe vise, de munte și de joc",
    "author": {
      "id": 22,
      "name": "Direcția 5",
      "slug": "directia-5"
    },
    "author_id": 22,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "G",
      "Em",
      "C",
      "D"
    ],
    "strumming": [{"pattern":["D","-","D","U","-","U","D","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 26,
    "title": "Vulturul din Carpați",
    "slug": "vulturul-din-carpati-26",
    "content": "Am                    Em\nVulturul din Carpați zboară sus,\nF                     C\nPeste vârfuri și peste văi,\nAm                    Em\nAripile-i bat în vântul aspru,\nF                     E        Am\nRege al munților de totdeauna\n\nRefren:\nF                     Am\nVulture, vulture, regele cerului,\nE                     Am\nZboară liber, zboară sus,\nF                     Am\nVulture, vulture, stăpânul vântului,\nE                     Am\nPe Carpați ai fost și vei fi spus",
    "author": {
      "id": 23,
      "name": "Iris",
      "slug": "iris"
    },
    "author_id": 23,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "Am",
      "Em",
      "F",
      "C",
      "E"
    ],
    "strumming": [{"pattern":["D","-","U","-","D","U","-","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 27,
    "title": "Dimineață pe munte",
    "slug": "dimineata-pe-munte-27",
    "content": "D                     A\nDimineață pe munte, totul e nou,\nG                     D\nRoua strălucește pe frunze,\nD                     A\nAerul rece-mi umple plămânul mereu,\nG                     A          D\nȘi natura mă-ntâmpină cu mii de minune\n\nRefren:\nG                     D\nDimineață pe munte, zi nouă,\nA                     D\nCu soarele-n zare senin,\nG                     D\nDimineață pe munte, viața-i o rouă,\nA                     D\nCe curge pe creste divin",
    "author": {
      "id": 24,
      "name": "Mircea Baniciu",
      "slug": "mircea-baniciu"
    },
    "author_id": 24,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":5,"name":"Tradiționale","slug":"traditionale","description":""}],
    "chords": [
      "D",
      "A",
      "G"
    ],
    "strumming": [{"pattern":["D","D","U","-","U","D","U","-"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","-","-","U","-","-","D","-"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 28,
    "title": "Stânci și brazi",
    "slug": "stanci-si-brazi-28",
    "content": "Em                    Am\nStânci și brazi pe drumul meu,\nC                     D\nMunții mă primesc cu brațe deschise,\nEm                    Am\nPasul greu, dar sufletul ușor,\nC                     D          Em\nPe poteci de munte, cu vise nescrise\n\nRefren:\nC                     G\nStânci și brazi, munți și văi,\nD                     Em\nCarpații sunt casa mea,\nC                     G\nStânci și brazi, vise de rai,\nD                     Em\nSus pe munte, libertatea mea",
    "author": {
      "id": 25,
      "name": "Vita de Vie",
      "slug": "vita-de-vie"
    },
    "author_id": 25,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "Em",
      "Am",
      "C",
      "D",
      "G"
    ],
    "strumming": [{"pattern":["D","-","D","U","-","U","D","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 29,
    "title": "Ecou de munte",
    "slug": "ecou-de-munte-29",
    "content": "Am                    Em\nEcoul se-ntoarce de pe creste,\nF                     G\nȘi mă cheamă înapoi,\nAm                    Em\nSus pe munte, unde totul crește,\nF                     G        Am\nLiber, fără niciun poi\n\nRefren:\nF                     C\nEcou de munte, ecou de glas,\nG                     Am\nCe se pierde-n depărtări,\nF                     C\nEcou de munte, ecou de pas,\nG                     Am\nPe potecile din zări",
    "author": {
      "id": 26,
      "name": "Celelalte Cuvinte",
      "slug": "celelalte-cuvinte"
    },
    "author_id": 26,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "Am",
      "Em",
      "F",
      "G",
      "C"
    ],
    "strumming": [{"pattern":["D","-","-","U","D","U"],"timeSignature":"3/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 30,
    "title": "Refugiu pe munte",
    "slug": "refugiu-pe-munte-30",
    "content": "G                     D\nRefugiu pe munte, departe de tot,\nEm                    C\nUnde grijile nu mai ajung,\nG                     D\nAici sunt eu, cu chitara-mi și-un foc,\nEm                    C          G\nȘi un cântec ce nu se mai stinge-n lung\n\nRefren:\nC                     G\nRefugiu, refugiu pe munte,\nD                     Em\nUnde lumea stă pe loc,\nC                     G\nRefugiu, refugiu pe frunte,\nD                     G\nDoar cu cerul și cu foc",
    "author": {
      "id": 27,
      "name": "Vama Veche",
      "slug": "vama-veche"
    },
    "author_id": 27,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""},{"id":5,"name":"Tradiționale","slug":"traditionale","description":""}],
    "chords": [
      "G",
      "D",
      "Em",
      "C"
    ],
    "strumming": [{"pattern":["D","-","-","U","-","U","D","-"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  },
  {
    "id": 31,
    "title": "Capra neagră",
    "slug": "capra-neagra-31",
    "content": "Am                    Dm\nCapra neagră pe creste stă,\nAm                    E\nȘi privește lumea de sus,\nDm                    Am\nVântul bate, dar ea nu pleacă,\nE                     Am\nE regină pe munte nespus\n\nRefren:\nDm                    Am\nCapra neagră, capra mea,\nE                     Am\nSus pe stâncile-nalte,\nDm                    Am\nCapra neagră, viața ta,\nE                     Am\nE mai frumoasă decât toate",
    "author": {
      "id": 28,
      "name": "Ada Milea",
      "slug": "ada-milea"
    },
    "author_id": 28,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""}],
    "chords": [
      "Am",
      "Dm",
      "E"
    ],
    "strumming": [{"pattern":["D","-","D","U","-","U","D","U"],"timeSignature":"4/4","name":"Bază"},{"pattern":["D","x","U","-","U","D","x","U"],"timeSignature":"4/4","name":"Variație"}],
    "views": 0
  },
  {
    "id": 32,
    "title": "Viața de vagabond pe munte",
    "slug": "viata-de-vagabond-pe-munte-32",
    "content": "G                     C\nViața de vagabond pe munte-i frumoasă,\nD                     G\nCu cerul deasupra și pământul sub pas,\nC                     G\nCu chitara-n brațe și cu inima trează,\nD                     G\nMerg pe drumul meu, fără niciun compas\n\nRefren:\nC                     G\nVagabond pe munte, vagabond pe drum,\nD                     Em\nLibertatea-i tot ce am,\nC                     G\nVagabond pe munte, nu știu de unde-s pe lume,\nD                     G\nDar pe munte sunt acasă, și eu cam",
    "author": {
      "id": 29,
      "name": "Ursul Trubadur",
      "slug": "ursul-trubadur"
    },
    "author_id": 29,
    "categories": [{"id":1,"name":"Cântece de munte","slug":"cantece-de-munte","description":""},{"id":2,"name":"Folk","slug":"folk","description":""}],
    "chords": [
      "G",
      "C",
      "D",
      "Em"
    ],
    "strumming": [{"pattern":["D","-","U","-","D","U","-","U"],"timeSignature":"4/4","name":"Bază"}],
    "views": 0
  }
];

export const authorsData: Author[] = [
  {
    "id": 28,
    "name": "Ada Milea",
    "slug": "ada-milea",
    "song_count": 1
  },
  {
    "id": 5,
    "name": "Albatros (Galați)",
    "slug": "albatros-galati",
    "song_count": 1
  },
  {
    "id": 17,
    "name": "Bosquito",
    "slug": "bosquito",
    "song_count": 1
  },
  {
    "id": 1,
    "name": "CALEnDAR",
    "slug": "calendar",
    "song_count": 4
  },
  {
    "id": 14,
    "name": "Cargo",
    "slug": "cargo",
    "song_count": 1
  },
  {
    "id": 3,
    "name": "Carmen Ciocolata",
    "slug": "carmen-ciocolata",
    "song_count": 1
  },
  {
    "id": 26,
    "name": "Celelalte Cuvinte",
    "slug": "celelalte-cuvinte",
    "song_count": 1
  },
  {
    "id": 9,
    "name": "Compact",
    "slug": "compact",
    "song_count": 1
  },
  {
    "id": 22,
    "name": "Direcția 5",
    "slug": "directia-5",
    "song_count": 1
  },
  {
    "id": 10,
    "name": "Ducu Bertzi",
    "slug": "ducu-bertzi",
    "song_count": 1
  },
  {
    "id": 20,
    "name": "Holograf",
    "slug": "holograf",
    "song_count": 1
  },
  {
    "id": 23,
    "name": "Iris",
    "slug": "iris",
    "song_count": 1
  },
  {
    "id": 24,
    "name": "Mircea Baniciu",
    "slug": "mircea-baniciu",
    "song_count": 1
  },
  {
    "id": 15,
    "name": "Mircea Vintilă",
    "slug": "mircea-vintila",
    "song_count": 1
  },
  {
    "id": 7,
    "name": "Pasărea Colibri",
    "slug": "pasarea-colibri",
    "song_count": 1
  },
  {
    "id": 8,
    "name": "Phoenix",
    "slug": "phoenix",
    "song_count": 1
  },
  {
    "id": 6,
    "name": "Plus Noi",
    "slug": "plus-noi",
    "song_count": 1
  },
  {
    "id": 16,
    "name": "Roza Vânturilor",
    "slug": "roza-vanturilor",
    "song_count": 1
  },
  {
    "id": 11,
    "name": "Semnal M",
    "slug": "semnal-m",
    "song_count": 1
  },
  {
    "id": 19,
    "name": "Smiley",
    "slug": "smiley",
    "song_count": 1
  },
  {
    "id": 2,
    "name": "Tiberiu Andrei",
    "slug": "tiberiu-andrei",
    "song_count": 1
  },
  {
    "id": 29,
    "name": "Ursul Trubadur",
    "slug": "ursul-trubadur",
    "song_count": 1
  },
  {
    "id": 12,
    "name": "Valeriu Sterian",
    "slug": "valeriu-sterian",
    "song_count": 1
  },
  {
    "id": 27,
    "name": "Vama Veche",
    "slug": "vama-veche",
    "song_count": 1
  },
  {
    "id": 25,
    "name": "Vita de Vie",
    "slug": "vita-de-vie",
    "song_count": 1
  },
  {
    "id": 21,
    "name": "Voltaj",
    "slug": "voltaj",
    "song_count": 1
  },
  {
    "id": 4,
    "name": "Vârf Carpatin",
    "slug": "varf-carpatin",
    "song_count": 1
  },
  {
    "id": 13,
    "name": "Zdob și Zdub",
    "slug": "zdob-si-zdub",
    "song_count": 1
  },
  {
    "id": 18,
    "name": "Șatra",
    "slug": "satra",
    "song_count": 1
  }
];

export const categoriesData: Category[] = [
  {
    "id": 1,
    "name": "Cântece de munte",
    "slug": "cantece-de-munte",
    "description": "",
    "song_count": 32
  },
  {
    "id": 3,
    "name": "Rock",
    "slug": "rock",
    "description": "",
    "song_count": 0
  },
  {
    "id": 2,
    "name": "Folk",
    "slug": "folk",
    "description": "",
    "song_count": 16
  },
  {
    "id": 6,
    "name": "Pop-Rock",
    "slug": "pop-rock",
    "description": "",
    "song_count": 0
  },
  {
    "id": 4,
    "name": "Etno / Folclor",
    "slug": "etno-folclor",
    "description": "",
    "song_count": 0
  },
  {
    "id": 5,
    "name": "Pop",
    "slug": "pop",
    "description": "",
    "song_count": 0
  }
];
