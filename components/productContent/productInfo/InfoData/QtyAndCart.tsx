import { IoBag } from "react-icons/io5";

const QtyAndCart = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <p className="text-xl">Quantity</p>
        <p className="text-sm text-gray-400 mt-2">($300.00 for Piece)</p>
      </div>
      <div className="flex justify-between md:flex-row flex-col ">
        <div className="flex gap-5 items-center mt-3 ">
          <div className="inline-flex rounded-xl border border-gray-100 bg-gray-100 p-1">
            <button
              className="inline-block  bg-white px-4 py-2 text-blue-500 shadow-sm
        h-10 w-10 rounded-xl focus:relative text-lg leading-none"
            >
              +
            </button>

            <p className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
              1
            </p>

            <button
              className="inline-block  bg-white px-4 py-2  textnone-blue-500 shadow-sm
        h-10 w-10 rounded-xl focus:relative text-lg leading- "
            >
              -
            </button>
          </div>
          <h5 className="text-2xl font-medium">300,00</h5>
        </div>
        <div className="md:self-end mt:mt-0 mt-5">
          <button className="flex gap-2 bg-primary text-white rounded-xl  leading-none  py-4 px-8 md:w-auto w-full ">
            <IoBag className="fill-gray-400" />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QtyAndCart;
