import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {findAllProfileService} from "services/ProfileService";
import swal from "sweetalert";
import {profile} from "types/api/profile";
import * as S from "./style";
import { ReactComponent as Add } from "assets/icons/add.svg";
import EditProfiles from "components/EditProfiles";

const ProfileList = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<profile[]>([]);

  useEffect(() => {
    getAll();
  }, []);

  const jwt = localStorage.getItem("jwtLocalStorage");

  const getAll = async () => {
    if (!jwt) {
      swal({
        title: "ERRO",
        text: "Faça o Login antes de entrar na página de profiles",
        icon: "error",
        timer: 7000,
      });
      navigate("/");
    } else {
      const response = await findAllProfileService.allProfiles();
      if (response.status === 204) {
        swal({
          title: "Info",
          text: "Não existe jogo cadastrado!",
          icon: "info",
          timer: 7000,
        });
      } else {
        console.log(response.data);
        setProfiles(response.data);
      }
    }
  };
  return (
    <S.Profile>
    <S.ProfileTitle>Manage Profiles</S.ProfileTitle>
    <S.ProfileContent>
      <S.ProfileContentAdd>
        <Add />
        <span>Add profiles</span>
      </S.ProfileContentAdd>
      <S.ProfileContentAdd>
      <S.EditForm type="text" placeholder="Title" />
        <S.EditForm type="url" placeholder="Image Url" />
      </S.ProfileContentAdd>
      <EditProfiles />
    </S.ProfileContent>
    <S.ProfileActions>
      <S.ProfileActionsCancel>Cancel</S.ProfileActionsCancel>
      <S.ProfileActionsSave>Save changes</S.ProfileActionsSave>
    </S.ProfileActions>
  </S.Profile>
  );
};

export default ProfileList;