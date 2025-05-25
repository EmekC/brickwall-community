import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#Roles">Roles</a>
        <a href="#News">News</a>
        <a style={{ fontStyle: "italic" }} href="#VIP">
          VIP
        </a>
      </nav>
    </div>
  );
}

export default NavBar;

/* this component is the navbar section*/
