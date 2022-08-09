import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";


const EditGames = () => {
    return (
        <S.EditGames>
            <>
                <S.EditGamesImage src="" alt="" />
                <S.EditGamesDetails>
                    <S.EditGamesDetailsName>Nome do Produto</S.EditGamesDetailsName>
                    <S.EditGamesDetailsPrice>R$ 00,00</S.EditGamesDetailsPrice>
                    <S.EditGamesDetailsDescription>Descrição do Produto</S.EditGamesDetailsDescription>
                </S.EditGamesDetails>

                <S.EditGamesAction>
                    <Pencil /> Editar
                </S.EditGamesAction>
            </>
            <S.EditFormGroup>
                <S.EditForm
                    type="text"
                    placeholder="Título"
                />
                <S.EditForm
                    type="number"
                    placeholder="Preço"
                />
                <S.EditForm
                    type="text"
                    placeholder="Descrição"
                />
                <S.EditForm
                    type="url"
                    placeholder="Imagem"
                />
                <S.Delete>Deletar</S.Delete>
            </S.EditFormGroup>
        </S.EditGames>
    );
}

export default EditGames;