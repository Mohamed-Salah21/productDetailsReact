import ReviewsStatistics from "./ReviewsStatistics";
import UserReviews from "./UserReviews";
const ProductReviews = () => {
  return (
    <div className="mt-16">
      <h2 className="md:text-4xl text-3xl font-medium mb-5">Reviews</h2>
      <ReviewsStatistics />
      <UserReviews />
    </div>
  );
};

export default ProductReviews;
