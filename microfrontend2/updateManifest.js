const updateJsonFile = require('update-json-file');
const filePath = '../dist/manifest.json';

updateJsonFile(filePath, (data) => {
    data.modules = Object.assign({}, data.modules, {
        'react-app-old': {
            manifest: 'microfrontend2/manifest.json'
        }
    });
    return data;
});