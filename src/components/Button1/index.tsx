import React, {ButtonHTMLAttributes} from "react";
import * as S from "./style";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  value: string;
} & ButtonType;

const Button1 = ({value, ...props}: ButtonProps) => {
  return <S.Button1 {...props}>{value}</S.Button1>;
};

export default Button1;