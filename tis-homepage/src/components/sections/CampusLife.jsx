import { useState } from "react";
import { experiences } from "../../data/school";
import Reveal from "../animation/Reveal";
import styles from "../../styles/Page.module.css";

export default function CampusLife() {
  const [filter, setFilter] = useState("ALL");
  const visible = experiences.filter(
    (item) => filter === "ALL" || item.category === filter,
  );
  return (
    <section id="life" className={styles.life} aria-labelledby="life-title">
      <Reveal className={styles.sectionHeading}>
        <div>
          <span className={styles.eyebrow}>LIFE, IN FULL COLOUR</span>
          <h2 id="life-title">
            Let's do it <em>with Tulas.</em>
          </h2>
        </div>
        <p>
          16+ sports. Creative discoveries. New friendships.
          <br />
          Every day, a chance to find your thing.
        </p>
      </Reveal>
      <div
        className={styles.filters}
        role="group"
        aria-label="Filter campus activities"
      >
        {[
          ["ALL", "All experiences"],
          ["SPORT", "Sport & adventure"],
          ["ARTS", "Arts & expression"],
        ].map(([value, label]) => (
          <button
            key={value}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles.experiences}>
        {visible.map((item, index) => (
          <Reveal key={item.name} delay={index * 60}>
            <article className={styles.experience}>
              <div className={styles.activityImage}>
                <img
                  src={`/images/${item.image}`}
                  alt={item.alt}
                  width="600"
                  height="700"
                  loading="lazy"
                />
                <span>
                  {item.category === "SPORT"
                    ? "SPORT & ADVENTURE"
                    : "ARTS & EXPRESSION"}
                </span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <p className={styles.filterStatus} role="status">
        Showing {visible.length} experiences
      </p>
    </section>
  );
}
