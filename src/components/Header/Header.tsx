import styles from "./Header.module.css";

interface Props {
  title?: string;
  subtitle?: string;
}

function Header({}: Props) {
  return (
    <div className={styles.heroContent}>
      <h1>Brickwall Community</h1>
      <h3>Unique Dark RP Experience</h3>
    </div>
  );
}

export default Header;

/* leaving interface if to be made dynamically */
