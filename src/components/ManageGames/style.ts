import styled, { css } from "styled-components";
import { Theme } from "types/styled-components";

export const ManageGames = styled.section`
  ${() => css`
    padding: 20px;
  `}
`;

export const ManageGamesTitle = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    font-size: 20px;
    margin: 0;
    margin-top:3px;
  `}
`;


export const ManageGamesContent = styled.div`
  ${() => css`
    margin-top: 15px;
    justify-content: center;
    height: 400px;
    padding-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    overflow: auto;
  `}
`;

export const ManageGamesContentAdd = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    max-height: 285px;
    color: ${theme.colors.primaryColor};
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    border: 1px dashed ${theme.colors.primaryColor};
    border-radius: 8px;
    gap: 10px;
    cursor: pointer;
    margin-top:5px;
  `}
`;

export const AddCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    box-sizing: border-box;
    padding: 10px 0;
    color: ${theme.colors.primaryColor};
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    border: 1px dashed ${theme.colors.primaryColor};
    border-radius: 8px;
    gap: 10px;
    cursor: pointer;
    /* Chrome */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
  `}
`;

export const ManageGamesActions = styled.div`
  ${() => css`
    margin-top: 20px;
    display: flex;
    gap: 10px;
  `}
`;

export const ManageGamesActionsCancel = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonOutline()};
  `}
`;

export const ManageGamesActionsSave = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonFilled()};
  `}
`;

const EditFormMixins = {
  error: (theme: Theme) => css`
    border: 2px solid ${theme.colors.secondaryColor};
  `,
  success: (theme: Theme) => css`
    border: 2px solid ${theme.colors.primaryColor};
  `,
};

export const EditForm = styled.input<{ error?: boolean; success?: boolean }>`
  ${({ theme, error = false, success }) => css`
    ${theme.mixins.input()};
    color: ${theme.colors.textColor};
    ${error && EditFormMixins.error(theme)}
    ${success && EditFormMixins.success(theme)}
    &:valid[type="url"] {
      ${success && EditFormMixins.success(theme)}
    }
    &:invalid {
      ${EditFormMixins.error(theme)}
    }
  `}
`;