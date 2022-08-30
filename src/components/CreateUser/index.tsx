import * as S from "./style";
import Button1 from "components/Button1";

const CreateUser = (props: any) => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <S.CreateUser>
      <S.CreateUserText>
        <span>CREATE USER</span>
      </S.CreateUserText>
      <S.CreateUserForm>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="number" placeholder="CPF" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <S.Buttons>
          <Button1 value="CREATE" type="submit" onClick={handleClick} />
        </S.Buttons>
      </S.CreateUserForm>
    </S.CreateUser>
  );
};

export default CreateUser;
