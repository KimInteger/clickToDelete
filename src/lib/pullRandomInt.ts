export const pullRandomInt = (min: number, max: number): number => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};
