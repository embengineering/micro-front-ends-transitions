import './react-app.css';
import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

console.log('React 0.14 connected');

const element = document.createElement('div');

element.className = 'react-app-old';

// append new element to DOM
document.body.appendChild(element);

render(<App title={'React 0.14 Separate Running App'}/>, element);