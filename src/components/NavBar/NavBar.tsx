import Button from "../Button/Button";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navGroup}>
          <a href="#">Home</a>
          <a href="#Roles">Roles</a>
          <a href="#News">News</a>
          <a style={{ fontStyle: "italic" }} href="#VIP">
            VIP
          </a>
        </div>
        <div className={styles.navGroup}>
          <Button
            text="Connect to Server"
            hoverTitle="Join the gmod server!"
            buttonStyle={{
              backgroundImage:
                "linear-gradient(to right,rgb(33, 54, 131),rgb(90, 107, 168))",
            }}
            onClickButton={() =>
              window.open("steam://connect/194.69.160.66:27015", "_blank")
            }
          />
          <Button
            text="Join Our Discord"
            hoverTitle="Join us on discord :)"
            onClickButton={() =>
              window.open("https://discord.gg/ZuM4tpWK84", "_blank")
            }
          />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

/* this component is the navbar section*/

/* add alt for button */
