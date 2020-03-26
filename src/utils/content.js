import portuguese from "./Languages/portuguese";
import english from "./Languages/english";

let content;

let language = "portuguese";
if (localStorage.getItem("language")) {
  language = localStorage.getItem("language");
}

if (language === "portuguese") {
  content = portuguese;
}
if (language === "english") {
  content = english;
}

export default content;
