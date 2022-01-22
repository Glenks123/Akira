import passport from 'passport';
import Config from '../../config/Config';
import UserSchema from '../../models/schema/UserSchema';
import { Strategy as TwitterStrategy } from 'passport-twitter';

class GoogleStrategy {
  public static init() {
    passport.use(
      new TwitterStrategy(
        Config.oauth.twitter,
        async (token, tokenSecret, profile, done) => {
          const user = await UserSchema.findOne({
            email: profile.emails?.at(0)?.value,
          });

          if (user) {
            user.update({
              name: profile.displayName,
              profileImg: profile?.photos?.at(0)?.value,
              twitter: {
                id: profile.id,
                accessToken: token,
                accessSecret: tokenSecret,
              },
            });

            return done(user.errors, user);
          }

          const newUser = await UserSchema.create({
            name: profile.displayName,
            email: profile.emails?.at(0)?.value,
            profileImg: profile?.photos?.at(0)?.value,
            twitter: {
              id: profile.id,
              accessToken: token,
              accessSecret: tokenSecret,
            },
          });

          return done(newUser.errors, newUser);
        }
      )
    );
  }
}

export default GoogleStrategy;
