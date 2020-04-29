let content;

if (localStorage.getItem("language")) {
  content = require(`./Languages/${localStorage.getItem("language")}`).default;
} else {
  // website's default language
  content = require("./Languages/portuguese");
}

module.exports = content;
