import { Response, Request, NextFunction } from 'express';

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(401).json({
    authenticated: false,
    message: 'user has not been authenticaated',
  });
}
