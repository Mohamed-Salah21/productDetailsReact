import Ratings from "./Ratings";
import DataFilters from "./DataFilters";
import QtyAndCart from "./QtyAndCart";
const InfoData = () => {
  return (
    <div className="flex flex-col gap-4 border md:p-0 px-3">
      <div className="flex items-center gap-3">
        <span className="text-gold text-sm">blogs</span>
        <div className="flex flex-col justify-center gap-1">
          <div className="h-[2px] w-[25px] bg-gold" />
          <div className="h-[2px] w-[39px] bg-gold " />
        </div>
      </div>
      <div>
        <h1 className="xl:text-4xl">
          MD STAY FLT Unisex Duffle Bag Microfiber MD-1250
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <Ratings value={4} />
        <div>
          <span className="text-xl"> 4.5</span>
          <span className="mx-2 text-sm">(2910)</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h5 className="font-medium text-2xl">$300.00</h5>
        <h5 className="font-medium text-xl line-through text-gray-400 decoration-gray-400">
          $300.00
        </h5>
      </div>
      <div>
        <article className="font-medium  text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic amet
          molestias optio nemo dolor
        </article>
      </div>
      <DataFilters />
      <QtyAndCart />
    </div>
  );
};

export default InfoData;
