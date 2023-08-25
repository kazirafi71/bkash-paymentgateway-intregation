const bkashConfig = require("../config/bkashConfig.json");
const fetch = require("node-fetch");
const { setGlobalIdToken } = require("./globalData");
const { StatusCodes } = require("http-status-codes");
const { response } = require("./response");
const tokenHeaders = require("./tokenHeaders");

const grantToken = async (req, res, next) => {
  console.log("Grant Token API Start !!");
  try {
    const tokenResponse = await fetch(bkashConfig.grant_token_url, {
      method: "POST",
      headers: tokenHeaders(),
      body: JSON.stringify({
        app_key: bkashConfig.app_key,
        app_secret: bkashConfig.app_secret,
      }),
    });
    const tokenResult = await tokenResponse.json();
    console.log(
      "🚀 ~ file: grantToken.js:19 ~ grantToken ~ tokenResult:",
      tokenResult
    );

    setGlobalIdToken(tokenResult?.id_token);

    next();
  } catch (e) {
    return response(
      res,
      StatusCodes.UNAUTHORIZED,
      false,
      {},
      "You are not allowed"
    );
  }
};

module.exports = grantToken;
