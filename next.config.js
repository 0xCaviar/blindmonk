/*
// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  images: {
    domains: [
      'www.datocms-assets.com',
      'localhost' // For Strapi
    ],
    imageSizes: [24, 64, 300]
  }
};

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  silent: true
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
*/

module.exports = {
  images: {
    domains: [
      'www.datocms-assets.com',
      'api.opensea.io',
      'lh3.googleusercontent.com',
      'localhost' // For Strapi
    ],
    imageSizes: [24, 64, 300]
  },
  env: {
    RPC_URL_1: 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213',
    RPC_URL_4: 'https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213',
    FORTMATIC_API_KEY: 'pk_test_A6260FCBAA2EBDFB',
    MAGIC_API_KEY: 'pk_test_398B82F5F0E88874',
    PORTIS_DAPP_ID: 'e9be171c-2b7f-4ff0-8db9-327707511ee2'
  }
};
