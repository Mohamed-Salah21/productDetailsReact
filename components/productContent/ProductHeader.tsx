const ProductHeader = () => {
  return (
    <section className="pb-4 bg-lightPrimary relative">
      <div className="lg:w-[772px] md:w-[570px] w-3/4 mx-auto relative text-center h-36 flex items-center justify-center">
        <h1 className="font-medium md:text-5xl text-4xl">Product Details</h1>
        <h1 className="font-medium absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full lg:text-8xl md:text-7xl text-5xl opacity-[0.05]">
          Product Details
        </h1>
      </div>
    </section>
  );
};
export default ProductHeader;
