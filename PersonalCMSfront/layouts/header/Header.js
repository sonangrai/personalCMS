import React, { useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import gsap from "gsap";

const Header = () => {
  const mref = useRef(); //Mobile Menu ref
  const bounceref = useRef(); //Mobile Menu ref
  const swingref = useRef(); //G swing Menu ref

  useEffect(() => {
    gsap.from(bounceref.current, {
      y: -5,
      repeat: -1,
      duration: 1.5,
      ease: "bounce",
      yoyo: true,
    });
    gsap.to(bounceref.current, {
      y: 0,
      repeat: -1,
      duration: 1.5,
      ease: "bounce",
      yoyo: true,
    });
    gsap.from(swingref.current, {
      rotationY: 90,
      repeat: -1,
      duration: 1.5,
      transformOrigin: "center",
      yoyo: true,
    });
    gsap.to(swingref.current, {
      rotationX: 0,
      repeat: -1,
      duration: 1.5,
      transformOrigin: "center",
      yoyo: true,
    });
    return () => {};
  }, []);

  //Animate burger
  const rotateAnim = async (e) => {
    gsap.from(e.target, { rotate: 0, transition: 0.3 });
    gsap.to(e.target, { rotate: 360, transition: 0.3 });
  };

  //Click Ham anim
  const clickHam = (e) => {
    rotateAnim(e).then(() => {
      gsap.to(mref.current, {
        left: 0,
        backgroundColor: "#fff",
        transition: 1,
      });
    });
  };

  //CLose Mobile Menu
  const closeMob = (e) => {
    rotateAnim(e).then(() => {
      gsap.to(mref.current, {
        left: "-100%",
        backgroundColor: "#000",
        transition: 1,
      });
    });
  };

  return (
    <>
      <div className={styles.headCont}>
        <div className={styles.headRow}>
          <div className={styles.siteName}>
            <Link href="/">
              <a>
                <h1>
                  Rai S<span ref={bounceref}>o</span>nahan
                  <span ref={swingref}>g</span>
                </h1>
              </a>
            </Link>
          </div>
          <div className={styles.nav}>
            <span className={styles.Ham}>
              <i className="fad fa-bars" onClick={clickHam}></i>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.mobileMenu} ref={mref}>
        <div className={styles.menItem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className={styles.menItem}>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </div>
        <div className={styles.menItem}>
          <Link href="/resume">
            <a>Resume</a>
          </Link>
        </div>
        <div className={styles.menItem}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className={styles.menItem}>
          <span className={styles.closeNav} onClick={closeMob}>
            <i className="fal fa-times"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
