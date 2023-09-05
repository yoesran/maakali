import { avatar1 } from "../assets/imgs";

import CommentCard from "./CommentCard";

function Comments() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex gap-5 overflow-x-scroll no-scrollbar my-20 xl:gap-24">
        {Array.from(Array(15).keys()).map((item) => (
          <CommentCard
            key={item}
            img={avatar1}
            name={"Scott"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            }
          />
        ))}
      </div>

      <div className="w-full h-px bg-teal-500 opacity-50 mb-20"></div>
    </div>
  );
}

export default Comments;
