const defaultLanguage = "portuguese";
const selectedLanguage = localStorage.getItem("language") || defaultLanguage;

const pages = ["components", "charCreation", "dashboard", "gmPanel", "login"];

pages.forEach((page) => {
  module.exports = require(`./Languages/${selectedLanguage}/${page}`);
});
