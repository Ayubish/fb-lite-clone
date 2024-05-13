const NavBar = () => {
  return (
    <>
      <div className="p-2 grid gap-2 bg-white shadow-md z-50 fixed w-[100vw]">
        <div className="flex justify-between gap-3">
          <div className="basis-3/4">
            <h2 className="text-sky-600 text-3xl font-semibold">Facebook</h2>
          </div>
          <div>
            <i className="fa fa-plus rounded-full bg-gray-300 hover:bg-gray-400 p-2"></i>
          </div>
          <div>
            <i className="fa fa-search rounded-full bg-gray-300 hover:bg-gray-400 p-2"></i>
          </div>
          <div>
            <i className="fa fa-bars rounded-full bg-gray-300 hover:bg-gray-400 p-2"></i>
          </div>
        </div>
        <div className="flex justify-between p-2 text-2xl text-gray-500">
          <i className="fa fa-home"></i>
          <i className="fa fa-users"></i>
          <i className="fa-brands fa-facebook-messenger"></i>
          <i className="fa fa-bell"></i>
          <i className="fa fa-video-camera"></i>
          <i className="fa fa-shopping-cart"></i>
        </div>
      </div>
    </>
  );
};
export default NavBar;
