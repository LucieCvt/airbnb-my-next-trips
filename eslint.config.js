// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierConfig = require("eslint-config-prettier");

module.exports = defineConfig([
  // ── Base: Expo (TypeScript, React, React Hooks, Import, Expo) ──
  expoConfig,

  // ── Prettier: disables ESLint rules that conflict with Prettier ──
  prettierConfig,

  // ── Custom rules ──
  {
    rules: {
      // Import sorting
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"], "type"],
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
            { pattern: "react-native", group: "external", position: "before" },
            { pattern: "expo-*", group: "external", position: "before" },
            { pattern: "@/**", group: "internal", position: "before" },
          ],
          pathGroupsExcludedImportTypes: ["react", "react-native"],
          "newlines-between": "never",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/newline-after-import": "warn",

      // Enforce import type for type-only imports
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],

      // Allow unused variables prefixed with _
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Self-closing components without children
      "react/self-closing-comp": "warn",

      // No unnecessary {} in JSX
      "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }],
    },
  },

  // ── Ignores ──
  {
    ignores: [
      "dist/",
      ".expo/",
      "node_modules/",
      "ios/",
      "android/",
      "web-build/",
      "*.tsbuildinfo",
      "expo-env.d.ts",
      "scripts/",
    ],
  },
]);
