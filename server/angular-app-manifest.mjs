
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/poojithaPortfolioWebAppp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/poojithaPortfolioWebAppp"
  },
  {
    "renderMode": 2,
    "route": "/poojithaPortfolioWebAppp/skills"
  },
  {
    "renderMode": 2,
    "route": "/poojithaPortfolioWebAppp/projects"
  },
  {
    "renderMode": 2,
    "route": "/poojithaPortfolioWebAppp/profile"
  },
  {
    "renderMode": 2,
    "redirectTo": "/poojithaPortfolioWebAppp",
    "route": "/poojithaPortfolioWebAppp/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2218, hash: '1d9335d9c8239c6c90acb7f1185c87c8def55d4399074917045b081c3973d000', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: '253bbd30cead81e5207298ce2eca52f38c6b061487d956666527bc1adb2cf37e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 10838, hash: '50f6c783c32526e7f311c3f0ca47c6fd5de7cac4ad4beec87f3d8d50067615bd', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 17976, hash: '23d6b490eca2466a87916b04eaba088cf0c8895fe6f81a07cf2bfe6b683c4abc', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10560, hash: 'fabd0d7a0b264b13e0826fad72aec36143661d2008e77aea5348c620a33a85a3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 6264, hash: '3329c0a4a1c5ab54b2204b74ede46ebdc4869f9ae518c7ed12503649c1033d99', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-2XGFQFLY.css': {size: 10730, hash: 'MC/H/gwhJNk', text: () => import('./assets-chunks/styles-2XGFQFLY_css.mjs').then(m => m.default)}
  },
};
