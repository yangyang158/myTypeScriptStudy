import '@babel/polyfill';
import * as React from 'react';
import {render} from 'react-dom';
import * as mobx from 'mobx';
import Router from './app/router';
import './app.css';
const app = document.createElement('div');
document.body.appendChild(app);

mobx.configure({
    enforceActions: 'observed',
});

render(<Router />, app);

