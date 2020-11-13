const menuConfig = require("vuepress-bar")();

module.exports = {
    title: "Thyiad's notes",
    description: "I read, I write",
    "dest": "dist",
    plugins: [
      'vuepress-plugin-dehydrate',
    ],
    themConfig: {
        logo: '/logo.png',
        ...menuConfig,
    },
}