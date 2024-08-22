import React from 'react'

const FutureTogether = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-[#2EABAF] rounded-xl overflow-hidden sm:flex sm:items-center">
        <img
          className="w-full sm:max-w-md sm:w-auto object-cover"
          src={shape4}
          alt=""
        />
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-5xl uppercase text-white font-semibold leading-tight mb-4">
            Let’s create our future together
          </h2>
          <p className="text-white text-lg sm:text-xl mb-6">
            Don’t forget to check out our career page to see available positions
          </p>
          <button className="px-8 py-3 text-sm sm:text-base font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-white focus:shadow-outline-gray active:border-white active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Available positions
          </button>
        </div>
      </div>
    </div>
  );
}

export default FutureTogether