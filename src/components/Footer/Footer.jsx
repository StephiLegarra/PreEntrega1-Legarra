import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div>
        <h1 className={styles.containerFooter}> MB </h1>
      </div>
    </div>
  );
};

export default Footer;
