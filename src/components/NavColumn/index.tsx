import { ReactComponent as Edit } from "assets/icons/edit.svg";
import { ReactComponent as Info } from "assets/icons/info.svg";
import { ReactComponent as Users } from "assets/icons/users.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import NavColumnItem from "components/NavColumnItem";
import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

type NavColumnType = HTMLAttributes<HTMLDivElement>;

type NavColumnProps = {
  activeRoute: RoutePath;
} & NavColumnType;

const NavColumn = ({ activeRoute }: NavColumnProps) => {
  const navigate = useNavigate();

  const items = [
    {
      icon: <Users />,
      title: "Manage users",
      subtitle: "Manage system access",
      navigation: RoutePath.SETTINGS_USERS,
    },
    {
      icon: <Edit />,
      title: "Edit your profile",
      subtitle: "Edit name, email...",
      navigation: RoutePath.SETTINGS_PROFILES,
    },
    {
      icon: <Info />,
      title: "Manage games",
      subtitle: "Edit your games",
      navigation: RoutePath.SETTINGS_GAMES,
    },
    {
      icon: <Info />,
      title: "Manage genres",
      subtitle: "Edit genres games",
      navigation: RoutePath.SETTINGS_GENRES,
    },
  ];
  return (
    <S.NavColumn>
      {items.map((item, key) => (
        <NavColumnItem
          onClick={() => navigate(item.navigation)}
          active={item.navigation === activeRoute}
          icon={item.icon}
          title={item.title}
          key={key}
          subtitle={item.subtitle}
        />
      ))}
    </S.NavColumn>
  );
};

export default NavColumn;
