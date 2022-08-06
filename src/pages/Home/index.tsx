import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import { DateTime } from "luxon";
import GamesItemList from "components/GamesItemList";
import GamesItem from "components/GamesItem";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
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
          <S.HomeProductTitle>
            <b>Games</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <GamesItemList>
              <GamesItem />
            </GamesItemList>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>Detalhes dos pedidos aqui</p>
      </aside>
    </S.Home>
  );
};

export default Home;
