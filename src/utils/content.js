const defaultLanguage = "portuguese";
const selectedLanguage = localStorage.getItem("language") || defaultLanguage;

module.exports = require(`./Languages/${selectedLanguage}`);
