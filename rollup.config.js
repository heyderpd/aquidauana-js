import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { minify } from 'uglify-es'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  moduleName: 'aquidauana',
  format: 'iife',
  plugins: [
    babel({
      presets: [
        [
          "es2015", {
            "modules": false
          }
        ]
      ],
      babelrc: false,
      exclude: 'node_modules/**'
    }),
    resolve({ jsnext: true, main: true }),
    commonjs(),
    uglify({}, minify)
  ]
}
