import { ReactNode } from "react";

type Props = {
  isHeader?: boolean;
  children?: ReactNode;
};
/**
 * 一行の一列
 * @param props
 * @returns
 */
const TableCol = (props: Props) => {
  const col = (
    <div className="flex flex-col text-center justify-items-center space-y-1">
      {props.children}
    </div>
  );
  if (props.isHeader) {
    return <th>{col}</th>;
  } else {
    return <td>{col}</td>;
  }
};

export default TableCol;
