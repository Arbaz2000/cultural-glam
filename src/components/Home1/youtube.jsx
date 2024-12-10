import React from "react";
import YouTube from "react-youtube";

const YoutubeVideo = () => {
    return (
        <>
        <div className="whate-new-block flex flex-row">
          <div className="container">
            <div className="heading flex flex-col mb-10">
              <div className="text-4xl font-bold mb-2 text-center sm:text-3xl text-xl">Youtube</div>
            </div>
          </div>
        </div>
      
        <div className="flex justify-center items-center mt-10 mx-96">
          <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-10">
            {/* Video Section */}
            <div className="flex-shrink-0 w-full md:w-1/2 mt-10 md:mt-0">
              <iframe
                className="w-full h-[315px] sm:h-[315px]"
                src="https://youtu.be/VrKwfeikDoo?si=JHoKrvFT-10y8rKW"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* Text Section */}
            <div className=" sm:ml-0 md:ml-20 sm:text-base md:text-lg w-full md:w-1/2">
              <h5 className="text-2xl text-black font-bold">Visit our YouTube</h5>
              <p className="text-lg font-medium bg-surface mt-4 max-w-lg sm:max-w-none">
                Don&apos;t miss out! Visit my website to watch my latest YouTube video. Discover exciting content, valuable insights, and engaging entertainment. Click now and join the fun, as I share new ideas and experiences you won’t want to miss!
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default YoutubeVideo;
