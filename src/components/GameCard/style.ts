import styled, { css } from "styled-components";

export const GameCard= styled.div`
	${({ theme }) => css`
		background: ${theme.colors.baseBg2};
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 15px;
		align-items: center;
		max-width: 200px;
		width: 100%;
		cursor: pointer;
		min-height: 225px;
		div {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			gap: 10px;
		}
	`}
`;

export const GameCardImage = styled.img`
	${() => css`
		width: 150px;
		margin-top: -50px;
	`}
`;

export const GameCardName = styled.h3`
	${({ theme }) => css`
		${theme.mixins.bodyStyle()}
		text-align: center;
		max-width: 90%;
		margin: 0;
	`}
`;
