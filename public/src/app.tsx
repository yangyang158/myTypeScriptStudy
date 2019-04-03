import '@babel/polyfill';
import * as React from 'react';
import {render} from 'react-dom';
import Router from './app/router';
import './app.css';

let app = document.createElement('div');
document.body.appendChild(app);

render(<Router />, app);

