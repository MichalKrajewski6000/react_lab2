import React from "react";
import "./LoginPage.css";

import Users from "../data/users.json";

const LoginPage = () => {
  const formHandler = async (event) => {
    event.preventDefault();

    const user = Users.filter(
      (user) =>
        user.email === event.target[0].value &&
        user.password === event.target[1].value
    )[0];

    if (user) {
      sessionStorage.setItem("uid", user.id);
      sessionStorage.setItem("user", user.user);
      window.location.reload("/");
    } else {
      alert("User not found!!!");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        textAlign: "center",
      }}
    >
      <div
        className={`${
          window.innerWidth < 576 ? "auth-form-mobile" : "auth-form-desktop"
        }`}
      >
        <form onSubmit={formHandler}>
          <input type="text" name="email" />
          <br />
          <input type="password" name="password" />
          <br />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
