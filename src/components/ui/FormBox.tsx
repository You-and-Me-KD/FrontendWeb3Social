import { cn } from "@/libs/utils";
import { FC } from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const FormBox: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full bg-main-1 p-16 rounded-2xl relative shadow-main-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FormBox;
