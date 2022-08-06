import * as S from "./style";
import ButtonLarge from "components/ButtonLarge";

const BoxLogin = () => {
  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
          <span>XBOX LIVE</span>
        </S.BoxLoginLogoText>
      </S.BoxLoginLogo>
      <S.BoxLoginForm>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <ButtonLarge value="Login" type="button" />
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
};

export default BoxLogin;
