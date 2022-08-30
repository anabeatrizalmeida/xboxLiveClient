import styled, { css } from "styled-components";

export const CreateUser = styled.section`
	${({ theme }) => css`
		background: ${theme.colors.baseBg1};
		width: 330px;
		height: 414px;
		padding: 20px 20px 35px 20px;
		margin: 20px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
		color: ${theme.colors.textColor};
	`}
`;

export const CreateUserText = styled.h1`
  ${({ theme }) => css`
  	font-family: ${theme.constants.logoFontFamily};
  	font-size: 2rem;
  	line-height: 80px;
  	font-weight: 400;
  	text-transform: uppercase;
  	margin: .5px 0;
  	padding: 2px 0;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	text-align: center;
  `}
`;

export const CreateUserForm = styled.form`
  ${({ theme }) => css`
  	display: flex;
  	flex-direction: column;
  	gap: 15px;
  	input {
  		${theme.mixins.input()};
  		color: ${theme.colors.textColor};
  	}
  `}
`;

export const CreateUserError = styled.span`
  ${({ theme }) => css`
  	color: ${theme.colors.secondaryColor};
  	text-align: center;
  	display: inline-block;
  	margin-top: 25px;
  `}
`;

export const Buttons = styled.div`
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