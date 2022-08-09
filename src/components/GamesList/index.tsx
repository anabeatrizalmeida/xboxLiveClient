import * as S from "./style";

interface GamesListProps {
  children: React.ReactNode;
}

const GamesList = ({ children }: GamesListProps) => {
  return (
    <section>
      <S.GamesList>{children}</S.GamesList>
    </section>
  );
};

export default GamesList;
