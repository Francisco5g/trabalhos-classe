import type { GetStaticProps, NextPage as AppPage } from "next";
import Head from "next/head";

import { supabase } from "../../lib/supabase";
import { Task } from "../../types/Task";

import Frame from "../../components/pages/App/Frame";
import TasksList from "../../components/pages/App/TasksList";

interface Props {
  tasks: {
    data: Task[];
    count: number;
  };
}

const Home: AppPage<Props> = ({ tasks }) => {
  return (
    <main className="px-3 py-2 md:px-8 md:py-4 lg:py-6 lg:px-16">
      <Head>
        <title> Mural da EM1A </title>
      </Head>

      <div className="w-full flex flex-col items-center">
        <Frame />

        <div className="my-2 relative">
          <span className="text-xs"> Trabalhos e Provas </span>
        </div>

        <div className="w-full flex flex-row md:max-w-lg xl:max-w-5xl">
          <TasksList tasks={tasks?.data} />

          <div className="hidden lg:max-h-64 lg:flex w-56 border border-gray100 rounded-lg bg-black p-1 flex-col justify-center items-center">
            <span> Atividades: {tasks.count} </span>
            <span className="text-xs text-gradient"> Em breve </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data, count } = await supabase.from("tasks").select("*", { count: "exact" });

  return {
    props: {
      tasks: {
        data,
        count,
      },
    },
  };
};

export default Home;
