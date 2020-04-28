const { KEY_SECRET: secret } = process.env;
module.exports = {
  secret,
  expiresIn: '7d',
};
