const updateJsonFile = require('update-json-file');
const filePath = '../dist/manifest.json';

updateJsonFile(filePath, (data) => {
    data.modules = Object.assign({}, data.modules, {
        'angular-app': {
            manifest: 'microfrontend1/manifest.json'
        }
    });
    return data;
});