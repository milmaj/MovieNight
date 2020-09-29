import { defineConfig } from 'umi';

export default defineConfig({
    sass: {
        implementation: require('node-sass'),
    },
    nodeModulesTransform: {
        type: 'none',
    },
});
