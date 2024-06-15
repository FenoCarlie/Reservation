import PostReview from "../../components/specific/PostReview";

function Reviews() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row">
      <section className="md:w-[50%] w-full"></section>
      <section className="md:w-[50%] w-full">
        <PostReview />
      </section>
    </div>
  );
}

export default Reviews;
