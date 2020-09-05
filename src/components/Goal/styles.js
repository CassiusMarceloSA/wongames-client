import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  max-height: 200px;
  min-width: 135px;
  width: 150px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 15px 5px;
  padding: 15px 5px;
  border-radius: 15px;
  border: 5px solid ${({ theme }) => (theme.isDark ? '#0a0a0a09' : '#cccccc2a')};
`;
const ProgressBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  width: 80%;
  background-color: #efebe1;
  border-radius: 50%;
`;

const ProgressBar = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

const Circle = styled.circle`
  fill: transparent;
  stroke: ${({ stroke }) => stroke};
  stroke-width: ${({ lenght }) => lenght};
  stroke-linecap: round;
  stroke-dasharray: ${({ dashArray, percent }) =>
    dashArray ? `${percent} calc(30 * 2 * 3.141593)` : ''};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dasharray 1s ease;
  position: relative;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100px;
  width: 100%;
  flex-direction: column;
`;

const Current = styled.span`
  color: ${({ color }) => color || 'red'};
  font-weight: 700;
  font-size: 1.2rem;
`;

const Goal = styled.span`
  color: #a0a0a0;
  font-size: 0.75rem;
  margin-left: 5px;
  align-self: flex-end;
`;
const ProgressInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Div = styled.span`
  position: relative;
  text-align: center;
  font-size: 1.8rem;
`;

export default {
  Wrapper,
  ProgressBarContainer,
  InfoContainer,
  Current,
  Goal,
  ProgressInfo,
  Description,
  ProgressBar,
  Circle,
  Div
};
