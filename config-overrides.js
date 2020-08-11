// const path = require("path");

// const resolve = (dir) => path.resolve(__dirname, dir);

// module.exports = function (config) {
//   config.resolve.alias = Object.assign(config.resolve.alias, {
//     "~": resolve("src"),
//     "~components": resolve("src/components"),
//     "~particles": resolve("src/components/particles"),
//     "~atoms": resolve("src/components/atoms"),
//     "~molecules": resolve("src/components/molecules"),
//   });

//   return config;
// };

const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
  ...addBabelPlugins([
    "babel-plugin-root-import",
    {
      rootPathPrefix: "~",
      rootPathSuffix: "src",
    },
  ])
);
