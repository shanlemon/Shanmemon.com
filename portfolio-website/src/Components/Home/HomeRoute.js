import React from 'react';
import shanPortrait from '../../media/shan.jpg';
import styled from 'styled-components';

const IntroBlock = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftSide = styled.div`
  text-align: right;
  margin: 10px;
`;
const RightSide = styled.div``;

function HomeRouteRoute() {
  return (
    <MainWrapper>
      <IntroBlock>
        <LeftSide>
          <h1>Hi, I'm Shan</h1>
        </LeftSide>
        <RightSide>
          <img src={shanPortrait} alt='Shan Memon' />
        </RightSide>
      </IntroBlock>
    </MainWrapper>
  );
}

export default HomeRouteRoute;