import { ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/school";
import styles from "../../styles/Page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <a className={styles.footerBrand} href="#home">
            TULAS<span>INTERNATIONAL SCHOOL</span>
          </a>
          <p>
            Dhoolkot, P.O. Selaqui, Chakrata Road
            <br />
            Dehradun – 248011, Uttarakhand
          </p>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
              <ArrowUpRight size={15} />
            </a>
          ))}
        </nav>
        <div className={styles.footerContact}>
          <span>LET'S TALK ABOUT THEIR FUTURE.</span>
          <a href="tel:+919837983791">+91 98379 83791</a>
          <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Tulas International School</span>
        <span>Independent frontend assessment · Unofficial redesign</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
