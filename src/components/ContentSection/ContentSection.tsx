import type { ReactNode } from "react";
import styles from "./ContentSection.module.css";

interface Props {
  children?: ReactNode;
  id: string;
  title: string;
  subtitle?: string | React.ReactNode;
  text?: string;
  footer?: string;
  sx?: React.CSSProperties;
}

function ContentSection({
  children,
  id,
  title,
  subtitle,
  text,
  footer,
  sx,
}: Props) {
  return (
    <section id={id}>
      <div className={styles.contentSection}>
        <h2 className={`text-shadow ${styles.title}`}>{title}</h2>
        <div className={styles.contentContainer} style={sx}>
          {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
          {text && <p className={styles.text}>{text}</p>}
          {children}
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
