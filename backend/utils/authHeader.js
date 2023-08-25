const { getGlobalIdToken } = require("./globalData");
const bkashConfig = require("../config/bkashConfig.json");

const authHeaders = async () => {
  let info = await getGlobalIdToken();
  console.log("🚀 ~ file: authHeader.js:6 ~ authHeaders ~ info:", info);

  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    authorization: info,
    "x-app-key": bkashConfig.app_key,
  };
};

module.exports = authHeaders;
