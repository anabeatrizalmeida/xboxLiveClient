import { genre } from "types/api/genre";
import api from "./Api";

const createGenreService = {
  createGenre: (values: genre) =>
    api
      .post("/genre", values)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
};

const findAllGenreService = {
  allGenres: () =>
    api
      .get("/genre")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log("Error: ", error)),
};

export { createGenreService, findAllGenreService };
