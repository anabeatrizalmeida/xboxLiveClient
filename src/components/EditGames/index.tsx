import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditGames = () => {
  return (
    <S.EditGames>
      <>
        <S.EditGamesImage src="" alt="" />
        <S.EditGamesDetails>
          <S.EditGamesDetailsName>Game Name</S.EditGamesDetailsName>
          <S.EditGamesDetailsPrice>Year</S.EditGamesDetailsPrice>
          <S.EditGamesDetailsDescription>
            Description
          </S.EditGamesDetailsDescription>
        </S.EditGamesDetails>

        <S.EditGamesAction>
          <Pencil /> Edit
        </S.EditGamesAction>
      </>
      <S.EditFormGroup>
        <S.EditForm type="text" placeholder="Title" />
        <S.EditForm type="url" placeholder="Cover Image Url" />
        <S.EditForm type="text" placeholder="Description" />
        <S.EditForm type="number" placeholder="Year" />
        <S.EditForm type="number" placeholder="Imdb Score" />
        <S.EditForm type="url" placeholder="Trailer YouTube Url" />
        <S.EditForm type="url" placeholder="Gameplay YouTube Url" />
        <S.EditForm type="text" placeholder="Genre name" />
        <S.Delete>Delete</S.Delete>
      </S.EditFormGroup>
    </S.EditGames>
  );
};

export default EditGames;
