"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-11 p-6 bg-gray-100">
  {items.map((product) => (
    <div
      key={product.id}
      className="relative  rounded-xl shadow-md bg-white p-5 transition hover:shadow-lg hover:scale-105 transition-transform"
    >
      <span className="absolute top-3 right-3 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
        {product.category}
      </span>

      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-auto mx-auto object-contain"
      />

      <h2 className="text-lg font-semibold mt-4 text-gray-800 line-clamp-1">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold text-xl mt-2">
        ${product.price}
      </p>

      <div className="flex items-center mt-2 text-sm text-gray-600">
        <span className="text-yellow-500 mr-1">⭐</span>
        <span>{product.rating.rate}</span>
        <span className="ml-2 text-gray-400">({product.rating.count} reviews)</span>
      </div>

      <p className="text-sm text-gray-600 mt-3 line-clamp-2">
        {product.description}
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  ))}
</div>

  );
}
