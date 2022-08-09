import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";


const EditUser = () => {
    return (
        <S.EditUser>
            <>
                <S.EditUserDetails>
                    <S.EditUserDetailsImageWrap>
                        <S.EditUserDetailsImage src="" alt="Image" />
                    </S.EditUserDetailsImageWrap>
                    <S.EditUserDetailsTitle>Name</S.EditUserDetailsTitle>
                    <S.EditUserDetailsText>
                        <b>user: </b> {/* usuário */}
                    </S.EditUserDetailsText>
                </S.EditUserDetails>

                <S.EditUserAction>
                    <Pencil /> Edit
                </S.EditUserAction>

            </>
            <S.EditFormGroup>
                <S.EditForm
                    type="text"
                    placeholder="Nome"
                />
                <S.EditForm
                    type="text"
                    placeholder="Nome de usuário"
                />
                <S.EditForm
                    type="password"
                    placeholder="Senha"
                />
                <S.EditForm
                    type="password"
                    placeholder="Confirmar Senha"
                />
                <S.EditForm
                    type="url"
                    placeholder="Imagem"
                />
                <S.Delete>Deletar</S.Delete>
            </S.EditFormGroup>
        </S.EditUser>
    );
}

export default EditUser;