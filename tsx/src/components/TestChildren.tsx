import React, { isValidElement, PropsWithChildren } from "react";

type TitleChildProps = {
  title: string;
  children?: React.ReactNode;
};

export const TestChildren = ({ children }: PropsWithChildren) => {
  const isEmptyChildren = React.Children.count(children) === 0;

  return (
    <div className="tabs">
      {!isEmptyChildren &&
        React.Children.map(children, (child) => {
          if (!isValidElement<TitleChildProps>(child)) return null;
          return (
            <>
              <h2>{child.props.title}</h2>
              <div>{child.props.children}</div>
            </>
          );
        })}
    </div>
  );
};
