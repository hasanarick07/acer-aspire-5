import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../Hooks/useReview";
import Review from "../Review/Review";

const Home = () => {
  const [review, setReview] = useReview();
  const navigate = useNavigate();
  const seeReviews = () => {
    navigate("/reviews");
  };
  return (
    <div>
      <div className="md:flex flex-row bg-violet-300">
        <div className="p-4 md:basis-1/2	">
          <h1 className="md:text-6xl font-bold">Your Next Laptop</h1>
          <h1 className="md:text-6xl text-slate-100 font-bold mb-3">
            Your Best Laptop
          </h1>
          <p className="mb-10">
            Powerful and portable, the Aspire 5 laptop delivers on every aspect
            of everyday computing. Housing the AMD Ryzen 7 3700U Mobile
            Processor, this Aspire 5 can tackle any job no matter how complex.
            Creativity soars to new heights with sharp, crisp visuals showcased
            on the 15.6" Full HD IPS screen, while the thin bezel provides you
            more space to work with wherever inspiration strikes. It’s the
            perfect companion to take with you wherever you go!
          </p>
          <button className="transition shadow-inner text-lg font-medium ease-in-out rounded-full p-2 delay-200 bg-violet-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            Live Demo
          </button>
        </div>
        <div className="md:w-1/2 md:basis-1/2 sm:order-first mt-2 mr-2	md:order-last">
          <img
            className="rounded-xl	"
            src="https://m.media-amazon.com/images/I/81vNRgHlqGL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mt-24">Customer Reviews</h1>
        <div className="md:flex justify-between my-20">
          {review.slice(0, 3).map(review => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <button
          onClick={seeReviews}
          className="transition shadow-inner text-lg font-medium ease-in-out rounded-full p-2 delay-200 bg-violet-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-1/4 mb-12"
        >
          See All Review
        </button>
      </div>
    </div>
  );
};

export default Home;
