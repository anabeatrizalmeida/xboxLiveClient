import { ReactComponent as Add } from "assets/icons/add.svg";
import { HTMLAttributes } from "react";
import * as S from "./style";
import EditGames from "components/EditGames";

type ManageGamesType = HTMLAttributes<HTMLDivElement>;

type ManageGamesProps = {} & ManageGamesType;

const ManageGames = ({ ...props }: ManageGamesProps) => {
  return (
    <S.ManageGames {...props}>
      <S.ManageGamesTitle>Manage games</S.ManageGamesTitle>
      <S.ManageGamesSub>
        <b>Games</b>
      </S.ManageGamesSub>
      <S.ManageGamesContent>
        <S.ManageGamesContentAdd>
          <Add />
          <span>Add games</span>
        </S.ManageGamesContentAdd>
        <S.AddCard>
          <S.EditForm type="text" placeholder="Title" />
          <S.EditForm type="url" placeholder="Cover Image Url" />
          <S.EditForm type="text" placeholder="Description" />
          <S.EditForm type="number" placeholder="Year" />
          <S.EditForm type="number" placeholder="Imdb Score" />
          <S.EditForm type="url" placeholder="Trailer YouTube Url" />
          <S.EditForm type="url" placeholder="Gameplay YouTube Url" />
          <S.EditForm type="text" placeholder="Genre name" />
        </S.AddCard>
        <EditGames />
      </S.ManageGamesContent>
      <S.ManageGamesActions>
        <S.ManageGamesActionsCancel>Cancel</S.ManageGamesActionsCancel>
        <S.ManageGamesActionsSave>Save changes</S.ManageGamesActionsSave>
      </S.ManageGamesActions>
    </S.ManageGames>
  );
};

export default ManageGames;
