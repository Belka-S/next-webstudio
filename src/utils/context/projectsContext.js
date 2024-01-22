import { getFiles } from './getFiles';

const context = require.context(
  '../../../src/assets/img/projects',
  true,
  /\.(png|jpe?g|svg)$/,
);

export default getFiles(context);
