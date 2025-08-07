
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PrimaUI/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PrimaUI"
  },
  {
    "renderMode": 2,
    "route": "/PrimaUI/otppage"
  },
  {
    "renderMode": 2,
    "route": "/PrimaUI/page2"
  },
  {
    "renderMode": 2,
    "route": "/PrimaUI/page3"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 447, hash: '719cc940196f08512c1e256064768e11894b260fe39a0cc519cec154885a2966', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '2ecee87e72a37721f24474e8817a6b1a6da4087b9092310e2bb26ca0c1c44e7b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'page3/index.html': {size: 1569, hash: 'abce5ca3659ebb78320c37c228a3e94f005fbff189cbb23e699d60c922b3ba2b', text: () => import('./assets-chunks/page3_index_html.mjs').then(m => m.default)},
    'page2/index.html': {size: 1570, hash: '243ed2497c9e5d68183569f1b8edf0417ba9f0738239ec795635a4c75f8dbaac', text: () => import('./assets-chunks/page2_index_html.mjs').then(m => m.default)},
    'otppage/index.html': {size: 3821, hash: '0d1933822414e05e8e00f60cc7e57aa553b49ed6c86b807927c42e16ddd02b27', text: () => import('./assets-chunks/otppage_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3821, hash: '0d1933822414e05e8e00f60cc7e57aa553b49ed6c86b807927c42e16ddd02b27', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
