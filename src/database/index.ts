import { createConnection } from 'typeorm';

createConnection()
  .then((connection) => {
    console.log('Database is on 🔥');
  })
  .catch((error) => {
    console.log('Error to create connection ❌');
  });
