export const getRandomColor = () => {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  if (color.length === 5) color += 'f';
  return `#${color}`;
};
