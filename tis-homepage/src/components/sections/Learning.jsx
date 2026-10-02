import { BookOpen, Compass, Heart, ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import styles from "../../styles/Page.module.css";

const pillars = [
  [
    BookOpen,
    "01",
    "A strong foundation",
    "CBSE academics",
    "Build understanding, ask better questions and make meaningful connections.",
  ],
  [
    Compass,
    "02",
    "A world to explore",
    "Beyond academics",
    "From the playing field to the stage, discover what makes you come alive.",
  ],
  [
    Heart,
    "03",
    "A place to belong",
    "Boarding life",
    "Grow with a community that values friendship, independence and care.",
  ],
];

export default function Learning() {
  return (
    <section
      id="learning"
      className={styles.learning}
      aria-labelledby="learning-title"
    >
      <Reveal className={styles.sectionHeading}>
        <div>
          <span className={styles.eyebrow}>LEARNING WITHOUT LIMITS</span>
          <h2 id="learning-title">
            For every side <em>of you.</em>
          </h2>
        </div>
        <p>
          We provide world-class education, modern facilities, and a nurturing
          environment for students to thrive academically, socially, and
          culturally.
        </p>
      </Reveal>
      <div className={styles.pillars}>
        {pillars.map(([Icon, number, title, label, text], index) => (
          <Reveal delay={index * 80} key={number}>
            <a
              className={styles.pillar}
              href={number === "02" ? "#life" : "#admissions"}
            >
              <div className={styles.pillarTop}>
                <Icon size={28} strokeWidth={1.3} />
                <span>{number}</span>
              </div>
              <span className={styles.eyebrow}>{label}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight className={styles.pillarArrow} size={22} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
