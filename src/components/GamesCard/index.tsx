import * as S from "./style";
import {Games} from "types/Games";

type GamesCardProps = {
  games: Games
  onSelect: (data: Games) => void
}

const GamesCard = ({games, onSelect}:GamesCardProps) => {
  return (
    <S.GamesCard role='listitem' onClick={()=> onSelect(games)}>
      <S.GamesCardImage src={games.coverImageUrl} alt={games.title} />
      <div>
        <S.GamesCardName>{games.title}</S.GamesCardName>
        <S.GamesCardYear>{games.year}</S.GamesCardYear>
        <S.GamesCardDescription>{games.description}</S.GamesCardDescription>
      </div>
    </S.GamesCard>
  );
};

export default GamesCard;
