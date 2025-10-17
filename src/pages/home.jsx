const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8 text-slate-800 px-6">
      <div className="max-w-md space-y-2 text-center lg:text-left ">
        <h1 className="text-4xl font-bold">Hi, I'm</h1>
        <h1 className="text-4xl font-edu text-purple-800 font-bold">
          Chinwe Chukwulobe
        </h1>

        <h3 className="text-2xl font-semibold">Software Engineer</h3>
        <p className="text-slate-700">
          I develop web applications using Javascript, React.js, Node.js,
          Express, and MongoDB.
        </p>
        <button className="btn  bg-purple-800 hover:bg-fuchsia-600 text-slate-100 border-fuchsia-300">
          Projects
        </button>
      </div>

      <div className="relative">
        <img
          src="/images/a.png"
          alt="Profile"
          className="relative h-30 lg:h-96  object-cover  shadow-lg rounded-lg "
        />
      </div>
    </div>
  );
};

export default Home;
