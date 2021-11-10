import Meta from "../components/seo/Meta";
import styles from "../styles/Home.module.scss";
import React from "react";
import Skill from "../components/skills/Skill";

export default function Home() {
  return (
    <>
      <Meta
        title="Sonahang Rai - Personal Site"
        description="I am Sonang Rai"
        image=""
        twitterType="summary"
      />

      <div className={styles.illusCont}>
        <div className={styles.bigText}>
          <span>My</span>
          <span> Portfolio</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 310 310"
            className={styles.bckCode}
          >
            <g>
              <path d="M175.682,80.547c-7.981-2.217-16.249,2.456-18.467,10.438l-33.334,120c-2.217,7.982,2.456,16.25,10.438,18.467   c1.343,0.373,2.694,0.551,4.023,0.551c6.57,0,12.6-4.35,14.444-10.989l33.334-120C188.337,91.033,183.664,82.764,175.682,80.547z" />
              <path d="M74.591,83.467c-6.37-5.298-15.828-4.428-21.124,1.942l-50,60.128c-4.63,5.568-4.622,13.648,0.02,19.206l50,59.872   c2.967,3.553,7.229,5.386,11.521,5.386c3.391,0,6.801-1.144,9.607-3.487c6.359-5.31,7.209-14.77,1.899-21.128l-41.987-50.277   l42.007-50.517C81.83,98.221,80.96,88.763,74.591,83.467z" />
              <path d="M306.513,145.257l-50-59.871c-5.31-6.359-14.77-7.208-21.128-1.898c-6.359,5.31-7.208,14.77-1.898,21.128l41.987,50.277   l-42.007,50.517c-5.297,6.37-4.427,15.828,1.942,21.124c2.802,2.331,6.202,3.467,9.583,3.467c4.303,0,8.575-1.842,11.541-5.41   l50-60.128C311.163,158.894,311.155,150.814,306.513,145.257z" />
            </g>
          </svg>
        </div>
      </div>

      <Skill />
    </>
  );
}
