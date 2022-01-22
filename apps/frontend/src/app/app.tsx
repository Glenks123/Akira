import { Route, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { GlobalStyle } from '../styles/global';

export function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
    </>
    // <StyledApp>
    //   <div role="navigation">
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/login">Login</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <Route
    //     path="/"
    //     exact
    //     render={() => (
    //       <div>
    //         This is the generated root route.{' '}
    //         <Link to="/login">Click here for login page.</Link>
    //       </div>
    //     )}
    //   />
    //   <Route
    //     path="/login"
    //     exact
    //     render={() => (
    //       <Navbar />
    //     )}
    //   />
    // </StyledApp>
  );
}

export default App;
