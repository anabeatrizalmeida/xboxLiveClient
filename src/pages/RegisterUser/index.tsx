import CreateUser from "components/CreateUser";
import * as S from "./style";

const RegisterUser = () => {
  return (
    <S.RegisterUser>
      <S.RegisterUserContent>
        <CreateUser />
      </S.RegisterUserContent>
    </S.RegisterUser>
  );
};

export default RegisterUser;