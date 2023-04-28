import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      console.log('trying...');
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      await render(url, res);
    } catch (err) {
      if (err instanceof Error) vite.ssrFixStacktrace(err);
      console.log(err);
    }
  });

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Starting the server on http://localhost:${PORT}/`);
  });
}

createServer();
