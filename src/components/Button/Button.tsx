import styles from "./Button.module.css";

interface Props {
  text: string;
  hoverText: string;
  variant?: "pink" | "discord";
  className?: string;
  onClickButton: () => void;
}

function Button({ text, hoverText, className, variant, onClickButton }: Props) {
  return (
    <button
      type="button"
      title={hoverText}
      className={`
        ${styles.button} 
        ${variant ? styles[variant] : ""} 
        ${className}
      `}
      onClick={onClickButton}
    >
      {text}
    </button>
  );
}

export default Button;

/* this is how I apply it: buttonType={{ background-image: }} */
