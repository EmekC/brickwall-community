import styles from "./Button.module.css";

interface Props {
  text: string;
  hoverTitle: string;
  buttonStyle?: React.CSSProperties;
  onClickButton: () => void;
  className?: string;
}

function Button({
  text,
  hoverTitle,
  buttonStyle,
  className,
  onClickButton,
}: Props) {
  return (
    <button
      type="button"
      title={hoverTitle}
      className={`${styles.button} ${className || ""}`}
      style={buttonStyle}
      onClick={onClickButton}
    >
      {text}
    </button>
  );
}

export default Button;

/* this is how I apply it: buttonType={{ background-image: }} */
