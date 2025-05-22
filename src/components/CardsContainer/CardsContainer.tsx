import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

const cardCookContent =
  "Prepare and sell illegal substances. Explosions and police raids are constant threats.";

function CardsContainer() {
  return (
    <div className={styles.cardsContainer}>
      <Card
        id="Cook"
        title="Cook"
        subtitle="high-risk high-reward"
        text={cardCookContent}
        tag="<criminal>"
      />

      <Card
        id="Cook"
        title="Cook"
        subtitle="high-risk high-reward"
        text={cardCookContent}
        tag="<criminal>"
      />

      <Card
        id="Cook"
        title="Cook"
        subtitle="high-risk high-reward"
        text={cardCookContent}
        tag="<criminal>"
      />

      <Card
        id="Cook"
        title="Cook"
        subtitle="high-risk high-reward"
        text={cardCookContent}
        tag="<criminal>"
      />
    </div>
  );
}

export default CardsContainer;
