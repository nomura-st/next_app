import { WorkerInfo } from "../../types/WorkerInfo";
import DatePick from "../parts/DatePick";
import TableCol from "./TableCol";
import TableColCheck from "./TableColCheck";

/**
 * 社員情報表示行
 * @param props
 * @returns
 */
const WorkerRow = (props: { worker: WorkerInfo }) => {
  return (
    <tr id={"line_" + props.worker.id}>
      <TableCol isHeader={true}>
        <TableColCheck />
      </TableCol>
      <TableCol>{props.worker.id}</TableCol>
      <TableCol>
        <div>{props.worker.name}</div>
        <div>{props.worker.name}</div>
      </TableCol>
      <TableCol>
        <DatePick date={props.worker.birthday}></DatePick>
        <DatePick date={props.worker.birthday}></DatePick>
      </TableCol>
      <TableCol>
        <div>会社情報</div>
        <div>会社情報</div>
      </TableCol>
      <TableCol>会社情報</TableCol>
      <TableCol>会社情報</TableCol>
      <TableCol>１２３４５６７８</TableCol>
      <TableCol>１２３４５６７８</TableCol>
      <TableCol isHeader={true}>
        <button className="btn">details</button>
      </TableCol>
    </tr>
  );
};

export default WorkerRow;
