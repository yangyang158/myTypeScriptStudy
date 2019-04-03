import React from 'react';
import {render} from 'react-dom';
import Router from './app/router';

console.log(window.document)
console.log(window.document.querySelector('div'))
let app = window.document.createElement('div');
window.document.body.appendChild(app);

render(<div>111</div>, app);

