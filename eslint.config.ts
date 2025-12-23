import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  ...pluginOxlint.configs['flat/recommended'],
  skipFormatting,
  {
    name: 'app/vue-rules',
    rules: {
      // Critical
      'vue/no-undef-components': 'error',
      'vue/no-mutating-props': 'error',
      'vue/no-side-effects-in-computed-properties': 'error',
      'vue/require-v-for-key': 'error',
      'vue/no-unused-components': 'warn',
      'vue/no-unused-vars': 'warn',

      // DX
      'vue/component-name-in-template-casing': [
        'warn',
        'PascalCase',
        {
          registeredComponentsOnly: false,
        },
      ],
      'vue/no-useless-template-attributes': 'warn',
      'vue/no-v-html': 'warn',
      'vue/no-template-shadow': 'error',
      'vue/require-explicit-emits': 'warn',

      // STYLE 
      'vue/attributes-order': 'warn',
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
        },
      ],
      'vue/multi-word-component-names': 'off',
    },
  },
)
