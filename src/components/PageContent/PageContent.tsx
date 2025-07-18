import styles from "./PageContent.module.css";
/* components */
import ContentSection from "../ContentSection/ContentSection";
import CardsContainer from "../CardsContainer/CardsContainer";
import Header from "../Header/Header";
// import Button from "../Button/Button";

const newsContent = `Here we will share news about the server.
Enjoy the best GMOD DarkRP experience with us!`;

// const vipContent = `Unlock exclusive perks, jobs, and cosmetics with a VIP account.
// Support the server and stand out with premium benefits — instant access.`;

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
      {/* <ContentSection
        id="VIP"
        title="VIP Access"
        text={vipContent}
        className={styles.vipSection}
      >
        <Button
          text={"Purchase VIP"}
          hoverText={"Purchase VIP Access!"}
          variant="pink"
          className={styles.vipBtnPosition}
          onClickButton={function (): void {}}
        />
      </ContentSection> */}
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


position: "absolute",
            left: "851px",
            bottom: "25px",
            backgroundImage: "linear-gradient(to right, #b630d0, #87a1ff)",
*/
