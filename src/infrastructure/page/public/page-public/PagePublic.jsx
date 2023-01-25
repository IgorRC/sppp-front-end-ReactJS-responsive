import React from "react";
import "./stylePagePublic.css";
import HeadBoardPublic from "../headboard/HeadBoardPublic";
import FooterPage from "../footer/FooterPage";
import BodyPage from "../body/BodyPage";

function PagePublic() {
  return (
    <div className="foot-principal-public">
      <HeadBoardPublic/>
      <BodyPage/>
      <FooterPage/>
    </div>
  );
}

export default PagePublic;
