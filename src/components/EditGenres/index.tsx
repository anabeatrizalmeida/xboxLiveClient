import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditGenres = () => {
  return (
    <S.EditGenres>
      <>
        <S.EditGenresDetails>
          <S.EditGenresDetailsName>Genres</S.EditGenresDetailsName>
        </S.EditGenresDetails>
        <S.EditGenresAction>
          <Pencil /> Edit
        </S.EditGenresAction>
      </>
      <S.EditFormGroup>
        <S.EditForm type="text" placeholder="Name" />
        <S.Deletar>Delete</S.Deletar>
      </S.EditFormGroup>
    </S.EditGenres>
  );
};

export default EditGenres;
