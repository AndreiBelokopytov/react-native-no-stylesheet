const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const extraNodeModules = {
  'no-stylesheet': path.resolve(__dirname + '/../dist'),
};
const watchFolders = [path.resolve(__dirname + '/../dist')];

const nodeModulesPaths = [path.resolve(path.join(__dirname, './node_modules'))];

const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    nodeModulesPaths,
  },
  watchFolders,
};
