import React from "react"
import { useParams } from "react-router-dom"
import Breadcrumbs from "../ui/BreadCrumb"
import ProductColor from "./ProductColor"
import ProductSize from "./ProductSize"
import Button from "../ui/Button"
import ProductRating from "./ProductRating"
import { products } from "./products"
import ProductPrice from "./ProductPrice"
import { FaLocationDot } from "react-icons/fa6"
import ProductFeatures from "./ProductFeatures"
import ProductBrand from "./ProductBrand"

const ProductDetails = ({ product, style }) => {
  return (
    <section className={`${style} w-full flex flex-col items-start gap-2 md:gap-4 p-1 gap:p-2`} >
      <span className="text-md md:text-lg text-gray-500">{product.category}</span>
      <section className="flex flex-col">
        <span className="text-xl md:text-2xl">{product.name}</span>
        <span className="text-md md:text-lg text-blue-500">From {product.brand}</span>
      </section>
      <span className="text-sm md:text-md text-gray-500">{product.description}</span>
      <ProductPrice price={product.price} prevPrice={product.prevPrice} discount={product.discount} />
      <ProductColor availableColors={product.availableColors} colors={product.colors} />
      <ProductSize availableSizes={product.availableSizes} sizes={product.sizes} />
      <ProductRating />
      <ProductFeatures productFeatures={product.features} />
    </section>
  )
}

const ProductOfferDetails = ({ product, style }) => {
  return (
    <section className={`${style} w-full flex flex-col items-start gap-2 md:gap-4 p-1 md:p-2 border-[1px] border-gray-200`} >
      <Button content="Add to cart" style="w-full p-2 border-[.1rem] border-orange-500 bg-orange-500 text-white hover:text-orange-500 text-md rounded-xl md:rounded-2xl" />
      <Button content="Buy Now" style="w-full p-2 border-[.1rem] border-amber-500 bg-amber-500 text-white hover:text-amber-500 text-md rounded-xl md:rounded-2xl" />
      <section className="flex flex-col gap-1 md:gap-2">
        <span className="text-sm md:text-md">FREE scheduled delivery as soon as Thursday, 22 May, 8 am - 5 pm</span>
        <section className="text-sm md:text-md flex flex-row items-center gap-1 md:gap-2">
          <FaLocationDot />
          <span className="text-blue-900 cursor-pointer">Delivering to delivery location - update location</span>
        </section>

      </section>
      <span className="text-green-900 text-xl md:text-2xl">{product.countInStock > 0 ? 'In stock' : 'Out of stock'}</span>
      <ProductBrand product={product}/>
    </section>
  )
}

const Product = () => {

  const { id: productId } = useParams();
  const product = products.find((p) => p._id == productId);

  return (
    <div className="w-full md:min-h-[60vh] lg:min-h-[80vh] smcontainer md:container 
      flex flex-col items-start justify-start gap-2 md:gap-4 p-2 md:p-4">
      <Breadcrumbs />
      <div className="h-full grid grid-cols-1 md:grid-cols-4 items-start justify-center gap-2 md:gap-4 border-[1px] border-gray-200 p-1 md:p-2">
        <img src={product.image} className="col-span-1 md:col-span-2 aspect-square w-full h-auto object-cover" alt="Image not found" />
        <ProductDetails product={product} style="col-span-1" />
        <ProductOfferDetails product={product} />
      </div>
    </div>
  )
}

export default Product