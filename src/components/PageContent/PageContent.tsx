import styles from "./PageContent.module.css";
/* components */
import ContentSection from "../ContentSection/ContentSection";
import CardsContainer from "../CardsContainer/CardsContainer";
import Header from "../Header/Header";
import Button from "../Button/Button";

const newsContent = `Welcome to the server!
We're actively developing new features, jobs, and systems to make your experience better.
Stay tuned for updates, events, and patch notes — things are just getting started.`;

const vipContent = `Unlock exclusive perks, jobs, and cosmetics with a VIP account.
Support the server and stand out with premium benefits — instant access.`;

const rolesSubtitle = (
  <>
    Choose who you want <span className={"span-grey"}>to be</span>
  </>
);

function PageContent() {
  return (
    <div className={styles.pageContent}>
      <Header />
      <ContentSection id="Roles" title="Custom Roles" subtitle={rolesSubtitle}>
        <CardsContainer />
      </ContentSection>
      <ContentSection id="News" title="News" text={newsContent} />
      <ContentSection
        id="VIP"
        title="VIP Access"
        text={vipContent}
        sectionStyle={{ position: "relative" }}
      >
        <Button
          text={"Purchase VIP"}
          hoverTitle={"Purchase VIP Access!"}
          className={styles.mobilePosition}
          buttonStyle={{
            position: "absolute",
            left: "851px",
            bottom: "25px",
            backgroundImage: "linear-gradient(to right, #b630d0, #87a1ff)",
          }}
          onClickButton={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </ContentSection>
    </div>
  );
}

export default PageContent;

/* this is how I apply it: sx={{ margin: "20px", padding: "20px" }} */

/* <Card
          id="Cook"
          title="Cook"
          subtitle="high-risk high-reward"
          text={cardCookContent}
          tag="<criminal>"
        />
*/
