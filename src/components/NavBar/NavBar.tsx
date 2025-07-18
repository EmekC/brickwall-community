import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./NavBar.module.css";

function NavBar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={`${styles.navContainer} ${scrolled ? styles.navContainer_scroll : ""}`}>
      <nav className={styles.nav}>
        <div className={styles.navGroup}>
          <a href="#">Home</a>
          <a href="#Roles">Roles</a>
          <a href="#News">News</a>
          <a href="https://www.youtube.com/@brickwallrp" target="_blank" rel="noopener norefferer">Youtube</a>
          {/* <a style={{ fontStyle: "italic" }} href="#VIP">
            VIP
          </a> */}
        </div>
        <div className={styles.navGroup}>
          <Button
            text="Connect to Server"
            hoverText="Join the gmod server!"
            onClickButton={() =>
              window.open("steam://connect/194.69.160.66:27015", "_blank")
            }
          />
          <Button
            text="Join Our Discord"
            hoverText="Join us on discord :)"
            variant="discord"
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
