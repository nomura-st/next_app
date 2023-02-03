import { WorkerInfo } from "../../types/WorkerInfo";
import TableCol from "./TableCol";
import TableColCheck from "./TableColCheck";
import WorkerRow from "./WorkerRow";

/**
 * 社員情報一覧表
 * @param props
 * @returns
 */
const WorkerList = (props: { workers: WorkerInfo[] }) => {
  return (
    <div className="w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <TableCol isHeader={true}>
              <TableColCheck header="対象" />
            </TableCol>
            <TableCol isHeader={true}>ID</TableCol>
            <TableCol isHeader={true}>
              <div>名前</div>
              <div>名前</div>
            </TableCol>
            <TableCol isHeader={true}>
              <div>誕生日</div>
              <div>誕生日</div>
            </TableCol>
            <TableCol isHeader={true}>会社情報</TableCol>
            <TableCol isHeader={true}>会社情報</TableCol>
            <TableCol isHeader={true}>会社情報</TableCol>
            <TableCol isHeader={true}>AAA</TableCol>
            <TableCol isHeader={true}>BBB</TableCol>
            <TableCol isHeader={true}>詳細へ</TableCol>
          </tr>
        </thead>
        <tbody>
          {props.workers.map((w) => (
            <WorkerRow key={w.id} worker={w}></WorkerRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkerList;
