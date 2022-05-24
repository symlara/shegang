import React from 'react';
import ReactDOM from 'react-dom';
import './globals.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { UserContextProvider } from './context/userContext';


ReactDOM.render(
  <React.StrictMode>
     <UserContextProvider>
      <App />
     </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();