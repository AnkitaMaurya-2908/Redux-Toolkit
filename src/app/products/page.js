

"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { FaArrowRight } from "react-icons/fa";


export default function ProductList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 xl:gap-16 p-4 md:p-6 bg-gray-100">

{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-11 p-6 bg-gray-100"> */}
  {items.map((product) => (
        <div key={product.id} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full  hover:shadow-lg hover:scale-[1.02] transition-transform z-10 hover:z-20">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md flex justify-center items-center bg-gradient-to-r from-yellow-100  to-orange-100 ">
          <img className="  h-45 w-35" src={product.image} />
        </div>

      <div className="absolute top-4 right-4 group">
        <span className="bg-white text-yellow-500 text-xs cursor-pointer font-semibold px-3 py-1 rounded-full shadow-md">
          {product.rating.rate} ⭐
        </span>

        <div className="absolute z-50 top-1 -right-27 hidden group-hover:block bg-stone-100 text-black text-xs rounded-md px-2 py-1 shadow-md">
          {product.rating.count} Reviews
        </div>
      </div>

        <div className="p-4 ">
            <h6 className=" bg-green-300 inline-block px-4 rounded-2xl text-slate-800 text-xs font-extralight">
            {product.category}
          </h6>
          <h6 className="mb-2 text-slate-800 text-xl font-semibold truncate ">
            {product.title}
          </h6>
          <p className="text-slate-600 leading-normal font-light line-clamp-3">
            {product.description}
          </p>
          <div className="mt-8 flex flex-row justify-between" >
            <div className="bg-stone-100 px-3 rounded-sm text-center font-bold flex items-center">$ {product.price}</div>
    <div className="mx-5 text-white bg-black px-3 rounded-md py-1 flex items-center gap-2 ">
          <span className="cursor-pointer ">BUY NOW</span>
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black hover:bg-yellow-400 ">
    <FaArrowRight />
          </span>
        </div>
          </div>
        </div>
        </div>
  ))}
  
  </div>

  );
}
