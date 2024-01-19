import fs from 'fs';

export const getFileNames = (dir: string): string[] => {
  const arrDirent = fs.readdirSync(`./${dir}`, { withFileTypes: true });
  const names = arrDirent.filter(el => !el.isDirectory()).map(el => el.name);

  return names;
};
