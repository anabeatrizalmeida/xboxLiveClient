import { HTMLAttributes } from "react";
import { ReactComponent as Add } from "assets/icons/add.svg";
import * as S from "./style";
import EditGenres from "components/EditGenres";

type ManageGenresType = HTMLAttributes<HTMLDivElement>;

type ManageGenresProps = {} & ManageGenresType;

const ManageGenres = ({ ...props }: ManageGenresProps) => {
  return (
    <S.ManageGenres {...props}>
      <S.ManageGenresTitle>Manage Genres</S.ManageGenresTitle>
      <S.ManageGenresContent>
        <S.ManageGenresContentAdd>
          <Add />
          <span>Add Genres</span>
        </S.ManageGenresContentAdd>
        <S.ManageGenresContentAdd>
        <S.EditForm type="text" placeholder="Name" />
        </S.ManageGenresContentAdd>
        <EditGenres />
      </S.ManageGenresContent>
      <S.ManageGenresActions>
        <S.ManageGenresActionsCancel>Cancel</S.ManageGenresActionsCancel>
        <S.ManageGenresActionsSave>Save changes</S.ManageGenresActionsSave>
      </S.ManageGenresActions>
    </S.ManageGenres>
  );
};

export default ManageGenres;