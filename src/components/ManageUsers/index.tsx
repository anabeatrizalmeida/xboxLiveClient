import { ReactComponent as Add } from "assets/icons/add.svg";
import { HTMLAttributes, useEffect, useState } from "react";
import * as S from "./style";
import EditUser from "components/EditUser";
import { useMutation, useQuery } from "@tanstack/react-query";
import { User, UserResponse, UserUpdate } from "types/api/user";
import { QueryKey } from "types/QueryKey";
import { UserService } from "services/UserService";
import { ErrorResponse } from "types/api/error";

type ManageUsersType = HTMLAttributes<HTMLDivElement>;

type ManageUsersProps = {} & ManageUsersType;

const ManageUsers = ({ ...props }: ManageUsersProps) => {
  const [users, setUsers] = useState<UserResponse[]>([]);
  const { data: usersData } = useQuery([QueryKey.USERS], UserService.getLista);

  const add = useMutation(UserService.create, {
    onSuccess: (data: UserResponse & ErrorResponse) => {
      if (data.statusCode) {
        return;
      }

      const userList = [...users, data as UserResponse];
      setUsers(userList);
    },
    onError: () => {
      console.error("Erro ao criar um usuário");
    },
  });

  const remove = useMutation(UserService.deleteById, {
    onSuccess: (data: UserResponse & ErrorResponse) => {
      if (data.statusCode) {
        return;
      }

      const editedUsers = users.filter((i) => data.id !== i.id);
      setUsers(editedUsers);
    },
    onError: () => {
      console.error("Erro ao remover o usuário");
    },
  });

  const update = useMutation(UserService.updateById, {
    onSuccess: (data: UserResponse & ErrorResponse) => {
      if (data.statusCode) {
        return;
      }

      const editedUsers = users.map((i) =>
        data.id === i.id ? (data as UserResponse) : i
      );
      setUsers(editedUsers);
    },
    onError: () => {
      console.error("Erro ao atualizar o usuário");
    },
  });

  const [isAdding, setIsAdding] = useState(false);
  const [cancel, setCancel] = useState(false);

  type usersToEditType = { id: string } & User;

  let usersToEdit: usersToEditType[] = [];

  const form = {
    name: "",
    cpf: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [userToAdd, setUserToAdd] = useState(form);

  const handleAddChange = (name: string, value: string) => {
    setUserToAdd({ ...userToAdd, [name]: value });
  };

  const onEditUser = (toEdit: UserUpdate) => {
    setCancel(false);
    const existing = usersToEdit.find((user) => user.id === toEdit.id);

    const userFormatted = { ...toEdit.user, id: toEdit.id };

    usersToEdit = existing
      ? usersToEdit.map((i) => (i.id === existing.id ? userFormatted : i))
      : [...usersToEdit, userFormatted];
  };

  const handleCancel = () => {
    setCancel(true);
    setIsAdding(false);
    setTimeout(() => setCancel(false));
    usersToEdit = [];
  };

  const handleDelete = (user: UserResponse) => {
    remove.mutate(user.id);
    handleCancel();
  };

  const userIsValid = () =>
    Boolean(
      userToAdd.name.length &&
        userToAdd.cpf.length &&
        userToAdd.email.length &&
        userToAdd.password.length &&
        userToAdd.confirmPassword.length &&
        userToAdd.password === userToAdd.confirmPassword
    );

  const userFormatter = (toFormat: typeof form): User => ({
    name: toFormat.name,
    cpf: toFormat.cpf,
    email: toFormat.email,
    password: toFormat.password,
    confirmPassword: toFormat.confirmPassword,
  });

  const handleSave = () => {
    const canAdd = userIsValid();
    const user = userFormatter(userToAdd);

    usersToEdit.forEach((user) => update.mutate({ user, id: user.id }));

    if (canAdd) add.mutate(user);
    setTimeout(() => handleCancel(), 300);
    setUserToAdd(form);
    setIsAdding(false);
  };

  useEffect(() => {
    setUsers(usersData || []);
  }, [usersData]);

  return (
    <S.ManageUsers {...props}>
      <S.ManageUsersTitle>Manage Users</S.ManageUsersTitle>
      <S.ManageUsersSub>
        <b>Users</b>
      </S.ManageUsersSub>
      <S.ManageUsersContent>
        {!isAdding ? (
          <S.ManageUsersContentAdd onClick={() => setIsAdding(true)}>
            <Add />
            <span>Add User</span>
          </S.ManageUsersContentAdd>
        ) : (
          <S.ManageUsersContentAdd>
            <S.EditForm
              type="text"
              placeholder="Name"
              success={Boolean(userToAdd.name.length)}
              value={userToAdd.name}
              onChange={({ target }) => handleAddChange("name", target.value)}
            />
            <S.EditForm
              type="text"
              placeholder="Email"
              success={Boolean(userToAdd.email.length)}
              value={userToAdd.email}
              onChange={({ target }) => handleAddChange("email", target.value)}
            />
            <S.EditForm
              type="text"
              placeholder="CPF"
              success={Boolean(userToAdd.cpf.length)}
              value={userToAdd.cpf}
              onChange={({ target }) => handleAddChange("cpf", target.value)}
            />
            <S.EditForm
              type="password"
              placeholder="Password"
              minLength={6}
              success={Boolean(userToAdd.password.length)}
              value={userToAdd.password}
              onChange={({ target }) =>
                handleAddChange("password", target.value)
              }
            />
            <S.EditForm
              type="password"
              minLength={6}
              success={Boolean(
                userToAdd.confirmPassword.length &&
                  userToAdd.password === userToAdd.confirmPassword
              )}
              error={Boolean(
                userToAdd.confirmPassword.length &&
                  userToAdd.password.length &&
                  userToAdd.password !== userToAdd.confirmPassword
              )}
              placeholder="Confirm password"
              value={userToAdd.confirmPassword}
              onChange={({ target }) =>
                handleAddChange("confirmPassword", target.value)
              }
            />
          </S.ManageUsersContentAdd>
        )}
        {users.map((user, index) => (
          <EditUser
            user={user}
            key={index}
            onEdit={onEditUser}
            onCancel={cancel}
            onDelete={handleDelete}
          />
        ))}
      </S.ManageUsersContent>
      <S.ManageUsersActions>
        <S.ManageUsersActionsCancel onClick={handleCancel}>
          Cancel
        </S.ManageUsersActionsCancel>
        <S.ManageUsersActionsSave onClick={handleSave}>
          Save changes
        </S.ManageUsersActionsSave>
      </S.ManageUsersActions>
    </S.ManageUsers>
  );
};

export default ManageUsers;
