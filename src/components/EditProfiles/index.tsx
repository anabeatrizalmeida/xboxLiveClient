import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditProfiles = () => {
  return (
    <S.EditProfiles>
      <>
        <S.EditProfilesDetails>
          <S.EditProfilesDetailsName>Número da mesa</S.EditProfilesDetailsName>
        </S.EditProfilesDetails>
        <S.EditProfilesAction>
          <Pencil /> Editar
        </S.EditProfilesAction>
      </>

      <>
        <label htmlFor="ProfilesId">Número da mesa</label>
        <S.EditForm id="ProfilesId" type="number" placeholder="01" />
        <S.Deletar>Deletar Mesa</S.Deletar>
      </>
    </S.EditProfiles>
  );
};

export default EditProfiles;