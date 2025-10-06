// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Enable NativeWind styling
const { withNativeWind } = require('nativewind/metro');
module.exports = withNativeWind(config, {
  input: './global.css',
  configPath: './tailwind.config.js',
});