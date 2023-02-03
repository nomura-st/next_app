import React, { useState, useEffect } from "react";
import prisma from "../../lib/db/prisma";
import { WorkerInfo } from "../../lib/types/WorkerInfo";
import WorkerList from "../../lib/components/list/WorkerList";

export async function getServerSideProps() {
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
  }, []); // このhookが依存する変数はなし=初回のみ実行

  return <WorkerList workers={workers}></WorkerList>;
};

export default WorkersListPage;
