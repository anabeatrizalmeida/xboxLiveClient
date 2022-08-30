import styled, { css } from "styled-components";

export const Homepage = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
  `}
`;

export const HomepageContent = styled.main`
  ${() => css`
    width: 100%;
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;

export const HomepageHeader = styled.section`
  ${() => css`
    width: 100%;
    display: flex;
    align-self: flex-start;
  `}
`;

export const HomepageContentLogo = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    align-self: flex-start;
  `}
`;

export const HomepageLogoImage = styled.img`
  ${() => css`
    width: 10rem;
    margin-left: 1rem;
  `}
`;

export const HomepageGames = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  `}
`;