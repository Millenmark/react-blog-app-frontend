/* eslint-disable react-refresh/only-export-components */
import CTAImage from "../assets/images/CTA_image.jpg";

const CTA = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-50 translate-y-[1px] "
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>

      <section className=" relative bg-dark-hard px-5">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h2 className=" text-white capitalize font-robot font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
              Get our stories delivered From us to your inbox weekly.
            </h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
              <input
                type="text"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-text"
              />
              <button className="px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap">
                Get Started
              </button>
            </div>
            <p className=" text-dark-text text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
              <span className="font-bold italic text-[#b3bac5] md:not-italic md:font-normal md:text-dark-text">
                Get a response tomorrow
              </span>
              {"  "}
              if you submit by 9pm today. If we received after 9pm will get a
              reponse the following day.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 hidden mb-[70px] md:block md:order-first lg:order-last">
            <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-xl absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-white opacity-[0.06] rounded-xl absolute -bottom-[10%] -left-[8%]" />
              <div className="rounded-xl w-full  bg-white p-3 z-[1] relative overflow-hidden ">
                <img
                  src={CTAImage}
                  alt="CTA Image"
                  className="w-full rounded-xl object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
                <div className="p-5">
                  <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl">
                    The best articles every week
                  </h2>
                  <p className="text-dark-text mt-3 md:text-lg">
                    Our insurance plans offers are priced the same everywhere
                    else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
