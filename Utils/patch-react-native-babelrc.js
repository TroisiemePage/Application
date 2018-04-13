/**
 * This file patches react-native's packager's preset to add support
 * for decorators. There's no way to control the order in which plugins
 * are applied so we have to directly modify the file.
 */

const path = require('path');
const fs = require('fs');

// Path to config file.
// This value can change as we update react-native.
const mainConfigPath = path.resolve(
    __dirname,
    '../node_modules/babel-preset-react-native/',
    'configs/main.js'
);

var mainConfigContent = fs.readFileSync(mainConfigPath, 'utf8');

const prependToTransform = '\'transform-class-properties\',';

// Decorator plugin we want to add to react-native's packager.
const decoratorPlugin = '\'transform-decorators-legacy\',';

// If we haven't already modified the .babelrc file then do it now.
if (mainConfigContent.indexOf(decoratorPlugin) === -1) {
    console.log('Patched babel-preset-react-native main.js');

    // Prepend.
    mainConfigContent = mainConfigContent.replace(
        prependToTransform,
        decoratorPlugin + prependToTransform
    );

    // Write file.
    fs.writeFileSync(
        mainConfigPath,
        mainConfigContent,
        'utf8'
    );
}