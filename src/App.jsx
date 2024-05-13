import "./App.css";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import FeedPost from "./components/FeedPost";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
function App() {
  return (
    <>
      <div>
        <div className="h-24">
          <NavBar />
        </div>
        <FeedPost />
        <Stories />

        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>

      {/* <div className="grid justify-center">
        <h1 className="text-3xl font-bold underline text-teal-600">
          Hello Fa!
        </h1>
        <p className="text-slate-500">What if if it's a paragraph?</p>
        <button className="bg-sky-500 text-white py-1 rounded-full hover:bg-sky-700">
          Save changes
        </button>
      </div> */}
    </>
  );
}

export default App;
