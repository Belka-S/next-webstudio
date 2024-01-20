import { getFiles } from './getFiles';

const ourteamContext = require.context(
  '../../../src/assets/img/ourteam',
  true,
  /\.(png|jpe?g|svg)$/,
);

export default getFiles(ourteamContext);
