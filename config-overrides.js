// const path = require("path");

// const resolve = (dir) => path.resolve(__dirname, dir);

// module.exports = function (config, env) {
//   config.resolve.alias = Object.assign(config.resolve.alias, {
//     "~": resolve("src"),
//     "~components": resolve("src/components"),
//   });

//   return config;
// };

const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
  ...addBabelPlugins([
    "babel-plugin-root-import",
    {
      paths: [
        {
          rootPathPrefix: "@",
          rootPathSuffix: "src",
        },
        {
          rootPathPrefix: "@components",
          rootPathSuffix: "src/components",
        },
      ],
    },
  ])
);
