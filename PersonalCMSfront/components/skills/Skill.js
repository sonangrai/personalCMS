import React, { useRef, useState, useEffect } from "react";
import styles from "./Skill.module.scss";

const Skill = () => {
  const tref = useRef();
  const [active, setactive] = useState(0);

  useEffect(() => {
    console.log(tref.current.childNodes[active]);
    tref.current.childNodes[active].classList.add("active");
    return () => {};
  }, [active]);

  return (
    <div className={styles.skillSets}>
      <ul className={styles.skl} ref={tref}>
        <li className={styles.sklI} onMouseEnter={(e) => updateActive(e)}>
          <span>{"<HTML>"}</span>
        </li>
        <li className={styles.sklI} onMouseEnter={(e) => updateActive(e)}>
          <span>{"javascript()"}</span>
        </li>
        <li className={styles.sklI} onMouseEnter={(e) => updateActive(e)}>
          <span>.SASS</span>
        </li>
        <li className={styles.sklI} onMouseEnter={(e) => updateActive(e)}>
          <span>.Bootstrap</span>
        </li>
        <li className={styles.sklI} onMouseEnter={(e) => updateActive(e)}>
          <span>REACT.js</span>
        </li>
        <li className={styles.sklI} onMouseEnter={(e) => updateActive(e)}>
          <span>Express.js</span>
        </li>
        <li className={styles.sklI} onMouseEnter={(e) => updateActive(e)}>
          <span>Gulp.js</span>
        </li>
        <li className={styles.sklI} onMouseEnter={(e) => updateActive(e)}>
          <span>MongoDB</span>
        </li>
        <li className={styles.sklI} onMouseEnter={(e) => updateActive(e)}>
          <span>Firebase</span>
        </li>
      </ul>
    </div>
  );
};

export default Skill;
