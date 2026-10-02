import { ArrowUpRight } from "lucide-react";
import styles from "../../styles/Page.module.css";

export default function LinkButton({ href, children, secondary = false }) {
  return (
    <a
      href={href}
      className={`${styles.button} ${secondary ? styles.secondary : ""}`}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
