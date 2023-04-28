import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './app';
import { Provider } from 'react-redux';
import { RootState, initializeStore } from './store/store';
import { Response } from 'express';
import { apiSlice } from './store/features/apiSlice';

type HtmlProps = {
  app: React.ReactElement;
  preloadedState: RootState;
};

const Html: React.FC<HtmlProps> = ({ app, preloadedState }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="stylesheet" href="/src/styles/index.scss" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RSSchool</title>
      </head>
      <body>
        <div id="app">{app}</div>
        <script src="./src/entry-client.tsx" type="module"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}`,
          }}
        />
      </body>
    </html>
  );
};

export async function render(url: string | Partial<Location>, res: Response) {
  const store = initializeStore();
  store.dispatch(apiSlice.endpoints.getPosts.initiate(''));
  await Promise.all(store.dispatch(apiSlice.util.getRunningQueriesThunk()));
  const initialState = store.getState();

  const { pipe } = renderToPipeableStream(
    <Html
      app={
        <Provider store={store}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </Provider>
      }
      preloadedState={initialState}
    />,
    {
      onShellReady() {
        pipe(res);
      },
    }
  );
}
