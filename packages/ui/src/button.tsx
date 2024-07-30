"use client";
import tw from "tailwind-styled-components";

import type React from "react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({
  children,
  variant,
  appName,
}: ButtonProps): JSX.Element => {
  return (
    <StButton
      type="button"
      variant={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </StButton>
  );
};

const StButton = tw.button`
  ${(props) => {
    if (props.variant === "primary") return "bg-blue-500";
    if (props.variant === "secondary") return "bg-green-500";
    if (props.variant === "danger") return "bg-red-500";
    return "bg-gray-500"; // default case
  }}
  text-white
  px-4
  py-2
  rounded
  hover:bg-blue-700
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export const StyledButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
