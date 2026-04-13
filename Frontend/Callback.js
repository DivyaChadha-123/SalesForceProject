import { useEffect } from "react";
import axios from "axios";

const Callback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    console.log("CODE:", code);

    if (code) {
      axios.post("http://localhost:5000/api/token", { code })
        .then(res => {
          console.log("TOKEN:", res.data);

          localStorage.setItem("accessToken", res.data.access_token);
          localStorage.setItem("instanceUrl", res.data.instance_url);

          window.location.href = "/";
        })
        .catch(err => {
          console.error("TOKEN ERROR:", err.response?.data || err.message);
        });
    }
  }, []);

  return <h2>Logging in...</h2>;
};

export default Callback;
/*import { useEffect } from "react";
import axios from "axios";

const Callback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      axios.post("http://localhost:5000/api/token", { code })
        .then(res => {
          localStorage.setItem("accessToken", res.data.access_token);
          localStorage.setItem("instanceUrl", res.data.instance_url);

          window.location.href = "/";
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, []);

  return <h2>Logging in...</h2>;
};

export default Callback;*/
