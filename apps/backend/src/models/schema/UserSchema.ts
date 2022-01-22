import { prop, getModelForClass } from '@typegoose/typegoose';

interface GoogleAuth {
  id: string;
  accessToken: string;
  refreshToken: string;
}
interface TwitterAuth {
  id: string;
  accessToken: string;
  accessSecret: string;
}

class User {
  @prop()
  public name?: string;

  @prop()
  public email?: string;

  @prop()
  public google?: GoogleAuth;

  @prop()
  public twitter?: TwitterAuth;

  @prop()
  public profileImg?: string;
}

export default getModelForClass(User);
