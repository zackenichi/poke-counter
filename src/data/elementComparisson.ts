const elementComparisson = [
  {
    element: 'normal',
    weakness: ['fighting'],
    immunity: ['ghost'],
  },
  {
    element: 'fire',
    weakness: ['water', 'rock', 'ground'],
    immunity: [],
  },
  {
    element: 'water',
    weakness: ['electric', 'grass'],
    immunity: [],
  },
  {
    element: 'electric',
    weakness: ['ground'],
    immunity: [],
  },
  {
    element: 'grass',
    weakness: ['fire', 'ice', 'poison', 'flying', 'bug'],
    immunity: [],
  },
  {
    element: 'ice',
    weakness: ['fire', 'fighting', 'rock', 'steel'],
    immunity: [],
  },
  {
    element: 'fighting',
    weakness: ['flying', 'psychic', 'fairy'],
    immunity: [],
  },
  {
    element: 'poison',
    weakness: ['ground', 'psychic'],
    immunity: [],
  },
  {
    element: 'ground',
    weakness: ['water', 'grass', 'ice'],
    immunity: ['electric'],
  },
  {
    element: 'flying',
    weakness: ['electric', 'ice', 'rock'],
    immunity: [],
  },
  {
    element: 'psychic',
    weakness: ['bug', 'ghost', 'dark'],
    immunity: [],
  },
  {
    element: 'bug',
    weakness: ['fire', 'flying', 'rock'],
    immunity: [],
  },
  {
    element: 'rock',
    weakness: ['water', 'grass', 'fighting', 'ground', 'steel'],
    immunity: [],
  },
  {
    element: 'ghost',
    weakness: ['ghost', 'dark'],
    immunity: ['normal', 'fighting'],
  },
  {
    element: 'dragon',
    weakness: ['ice', 'dragon', 'fairy'],
    immunity: [],
  },
  {
    element: 'dark',
    weakness: ['fighting', 'bug', 'fairy'],
    immunity: ['psychic'],
  },
  {
    element: 'steel',
    weakness: ['fire', 'fighting', 'ground'],
    immunity: ['poison'],
  },
  {
    element: 'fairy',
    weakness: ['poison', 'steel'],
    immunity: ['dragon'],
  },
];

export { elementComparisson };
