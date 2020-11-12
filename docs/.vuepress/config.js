const menuConfig = require("vuepress-bar")();

module.exports = {
    title: "Thyiad's notes",
    description: "I read, I write",
    themConfig: {
        logo: '/logo.png',
        ...menuConfig,
    },
}