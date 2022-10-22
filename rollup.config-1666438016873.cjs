'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('rollup-plugin-styles');
var babel = require('@rollup/plugin-babel');
var sourcemaps = require('rollup-plugin-sourcemaps');
var del = require('rollup-plugin-delete');
var commonjs = require('@rollup/plugin-commonjs');
var nodeResolve = require('@rollup/plugin-node-resolve');
var typescript = require('@rollup/plugin-typescript');

const autoprefixer = require('autoprefixer');
const production = !process.env.ROLLUP_WATCH;

const conf = {
    input: "src/index.ts",
    output: {
        sourcemap: !production,
        file: "dist/index.cjs.js",
        format: "cjs",
        exports: "auto"
    },
    // this externelizes react to prevent rollup from compiling it
    external: ["react", /@babel\/runtime/],
    acornInjectPlugins: [jsx()],
    plugins: [
        // these are babel comfigurations
        babel({
            exclude: 'node_modules/**',
            plugins: ['@babel/transform-runtime'],
            babelHelpers: 'runtime'
        }),
        // this adds sourcemaps
        sourcemaps(),
        del({targets:'dist/*'}),
        // this adds support for styles
        styles({
            postcss: {
                plugins: [
                    autoprefixer()
                ]
            }
        }),
        nodeResolve({
            preferBuiltins: false
        }),
        commonjs(),
        typescript({ compilerOptions: { jsx: 'preserve' } })
    ]
};

exports.default = conf;
