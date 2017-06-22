// rollup.config.js
import { rollup } from 'rollup'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'dist/main.js',
  dest: 'dist/bundle.js',
  moduleName: 'MyModule',
  format: 'iife',
  plugins: [
    resolve({ jsnext: true, main: true }),
    commonjs()
  ]
}