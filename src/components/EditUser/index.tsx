import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditUser = () => {
  return (
    <S.EditUser>
      <>
        <S.EditUserDetails>
          <S.EditUserDetailsImageWrap>
            <S.EditUserDetailsImage src="" alt="Image" />
          </S.EditUserDetailsImageWrap>
          <S.EditUserDetailsTitle>Name</S.EditUserDetailsTitle>
          <S.EditUserDetailsText>
            <b>user: </b> 
          </S.EditUserDetailsText>
        </S.EditUserDetails>

        <S.EditUserAction>
          <Pencil /> Edit
        </S.EditUserAction>
      </>
      <S.EditFormGroup>
        <S.EditForm type="text" placeholder="Name" />
        <S.EditForm type="text" placeholder="E-mail" />
        <S.EditForm type="number" placeholder="CPF" />
        <S.EditForm type="password" placeholder="Password" />
        <S.EditForm type="password" placeholder="Confirm Password" />
        <S.EditForm type="url" placeholder="Image" />
        <S.Delete>Delete</S.Delete>
      </S.EditFormGroup>
    </S.EditUser>
  );
};

export default EditUser;
