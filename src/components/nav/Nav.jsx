import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../Logout/Logout";
import { Profile } from "../Profile/Profile";

function Nav(props) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className={styles.contenedor}>
      <div>
        <Link to="/about" className={styles.text}>
          <h1>About</h1>
        </Link>
      </div>
      <div>
        <Link to="/favorites" className={styles.text}>
          <h1>Favorites</h1>
        </Link>
      </div>
      <div>
        <Link to="/home" className={styles.text}>
          <h1>Home</h1>
        </Link>
      </div>
      <div className={styles.login} >
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
