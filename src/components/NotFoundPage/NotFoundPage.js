import React from "react";
import { EmojiSadIcon } from "@heroicons/react/solid";

const NotFoundPage = () => {
  return (
    <div className="mt-52">
      <h2 className="text-xl">The page you are looking for is not available</h2>
      <h1 className="text-8xl font-bold">
        4
        <span>
          <EmojiSadIcon className="w-28 inline"></EmojiSadIcon>
        </span>
        4
      </h1>
    </div>
  );
};

export default NotFoundPage;
