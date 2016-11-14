const localIp = require("node-localip");
module.exports = (cb) => {
  localIp((err, ip) => {
    cb(err, ip);
  });
};
