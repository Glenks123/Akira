import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import Config from '../../config/Config';
import UserSchema from '../../models/schema/UserSchema';

class GoogleStrategy {
  public static init() {
    passport.use(
      new Strategy(
        Config.oauth.google,
        async (_req, accessToken, refreshToken, profile, done) => {
          const profileJson = profile._json;
          const user = await UserSchema.findOne({
            google: {
              id: profile.id,
            },
          });

          if (user) {
            user.update({
              name: profile.displayName,
              profileImg: profile?.photos?.at(0)?.value,
              google: {
                id: profile.id,
                accessToken: accessToken,
                refreshToken: refreshToken,
              },
            });

            return done(user.errors, user);
          }

          const newUser = await UserSchema.create({
            name: profileJson.given_name,
            email: profileJson.email,
            profileImg: profileJson.picture,
            google: {
              id: profile.id,
              accessToken: accessToken,
              refreshToken: refreshToken,
            },
          });

          return done(newUser.errors, newUser);
        }
      )
    );
  }
}

export default GoogleStrategy;
