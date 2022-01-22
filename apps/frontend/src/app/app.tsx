import { GlobalStyle } from '../styles/global';
import { CountdownProvider } from '../hooks/usePomodoroClock';
import { HomePage } from '../components';

export function App() {
  return (
    <CountdownProvider>
      <GlobalStyle/>
      <HomePage />
    </CountdownProvider>
  );
}

export default App;
