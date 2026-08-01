import { ProjectCard } from "../components/projectCard";
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS to showcase projects, skills, and experience. It includes responsive design, smooth animations, and modern styling to make a professional impression on potential employers.",
    image: "/images/b.png",
    link: "https://chinwe-chukwulobe.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description: "Created a portfolio Website for my sister. ",
    image: "/images/ad.png",
    link: "https://addyui.vercel.app//",
  },

  {
    title: "JCC Finance Manager",
    description:
      "Full-stack simple CRUD app using MERN stack to manage finance efficiently. Users can create, update, delete, with a clean and responsive interface.You can register or Login with this, email: chinwe@example.com password: 123456 ",
    image: "/images/p.png",
    link: "https://jccfinance.netlify.app/",
  },

  {
    title: "Why So Bad Fashion",
    description: "Fashion Website for my brothers business. ",
    image: "/images/n.png",
    link: "https://whysobadoriginals.com/",
  },
  {
    title: "Job Tracker",
    description:
      "A Simple Job Tracker to track the jobs and companies i applied to",
    image: "/images/s.png",
    link: "https://chinwejobtracker.netlify.app/",
  },

  // add other projects similarly...
];
const Projects = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-700">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
