import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import "./styles.css";
import { cn } from "@/libs/utils";

const buttonVariants = cva(
  "relative overflow-hidden flex items-center justify-center  text-decoration-none font-medium md:text-base hover:shadow-none hover:rounded-0 hover:transition-colors hover:duration-400",

  {
    variants: {
      variant: {
        default:
          "button bg-shaft text-white hover:bg-alabaster hover:text-shaft hover:border-none hover:before:border-shaft border-none hover:after:border-shaft active:bg-shaft active:text-white",
        destructive: "",
        all: "button uppercase font-normal bg-shaft text-white hover:bg-alabaster hover:text-shaft hover:border-none hover:before:border-shaft border-none hover:after:border-shaft active:bg-shaft active:text-white",
        allActive:
          "uppercase font-normal bg-alabaster text-shaft border border-shaft border-4",
        defaultActive: "bg-alabaster text-shaft border border-shaft border-4",
        reset:
          "button bg-grey text-black hover:bg-alabaster hover:text-shaft hover:border-none hover:before:border-grey border-none active:text-shaft active:bg-grey hover:after:border-grey",
        resetDisabled: "bg-grey text-black cursor-not-allowed border-none",
        outline: "",
        sortModalActive:
          "bg-white text-black border-shaft border-4 border-solid",
        secondary: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "px-3 py-2 text-sm",
        sort: "w-[100px] h-10 xl:h-[50px] xl:w-[150px]",
        sm: "md:text-sm text-xs px-3 py-2 md:px-3 md:py-2 p-0 mx-[25px] my-0",
        lg: "h-11  px-8",
        icon: "h-10 w-10",
        active: "py-1.5 px-3 text-sm",
        menuActive: "py-1 px-3 text-sm w-[210px]",
        sortModal: "xs:w-[130px] h-5 px-3 py-2 w-[90px] mini:w-[100px]",
        sortModalActive: "xs:w-[122px] h-3  px-3 py-2 w-[82px] mini:w-[192px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={`  ${cn(buttonVariants({ variant, size, className }))}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
