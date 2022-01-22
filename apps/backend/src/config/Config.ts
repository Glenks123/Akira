import { CorsOptions } from 'cors';
import { config as envConfig } from 'dotenv';
import { StrategyOptionsWithRequest as GoogleStrategyOptions } from 'passport-google-oauth20';
import { IStrategyOption as TwitterStrategyOptions } from 'passport-twitter';

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
    twitter: TwitterStrategyOptions;
  };
}

const Config: IConfig = {
  server: {
    sessionSecret: process.env.SESSION_SECRET ?? '',
    production: false,
    port: 3000,
  },
  cors: {
    origin: process.env.CORS_ORIGIN,
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
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true,
    },
    twitter: {
      consumerKey: process.env.TWITTER_CLIENT_ID ?? '',
      consumerSecret: process.env.TWITTER_CLIENT_ID ?? '',
      callbackURL: 'http://localhost:3000/auth/twitter/callback',
    },
  },
};

export default Config;
