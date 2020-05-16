const path = require('path');
const withSass = require('@zeit/next-sass');
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps(withSass({
    webpack: (config) => {
        config.resolve.alias['~components'] = path.resolve(__dirname, 'src/components');
        config.resolve.alias['~style'] = path.resolve(__dirname, 'src/style');
        config.resolve.alias['~redux'] = path.resolve(__dirname, 'src/redux');
        config.resolve.alias['~lib'] = path.resolve(__dirname, 'src/lib');
        config.resolve.alias['~gql'] = path.resolve(__dirname, 'src/gql');
        config.devtool = 'source-map';
        return config;
    }
}))