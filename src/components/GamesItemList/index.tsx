import * as S from "./style";

interface GamesItemListProps {
  children: React.ReactNode;
}

const GamesItemList = ({ children }: GamesItemListProps) => {
  return (
    <section>
      <S.GamesItemListHeader>
        <S.GamesItemListHeaderTitle>Choose the game</S.GamesItemListHeaderTitle>
        <S.GamesItemListHeaderSelect>
          <option value="default">Selecione a mesa</option>
          <option value="">Mesa</option>
        </S.GamesItemListHeaderSelect>
      </S.GamesItemListHeader>
      <S.GamesItemList>{children}</S.GamesItemList>
    </section>
  );
};

export default GamesItemList;
