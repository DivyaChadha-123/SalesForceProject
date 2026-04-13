const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Store token
let accessToken = "";
let instanceUrl = "";

// Save token
app.post("/api/save-token", (req, res) => {
  accessToken = req.body.accessToken;
  instanceUrl = req.body.instanceUrl;

  console.log("Token saved");
  res.json({ success: true });
});

// Fetch rules
app.get("/api/rules", async (req, res) => {
  try {
    const response = await axios.get(
      `${instanceUrl}/services/data/v59.0/tooling/query/?q=SELECT+Id,ValidationName,Active+FROM+ValidationRule`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.json(response.data.records);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send("Error fetching rules");
  }
});

// Toggle rule
app.post("/toggle-rule", async (req, res) => {
  const { ruleId, active } = req.body;

  try {
    await axios.patch(
      `${instanceUrl}/services/data/v59.0/tooling/sobjects/ValidationRule/${ruleId}`,
      { Active: active },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Salesforce updated");
    res.json({ success: true });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send("Error updating rule");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});




