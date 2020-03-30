import React from "react";
import content from "../../../../utils/content";
import NaviBar from "../../../../components/NaviBar";
import ReturnMenu from "../../../../components/ReturnMenu";
import AddPlayer from "./components/AddPlayer";

import "./styles.css";

function NewPlayer({ history }) {
  function ReturnManagement() {
    history.push("/gm-management");
  }

  return (
    <>
      <NaviBar history={history} />
      <ReturnMenu returnFunction={ReturnManagement} title={content.newPlayer.returnMenu} />
      <AddPlayer history={history} />
    </>
  );
}
export default NewPlayer;
