import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const Review = ({ review }) => {
  const { name, picture, rating, text } = review;
  return (
    <div className="m-auto shadow-2xl text-left shadow-violet-300	 my-10 rounded-xl bg-violet-200 w-72  p-7">
      <img className="w-10 mx-auto" src={picture} alt="" />

      <p>Name : {name}</p>

      <div className="flex  items-center">
        <p className="mr-3">Rating : {rating}</p>
        <StarIcon className="w-5 text-amber-500	"></StarIcon>
        <StarIcon className="w-5 text-amber-500	"></StarIcon>
        <StarIcon className="w-5 text-amber-500	"></StarIcon>
        <StarIcon className="w-5 text-amber-500	"></StarIcon>
        <StarIcon className="w-5 text-amber-400	"></StarIcon>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Review;
