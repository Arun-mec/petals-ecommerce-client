import {
  FaAward,
  FaTruck,
  FaUndo,
  FaMoneyBillWave,
  FaRetweet,
  FaHeadset,
  FaLeaf,
  FaLock,
  FaStar
} from "react-icons/fa";

const ProductFeatures = ({ productFeatures }) => {

    const outerDivStyle = "flex flex-col items-center justify-center bg-gray-100 p-1 md:p-2";
    const iconStyle = "text-xl md:text-2xl text-blue-900";
    const textStyle = "text-xs md:text-sm text-yellow-600"
  return (
    <div className="flex flex-row items-center justify-start gap-1 md:gap-2 flex-nowrap">
      {productFeatures.includes("100% Warranty") && (
        <section className={outerDivStyle} >
          <FaAward className={iconStyle} />
          <span className={textStyle} >100% Warranty</span>
        </section>
      )}

      {productFeatures.includes("Free Delivery") && (
        <section className={outerDivStyle}>
          <FaTruck className={iconStyle} />
          <span className={textStyle} >Free Delivery</span>
        </section>
      )}

      {productFeatures.includes("10 Days Replacement") && (
        <section className={outerDivStyle}>
          <FaUndo className={iconStyle} />
          <span className={textStyle} >10 Days Replacement</span>
        </section>
      )}

      {productFeatures.includes("Cash on Delivery") && (
        <section className={outerDivStyle}>
          <FaMoneyBillWave className={iconStyle} />
          <span className={textStyle}>Cash on Delivery</span>
        </section>
      )}

      {productFeatures.includes("Easy Returns") && (
        <section className={outerDivStyle}>
          <FaRetweet className={iconStyle} />
          <span className={textStyle}>Easy Returns</span>
        </section>
      )}

      {productFeatures.includes("24/7 Customer Support") && (
        <section className={outerDivStyle}>
          <FaHeadset className={iconStyle} />
          <span className={textStyle}>24/7 Support</span>
        </section>
      )}

      {productFeatures.includes("Eco-Friendly Packaging") && (
        <section className={outerDivStyle}>
          <FaLeaf className={iconStyle} />
          <span className={textStyle}>Eco Packaging</span>
        </section>
      )}

      {productFeatures.includes("Secure Payment") && (
        <section className={outerDivStyle}>
          <FaLock className={iconStyle} />
          <span className={textStyle}>Secure Payment</span>
        </section>
      )}

      {productFeatures.includes("Premium Quality") && (
        <section className={outerDivStyle}>
          <FaStar className={iconStyle} />
          <span className={textStyle}>Premium Quality</span>
        </section>
      )}
    </div>
  );
};

export default ProductFeatures;
