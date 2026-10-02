import { useEffect, useRef } from "react";
import styles from "../../styles/Page.module.css";

export default function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance = document.documentElement.scrollHeight - innerHeight;
        if (bar.current)
          bar.current.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0})`;
      });
    };
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    update();
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);
  return <div ref={bar} className={styles.progress} aria-hidden="true" />;
}
