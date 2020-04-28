const {
  DB_DIALECT: dialect,
  DB_HOST: host,
  DB_USER: username,
  DB_PASSWORD: password,
  DB_DATABASE: database,
  DB_SHOW_SQL: showSql,
  DB_TIME_ZONE: timezone,
} = process.env;

module.exports = {
  dialect,
  host,
  username,
  password,
  database,
  logging: showSql === 'true' ? console.log : () => {},
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  timezone,
};
