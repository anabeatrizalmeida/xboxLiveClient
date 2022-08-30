import {Routes, Route} from "react-router-dom";
import {RoutePath} from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login/index";
import Homepage from "pages/Homepage/index";
import RegisterUser from "pages/RegisterUser";
import Settings from "pages/Settings";
import ManageGenres from "components/ManageGenres";
import ManageUsers from "components/ManageUsers";
import ManageProfiles from "components/ManageProfiles";


const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.HOMEPAGE} element={<Homepage />} />
      <Route path={RoutePath.REGISTER_USER} element={<RegisterUser />} />
      <Route path={RoutePath.SETTINGS} element={<Settings />}>
        <Route
          path={RoutePath.SETTINGS_PROFILES}
          element={<ManageProfiles />}
        />
        <Route path={RoutePath.SETTINGS_USERS} element={<ManageUsers />} />
        <Route path={RoutePath.SETTINGS_GENRES} element={<ManageGenres />} />
      </Route>
    </Routes>
  );
};

export default Router;
