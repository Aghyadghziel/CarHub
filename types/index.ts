import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  containerStyles: string;
  btnType?: "button" | "submit";
}

export interface SearchManuFacturerProps {
  manufacturer: string; 
  setManuFacturer: (manufacturer: string) => void
}