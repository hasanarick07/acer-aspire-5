import React from "react";
import useReview from "../Hooks/useReview";
import Review from "../Review/Review";

const Reviews = () => {
  const [review, setReview] = useReview();
  return (
    <div className="md:grid grid-cols-3 gap-4 mt-10">
      {review.map(review => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
