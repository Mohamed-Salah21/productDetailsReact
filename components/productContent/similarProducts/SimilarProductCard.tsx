import Ratings from "../productInfo/InfoData/Ratings";
import { IoBag } from "react-icons/io5";

type Props = {
  idx: number;
};

const SimilarProductCard = ({ idx }: Props) => {
  return (
    <div className="overflow-hidden group flex flex-col gap-2">
      <div className="h-72 flex items-center justify-center relative border shadow-sm rounded-xl overflow-hidden group-hover:bg-lightPrimary transition-all duration-300">
        <img src={"/chair2.jpg"} className=" object-fill h-44 w-44" />
        {idx < 1 ? (
          <div className="absolute top-3 right-4 bg-gold text-white h-8 w-20 rounded-xl text-xs flex items-center justify-center">
            <span>25% OFF</span>
          </div>
        ) : null}
        <button className="group-hover:bottom-3 absolute transition-all duration-500 -bottom-20 flex gap-2 bg-primary text-white rounded-xl  leading-none  py-3 px-8 ">
          <IoBag className="fill-gray-400 md:text-md text-sm" />
          <span className="md:text-md sm:text-sm text-xs">Add To Cart</span>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Ratings value={4} />
        <div>
          <span className="text-xl"> 4.5</span>
          <span className="mx-2 text-sm">(2910)</span>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-sm">
          Grab attention and drive sales with eye-catching outdoor signage.
          Choose from a
        </h2>
        <p className="text-gray-400 text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sint
          eum numquam!
        </p>
      </div>
      <div className="flex items-center gap-4">
        <h5 className="font-medium text-xl">$240.00</h5>
        {idx < 2 ? (
          <h5 className="font-medium text-lg line-through text-gray-400 decoration-gray-400">
            $300.00
          </h5>
        ) : null}
      </div>
    </div>
  );
};

export default SimilarProductCard;
