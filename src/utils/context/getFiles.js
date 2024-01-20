export const getFiles = context => {
  let arr = [];

  context.keys().forEach((item, id) => {
    const name = item
      .replace(/\.(png|jpe?g|svg)$/, '')
      .replace(`./${id + 1}-`, '');

    const file = context(item).default;

    arr.push({ id, name, file });
  });

  arr = arr.filter(el => !el.name.includes('src/'));

  return arr;
};
