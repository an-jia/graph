import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import rollupTypescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

/**
 * default 的返回，可以使对象，也可以是数组，数组的话会依次打包
 */
export default [
  {
    entry: 'src/graph.ts',
    targets: [
      { dest: 'out/umd/graph.js', format: 'umd'},
      { dest: 'out/es/graph.js', format: 'es' }
    ],
    moduleName: 'Graph',
    plugins: [
        rollupTypescript(),
        babel({
          exclude: 'node_modules/**'
        }),
        nodeResolve(),
        commonjs({
          include: 'node_modules/**',
          exclude: [],
          extensions: [ '.js', '.ts' ],
          ignoreGlobal: false
        })
    ]
  },{
    entry: 'src/graph.ts',
    targets: [
      { dest: 'out/umd/graph.min.js', format: 'umd' },
      { dest: 'out/iife/graph.min.js', format: 'iife' } /*to solve: es*/
    ],
    moduleName: 'Graph',
    plugins: [
        rollupTypescript(),
        babel({
          exclude: 'node_modules/**'
        }),
        nodeResolve(),
        commonjs({
          include: 'node_modules/**',
          exclude: [],
          extensions: [ '.js', '.ts' ],
          ignoreGlobal: false
        }),
        uglify()
    ]
  }
];