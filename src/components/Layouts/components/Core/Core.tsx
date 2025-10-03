import { FC } from "react";
import javascriptLogo from "@public/javascript.svg";

type CoreLayoutProps = {
  container: string;
  item: string;
};

const iterationBase = new Array(30).fill(null)

export const CoreLayout: FC<CoreLayoutProps> = ({ container, item }) => (
  <div className={container}>
    {iterationBase.map(() => (
      <div className={item}>
        <img src={javascriptLogo} />
      </div>
    ))}
  </div>
);
