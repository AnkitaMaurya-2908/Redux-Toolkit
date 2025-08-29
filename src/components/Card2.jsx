"use client";
import { FaArrowRight } from "react-icons/fa";


export default function ProductCard2() {
    return(
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
      <img src="https://www.digitaltrends.com/wp-content/uploads/2023/02/macbook-pro-14-m2-max.jpg?fit=1425%2C896&p=1" alt="card-image" />
    </div>
          {/* <span className="absolute top-4 right-4 bg-white text-yellow-500 border-1 text-xs cursor-pointer font-semibold px-3 py-1 rounded-full shadow-md">
    4.5 ⭐
  </span> */}

  <div className="absolute top-4 right-4 group">
        <span className="bg-white text-yellow-500 text-xs cursor-pointer font-semibold px-3 py-1 rounded-full shadow-md">
          4.5 ⭐
        </span>

        {/* Tooltip */}
        <div className="absolute top-1 -right-27 hidden group-hover:block bg-stone-100 text-black text-xs rounded-md px-2 py-1 shadow-md">
          128 Reviews
        </div>
      </div>
  

  {/* <span className="absolute top-4 -right-27 rounded-lg px-2 py-1 font-light bg-stone-100 text-sm text-black">128 Reviews</span> */}
    <div className="p-4 ">
        <h6 className=" bg-green-300 inline-block px-4 rounded-2xl text-slate-800 text-xs font-extralight">
        Electronics
      </h6>
      <h6 className="mb-2 text-slate-800 text-xl font-semibold">
        Apple Macbook Pro
      </h6>
      <p className="text-slate-600 leading-normal font-light">
        The Apple MacBook Pro combines powerful performance with a sleek, premium design, making it ideal for professionals and creators.
      </p>
      <div className="mt-8 flex flex-row justify-between" >
        <div className="bg-stone-100 px-3 rounded-sm text-center font-bold flex items-center">$ 110</div>
<div className="mx-5 text-white bg-black px-3 rounded-md py-1 flex items-center gap-2 ">
      <span className="cursor-pointer ">BUY NOW</span>
      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black hover:bg-yellow-400 ">
<FaArrowRight />
      </span>
    </div>
      </div>
    </div>
    </div>


    )
}