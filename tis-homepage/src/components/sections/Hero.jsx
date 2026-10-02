import { ArrowDown, MapPin } from "lucide-react";
import LinkButton from "../ui/LinkButton";
import styles from "../../styles/Page.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}>
          <span /> A WORLD OF POSSIBILITIES
        </div>
        <h1 id="hero-title">
          A place to learn.
          <br />A space to <em>be you.</em>
        </h1>
        <p>
          Welcome to Tulas International School. Where academic excellence meets
          curiosity, confidence and a lifelong love of learning.
        </p>
        <div className={styles.heroButtons}>
          <LinkButton href="#admissions">Discover your Tulas</LinkButton>
          <a className={styles.textLink} href="#life">
            Explore life at TIS <ArrowDown size={16} />
          </a>
        </div>
        <div className={styles.heroNote}>
          <span className={styles.noteLine} /> CBSE CURRICULUM <b>·</b> BOARDING
          & DAY SCHOOL
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src="/images/campus.webp"
          alt="Students learning guitar together at Tulas International School"
          width="1200"
          height="900"
          fetchPriority="high"
        />
        <div className={styles.imageShade} />
        <span className={styles.location}>
          <MapPin size={14} /> DEHRADUN, UTTARAKHAND
        </span>
        <div className={styles.imageCaption}>
          <span>
            Room to grow.
            <br />
            Space to belong.
          </span>
          <a href="#about" aria-label="Discover our campus">
            <ArrowDown size={24} />
          </a>
        </div>
        <div className={styles.seal}>
          ROOTED IN VALUES<span>✳</span>READY FOR THE WORLD
        </div>
      </div>
      <div className={styles.heroBottom}>
        <span>BIG DREAMS BEGIN WITH A LITTLE CURIOSITY.</span>
        <a href="#about">
          SCROLL TO DISCOVER <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
