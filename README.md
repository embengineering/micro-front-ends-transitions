# Description
* Three micro frontends built with different technologies (React v15, React v0.14, and Angular)
* Each micro frontend is wrapped in Web Components
* There are three entry points (index.html, iframes.html, webcomponents.html)
* The main application is automatically rendered when the main script loads
* Bootstrap is loaded for stylnig using a CDN
* Only the web components example loads polyfills using CDNs
* The web components example use HTML imports to load the micro frontends from a remote location
* The lazy loading example imports the micro frontends using their manifest.json created during the build process

# How to
In order to run this project you will need to:
* manually build each `microfrontend` individually using `yarn install`
* install the node modules for the integration app using `yarn install`
* run `yarn start` to build each micro frontend and trigger the dev server instance