import React, { useState, useEffect } from "react";
import prisma from "../../lib/db/prisma";
import { WorkerInfo } from "../../lib/types/WorkerInfo";
import WorkerList from "../../lib/components/list/WorkerList";

/**
 * サーバ処理：一覧に必要な情報を集めて、propsを画面に渡す
 * @returns
 */
export async function getServerSideProps() {
  // 社員情報データを取得
  const w = await prisma.workerInfo.findMany();
  return {
    props: {
      workers: w,
    },
  };
}

const WorkersListPage = (props: { workers: WorkerInfo[] }) => {
  const [workers, setWorkers] = useState([] as WorkerInfo[]);
  useEffect(() => {
    setWorkers(props.workers);
  }, []);

  return <WorkerList workers={workers}></WorkerList>;
};

export default WorkersListPage;
