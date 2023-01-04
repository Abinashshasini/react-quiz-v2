export const shuffelArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};
