import { statistics } from "../../data/school";
import Reveal from "../animation/Reveal";
import styles from "../../styles/Page.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.stats}>
        {statistics.map(([value, label], index) => (
          <Reveal key={label} delay={index * 70}>
            <strong>{value}</strong>
            <span>{label}</span>
          </Reveal>
        ))}
      </div>
      <Reveal className={styles.aboutGrid}>
        <div>
          <span className={styles.eyebrow}>THE TULAS WAY</span>
          <h2 id="about-title">
            More than a school.
            <br />
            <em>A place to become.</em>
          </h2>
        </div>
        <div className={styles.aboutText}>
          <p>
            Our CBSE curriculum focuses on academic excellence, holistic
            development, and preparing students to be global leaders.
          </p>
          <p>
            Since 2012, Tulas International School has brought learning and life
            together in Dehradun. Explore our programs, campus life,
            achievements, and why TIS is the preferred choice for parents across
            India.
          </p>
          <a className={styles.textLink} href="#learning">
            Meet a different kind of school <span>↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
