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
  };
  