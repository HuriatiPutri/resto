// eslint-disable-next-line linebreak-style
/* eslint-disable no-use-before-define */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './components/AppBar/appbar';
import './components/Hero';
import './components/List';
import './components/Banner';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
