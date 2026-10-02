import { useEffect, useRef, useState } from "react";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/school";
import { useTheme } from "../../hooks/useTheme";
import styles from "../../styles/Page.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const menuButton = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    addEventListener("keydown", close);
    return () => removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className={styles.header}>
      <a
        href="#home"
        className={styles.brand}
        aria-label="Tulas International School home"
      >
        <img src="/images/logo.webp" alt="" width="56" height="56" />
        <span>
          TULAS<small>INTERNATIONAL SCHOOL</small>
        </span>
      </a>
      <nav
        id="main-navigation"
        className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        aria-label="Main navigation"
      >
        {navigation.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className={styles.headerActions}>
        <button
          className={styles.iconButton}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
        </button>
        <a className={styles.apply} href="https://admission.tis.edu.in/">
          Apply now <ArrowUpRight size={16} />
        </a>
        <button
          ref={menuButton}
          className={`${styles.iconButton} ${styles.menuButton}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
