import { Link } from "react-router-dom"; // use 'react-router-dom' not 'react-router'

const Home = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen gap-12 px-6 lg:px-16  text-slate-800 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 rounded">
      {/* Text Section */}
      <div className="max-w-lg text-center lg:text-left space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Hi, I’m{" "}
        </h1>
        <span className="text-purple-700 font-edu text-4xl md:text-5x  font-bold">
          Chinwe Chukwulobe
        </span>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">
          Software Engineer
        </h2>

        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          I design and build modern, responsive web applications using{" "}
          <span className="text-purple-700 font-medium">
            JavaScript, React.js, Node.js, Express, and MongoDB.
          </span>{" "}
          I’m passionate about creating clean, efficient code and delivering
          elegant user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
          <Link
            to="/projects"
            className="bg-purple-700 hover:bg-fuchsia-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            View My Projects
          </Link>

          <Link
            to="/contact"
            className="border border-purple-700 text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-700 hover:text-white transition-colors duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex-shrink-0">
        <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-200 hover:ring-fuchsia-400 transition-all duration-300">
          <img
            src="/images/a.png"
            alt="Profile"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Decorative background accent */}
        <div className="absolute -z-10 top-2 left-2 w-48 h-48 md:w-72 md:h-72 rounded-full bg-purple-100 blur-3xl opacity-70"></div>
      </div>
    </section>
  );
};

export default Home;
