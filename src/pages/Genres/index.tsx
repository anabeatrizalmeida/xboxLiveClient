import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import { DateTime } from "luxon";
import GamesList from "components/GamesList";
import GamesCard from "components/GamesCard";
import { games } from "mocks/games";
import { Games } from "types/Games";
import { useNavigate } from "react-router-dom";

const Genres = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);
  const handleSelection = (games: Games) => {};

  return (
    <S.Genres>
      <Menu
        active={RoutePath.GENRES}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
      <S.GenresContent>
        <header>
          <S.GenresHeaderDetails>
            <div>
              <S.GenresHeaderDetailsLogo>XBOX LIVE</S.GenresHeaderDetailsLogo>
              <S.GenresHeaderDetailsDate>
                {dateDescription}
              </S.GenresHeaderDetailsDate>
            </div>
            <S.GenresHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Search the game" />
            </S.GenresHeaderDetailsSearch>
          </S.GenresHeaderDetails>
        </header>
        <div>
          <S.GenresGamesTitle>
            <button onClick={() => navigate("/")}>Games</button>
            <button onClick={() => navigate("/genres")}>Genres</button>
          </S.GenresGamesTitle>
          <S.GenresGamesList>
            <GamesList>
              {Boolean(games.length) &&
                games.map((games, index) => (
                  <GamesCard
                    games={games}
                    key={`GamesCard-${index}`}
                    onSelect={handleSelection}
                  />
                ))}
            </GamesList>
          </S.GenresGamesList>
        </div>
      </S.GenresContent>
    </S.Genres>
  );
};

export default Genres;
