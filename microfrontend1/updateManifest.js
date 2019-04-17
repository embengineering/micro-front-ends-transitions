const loadJsonFile = require('load-json-file');
const writeJsonFile = require('write-json-file');
const filePath = '../dist/manifest.json';
const jsonData = {
    'angular-app': {
        manifest: 'microfrontend1/manifest.json'
    }
};

loadJsonFile(filePath)
    .then(json => {
        json = Object.assign({}, json, jsonData);
        writeJsonFile(filePath,  json);
    })
    .catch(() => writeJsonFile(filePath,  jsonData));