import { getFiles } from './getFiles';

const aboutusContext = require.context(
  '../../../src/assets/img/aboutus',
  true,
  /\.(png|jpe?g|svg)$/,
);

export default getFiles(aboutusContext);
