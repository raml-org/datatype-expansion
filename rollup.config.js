import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  strict: true,
  sourcemap: true,
  input: 'src/index.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    babel({
      sourceMap: true,
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}
