import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { supabase } from "../lib/supabase";
import { Task } from "../types/Task";

import Frame from "../components/pages/Home/Frame";
import TasksList from "../components/pages/Home/TasksList";

interface Props {
  tasks: {
    data: Task[];
    count: number;
  };
}

const Home: NextPage<Props> = ({ tasks }) => {
  return (
    <main className="px-3 py-2 md:px-8 md:py-4 lg:py-6 lg:px-16">
      <Head>
        <title> Mural da EM1A </title>
      </Head>

      <div className="w-full flex flex-col items-center">
        <Frame />

        <div className="w-full flex flex-row md:max-w-lg xl:max-w-5xl mt-6">
          <TasksList tasks={tasks?.data} />

          <div className="hidden lg:max-h-64 lg:flex w-56 border border-gray100 rounded-lg bg-black p-1">
            <span> Atividades: {tasks.count} </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase.from("tasks").select("*");

  return {
    props: {
      tasks: {
        data,
        count: data?.length || 0,
      },
    },
  };
};

export default Home;
