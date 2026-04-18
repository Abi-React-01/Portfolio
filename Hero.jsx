import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am ABINESH</h1>
        <p className={styles.description}>
          ReactJS & MERN Stack Developer with 2+ years of experience building scalable and user-friendly web applications.
          <br/>
          <br/>
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:abichampier@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/img3.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
