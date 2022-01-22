import { usePomodoroClock } from "../../hooks/usePomodoroClock";
import { Container, ClockContainer, ButtonsContainer } from "./styles";

export function PomodoroClock() {
  const { hasFinished, isActive, minutes, resetCountdown, seconds, startCountdown } = usePomodoroClock();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Container>
      <h1>Let's be productive!</h1>
      <ClockContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </ClockContainer>

      <ButtonsContainer>
        <button disabled={isActive} onClick={startCountdown} className={isActive ? 'disabled' : 'start'} >Start</button>
        <button disabled={!isActive} onClick={resetCountdown} className={isActive ? 'reset' : 'disabled'} >Stop</button>
      </ButtonsContainer>
    </Container>
  )
}