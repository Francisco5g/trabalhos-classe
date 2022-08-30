import Link from "next/link";
import { Task } from "../../../types/Task";

import { BiBookContent } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";

function TaskIcon({ type }: { type: Task["type"] }) {
  const handler = {
    test: <HiOutlineNewspaper className="w-6 h-6 mr-2" />,
    task: <BiBookContent className="w-6 h-6 mr-2" />,
  };

  return handler[type];
}

interface Props {
  tasks: Task[];
}

export default function TasksList({ tasks }: Props) {
  return (
    <div className="w-full lg:pr-4 first:mt-0">
      {tasks?.map(({ id, title, due, type, owner }) => (
        <Link key={id} href={`/task/${id}`}>
          <div className="mb-4 p-2 bg-black border-gray100 border rounded-md cursor-pointer flex flex-col duration-200 hover:border-white">
            <div className="flex items-center">
              <TaskIcon type={type} />

              <p>
                <strong className="text-base text-white"> {title} </strong>
                adicionado por <span className="text-white"> {owner} </span>
              </p>
            </div>

            <span className="mt-4"> {new Date(due).toLocaleDateString("pt-BR", { dateStyle: "medium" })} </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
