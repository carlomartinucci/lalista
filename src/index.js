import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from 'components/App';
import registerServiceWorker from 'registerServiceWorker';
import { Provider } from 'react-redux' 
import store from 'store' 
import { BrowserRouter } from 'react-router-dom'

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));

registerServiceWorker();
