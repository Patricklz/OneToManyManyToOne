import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env' });
}

const app = require('./app').default;

app.listen(process.env.PORT_SERVICE || 3333);
