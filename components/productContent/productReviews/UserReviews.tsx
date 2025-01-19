import Ratings from "../productInfo/InfoData/Ratings";

const UserReviews = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {reviews.map((item, idx) => (
        <div
          className="flex flex-col gap-5 border-b border-[#F4F7F9] h-auto pt-2 pb-8"
          key={idx}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center lg:gap-4 gap-2">
              <h1 className="font-semibold md:text-xl text-md capitalize">{item.user}</h1>
              <Ratings value={item.rate} />
            </div>
            <h3 className="text-gray-400 font-medium text-sm">4 months ago</h3>
          </div>
          <article className="text-sm font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            porro placeat eos. Excepturi, deleniti. Officia porro repudiandae
            labore sunt deserunt est culpa, delectus minima voluptatibus, illum
            quam suscipit vel excepturi?
          </article>
        </div>
      ))}
    </div>
  );
};

export default UserReviews;

const reviews = [
  {
    user: "Mohamed Salah",
    rate: 5,
  },
  {
    user: "Ahmed Khaled",
    rate: 1,
  },
  {
    user: "Omar Nabil",
    rate: 4,
  },
  {
    user: "Sara Sayed",
    rate: 3,
  },
];
