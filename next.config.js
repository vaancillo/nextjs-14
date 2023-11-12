/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.alias['../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.253/out/buildHook/index'] = 'c:\\Users\\USER\\.vscode\\extensions\\wallabyjs.console-ninja-1.0.253\\out\\buildHook\\index.js';
      }
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  