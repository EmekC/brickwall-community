import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

const cardCookContent =
  "Cook illegal substances in risky labs. Be careful not the get caught!";

const cardThiefContent =
  "Sneak in, steal big, vanish fast. Stay in the shadows, dodge the law.";

const cardInvestigatorContent =
  "Investigate deaths, track down criminals, solve mysteries. give the information to the police and help them arrest the criminals.";

const cardHackerContent =
  "Hack keypads in unique ways or track down players with the power of technology, Use your skills and charge for your services.";

function CardsContainer() {
  return (
    <div className={styles.cardsContainer}>
      <Card
        id="Cook"
        title="Cook"
        icon="meth-icon.png"
        subtitle="high-risk high-reward"
        text={cardCookContent}
        tag="<criminal>"
      />

      <Card
        id="Thief"
        title="Thief"
        icon="thief-icon.png"
        subtitle="Criminal"
        text={cardThiefContent}
        tag="<criminal>"
      />

      <Card
        id="Investigator"
        title="Investigator"
        icon="investigator-icon.png"
        subtitle="Police Investigator"
        text={cardInvestigatorContent}
        tag="<criminal>"
      />

      <Card
        id="Hacker"
        title="Hacker"
        icon="hacker-icon.png"
        subtitle="Criminal"
        text={cardHackerContent}
        tag="<criminal>"
      />
    </div>
  );
}

export default CardsContainer;
