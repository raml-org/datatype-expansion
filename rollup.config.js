import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

let { FORMAT } = process.env

export default {
  useStrict: false,
  sourceMap: true,
  entry: FORMAT === 'es' ? 'src/index.es6.js' : 'src/index.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    FORMAT !== 'es' && uglify()
  ]
}