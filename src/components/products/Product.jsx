import { useNavigate, useParams } from "react-router-dom"
import Breadcrumbs from "../ui/BreadCrumb"
import ProductColor from "./ProductColor"
import ProductSize from "./ProductSize"
import Button from "../ui/Button"
import ProductRating from "./ProductRating"
import ProductPrice from "./ProductPrice"
import { FaLocationDot } from "react-icons/fa6"
import ProductFeatures from "./ProductFeatures"
import ProductBrand from "./ProductBrand"
import { useCreateReviewMutation, useGetProductByIdQuery, useGetProductReviewsQuery } from "../../slices/productsApiSlice"
import Loader from "../layout/loader/Loader"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../slices/cartSlice"
import { useContext, useEffect, useState } from "react"
import CartDrawerContext from "../../contexts/CartDrawerContext"
import { LoaderContext } from "../../contexts/LoaderContext"
import { BASE_URL } from "../../../constants"
import Rating from "../ui/Rating"

const ProductDetails = ({ product, style }) => {
  return (
    <section className={`${style} w-full flex flex-col gap-4 p-4 bg-white rounded-lg`}>
      <span className="text-sm md:text-base text-gray-500 uppercase tracking-wide">
        {product.category}
      </span>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          {product.name}
        </h1>
        <span className="text-md md:text-lg text-blue-600 font-medium">
          From {product.brand}
        </span>
      </div>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        {product.description}
      </p>
      <ProductPrice
        price={product.price}
        prevPrice={product.prevPrice}
        discount={product.discount}
      />
      <ProductColor
        availableColors={product.availableColors}
        colors={product.colors}
      />
      <ProductSize
        availableSizes={product.availableSizes}
        sizes={product.sizes}
      />
      <ProductRating />
      <ProductFeatures productFeatures={product.features} />
    </section>

  )
}

const ProductOfferDetails = ({ product, style, existInCart = false }) => {

  const dispatch = useDispatch();

  const { isCartDrawOpen, setIsCartDrawOpen } = useContext(CartDrawerContext);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
    setIsCartDrawOpen(!isCartDrawOpen)
  }

  return (
    <section
      className={`${style} h-full md:h-[75%] w-full flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg`}>
      <div className="flex flex-col gap-3 w-full">
        {product.countInStock > 0 ? (
          <>
            <Button
              onClick={addToCartHandler}
              content={existInCart ? "Show in cart" : "Add to cart"}
              style="w-full py-2 bg-orange-500 text-white rounded hover:bg-white hover:text-orange-500 border border-orange-500 transition"
            />
            <Button
              content="Buy Now"
              style="w-full py-2 bg-amber-500 text-white rounded hover:bg-white hover:text-amber-500 border border-amber-500 transition"
            />
          </>
        ) : (
          <>
            <Button
              content="Add to wishlist"
              style="w-full py-2 bg-red-500 text-white rounded hover:bg-white hover:text-red-500 border border-red-500 transition"
            />
            <Button
              content="Notify me"
              style="w-full py-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition"
            />
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 text-sm md:text-base text-gray-700">
        <span>
          <strong>FREE</strong> scheduled delivery as soon as{" "}
          <span className="text-green-700 font-medium">Thursday, 22 May, 8am – 5pm</span>
        </span>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-blue-600" />
          <span className="text-blue-900 hover:underline cursor-pointer">
            Delivering to your location – update
          </span>
        </div>
      </div>
      <span
        className={`${product.countInStock > 0 ? "text-green-700" : "text-red-600"
          } text-lg md:text-xl font-semibold`}
      >
        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
      </span>

      <ProductBrand product={product} />
    </section>

  )
}


const Product = () => {

  const navigate = useNavigate();
  const { id: productId } = useParams();

  const { data: product, isLoading, isError } = useGetProductByIdQuery(productId, {
    refetchOnMountOrArgChange: true,
  });

  const {data : reviews, isLoading : reviewLoading, error :reviewErr, refetch} = useGetProductReviewsQuery(productId);
  const [createReview, { isLoading : createReviewLoading, error : createReviewErr}] = useCreateReviewMutation();

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const { cartItems } = useSelector((state) => state.cart);
  const { auth } = useSelector((state) => state.auth);

  const existngItm = cartItems.find((cartItem) => cartItem._id === productId);

  const existInCart = existngItm ? true : false;

  const inputStyle = "w-3/4 border-[1px] border-gray-200 p-1 md:p-2 outline-none border-gray-400 rounded placeholder-gray-400"

  const handleCreateReview = async () => {
    const currReview = {
      comment, rating
    }
    await createReview(productId, currReview);
    refetch();
  }

  if (isError || isLoading) return <div>No product found</div>;

  return (
    <div className="container mx-auto min-h-screen flex flex-col gap-10 px-4 md:px-8 py-20 md:py-28">
      <div className="w-full flex items-center justify-between">
        <Breadcrumbs />
        {
          auth && auth.isAdmin &&
          <Button
                onClick={() => navigate(`/admin/products/${productId}/edit`)}
                content="Edit Product"
                style="p-2 px-4 bg-blue-500 text-white rounded hover:bg-white hover:text-blue-500 border border-blue-500 transition"
              />
        }
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white shadow-md rounded-xl p-4">
        <div className="w-full aspect-square overflow-hidden rounded-lg">
          <img
            src={`${BASE_URL}${product.image}`}
            alt="Product"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProductDetails
            product={product}
            style="w-full"
          />
          <ProductOfferDetails
            product={product}
            existInCart={existInCart}
            style="w-full"
          />
        </section>
      </div>

      <div className="flex flex-col gap-6 bg-white shadow-md rounded-xl p-4">
        <div className="w-full flex flex-row justify-between p-2 border-b-[1px] border-gray-200">
          <span className="text-lg md:text-xl">Reviews</span>
          <span className="text-blue-600 text-md md:text-lg cursor-pointer hover:underline"
            onClick={handleCreateReview}>Add review</span>
        </div>

        <div className="w-full flex flex-row justify-start gap-2 p-2 border-b-[1px] border-gray-200">
          <input type="text" className={inputStyle} comment="comment" placeholder='Enter you comment'
            onChange={(e)=>setComment(e.target.value)}/>
          <Button content="Post Comment" onClick={handleCreateReview}
              style="max-w-fit p-2 border-[.1rem] bg-blue-600 border-blue-600 text-white hover:text-blue-600 hover:bg-white text-md rounded transition" isDisabled={isLoading} />
        </div>

        {
          reviews && reviews.map((review) => {
            return (
              <div>
                <div className="w-full flex flex-col justify-start items-start p-2">
                  <span className="border-b-[1px] border-b-gray-200 text-gray-800 text-lg md:text-xl">{review.name}</span>
                  <span className="border-b-[1px] border-b-gray-200 text-blue-600 text-sm md:text-md cursor-pointer hover:underline">{review.comment}</span>
                </div>
                <Rating rating={review.rating}/>
              </div>
            )
          })
        }
      </div>
    </div>

  );
};

export default Product;