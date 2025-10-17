import React, { useState } from "react";

export const ProjectCard = ({ project }) => {
  const [showFull, setShowFull] = useState(false);
  const maxLength = 100; // number of characters to show in preview

  const truncated = project.description.length > maxLength && !showFull;
  const description = truncated
    ? project.description.slice(0, maxLength) + "..."
    : project.description;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col flex-1">
        {/* Title and description */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-600 text-sm mb-2">
            {description}
            {truncated && (
              <button
                onClick={() => setShowFull(true)}
                className="text-purple-700 ml-1 hover:underline"
              >
                See more
              </button>
            )}
            {showFull && project.description.length > maxLength && (
              <button
                onClick={() => setShowFull(false)}
                className="text-purple-700 ml-1 hover:underline"
              >
                See less
              </button>
            )}
          </p>
        </div>

        {/* Button always at bottom */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg text-center hover:bg-purple-700 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
};
