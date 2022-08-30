import styled, {css} from "styled-components";
import {constants} from "assets/styles/constants";
import {colors} from "assets/styles/colors";

export const Home = styled.section`
  ${({theme}) => css`
    background-color: ${theme.colors.baseBg2};
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 100vh;
    color: ${theme.colors.textColor};
  `}
`;

export const HomeContent = styled.main`
  ${({theme}) => css`
    width: 100%;
    height: 100%;
    ${theme.mixins.overlay()};
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: ${constants.bodyFontFamily};
      color: ${colors.textColor};
      font-size: 2.3rem;
      margin-top:10rem;
      margin-bottom:5rem;
    }

    article p {
      text-decoration: none;
      font-family: ${constants.bodyFontFamily};
      color: ${colors.textColor};
      font-size: 3rem;
      margin: 0 2rem 0 2rem;
      
    }
  `}
`;

export const HomeText = styled.div`
  ${({theme}) => css`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.colors.textColor};
  `}
`;

export const Button = styled.div`
  ${() => css`
  background-color: none;
    width: 10rem;
    margin: 0;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    gap: 0.8rem;
    margin-top: 0.8rem;
  `}
`;