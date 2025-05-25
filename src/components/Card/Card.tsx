import styles from "./Card.module.css";

interface Props {
  id: string;
  title: string;
  icon: string;
  subtitle: string;
  text: string;
  tag: string;
}

function Card({ id, title, icon, subtitle, text, tag }: Props) {
  return (
    <div className={styles.card} id={id}>
      <div className={styles.titleContainer}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <img src={icon} alt="Icon" title={id} className={styles.icon} />
      </div>
      <h4 className={styles.cardSubtitle}>{subtitle}</h4>
      <p className={styles.cardText}>{text}</p>
      <h4 className={styles.cardTag}>{tag}</h4>
    </div>
  );
}

export default Card;

/* this component is for cards */
