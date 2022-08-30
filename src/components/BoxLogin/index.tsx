import * as S from "./style";
import { useState } from "react";
import { userLogin } from "types/api/user";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { loginService } from "services/AuthService";
import Button1 from "components/Button1";

const BoxLogin = (props: any) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userLogin) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const loginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await loginService.login(values);
    const jwt = response.data.token;

    if (jwt) {
      localStorage.setItem("jwtLocalStorage", jwt);
      swal({
        title: "Welcome!",
        icon: "success",
        timer: 3000,
      });
      navigate("/homepage");
    }
    console.log(response.data);
    console.log(values);
  };

  return (
    <S.BoxLogin onSubmit={loginUser}>
      <S.BoxLoginText>
        <span>XBOX LIVE</span>
      </S.BoxLoginText>
      <S.BoxLoginForm>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={handleChangeValues}
          autoComplete="false"
          required
        />

        <input
           type="password"
           name="password"
           id="password"
           placeholder="Password"
           onChange={handleChangeValues}
           required
        />
        <S.Buttons>
          <Button1 value="LOGIN" type="submit" onSubmit={loginUser} />
        </S.Buttons>
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
};

export default BoxLogin;
