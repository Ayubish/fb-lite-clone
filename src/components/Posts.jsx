import minato from "../assets/img/minato.jpg";
import { useState } from "react";

const Posts = () => {
  const [count, setCount] = useState(24);
  function handleLike() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="border-t-4 border-slate-300 pb-2">
        <div className="flex justify-between p-2 items-center">
          <div className="flex gap-2">
            <img
              src={minato}
              alt="minato"
              className=" w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Minato Namikaze</p>
              <p className="text-xs flex gap-2 text-slate-500">
                1d <i className="fa fa-globe"></i>
              </p>
            </div>
          </div>
          <div className="text-slate-500">
            <i className="fa fa-ellipsis-h"></i>
            <i className="fa-solid fa-x px-2"></i>
          </div>
        </div>
        <div className="p-2">
          <p>
            This is amaxingly delusional... and Don't forget to like and
            randomize by the way i don't know what i am talking about...
          </p>
        </div>
        <img src={minato} alt="post pic" />

        <p>
          <span className="tracking-tighter">👍😂😲</span>
          {count}
        </p>
        <div className="flex justify-between text-xl px-2 gap-2 text-center">
          <i
            onClick={handleLike}
            class="fa fa-thumbs-up cursor-pointer bg-slate-300 py-1 basis-1/3 rounded-full text-slate-800"
          ></i>
          <i class="fa fa-comment bg-slate-300 py-1 basis-1/3 rounded-full text-slate-800"></i>
          <i class="fa fa-share bg-slate-300 py-1 basis-1/3 rounded-full text-slate-800"></i>
        </div>
      </div>
    </>
  );
};

export default Posts;
