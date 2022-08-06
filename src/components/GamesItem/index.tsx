import * as S from "./style";

const GamesItem = () => {
  return (
    <S.GamesItem>
      <S.GamesItemImage src="" alt="" />
      <div>
        <S.GamesItemName>Nome do Produto</S.GamesItemName>
        <S.GamesItemPrice>R$ 10.00</S.GamesItemPrice>
        <S.GamesItemDescription>
          Descrição do produto
        </S.GamesItemDescription>
      </div>
    </S.GamesItem>
  );
};

export default GamesItem;
