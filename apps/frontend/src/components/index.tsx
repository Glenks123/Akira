import { Navbar } from './Navbar';
import { PomodoroClock } from './PomodoroClock';
import { LoginPage } from './LoginPage';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10rem;
`;

export function HomePage() {
  return (
    <LoginPage />
    // <div>
    //   <Navbar />
    //   <Grid>
    //     <PomodoroClock />
    //     <div>
    //       <h1>todos</h1>
    //     </div>
    //   </Grid>
    // </div>
  );
}
