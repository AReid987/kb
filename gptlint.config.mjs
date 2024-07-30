import { recommendedConfig } from 'gptlint';

/** @type {import('gptlint').GPTLintConfig} */
export default [
  ...recommendedConfig,
  {
    llmOptions: {
      apiBaseUrl: 'http://localhost:11434/v1/',
      model: 'codegemma:latest',
      weakModel: 'gemma2:latest',
      apiKey: 'Ollama',
    }
  }
]