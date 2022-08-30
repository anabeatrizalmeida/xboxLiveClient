import * as S from "./style";
import Button1 from "components/Button1";
import Button2 from "components/Button2";



function Home() {
  const handleClick1 = () => {
    window.location.href = "/login";
  };

  const handleClick2 = () => {
    window.location.href = "/register_user";
  };
  return (
    <S.Home>
      <S.HomeContent>
        <article>XBOX LIVE</article>
        <S.Button>
          <Button1 value="LOGIN" type="button" onClick={handleClick1} />
          <p>or</p>
          <Button2 value="REGISTER" type="button" onClick={handleClick2} />
        </S.Button>

      </S.HomeContent>
    </S.Home>
  );
}

export default Home;