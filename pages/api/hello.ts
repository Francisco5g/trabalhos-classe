import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabase";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { data: tasks, error } = await supabase.from("tasks").select("*");

  console.log(tasks);

  res.status(200).json({ name: "John Doe" });
};
