const rollup = require('rollup');
const nodeResolution = require('rollup-plugin-node-resolve');
const commonJs = require('rollup-plugin-commonjs');

rollup.rollup({
  entry: 'tmp/src/main.js',
  external: [
    'firebase',
  ],
  plugins: [
    nodeResolution({
      jsnext: true,
      main: true,
    }),
    commonJs({
      include: 'node_modules/**',
    }),
  ],
}).then(bundle => {
  bundle.write({
    format: 'iife',
    dest: 'app.js',
  });
})
.catch(err => console.error(err));