import express from 'express';
import passport from 'passport';
import AuthController from '../middleware/controllers/AuthController';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

// Google Authentication
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
    accessType: 'offline',
    prompt: 'consent',
  })
);
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure',
  })
);

/**
 * * Twitter auth wont be used yet due to twitter's application pending request
 */

// router.get('/auth/twitter', passport.authenticate('twitter'));
// router.get(
//   '/auth/twitter/callback',
//   passport.authenticate('twitter', {
//     successRedirect: '/auth/success',
//     failureRedirect: '/auth/failure',
//   })
// );

// Exception
router.get('/failure', AuthController.authFailure);
router.get('/success', isAuthenticated, AuthController.authSuccess);

// General Routes
router.get('/logout', AuthController.logout);
router.get('/status', isAuthenticated, AuthController.status);

export default router;
