import React from "react";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/oauth/login";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Salesforce Login</h2>
      <button onClick={handleLogin}>
        Login to Salesforce
      </button>
    </div>
  );
};

export default Login;

/*import React from "react";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/oauth/login";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Salesforce Login</h2>
      <button onClick={handleLogin}>
        Login to Salesforce
      </button>
    </div>
  );
};

export default Login;*/