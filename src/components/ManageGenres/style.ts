import styled, { css } from "styled-components";

export const ManageGenres = styled.section`
  ${({ theme }) => css`
    padding: 20px;
  `}
`;

export const ManageGenresTitle = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    font-size: 20px;
    margin: 0;
  `}
`;

export const ManageGenresContent = styled.div`
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
export const ManageGenresContentAdd = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    color: ${theme.colors.primaryColor};
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    border: 1px dashed ${theme.colors.primaryColor};
    height: 200px;
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
    label {
      text-transform: uppercase;
      ${theme.mixins.bodyStyle()};
      font-size: 20px;
      font-weight: 500;
    }
  `}
`;

export const ManageGenresActions = styled.div`
  ${() => css`
    margin-top: 10px;
    display: flex;
    gap: 10px;
  `}
`;

export const ManageGenresActionsCancel = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonOutline()};
  `}
`;

export const ManageGenresActionsSave = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonFilled()};
  `}
`;

export const EditForm = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.input()};
    color: ${theme.colors.textColor};
  `}
`;
