import { GetStaticProps, NextPage } from "next";

import { supabase } from "../../lib/supabase";

import { Task } from "../../types/Task";

import { TbPlus } from "react-icons/tb";
import Head from "next/head";

interface Props {
  count: number;
}

const ActivitiesPage: NextPage<Props> = ({ count }) => {
  async function handleCreateActivity() {
    // const { data, error } = await supabase
    //   .from<Task>("tasks")
    //   .insert([{ title: "Test 1", due: "09/12/2022", owner: "Yuu", type: "task" }]);
    // console.log(data);
  }

  return (
    <main className="px-4 py-3 md:px-8 md:py-4 lg:py-6 lg:px-16">
      <Head>
        <title> Atividades </title>
      </Head>

      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col justify-center md:max-w-sm xl:max-w-xl">
          <div className="w-full flex justify-between items-center pb-6 mb-2 border-b border-gray100">
            <button
              onClick={handleCreateActivity}
              className="flex items-center justify-center bg-white py-1 w-24 pr-2 rounded-md"
            >
              <TbPlus size={24} className="text-black" />
              <div className="ml-1 text-black">
                <strong> Criar </strong>
              </div>
            </button>
            <div>
              <p> Total: {count}</p>
            </div>
          </div>

          <div>adsa</div>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { count } = await supabase.from<Task>("tasks").select("*", { count: "exact" });

  return {
    props: {
      count,
    },
  };
};

export default ActivitiesPage;
