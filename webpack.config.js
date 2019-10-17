const path = require("path");

module.exports = function(_, { mode }) {
  return {
    entry: {
      app: "./src/index.ts"
    },
    mode,
    output: {
      pathinfo: true,
      path: path.resolve(__dirname, "dist"),
      filename: `[name].js`
    },
    target: "web",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      modules: ["node_modules"]
    },
    watchOptions: {
      aggregateTimeout: 150,
      ignored: /node_modules/
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.tsx?$/,
              include: [
                path.resolve(__dirname, "src"),
                path.resolve(__dirname, "lib")
              ],
              use: [
                {
                  loader: "babel-loader"
                }
              ]
            },

            {
              // Exclude `js` files to keep "css" loader working as it injects
              // it's runtime that would otherwise processed through "file" loader.
              // Also exclude `html` and `json` extensions so they get processed
              // by webpacks internal loaders.
              test: /./,
              exclude: [/\.js$/, /\.html$/, /\.json$/, /\.ejs$/],
              loader: "file-loader",
              options: {
                name: "assets/[name].[ext]"
              }
            }
          ]
        }
      ]
    }
  };
};
