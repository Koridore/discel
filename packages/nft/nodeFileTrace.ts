//
export const { nodeFileTrace } = require('@vercel/nft');
nodeFileTrace(['path/to/entrypoint.js'], {
  ts: true,
  mixedModules: true,
})
  .then(o => console.log(o.fileList))
  .then(e => console.error(e));
