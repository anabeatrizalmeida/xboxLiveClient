import { ReactComponent as Add } from "assets/icons/add.svg";
import { HTMLAttributes } from "react";
import * as S from "./style";
import EditUser from "components/EditUser";

type ManageUsersType = HTMLAttributes<HTMLDivElement>;

type ManageUsersProps = {} & ManageUsersType;

const ManageUsers = ({ ...props }: ManageUsersProps) => {
  return (
    <S.ManageUsers {...props}>
      <S.ManageUsersTitle>Manage users</S.ManageUsersTitle>
      <S.ManageUsersContent>
        <S.ManageUsersContentAdd>
          <Add />
          <span>Add Users</span>
        </S.ManageUsersContentAdd>
        <S.ManageUsersContentAdd>
          <S.EditForm type="text" placeholder="Name" />
          <S.EditForm type="text" placeholder="E-mail" />
          <S.EditForm type="number" placeholder="CPF" />
          <S.EditForm type="password" placeholder="Password" />
          <S.EditForm type="password" placeholder="Confirm Password" />
          <S.EditForm type="url" placeholder="Image" />
        </S.ManageUsersContentAdd>
        <EditUser />
      </S.ManageUsersContent>
      <S.ManageUsersActions>
        <S.ManageUsersActionsCancel>Cancel</S.ManageUsersActionsCancel>
        <S.ManageUsersActionsSave>Save changes</S.ManageUsersActionsSave>
      </S.ManageUsersActions>
    </S.ManageUsers>
  );
};

export default ManageUsers;
