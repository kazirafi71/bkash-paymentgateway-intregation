global.idToken = null;

module.exports.setGlobalIdToken = (info) => {
  global.idToken = info;
};

module.exports.getGlobalIdToken = () => global.idToken;
