import 'babel-polyfill';
import axios from 'axios';

const handleError = error => console.error(error);

const handleSucess = (location, moduleName, { data: manifest }) => {
    console.log('Module\'s manifest configuration loaded:', manifest);

    const iframe = document.createElement('iframe');
    const div = document.createElement('div');
    const directory = location.split(/\//)[0];

    document.body.appendChild(iframe);

    div.id = moduleName;
    iframe.scrolling='no';
    iframe.allowtransparency='true';
    iframe.contentDocument.body.appendChild(div);

    const style = iframe.contentDocument.createElement('link');
    style.rel = 'stylesheet';
    style.href = directory + '/' + manifest.maincss;
    iframe.contentDocument.head.appendChild(style);

    const script = iframe.contentDocument.createElement('script');
    script.type = 'text/javascript';
    script.src = directory + '/' + manifest.mainjs;
    iframe.contentDocument.body.appendChild(script);


};

const handleLoadManifestSucess = ({ data: manifest }) => {
    console.log('Manifest configuration loaded:', manifest);

    const modules = Object.getOwnPropertyNames(manifest.modules);

    modules.forEach(moduleName => {
        if(manifest.modules[moduleName] && manifest.modules[moduleName].manifest) {
            loadModuleManifest(manifest.modules[moduleName].manifest, moduleName);
        }
    });
};

const loadManifest = () => axios.get(`manifest.json`)
    .then(handleLoadManifestSucess)
    .catch(handleError);

const loadModuleManifest = (manifestLocation, moduleName) => axios.get(manifestLocation)
    .then(handleSucess.bind(this, manifestLocation, moduleName))
    .catch(handleError);

loadManifest();
