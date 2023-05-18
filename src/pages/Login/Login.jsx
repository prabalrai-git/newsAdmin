import React from "react";

function Login() {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "lightblue",
          color: "black",
          border: "none",
          padding: "8px 16px",
          cursor: "pointer",
        }}
        onClick={google}
      >
        Login with google
      </div>
    </div>
  );
}

export default Login;
