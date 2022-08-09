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

const FavoriteGames = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);
  const handleSelection = (games: Games) => {};

  return (
    <S.FavoriteGames>
      <Menu
        active={RoutePath.FAVORITE_GAMES}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
      <S.FavoriteGamesContent>
        <header>
          <S.FavoriteGamesHeaderDetails>
            <div>
              <S.FavoriteGamesHeaderDetailsLogo>XBOX LIVE</S.FavoriteGamesHeaderDetailsLogo>
              <S.FavoriteGamesHeaderDetailsDate>
                {dateDescription}
              </S.FavoriteGamesHeaderDetailsDate>
            </div>
            <S.FavoriteGamesHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Search the game" />
            </S.FavoriteGamesHeaderDetailsSearch>
          </S.FavoriteGamesHeaderDetails>
        </header>
        <div>
          <S.FavoriteGamesGamesTitle>
            <button onClick={() => navigate("/")}>Games</button>
            <button onClick={() => navigate("/favoritegames")}>Favorite Games</button>
          </S.FavoriteGamesGamesTitle>
          <S.FavoriteGamesGamesList>
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
          </S.FavoriteGamesGamesList>
        </div>
      </S.FavoriteGamesContent>
    </S.FavoriteGames>
  );
};

export default FavoriteGames;
