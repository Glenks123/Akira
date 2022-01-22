import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import Config from '../../config/Config';
import UserSchema from '../../models/schema/UserSchema';

class GoogleStrategy {
  static init() {
    passport.use(
      new Strategy(
        Config.oauth.google,
        async (req, accessToken, refreshToken, profile, done) => {
          const profileJson = profile._json;
          const user = await UserSchema.findOne({ google: profile.id });

          if (user) {
            user.update({
              name: profileJson.given_name,
              profileImg: profileJson.picture,
            });

            return done(user.errors, user);
          }

          const newUser = await UserSchema.create({
            name: profileJson.given_name,
            email: profileJson.email,
            google: profile.id,
            profileImg: profileJson.picture,
            accessToken: accessToken,
            refreshToken: refreshToken,
          });

          return done(newUser.errors, newUser);
        }
      )
    );
  }
}

export default GoogleStrategy;
