import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// thunk allows you to create functions with dispatching 
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './components/App'
import { rootReducer } from './reducers/rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


ReactDOM.render(
    <Provider store={store}>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
      <Router>
          <App />
      </Router>
        </Auth0Provider>
    </Provider>,
  document.getElementById('root')
);
