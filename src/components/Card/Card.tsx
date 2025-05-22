import styles from "./Card.module.css";

interface Props {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  tag: string;
}

function Card({ id, title, subtitle, text, tag }: Props) {
  return (
    <div className={styles.card} id={id}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <h4 className={styles.cardSubtitle}>{subtitle}</h4>
      <p className={styles.cardText}>{text}</p>
      <h4 className={styles.cardTag}>{tag}</h4>
    </div>
  );
}

export default Card;

/* this component is for cards */
