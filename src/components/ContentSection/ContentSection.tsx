import type { ReactNode } from "react";
import styles from "./ContentSection.module.css";

interface Props {
  id: string;
  title: string;
  subtitle?: string | React.ReactNode;
  text?: string;
  children?: ReactNode;
  footer?: string;
  className?: string;
}

function ContentSection({
  children,
  id,
  title,
  subtitle,
  text,
  footer,
  className,
}: Props) {
  return (
    <section id={id}>
      <div className={styles.contentSection}>
        <h2 className={`text-shadow ${styles.title}`}>{title}</h2>
        <div className={`${styles.contentContainer} ${className}`}>
          {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
          <div>
            {text && <p className={styles.text}>{text}</p>}
            {children}
          </div>
          {footer && (
            <footer style={{ paddingTop: "1.875rem" }}>{footer}</footer>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContentSection;

/* this component is for a section with a title and content */
