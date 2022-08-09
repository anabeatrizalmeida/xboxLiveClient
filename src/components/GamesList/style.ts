import styled, { css } from "styled-components";

export const GamesList = styled.div`
	${() => css`
		justify-content: center;
		margin-top: 75px;
		display: flex;
		gap: 75px 20px;
		flex-wrap: wrap;
	`}
`;