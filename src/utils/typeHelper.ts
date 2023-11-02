const getTypeIconSrc = (type: string) => `./images/types-icons/${type}.svg`;

const getTypeColor = (type: string) => {
  let color = '#FFFFFF';

  switch (type) {
    case 'bug':
      return '#8bd674';
    case 'dark':
      return '#75747e';
    case 'dragon':
      return '#1582e7';
    case 'electric':
      return '#f2cb55';
    case 'fairy':
      return '#e98acc';
    case 'fighting':
      return '#eb4971';
    case 'fire':
      return '#ff9448';
    case 'flying':
      return '#829edb';
    case 'ghost':
      return '#6882d4';
    case 'grass':
      return '#8bbe8a';
    case 'ground':
      return '#f78551';
    case 'ice':
      return '#6bddce';
    case 'normal':
      return '#c5c9d6';
    case 'poison':
      return '#bd5fe9';
    case 'psychic':
      return '#ff787a';
    case 'rock':
      return '#d5c895';
    case 'steel':
      return '#4d92b4';
    case 'water':
      return '#58abf6';
    default:
      return color;
  }
};

export { getTypeIconSrc, getTypeColor };
