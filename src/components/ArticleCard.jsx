/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import ArticleImage from "../assets/posts/article_image_01.jpg";
import Profile01 from "../assets/profilepic/profile01.jpg";
import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`${className} rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}
    >
      <img
        src={ArticleImage}
        alt="Post Image"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl">
          Future of Work
        </h2>
        <p className="text-dark-text mt-3 md:text-lg">
          Majority of people will work in jobs that don't exist today
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={Profile01}
              alt="Profile Picture"
              className="w-9 h-9 md:w-10 md:h-10"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Viola Manisa
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36b37e] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <BsCheckLg className="w-1.5 h-1.5 text-[#36b37e]" />
                </span>
                <span className="italic text-dark-text text-xs md:text-sm">
                  Verified Writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-text italic text-sm md:text-base">
            02 May
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
