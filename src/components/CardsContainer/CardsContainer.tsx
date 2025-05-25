import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

const cardCookContent =
  "Craft illegal substances in risky labs. Explosions and raids come with the job.";

const cardThiefContent =
  "Sneak in, steal big, vanish fast. Stay in the shadows, dodge the law.";

const cardInvestigatorContent =
  "Dig up dirt or sell it. Badge or not, everyone’s hiding something.";

const cardHackerContent =
  "Break into systems, drain accounts, kill cams. Crime goes digital.";

function CardsContainer() {
  return (
    <div className={styles.cardsContainer}>
      <Card
        id="Cook"
        title="Cook"
        icon="public/meth-icon.png"
        subtitle="high-risk high-reward"
        text={cardCookContent}
        tag="<criminal>"
      />

      <Card
        id="Thief"
        title="Thief"
        icon="public/thief-icon.png"
        subtitle="high-risk high-reward"
        text={cardThiefContent}
        tag="<criminal>"
      />

      <Card
        id="Investigator"
        title="Investigator"
        icon="public/investigator-icon.png"
        subtitle="high-risk high-reward"
        text={cardInvestigatorContent}
        tag="<criminal>"
      />

      <Card
        id="Hacker"
        title="Hacker"
        icon="public/hacker-icon.png"
        subtitle="high-risk high-reward"
        text={cardHackerContent}
        tag="<criminal>"
      />
    </div>
  );
}

export default CardsContainer;
