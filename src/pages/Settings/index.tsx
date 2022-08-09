import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import NavColumn from "components/NavColumn";

const Settings = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  return (
    <S.Settings>
      <Menu
        active={RoutePath.SETTINGS}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
      <S.SettingsPage>
        <header>
          <S.SettingsPageHeaderTitle>settings</S.SettingsPageHeaderTitle>
        </header>
        <S.SettingsContent>
          <S.SettingsContentSidebar>
            <NavColumn activeRoute={RoutePath.SETTINGS_PROFILES} />
          </S.SettingsContentSidebar>
          <S.SettingsContentBox>
            <S.SettingsContentBoxEmpty>
              Selecione uma categoria
            </S.SettingsContentBoxEmpty>
          </S.SettingsContentBox>
        </S.SettingsContent>
      </S.SettingsPage>
    </S.Settings>
  );
};

export default Settings;