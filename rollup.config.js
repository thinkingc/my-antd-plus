import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: "./components/index.js",
  output: [
    {
      file: './dist/my-lib-umd.js',
      format: 'umd',
      name: 'myLib'   
      //当入口文件有export时，'umd'格式必须指定name
      //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
    },
    {
      file: './dist/my-lib-es.js',
      format: 'es'
    },
    {
      file: './dist/my-lib-cjs.js',
      format: 'cjs'
    }
  ],
  plugins:[
    babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
    }),
    commonjs()
  ]
}
