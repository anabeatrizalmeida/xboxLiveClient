import * as S from "./style";
import ButtonLarge from "components/ButtonLarge";
import { HTMLAttributes, useState } from "react";

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export type BoxLoginProps = {
  onSubmitData: (data: { nickname: string; password: string }) => void;
  errorMessage: string;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData, errorMessage }: BoxLoginProps) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (): void => {
    const data = { nickname, password };
    onSubmitData(data);
  };

  return (
    <S.BoxLogin>
      <S.BoxLoginText>
        <span>XBOX LIVE</span>
      </S.BoxLoginText>
      <S.BoxLoginForm>
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={({ target }) => setNickname(target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <ButtonLarge value="Login" type="button" onClick={handleSubmit} />
      </S.BoxLoginForm>
      {Boolean(errorMessage.length) && (
        <S.BoxLoginError>{errorMessage}</S.BoxLoginError>
      )}
    </S.BoxLogin>
  );
};

export default BoxLogin;
