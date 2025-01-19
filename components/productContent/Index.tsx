import ProductHeader from "./ProductHeader";
import ProductBreadCrumps from "./ProductBreadCrumps";
import ProductInfo from "./productInfo/index";
import ProductReviews from "./productReviews/Index";
import SimilarProducts from "./similarProducts/Index";
const ProductContent = () => {
  return (
    <div className="border-b border-b-lightPrimary">
      <ProductHeader />
      <div className="lg:px-20 md:px-16 sm:px-6 px-3 pb-8">
        <ProductBreadCrumps />
        <ProductInfo />
        <ProductReviews />
        <SimilarProducts />
      </div>
    </div>
  );
};

export default ProductContent;
