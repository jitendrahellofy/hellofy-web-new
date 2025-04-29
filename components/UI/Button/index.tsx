import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //backgroundColor?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  varient?: "outline" | "primary";
}

const sizeClasses = {
  small: "text-sm py-2 px-4",
  medium: "md:text-md text-sm py-3 px-6",
  large: "text-lg py-4 px-8",
};

const varientClasses = {
  outline: "border border-b-4 bg-white border-primary text-primary",
  primary: "border border-b-4 bg-primary border-black_dark text-white",
};

const Button: React.FC<ButtonProps> = ({
  //backgroundColor = "bg-primary",
  name,
  size = "medium",
  className,
  varient,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${sizeClasses[size]} rounded-lg transition duration-300 ${className} ${varientClasses[varient]}`}
    >
      {name}
    </button>
  );
};

export default Button;
