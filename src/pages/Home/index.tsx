import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";

const Home = () => {
  return (
    <S.Home>
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>XBOX LIVE</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                Date
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
            <p>Game list</p>
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
