
export default {
  basePath: '/poojithaPortfolioWebAppp',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
