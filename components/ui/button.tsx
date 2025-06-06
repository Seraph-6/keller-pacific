import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => (
  <button ref={ref} {...props} className={`px-4 py-2 rounded ${props.className || ""}`}>
    {children}
  </button>
));
Button.displayName = "Button";