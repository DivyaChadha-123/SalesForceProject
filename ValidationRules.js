/*import React, { useState } from "react";
import axios from "axios";

const ValidationRules = ({ accessToken, instanceUrl }) => {
  const [rules, setRules] = useState([]);
  const [selected, setSelected] = useState({});

  const fetchRules = async () => {
    const res = await axios.post("http://localhost:5000/api/getRules", { accessToken, instanceUrl });
    setRules(res.data);
    const init = {};
    res.data.forEach(r => { init[r.Id] = r.Active; });
    setSelected(init);
  };

  const toggleLocal = (id) => {
    setSelected(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const deployAll = async () => {
    const updates = Object.keys(selected).map(id =>
      axios.post("http://localhost:5000/api/toggleRule", {
        accessToken,
        instanceUrl,
        ruleId: id,
        active: selected[id]
      })
    );
    await Promise.all(updates);
    alert("All changes deployed!");
    fetchRules();
  };

  return (
    <div>
      <button onClick={fetchRules}>Get Validation Rules</button>
      <ul>
        {rules.map(r => (
          <li key={r.Id}>
            <input
              type="checkbox"
              checked={selected[r.Id] || false}
              onChange={() => toggleLocal(r.Id)}
            />
            {r.ValidationName} - {selected[r.Id] ? "Active" : "Inactive"}
          </li>
        ))}
      </ul>
      <button onClick={deployAll}>Deploy All Changes</button>
    </div>
  );
};

export default ValidationRules;*/
/*import { useEffect, useState } from "react";
import axios from "axios";

const ValidationRules = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const instanceUrl = localStorage.getItem("instanceUrl");

    if (!accessToken) return;

    axios.post("http://localhost:5000/api/getRules", {
      accessToken,
      instanceUrl,
    })
    .then(res => setRules(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Validation Rules</h2>
      {rules.map(rule => (
        <div key={rule.Id}>
          <p>{rule.ValidationName} - {rule.Active ? "Active" : "Inactive"}</p>
        </div>
      ))}
    </div>
  );
};

export default ValidationRules;*/
/*import React, { useState, useEffect } from "react";

function ValidationRules() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    // Replace this with your actual API later
    const fetchedRules = [
      {
        Id: "1",
        ValidationName: "Account_Name_Required",
        Active: true,
      },
      {
        Id: "2",
        ValidationName: "Phone_Required",
        Active: true,
      },
      {
        Id: "3",
        ValidationName: "Revenue_Positive",
        Active: true,
      },
      {
        Id: "4",
        ValidationName: "Website_Format_Check",
        Active: true,
      },
      {
        Id: "5",
        ValidationName: "Account_Number_Length",
        Active: true,
      },
    ];

    setRules(fetchedRules);
  }, []);

  const toggleRule = (id) => {
    const updatedRules = rules.map((rule) =>
      rule.Id === id
        ? { ...rule, Active: !rule.Active }
        : rule
    );

    setRules(updatedRules);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Validation Rules</h1>

      {rules.map((rule) => (
        <div key={rule.Id} style={{ margin: "15px" }}>
          <strong>{rule.ValidationName}</strong>

          <div>
            Status:{" "}
            <span style={{ color: rule.Active ? "green" : "red" }}>
              {rule.Active ? "Active" : "Inactive"}
            </span>
          </div>

          <button
            onClick={() => toggleRule(rule.Id)}
            style={{ marginTop: "5px", padding: "5px 10px" }}
          >
            Toggle
          </button>
        </div>
      ))}
    </div>
  );
}

export default ValidationRules;*/

import React, { useState } from "react";

function ValidationRules() {
  const [rules, setRules] = useState([
    {
      Id: "1",
      ValidationName: "Account_Name_Required",
      Active: true,
    },
    {
      Id: "2",
      ValidationName: "Phone_Required",
      Active: true,
    },
    {
      Id: "3",
      ValidationName: "Revenue_Positive",
      Active: true,
    },
    {
      Id: "4",
      ValidationName: "Website_Format_Check",
      Active: true,
    },
    {
      Id: "5",
      ValidationName: "Account_Number_Length",
      Active: true,
    },
  ]);

  // ✅ FIXED TOGGLE FUNCTION
  const toggleRule = (rule) => {
    const updatedActive = !rule.Active;

    setRules((prev) =>
      prev.map((r) =>
        r.Id === rule.Id ? { ...r, Active: updatedActive } : r
      )
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Validation Rules</h1>

      {rules.map((rule) => (
        <div
          key={rule.Id}
          style={{
            margin: "15px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <h3>{rule.ValidationName}</h3>

          <p>
            Status:{" "}
            <span style={{ color: rule.Active ? "green" : "red" }}>
              {rule.Active ? "Active" : "Inactive"}
            </span>
          </p>

          {/* ✅ CORRECT BUTTON */}
          <button
            onClick={() => toggleRule(rule)}
            style={{
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Toggle
          </button>
        </div>
      ))}
    </div>
  );
}

export default ValidationRules;