import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './store/store';

export function render(url: string | Partial<Location>) {
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );
}
