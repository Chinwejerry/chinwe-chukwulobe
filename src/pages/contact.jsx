import React from "react";
import { Mail, Linkedin, Github } from "lucide-react"; // optional icons

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 min-h-screen flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Get In Touch
      </h1>

      {/* Contact container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto text-center">
        {/* Email */}
        <a
          href="mailto:chukwulobechinwe@yahoo.com"
          className="flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-4 hover:bg-purple-600 hover:text-white transition-colors duration-300 w-full md:w-auto justify-center"
        >
          <Mail className="w-6 h-6" />
          <span className="font-medium">chukwulobechinwe@yahoo.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/chinwe-chukwulobe/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-4 hover:bg-purple-600 hover:text-white transition-colors duration-300 w-full md:w-auto justify-center"
        >
          <Linkedin className="w-6 h-6" />
          <span className="font-medium">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Chinwejerry"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-4 hover:bg-purple-600 hover:text-white transition-colors duration-300 w-full md:w-auto justify-center"
        >
          <Github className="w-6 h-6" />
          <span className="font-medium">GitHub</span>
        </a>
      </div>

      {/* Optional footer text */}
      <p className="mt-12 text-gray-600 text-center">
        I’m always open to new opportunities or collaborations — feel free to
        reach out!
      </p>
    </section>
  );
};

export default Contact;
