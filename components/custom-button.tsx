"use client";
import React from "react";
import { CustomButtonProps } from "@/types";
const CustomButton = ({
  title,
  isDisabled,
  handleClick,
  containerStyles,
  textStyles,
  btnType,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        type={btnType || "button"}
        disabled={isDisabled}
        onClick={handleClick}
        className={`custom-btn ${containerStyles}`}
      >
        <span className={`flex-1 ${textStyles}`}> {title}</span>
      </button>
    </div>
  );
};

export default CustomButton;
