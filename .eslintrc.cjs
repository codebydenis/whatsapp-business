module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-strongly-recommended',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleAttributePerLine: true,
                tabWidth: 4,
                endOfLine: 'auto',
                singleQuote: true,
            },
        ],
        'no-console': 'warn',
        'no-debugger': 'warn',
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
                alphabetical: false,
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
    },
};
