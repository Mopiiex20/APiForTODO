import { connection, connect } from "mongoose";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
    
      const uri = "mongodb+srv://mopiiex:admin@dbforapitext-unteh.azure.mongodb.net/test?retryWrites=true&w=majority"
      connect(uri, {
          useNewUrlParser: true,
          dbName: 'users'
      }).catch((e) => {
          console.log('Database connectivity error ', e)
      })
      const db: any = connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function () {
          console.log("connected");
      });
  }
  }
];


// export default (async () => {
    
//     const uri = "mongodb+srv://mopiiex:admin@dbforapitext-unteh.azure.mongodb.net/test?retryWrites=true&w=majority"
//     connect(uri, {
//         useNewUrlParser: true,
//         dbName: 'users'
//     }).catch((e) => {
//         console.log('Database connectivity error ', e)
//     })
//     const db: any = connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function () {
//         console.log("connected");
//     });
// })();