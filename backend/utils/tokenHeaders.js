const bkashConfig = require("../config/bkashConfig.json");
const tokenHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    username: bkashConfig.username,
    password: bkashConfig.password,
  };
};

module.exports = tokenHeaders;
