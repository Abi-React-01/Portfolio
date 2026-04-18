import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/img7.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>React Developer</h3>
              <p>
              A React developer creates interactive user interfaces and applications using 
              the React JavaScript library, focusing on component-based architecture and efficient rendering.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <h3>HTML/CSS Developer</h3>
              <p>
              A developer creates and styles web pages using HTML and CSS to ensure visual appeal and functionality
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}> 
              <h3>Mern-Stack Developer</h3>
              <p>
              A MERN Stack developer crafts dynamic web applications using MongoDB, Express.js, React, and Node.js, 
              leveraging JavaScript, HTML, and CSS for full-stack development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
