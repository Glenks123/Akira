import { Response, Request } from 'express';
import '../../service/Passport';

export default class AuthController {
  public static authFailure(_req: Request, res: Response) {
    res.status(401).json({
      success: false,
      message: 'User has failed to authenticate',
    });
  }

  public static authSuccess(req: Request, res: Response) {
    res.status(200).json({
      success: true,
      message: 'User has authenticated successfully',
      user: req.user,
      cookies: req.cookies,
    });
  }

  public static logout(req: Request, res: Response) {
    req.logout();

    req.session.destroy((err: Error) => {
      if (err) {
        res.status(400).json({
          authenticated: true,
          message: 'Error: Failed to destroy session during logout.' + err,
        });
      }

      req.user = undefined;
      res.status(200).json({
        message: 'User has successfully logged out of the session',
      });
    });
  }

  public static status(req: Request, res: Response) {
    res.status(200).json({
      authenticated: true,
      message: 'User is currently logged in the session',
      user: req.user,
      cookies: req.cookies,
    });
  }
}
