import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { game } from "types/api/game";
import swal from "sweetalert";
import * as S from "./style";
import { findAllGameService } from "services/GameService";
import GameCard from "components/GameCard";

const GameList = () => {
  const navigate = useNavigate();
  const [game, setGame] = useState<game[]>([]);

  useEffect(() => {
    allGames();
  }, []);

  const jwt = localStorage.getItem("jwtLocalStorage");

  const allGames = async () => {
    if (!jwt) {
      swal({
        title: "ERRO",
        text: "Login before entering the games page",
        icon: "error",
        timer: 7000,
      });
      navigate("/");
    } else {
      const response = await findAllGameService.allGames();
      if (response.status === 204) {
        swal({
          title: "Info",
          text: "There is no game registered!",
          icon: "info",
          timer: 7000,
        });
      } else {
        setGame(response.data);
      }
    }
  };
  return (
    <S.GameList>
       {game.map((game: game, index) => (
        <Link to={`/home/${game.id}`} state={{id: game.id}} key={index}>
          <GameCard data={game} />
        </Link>
      ))}
    </S.GameList>
  );
};

export default GameList;
