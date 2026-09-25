import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function photoUploadPlugin(): Plugin {
  return {
    name: 'photo-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-photo', (req, res, next) => {
        if (req.method !== 'POST') {
          return next();
        }
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (data && data.imageBase64) {
              const base64Data = data.imageBase64.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(base64Data, 'base64');
              const publicDir = path.resolve(__dirname, 'public');
              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
              }
              fs.writeFileSync(path.join(publicDir, 'profile.jpg'), buffer);
              fs.writeFileSync(path.join(publicDir, 'image.png'), buffer);
              fs.writeFileSync(path.join(publicDir, 'pallavi_photo.jpg'), buffer);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, url: '/profile.jpg' }));
              return;
            }
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Missing imageBase64' }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to save photo' }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
