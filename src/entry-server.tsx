import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Request, Response } from 'express';

export function render(url: string | Partial<Location>, opts: { req: Request; res: Response }) {
  const { pipe } = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    {
      bootstrapModules: ['./src/entry-client.tsx'],
      onShellReady() {
        const { res } = opts;
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
    }
  );
}
