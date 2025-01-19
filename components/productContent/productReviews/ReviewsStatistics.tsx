import Ratings from "../productInfo/InfoData/Ratings";

const ReviewsStatistics = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <div className="py-4 flex flex-col items-center justify-center gap-2 ">
        <span className="text-grayTint font-medium text-sm">Total Reviews</span>
        <h1 className="md:text-4xl text-2xl font-bold">10.0K</h1>
      </div>

      <div className=" py-4 flex flex-col items-center justify-center gap-3 ">
        <span className="text-grayTint font-medium text-sm">Total Reviews</span>
        <div className="flex gap-2">
          <h1 className="md:text-4xl text-2xl font-bold">10.0K</h1>
          <Ratings value={4} />
        </div>
      </div>
      <div className="md:col-span-2 col-span-1">
        {[...Array(4)].map((_, idx: number) => (
          <div className="flex items-center justify-between gap-2">
            <div className="flex-none w-12 h-14 flex items-center justify-center gap-1">
              <button
                type="button"
                className={`size-5 inline-flex justify-center items-center text-2xl rounded-full cursor-default text-primary disabled:opacity-50 disabled:pointer-events-none`}
              >
                <svg
                  className="flex-shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </button>
              <span>{idx + 1}</span>
            </div>
            <div className="bg-lightPrimary md:h-4 h-3 w-full rounded-xl">
              <div
                className="h-full rounded-xl bg-primary"
                style={{
                  width: `${(idx + 1) * 20}%`,
                }}
              />
            </div>
            <div className="flex-none w-12 h-14 flex items-center justify-center">
              % {(idx + 1) * 20}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsStatistics;
