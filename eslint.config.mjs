import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: [
            "dist**",
            "node_modules/**",
            "database/**",
            "public/**"
        ]
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: { globals: globals.browser },
        rules: {
            indent: ["error", 4],
            semi: ["error", "always"],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            quotes: ["error", "double"],
            "@typescript-eslint/no-explicit-any": "off",
            "brace-style": ["error", "stroustrup"],
            eqeqeq: ["error", "always"],
            "prefer-destructuring": [
                "error",
                {
                    "VariableDeclarator": {
                        "array": false,
                        "object": true
                    },
                    "AssignmentExpression": {
                        "array": false,
                        "object": false
                    }
                },
                {
                    "enforceForRenamedProperties": false
                }
            ]
        },
    },
];

