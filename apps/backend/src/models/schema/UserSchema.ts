import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
  @prop()
  public name?: string;

  @prop()
  public email?: string;

  @prop()
  public google?: string;

  @prop()
  public profileImg?: string;

  @prop()
  public accessToken?: string;

  @prop()
  public refreshToken?: string;
}

export default getModelForClass(User);
