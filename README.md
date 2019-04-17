# Description
* Three micro frontends built with different technologies (React v15, React v0.14, and Angular)
* Each micro frontend is wrapped in a Web Component
* There are three entry points (index.html, iframes.html, webcomponents.html)
* The web components example use HTML imports to load the micro frontends from a remote location
* The lazy loading example imports the micro frontends using a manifest.json created during the build process
* The main application is automatically rendered when the main script loads
* Bootstrap is loaded for styling using a CDN
* Only the web components example loads additional polyfills using CDNs
* Each micro frontend will update a reference to a centralized manifest during its build process

# How to
In order to run this project you will need to:
* manually build each `microfrontend` individually using `yarn install`
* install the node modules for the integration app using `yarn install`
* run `yarn start` to build each micro frontend and trigger the dev server instance