import ProductImages from "./InfoImages/Index";
import InfoData from "./InfoData/Index";
const ProductInfo = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-3  gap-0">
      <ProductImages />
      <InfoData />
    </div>
  );
};

export default ProductInfo;
