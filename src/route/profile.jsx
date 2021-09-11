import React from "react";
import { useHistory } from "react-router";
import Navigation from "../components/navigation";
import { firebaseAuth } from "../firebase";

const Profile = () => {
  const history = useHistory();
  const onLogoutClick = () => {
    firebaseAuth.signOut();
    history.push({
      pathname: "/",
    });
  };
  return (
    <>
      <Navigation />
      <span>Profile</span>
      <button onClick={onLogoutClick}>Logout</button>
    </>
  );
};

export default Profile;
