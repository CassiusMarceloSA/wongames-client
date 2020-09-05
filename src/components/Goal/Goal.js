import React from 'react';
import styles from './styles';

const { ProgressBarContainer, Wrapper, ProgressBar, Circle, Div } = styles;

const calc = (v) => {
  return (v / 4) * 190;
};

export function GoalComponent() {
  return (
    <Wrapper>
      <ProgressBarContainer>
        <ProgressBar viewBox="0 0 85 85">
          <Circle
            fill
            lenght="3px"
            stroke={'#FFFFFF'}
            dashArray={true}
            cx="50%"
            cy="50%"
            r="30px"
          ></Circle>
          <Circle
            stroke="#006080"
            dashArray={true}
            lenght="10px"
            percent={calc(1)}
            cx="50%"
            cy="50%"
            r="30px"
          ></Circle>
        </ProgressBar>
        <Div role="img">
          +3
          <br />
          Visitas
        </Div>
      </ProgressBarContainer>
    </Wrapper>
  );
}
