module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/css/',
          publicPath: '/_next/static/css/',
        },
      },
    });

    return config;
  },
  images: {
    domains: ['stg-updatedfurniture-staging.kinsta.cloud'], // Add your local development domain here
  },
  env: {
    HEADLESS_HOME_URL: process.env.HEADLESS_HOME_URL,
    HEADLESS_API_URL: process.env.HEADLESS_API_URL,
    HEADLESS_JWT_TOKEN: process.env.HEADLESS_JWT_TOKEN,
    HEADLESS_API_MENU_ID: process.env.HEADLESS_API_MENU_ID,
    HEADLESS_SLIDER_POST_TYPE: process.env.HEADLESS_SLIDER_POST_TYPE,
    HEADLESS_WOO_SECRET_KEY: process.env.HEADLESS_WOO_SECRET_KEY,
    HEADLESS_WOO_CONSUMER_KEY: process.env.HEADLESS_WOO_CONSUMER_KEY,
  },
};
