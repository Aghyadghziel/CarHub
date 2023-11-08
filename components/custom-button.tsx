"use client";
import React from "react";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
const CustomButton = ({
  title,
  isDisabled,
  handleClick,
  containerStyles,
  textStyles,
  btnType,
  rightIcon,
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
        {rightIcon && (
          <div className=" relative w-6 h-6">
            <Image
              src={rightIcon}
              alt="right icon"
              fill
              className=" object-contain"
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default CustomButton;
