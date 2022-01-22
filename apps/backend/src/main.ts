import express from 'express';
import passport from 'passport';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import MongoStore from 'connect-mongo';
import Config from './config/Config';
import Mongo from './service/Mongo';
import Passport from './service/Passport';
import AuthRoute from './routes/AuthRoute';

async function main() {
  const app = express();
  const { server: serverSetting, cors: corsSetting } = Config;

  // Database Setup
  Mongo.init();

  // Strategy Setup
  Passport.init();

  app.use(cors(corsSetting));
  app.use(express.json());
  app.use(cookieParser());

  // Express session
  app.use(
    expressSession({
      resave: false,
      saveUninitialized: true,
      secret: serverSetting.sessionSecret,
      store: MongoStore.create({
        mongoUrl: Config.mongodb.uri,
      }),
    })
  );

  // Passport session
  app.use(passport.initialize());
  app.use(passport.session());

  // Routes
  app.use('/auth', AuthRoute);

  // Server Listener
  const server = app.listen(serverSetting.port, () => {
    console.log(`Listening at http://localhost:${serverSetting.port}`);
  });

  server.on('error', console.error);
}

main();
