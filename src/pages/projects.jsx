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
    title: "Project Manager App",
    description:
      "Full-stack CRUD app using MERN stack to manage tasks efficiently. Users can create, update, delete, and mark tasks as completed, with a clean and responsive interface. Login with this, email: chinwe@gmail.com password: 123456 ",
    image: "/images/p.png",
    link: "https://projectmanagementfrontend-spda.onrender.com/adminDashboard",
  },
  {
    title: "Nasco Ecommerce Website",
    description:
      "An e-commerce web application built in collaboration with a team for Nasco, allowing them to sell products directly to consumers. This platform enhances the customer experience by making their products easily accessible online",
    image: "/images/s.png",
    link: "https://www.nascodirect.net/",
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
