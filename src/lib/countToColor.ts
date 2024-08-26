export const countToColor = (color: string): number => {
  let count: number;
  switch (color) {
    case 'red':
      count = 1;
      break;
    case 'blue':
      count = 2;
      break;
    case 'green':
      count = 3;
      break;
    case 'yellow':
      count = 4;
      break;
    case 'purple':
      count = 5;
      break;
    default:
      count = 0;
      break;
  }
  return count;
};
