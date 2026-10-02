import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { questions } from "../../data/school";
import Reveal from "../animation/Reveal";
import LinkButton from "../ui/LinkButton";
import styles from "../../styles/Page.module.css";

export default function Admissions() {
  return (
    <>
      <section className={styles.values}>
        <Reveal>
          <span className={styles.eyebrow}>
            A LITTLE SUPPORT. LIMITLESS POSSIBILITY.
          </span>
          <h2>
            “We feel supported in what we do
            <br /> and nudged further <em>to do more.”</em>
          </h2>
          <p>At Tulas, we believe in bringing out the best in every student.</p>
          <span className={styles.valuesAttribution}>THE TULAS PHILOSOPHY</span>
        </Reveal>
      </section>
      <section
        id="admissions"
        className={styles.admissions}
        aria-labelledby="admissions-title"
      >
        <Reveal className={styles.admissionsGrid}>
          <div>
            <span className={styles.eyebrow}>
              YOUR NEXT CHAPTER STARTS HERE
            </span>
            <h2 id="admissions-title">
              Come with a dream.
              <br />
              <em>Leave with a future.</em>
            </h2>
            <p>
              Get to know the campus. Meet the community.
              <br />
              Find out what a Tulas education could mean for your child.
            </p>
            <LinkButton href="https://admission.tis.edu.in/">
              Start your admission journey
            </LinkButton>
            <div className={styles.contactLinks}>
              <a href="tel:+919837983791">
                <Phone size={15} /> +91 98379 83791
              </a>
              <a href="mailto:info@tis.edu.in">
                <Mail size={15} /> info@tis.edu.in
              </a>
            </div>
          </div>
          <div className={styles.faq}>
            <span className={styles.eyebrow}>
              A FEW THINGS YOU MAY BE WONDERING
            </span>
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <ArrowUpRight size={18} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
            <p className={styles.faqNote}>
              A real conversation makes all the difference.
              <br />
              Our admissions team is here to help.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
