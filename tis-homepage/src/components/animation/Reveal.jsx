import { useEffect, useRef } from "react";
import styles from "../../styles/Page.module.css";

export default function Reveal({ children, delay = 0, className = "" }) {
  const element = useRef(null);
  useEffect(() => {
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const node = element.current;
    node.dataset.reveal = "waiting";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={element}
      className={`${styles.reveal} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}
