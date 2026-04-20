import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  classNames?: string;
  noPadding?: boolean;
  noPaddingBottom?: boolean;
  noMx?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  classNames = "",
  noPadding = false,
  noPaddingBottom = false,
  noMx = false,
  
}) => {
  const defaultClasses = " px-[32px]";
  const paddingBottomClasses = noPaddingBottom ? "pb-0" : "pb-[80px]";
  const paddingClasses = noPadding ? "pb-0" : "md:pb-[180px]";
  const mxClasses = noMx ? "w-full" : "container mx-auto mx-[165px]";

  return (
    <div
      className={`${defaultClasses} ${paddingBottomClasses} ${paddingClasses} ${classNames} ${mxClasses}`}
    >
      {children}
    </div>
  );
};

export default Container;
