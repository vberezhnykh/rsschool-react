import { hydrateRoot } from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initializeStore } from './store/store';

const store = initializeStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

const root = document.getElementById('app');
if (root) {
  hydrateRoot(
    root,
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
