import 'babel-polyfill';
import axios from 'axios';

const handleError = error => console.error(error);

const handleSucess = (location, { data: manifest }) => {
    console.log('Module\'s manifest configuration loaded:', manifest);

    const style = document.createElement('link');
    const script = document.createElement('script');
    const directory = location.split(/\//)[0];

    style.rel = 'stylesheet';
    style.href = directory + '/' + manifest.maincss;

    script.type = 'text/javascript';
    script.src = directory + '/' + manifest.mainjs;

    document.head.appendChild(style);
    document.body.appendChild(script);
};

const handleLoadManifestSucess = ({ data: manifest }) => {
    console.log('Manifest configuration loaded:', manifest);

    const modules = Object.getOwnPropertyNames(manifest.modules);

    modules.forEach(module => {
        if(manifest.modules[module] && manifest.modules[module].manifest) {
            loadModuleManifest(manifest.modules[module].manifest);
        }
    });
};

const loadManifest = () => axios.get(`manifest.json`)
    .then(handleLoadManifestSucess)
    .catch(handleError);

const loadModuleManifest = manifestLocation => axios.get(manifestLocation)
    .then(handleSucess.bind(this, manifestLocation))
    .catch(handleError);

loadManifest();