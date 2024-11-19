const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver = {
  ...config.resolver,
  alias: {
    '@app': './app',
    '@components': './app/components',
    '@screens': './app/screens',
    '@assets': './app/assets'
  }
};

module.exports = config;