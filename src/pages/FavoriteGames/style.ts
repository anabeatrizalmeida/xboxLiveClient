import styled, { css } from "styled-components";

export const FavoriteGames = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
  `}
`;

export const FavoriteGamesContent = styled.main`
  ${() => css`
    width: 100%;
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;

export const FavoriteGamesHeaderDetails = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const FavoriteGamesHeaderDetailsLogo = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    text-transform: uppercase;
    margin: 0;
  `}
`;

export const FavoriteGamesHeaderDetailsDate = styled.p`
  ${() => css`
    text-transform: capitalize;
  `}
`;

export const FavoriteGamesHeaderDetailsSearch = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    ${theme.mixins.input()};
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    input {
      background: transparent;
      border: none;
      height: 100%;
      color: ${theme.colors.textColor};
    }
  `}
`;

export const FavoriteGamesGamesTitle = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    border-bottom: 1px solid ${theme.colors.baseLine};
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.primaryColor};
    padding-bottom: 10px;
    button {
      background-color: transparent;
      text-decoration: none;
      border: none;
      color: ${theme.colors.primaryColor};
      font-weight: 600;
      font-size: 1.2rem;
      margin: 10px 5px;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      :hover {
      color: ${theme.colors.textColor};
      }
    
  `}
`;

export const FavoriteGamesGamesList = styled.div`
  ${() => css`
    margin-top: 25px;
    padding-bottom: 25px;
  `}
`;

export const FavoriteGamesGamesListGap = styled.div`
  ${({ theme }) => css`
    width: 200px;
  `}
`;
