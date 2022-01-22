import { CorsOptions } from 'cors';
import { config as envConfig } from 'dotenv';
import { StrategyOptionsWithRequest as GoogleStrategyOptions } from 'passport-google-oauth20';

envConfig();

interface IConfig {
  cors: CorsOptions;
  server: {
    sessionSecret: string;
    production: boolean;
    port: number;
  };
  mongodb: {
    uri: string;
  };
  oauth: {
    google: GoogleStrategyOptions;
  };
}

const Config: IConfig = {
  server: {
    sessionSecret: process.env.SESSION_SECRET ?? '',
    production: false,
    port: 3000,
  },
  cors: {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  },
  mongodb: {
    uri: process.env.MONGODB_URI ?? '',
  },
  oauth: {
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      callbackURL: `http://localhost:3000/auth/google/callback`,
      passReqToCallback: true,
    },
  },
};

export default Config;
