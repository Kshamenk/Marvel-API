import React from "react";
import styles from './Logout.module.css'
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className={styles.boton} onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};