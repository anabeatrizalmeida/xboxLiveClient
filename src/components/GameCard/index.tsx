import * as S from "./style";

const GameCard = ({ data }: any) => {
  return (
    <S.GameCard>
      <S.GameCardImage src={data.coverImageUrl} alt={data.title} />
      <div>
        <S.GameCardName>{data.title}</S.GameCardName>
      </div>
    </S.GameCard>
  );
};

export default GameCard;
