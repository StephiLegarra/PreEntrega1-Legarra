import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div className={styles.containerFooter}>
        <h1> MB </h1>
        <div>
          <a
            href="https://www.instagram.com/pilchas.mb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" className={styles.logo} />
          </a>
          <a
            href="https://wa.me/c/5492235559393"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon fontSize="large" className={styles.logo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
