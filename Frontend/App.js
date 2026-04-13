/*import React, { useState, useEffect } from "react";
import Login from "./login";
import Callback from "./Callback";
import ValidationRules from "./ValidationRules";

function App() {
  const [sfData, setSfData] = useState(null);

  useEffect(() => {
    // Check if redirected from Salesforce OAuth
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const instanceUrl = params.get("instanceUrl");
    if (accessToken && instanceUrl) {
      setSfData({ accessToken, instanceUrl });
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Salesforce Validation Rule Manager</h1>
      {!sfData ? (
        <Login />
      ) : (
        <Validation accessToken={sfData.accessToken} instanceUrl={sfData.instanceUrl} />
      )}
    </div>
  );
}

export default App;*/


/*import React, { useState, useEffect } from "react";
import Login from "./login";
import ValidationRules from "./ValidationRules";

function App() {
  const [sfData, setSfData] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const instanceUrl = localStorage.getItem("instanceUrl");

    if (accessToken && instanceUrl) {
      setSfData({ accessToken, instanceUrl });
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Salesforce Validation Rule Manager</h1>
      {!sfData ? (
        <Login />
      ) : (
        <ValidationRules
          accessToken={sfData.accessToken}
          instanceUrl={sfData.instanceUrl}
        />
      )}
    </div>
  );
}

export default App;*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Callback from "./Callback";
import ValidationRules from "./ValidationRules";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValidationRules />} />
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;

/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Callback from "./Callback";
import ValidationRules from "./ValidationRules";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValidationRules />} />
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;*/
