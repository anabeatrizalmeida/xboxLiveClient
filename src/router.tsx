import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login";
import Settings from "pages/Settings";
import ManageGames from "components/ManageGames";
import ManageUsers from "components/ManageUsers";
import ManageProfiles from "components/ManageProfiles";
import FavoriteGames from "pages/FavoriteGames";
import Genres from "pages/Genres";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.SETTINGS} element={<Settings />}>
        <Route
          path={RoutePath.SETTINGS_PROFILES}
          element={<ManageProfiles />}
        />
        <Route path={RoutePath.SETTINGS_GAMES} element={<ManageGames />} />
        <Route path={RoutePath.SETTINGS_USERS} element={<ManageUsers />} />
      </Route>
      <Route path={RoutePath.FAVORITE_GAMES} element={<FavoriteGames />} />
      <Route path={RoutePath.GENRES} element={<Genres />} />
    </Routes>
  );
};

export default Router;
