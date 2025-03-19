import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import yearPlugin from '@8hobbies/vite-plugin-year';

export default defineConfig({
    plugins: [react(), yearPlugin()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
