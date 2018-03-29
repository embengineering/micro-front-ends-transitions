const updateJsonFile = require('update-json-file');
const filePath = '../dist/manifest.json';

updateJsonFile(filePath, (data) => {
    data.modules = Object.assign({}, data.modules, {
        'react-app': {
            manifest: 'microfrontend3/manifest.json'
        }
    });
    return data;
});