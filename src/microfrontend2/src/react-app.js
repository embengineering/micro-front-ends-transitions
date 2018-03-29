import './react-app.css';
import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

console.log('React 15 connected');

const element = document.createElement('div');

element.className = 'react-app';

// append new element to DOM
document.body.appendChild(element);

render(<App title={'React 15 Separate Running App'}/>, element);