import { gameInfos } from "types/api/game";
import api from "./Api";

const createGameService = {
  createGame: (values: gameInfos) =>
    api
      .post("/game", values)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
};

const findAllGameService = {
  allGames: () =>
    api
      .get("/game")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log("Error: ", error)),
};

const findByIdGameService = {
  findGameById: (id: string) =>
    api
      .get(`/game/${id}`)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
};

export { createGameService, findAllGameService, findByIdGameService };
