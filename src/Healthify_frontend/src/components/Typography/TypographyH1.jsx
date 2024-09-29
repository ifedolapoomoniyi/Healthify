import { cn } from "../../lib/utils";
import React from "react";

function TypographyH1({ children, className }) {
  return (
    <h1 className={`text-3xl font-bold tracking-tight lg:text-[56px] ${cn(className)}`}>
      {children}
    </h1>
  );
}

export default TypographyH1;
