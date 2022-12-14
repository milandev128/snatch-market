// Enums
import { EnvName } from '@enums/environment.enum';

// const scheme = 'http://';
// const host   = 'localhost';
// const port   = ':5000';
// const path   = '/api/';

// const baseUrl = scheme + host + port + path;
const scheme = 'https://';
const host   = 'dev.api.snatchrewards.io';
const port   = ':5000';
const path   = '/api/';

const baseUrl = scheme + host + path;

export const environment = {
  production      : true,
  version         : EnvName.VERSION,
  appName         : 'Snatch',
  envName         : EnvName.PROD,
  defaultLanguage : 'en',
  apiBaseUrl      : baseUrl,
};
