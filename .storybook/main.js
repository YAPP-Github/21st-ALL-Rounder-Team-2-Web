const path = require("path");

module.exports = {
  stories: ["../**/*.stories.(tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    // disable whatever is already set to load SVGs
    config.module.rules
      .filter((rule) => rule.test.test(".svg"))
      .forEach((rule) => (rule.exclude = /\.svg$/i));

    // add SVGR instead
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
        {
          loader: "file-loader",
          options: {
            name: "static/media/[path][name].[ext]",
          },
        },
      ],
      type: "javascript/auto",
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "src"),
    };

    return config;
  },
};
