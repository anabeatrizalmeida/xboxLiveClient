import * as S from "./style";
import Button1 from "components/Button1";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findAllGameService } from "services/GameService";
import GameList from "components/GameList";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { DateTime } from "luxon";
import { navigationItems } from "data/navigation";
import logo from "assets/imgs/logo.jpg";


const Homepage = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const handleNavigation = (path: RoutePath) => navigate(path);
  const [game, setGame] = useState<any[]>([]);
  const navigate = useNavigate();

  const jwt = localStorage.getItem("jwtLocalStorage");

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = async () => {
    if (!jwt) {
      console.log("Error: token does not exist, please login");
      navigate("/login");
    } else {
      const response = await findAllGameService.allGames();
      setGame(response.data.results);
    }
  };

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <S.Homepage>
      <Menu
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
      <S.HomepageContent>
        <S.HomepageHeader>
          <S.HomepageContentLogo>
            <S.HomepageLogoImage src={logo} alt="Logo" />
          </S.HomepageContentLogo>
        </S.HomepageHeader>
        <S.HomepageGames>
          <GameList />
        </S.HomepageGames>
      </S.HomepageContent>
    </S.Homepage>
  );
};

export default Homepage;
