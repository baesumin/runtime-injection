import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "confirm" | "cancel";
}

const BUTTON_COLOR = {
  confirm: {
    hover: "hover:bg-blue-700",
    base: "bg-blue-500",
  },
  cancel: {
    hover: "hover:bg-red-700",
    base: "bg-red-500",
  },
};

export default function Button({
  buttonType = "confirm",
  children,
  className,
  ...props
}: ButtonProps) {
  const _class = `${className ?? ""} px-4 py-2 text-white ${
    BUTTON_COLOR[buttonType].base
  } ${BUTTON_COLOR[buttonType].hover}`;
  return (
    <button {...props} type="button" className={_class}>
      {children}
    </button>
  );
}
