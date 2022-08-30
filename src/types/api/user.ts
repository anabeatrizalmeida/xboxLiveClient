export interface userLogin {
  email: string;
  password: string;
}

export interface user {
  name: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAdmin: boolean;
}

export interface userHome {
  id: string;
  name: string;
  email: string;
}

export interface User {
  name: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserResponse {
  id: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  updatedAt?: string;
  createdAt?: string;
}

export interface UserUpdate {
  user: User;
  id: string;
}