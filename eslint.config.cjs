const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
    { ignores: ['out/**', 'dist/**', '**/*.d.ts'] },
    {
        files: ['src/**/*.ts', 'src/**/*.js', 'app/src/**/*.{ts,js,jsx}'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } }
        },
        plugins: { '@typescript-eslint': tsPlugin },
        rules: {
            '@typescript-eslint/naming-convention': 'warn',
            curly: 'warn',
            eqeqeq: 'warn',
            'no-throw-literal': 'warn',
            semi: 'warn'
        }
    },
    {
        files: ['**/*.jsx'],
        rules: {
            '@typescript-eslint/naming-convention': [
                'warn',
                { selector: 'default', format: ['camelCase'], leadingUnderscore: 'allow', trailingUnderscore: 'allow' },
                { selector: 'variable', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow', trailingUnderscore: 'allow' },
                { selector: 'function', format: ['camelCase', 'PascalCase'] },
                { selector: 'import', format: ['camelCase', 'PascalCase'] },
                { selector: 'typeLike', format: ['PascalCase'] }
            ]
        }
    }
];
