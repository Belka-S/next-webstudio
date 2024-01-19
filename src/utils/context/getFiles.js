export const getFiles = context => {
  const arr = [];

  context.keys().forEach((item, id) => {
    const name = item
      .replace(/\.(png|jpe?g|svg)$/, '')
      .replace(`./${id + 1}-`, '');

    const file = context(item).default;

    arr.push({ id, name, file });
  });

  return arr;
};
