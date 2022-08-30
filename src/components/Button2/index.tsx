import {ButtonHTMLAttributes} from "react";
import * as S from "./style";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  value: string;
} & ButtonType;

const Button2 = ({value, ...props}: ButtonProps) => {
  return <S.Button2 {...props}>{value}</S.Button2>;
};

export default Button2;