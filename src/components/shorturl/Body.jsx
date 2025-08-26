import React from "react";

const Body = () => {
  return (
    <section className="flex justify-center bg-[#F9F9F9]">
      <div className="container flex justify-center">
        <div className="bg-white pt-5 pb-6 w-3/5 rounded-md shadow-custom-shadow">
          <h1 className="text-center font-primary font-bold text-4xl text-[#555555] pb-8">
            Paste the URL to be shortened
          </h1>
          <form>
            <div className="flex px-20">
              <input
                type="text"
                placeholder="Enter the link here"
                className="w-4/5 py-[17px] px-4 border-[1px] border-[#BBBBBB] rounded-l-md focus:border-2 focus:border-[black] focus:outline-none focus:rounded-l-md"
              />
              <div className="bg-[#2C87C5]">
                <button className="py-[17px] px-4 text-center font-lato font-bold text-[17px] whitespace-nowrap text-[#ffffff] mb-[10px]">
                  Shorten URL
                </button>
              </div>
            </div>
            <p className="text-center pt-2 font-normal text-[17px] text-[#202020]">
              ShortURL is a free tool to shorten URLs and generate short links{" "}
              <br />
              URL shortener allows to create a shortened link making it easy to
              share
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Body;
