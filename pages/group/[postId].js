import { createClient } from "lib/supabase/client";
import { useEffect } from "react";
import { useState } from "react";

const Group = () => {
  const [data, setData] = useState({});
  const supabase = createClient();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data: post } = await supabase
      .from("posts")
      .select()
      .eq("id", "013a243a-ad0f-4f23-92da-c6a9e3faa164")
      .single();

    setData(post);
  };

  return (
    <div className="flex justify-center bg-black w-screen h-full h-">
      <div className="w-full max-w-sm bg-white text-black min-h-screen bg-black">
        sadf
      </div>
    </div>
  );
};

export default Group;
