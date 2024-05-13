import minato from "../assets/img/minato.jpg";

const FeedPost = () => {
  return (
    <>
      <div className="flex justify-between p-3 gap-2">
        <img src={minato} alt="minato" className=" w-10 h-10 rounded-full" />
        <input
          type="text"
          name="writepost"
          id=""
          className="rounded-full h-10 p-3 basis-3/4 bg-slate-200"
          placeholder="What's on your mind?"
        />
        <div className="h-10">
          <i class="fa fa-images text-green-500"></i>
          <p>Photo</p>
        </div>
      </div>
    </>
  );
};

export default FeedPost;
