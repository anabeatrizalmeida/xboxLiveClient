import { HTMLAttributes } from "react";
import { ReactComponent as Add } from "assets/icons/add.svg";
import * as S from "./style";
import EditProfiles from "components/EditProfiles";

type ManageProfilesType = HTMLAttributes<HTMLDivElement>;

type ManageProfilesProps = {} & ManageProfilesType;

const ManageProfiles = ({ ...props }: ManageProfilesProps) => {
  return (
    <S.ManageProfiles {...props}>
      <S.ManageProfilesTitle>Manage Profiles</S.ManageProfilesTitle>
      <S.ManageProfilesContent>
        <S.ManageProfilesContentAdd>
          <Add />
          <span>Add profiles</span>
        </S.ManageProfilesContentAdd>
        <S.ManageProfilesContentAdd>
        <S.EditForm type="text" placeholder="Title" />
          <S.EditForm type="url" placeholder="Image Url" />
        </S.ManageProfilesContentAdd>
        <EditProfiles />
      </S.ManageProfilesContent>
      <S.ManageProfilesActions>
        <S.ManageProfilesActionsCancel>Cancel</S.ManageProfilesActionsCancel>
        <S.ManageProfilesActionsSave>Save changes</S.ManageProfilesActionsSave>
      </S.ManageProfilesActions>
    </S.ManageProfiles>
  );
};

export default ManageProfiles;
