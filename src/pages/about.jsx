import React from "react";

const About = () => {
  return (
    <section className="relative py-20 px-6  min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-10">
        About Me
      </h1>

      {/* Container */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Avatar */}
        <div className="relative flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg ring-4 ring-purple-200 hover:ring-fuchsia-400 transition-all duration-300">
          <img
            src="/images/pw.png"
            alt="Profile portrait"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          {/* Decorative blurred accent */}
          <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-full bg-purple-100 blur-3xl opacity-60"></div>
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Hi! I’m a Software Engineer with a background in Computer Science
            and a recent graduate of an intensive bootcamp. I specialise in
            building responsive, user-focused applications using modern
            technologies like{" "}
            <span className="text-purple-800 font-medium">
              JavaScript, React, Node.js, and MongoDB
            </span>
            . Throughout my training, I’ve developed a strong foundation in both
            front-end and back-end development, and I’m passionate about
            creating clean, efficient code and solving real-world problems
            through tech. I enjoy turning ideas into functional products and
            continuously improving my skills along the way. I’m currently open
            to new opportunities where I can grow as an engineer, contribute to
            a collaborative team, and build impactful software. If you’re
            looking for someone who’s motivated, adaptable, and eager to learn —{" "}
            <span className="text-purple-800 font-medium">
              <a
                href="mailto:chukwulobechinwe@yahoo.com"
                className="underline hover:text-fuchsia-600"
              >
                let’s connect!
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
