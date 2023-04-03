import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../Logout/Logout";                                         // MODIFICAR LOS DIV PARA PODER MOVER EL CONTAINER CON EL LOGGIN JUNTO Y NO SEPARADO
import { Profile } from "../Profile/Profile";
import { useState, useEffect } from "react";

function Nav(props) {
  const { isAuthenticated } = useAuth0();
  const [showIcons, setShowIcons] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setShowIcons(true);
    } else {
      setShowIcons(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.contenedor}>
      <div className={styles.links}>
        {showIcons ? (
          <>
            <Link to="/home" className={styles.iconLink}>
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/favorites" className={styles.iconLink}>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link to="/about" className={styles.iconLink}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </>
        ) : (
          <>
            <Link to="/home" className={styles.text}>
              <h1>Home</h1>
            </Link>
            <Link to="/favorites" className={styles.text}>
              <h1>Favorites</h1>
            </Link>
            <Link to="/about" className={styles.text}>
              <h1>About</h1>
            </Link>
          </>
        )}
      </div>
      <div className={styles.login}>
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton className={styles.boton} />
          </>
        ) : (
          <LoginButton className={styles.boton} />
        )}
      </div>
    </div>
  );
}

export default Nav;