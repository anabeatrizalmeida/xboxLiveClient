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

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);
  const handleSelection = (games: Games) => {};

  return (
    <S.Home>
      <Menu
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>XBOX LIVE</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Search the game" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeGamesTitle>
            <button onClick={() => navigate("/")}>Games</button>
            <button onClick={() => navigate("/favoritegames")}>Favorite Games</button>
            <button onClick={() => navigate("/genres")}>Genres</button>
          </S.HomeGamesTitle>
          <S.HomeGamesList>
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
          </S.HomeGamesList>
        </div>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
