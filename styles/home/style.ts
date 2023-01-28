import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";
export const color = keyframes`
0%{
  filter: grayscale(1)
}
100%{
  filter: grayscale(0)
}
`;
export const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: #000;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const MainContainerBG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  animation: ${color} 3s 0.5s forwards;
`;
export const MainContainerLogo = styled.div`
  width: 56%;
  & img {
    width: 100%;
  }
`;
export const MainWrapper = styled.div<{ isMobile: boolean }>`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.isMobile ? "80%" : "60%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${fadeIn} 2s 1s forwards;
`;
export const MainTextWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  & img {
    width: 100%;
  }
`;
export const Section1 = styled.div`
  width: 100%;
  /* height: 200vh; */

  padding: 30rem 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & div {
    width: 45%;
    color: white;
  }
  & div:last-child p {
    font-size: 3.6rem;
    font-weight: 700;
  }
  & div:last-child p b {
    color: ${THEME.ORANGE};
  }
`;
