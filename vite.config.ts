import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          sinais: path.resolve(__dirname, '400-sinais/index.html'),
          grupo: path.resolve(__dirname, 'grupo-terapeutico/index.html'),
          captura: path.resolve(__dirname, 'captura/index.html'),
          captura_obrigado: path.resolve(__dirname, 'captura/obrigado.html'),
          formacao: path.resolve(__dirname, 'formacao-analista/index.html'),
          obrigado_formacao: path.resolve(__dirname, 'obrigado-formacao/index.html'),
          minicurso_terapeuta: path.resolve(__dirname, 'minicurso-terapeuta/index.html'),
        },
      },
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
