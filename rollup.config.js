import styles from "rollup-plugin-styles";
import babel from '@rollup/plugin-babel';
import external from "rollup-plugin-peer-deps-external";
import sourcemaps from 'rollup-plugin-sourcemaps';
import del from 'rollup-plugin-delete';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import jsx from 'acorn-jsx';

const autoprefixer = require('autoprefixer');
const production = !process.env.ROLLUP_WATCH;

const conf = {
    input: "src/index.ts",
    output: {
        sourcemap: !production,
        file: "dist/index.cjs.ts",
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
            plugins: ['@babel/preset-react'],
            babelHelpers: 'runtime'
        }),
        external(),
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
        typescript({
            sourceMap: !production,
            compilerOptions: { jsx: 'preserve' }
        })
    ]
}

export default conf;