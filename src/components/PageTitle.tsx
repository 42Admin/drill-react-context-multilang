import React, { ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
}

function PageTitle({ children }: PageTitleProps): JSX.Element {
  return (
    <>
      <h1>{children}</h1>
      <hr />
    </>
  );
}

export default PageTitle;
