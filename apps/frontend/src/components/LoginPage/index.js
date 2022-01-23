import css from './styles.module.css';
import { api } from '../../service/api';

export function LoginPage() {
  const getData = async () => {
    const { data } = await api.get('/auth/status', {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Credentials': true,
      },
    });
    console.log(data);
  };
  return (
    <div id="root">
      <div className={css.container}>
        <div className={css.twoSections}>
          <div className={css.introduction}>
            <h1>
              <strong>Akira</strong>
            </h1>

            <ul>
              <li>Bookmarks</li>
              <li>To do list</li>
              <li>Pomodoro timer</li>
            </ul>
          </div>

          <div className={css.form}>
            <form>
              <h2 className={css.heading}>
                <strong>Welcome back!</strong>
              </h2>
              <div>Organise your workplace and stay focused</div>
              <br />
              <br />
              <br />

              <label className={css.label} htmlFor="uname">
                E-mail or username
              </label>
              <input
                className={css.input}
                type="text"
                id="uname"
                placeholder="Type your e-mail or username"
                required
              />

              <label htmlFor="password" className={css.label}>
                Password
              </label>
              <input
                className={css.input}
                type="password"
                id="password"
                placeholder="Type your password"
                required
              />

              <button type="submit" className={css.signinBtn}>
                Sign in
              </button>

              <div className={css.orClass}>Or sign in with google account</div>

              <button type="button" className={css.loginWithGoogleBtn}>
                <a href="http://localhost:3000/auth/google" target="_blank">
                  Sign in with Google
                </a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
