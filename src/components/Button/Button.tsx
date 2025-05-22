import styles from "./NavBar.module.css";

interface Props {
  text: string;
  onClickButton: () => void;
}

function Button({ text, onClickButton }: Props) {
  return (
    <button type="button" className={styles.Button} onClick={onClickButton}>
      {text}
    </button>
  );
}

export default Button;
