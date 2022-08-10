import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditProfiles = () => {
  return (
    <S.EditProfiles>
      <>
        <S.EditProfilesDetails>
          <S.EditProfilesDetailsName>Profile</S.EditProfilesDetailsName>
        </S.EditProfilesDetails>
        <S.EditProfilesAction>
          <Pencil /> Edit
        </S.EditProfilesAction>
      </>

      <>
        <S.EditForm type="text" placeholder="Title" />
        <S.EditForm type="url" placeholder="Image Url" />
        <S.Deletar>Delete</S.Deletar>
      </>
    </S.EditProfiles>
  );
};

export default EditProfiles;
