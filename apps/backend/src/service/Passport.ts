import passport from 'passport';
import UserSchema from '../models/schema/UserSchema';
import GoogleStrategy from '../utils/strategies/Google';

class Passport {
  public init(): void {
    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.deserializeUser((id, done) => {
      UserSchema.findById(id)
        .then((user) => {
          done(null, user);
        })
        .catch(() => {
          done(new Error('Failed to deserialize an user'));
        });
    });

    this.mountStrategies();
  }

  public mountStrategies() {
    try {
      GoogleStrategy.init();
    } catch (e) {
      console.error(e);
    }
  }
}

export default new Passport();
