import * as path from "path";

export default {
  stories: ["../**/*.stories.(tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
    },
  },
  staticDirs: ["../public"],
  // features: {
  //   babelModeV7: true,
  // },
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
