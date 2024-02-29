import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import FooterCSS from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={FooterCSS.Footer}>
      <div className={FooterCSS.footercontainer}>
        <h1>OTAVIO MENDES | 2024</h1>
        <div className={FooterCSS.icons}>
          {" "}
          <a
            href="https://www.linkedin.com/in/otavio-mendes-852b85174/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className={FooterCSS.icon} />
          </a>
          <a href="https://github.com/OtavioMendes12" target="_blank" rel="noreferrer">
            <GitHub className={FooterCSS.icon} />
          </a>
          <a href="mailto:otaviojulio.mendes@gmail.com">
            <Email className={FooterCSS.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
