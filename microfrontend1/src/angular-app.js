import './angular.css';
import * as angular from 'angular';
import { AppModule, html } from './app.module';

const name = `${AppModule}.instance`;
const element = document.createElement('div');

console.log('Angular connected');

element.className = 'angular-app';
element.innerHTML = html;

// append new element to DOM
document.body.appendChild(element);

// create new module as we attaching `run` callback
angular.module(name, [AppModule])
    .value('config', {title: 'Angular Separate Running App'})
    .run(() => {
        // console.log(`Angular module ${AppModule} instance is running`);
    });

angular.bootstrap(document, [name], {
    strictDi: true
});