import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import { useEffect, useState } from "react";
import { User, UserResponse, UserUpdate } from "types/api/user";
import * as S from "./style";

interface EditUserProps {
  user: UserResponse;
  onCancel: boolean;
  onDelete: (data: UserResponse) => void;
  onEdit: (data: UserUpdate) => void;
}

const EditUser = ({ user, onCancel, onDelete, onEdit }: EditUserProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const form = {
    id: user.id,
    name: user.name,
    cpf: user.cpf,
    email: user.email,
    password: "",
    confirmPassword: "",
  };

  const [state, setState] = useState(form);

  const userEditFormatter = (toFormat: typeof form): User => ({
    name: toFormat.name,
    cpf: toFormat.cpf,
    email: toFormat.email,
    password: toFormat.password,
    confirmPassword: toFormat.confirmPassword,
   
  });

  const handleChange = (name: string, value: string) => {
    setState({ ...state, [name]: value });
    const userFormatted = { user: userEditFormatter(state), id: user.id };
    onEdit(userFormatted);
  };

  const onEditClick = () => {
    setIsEditing(true);
    const userFormatted = { user: userEditFormatter(state), id: user.id };
    onEdit(userFormatted);
  };

  useEffect(() => {
    setIsEditing(false);
  }, [onCancel]);

  return (
    <S.EditUser role="listitem">
      {!isEditing ? (
        <>
          <S.EditUserDetails>
            <S.EditUserDetailsTitle>{user.name}</S.EditUserDetailsTitle>
            <S.EditUserDetailsText>
              <b>usuário: </b> {user.email}
            </S.EditUserDetailsText>
          </S.EditUserDetails>

          <S.EditUserAction onClick={() => onEditClick()}>
            <Pencil /> Edit
          </S.EditUserAction>
        </>
      ) : (
        <S.EditFormGroup>
          <S.EditForm
            type="text"
            placeholder="Nome"
            value={state.name}
            onChange={({ target }) => handleChange("name", target.value)}
          />
          <S.EditForm
            type="text"
            placeholder="Email de usuário"
            value={state.email}
            onChange={({ target }) => handleChange("email", target.value)}
          />
          <S.EditForm
            type="password"
            placeholder="Senha"
            value={state.password}
            onChange={({ target }) => handleChange("password", target.value)}
          />
          <S.EditForm
            type="password"
            error={Boolean(
              state.confirmPassword.length &&
                state.password.length &&
                state.password !== state.confirmPassword
            )}
            placeholder="Confirmar senha"
            value={state.confirmPassword}
            onChange={({ target }) => handleChange("confirmPassword", target.value)}
          />
          <S.EditForm
            type="text"
            value={state.cpf}
            placeholder="CPF"
            onChange={({ target }) => handleChange("cpf", target.value)}
          />
          <S.Delete onClick={() => onDelete(user)}>Deletar</S.Delete>
        </S.EditFormGroup>
      )}
    </S.EditUser>
  );
};

export default EditUser;
