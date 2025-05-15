import { ExternalLink,  } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "FlySight",
    description: "Interactive web app that derives insights into growing profitability of airlines.",
    image: "/projects/FlySight.png",
    tags: ["Machine Learning", "Data Visualization", "HTML"],
    demoUrl: "https://sasaigoli05.github.io/CDC-datathon/",
    githubUrl: "https://github.com/sasaigoli05/CDC-datathon?tab=readme-ov-file",
  },
  {
    id: 2,
    title: "Baseball Predictor",
    description: "Model that predicts positive/negative win-loss rate for pitchers using decision trees.",
    image: "/projects/baseball-tree.png",
    tags: ["Machine Learning", "Data Visualization", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/danielhli/BaseballPredictor",
  },
  {
    id: 3,
    title: "FlySight",
    description: "Interactive web app that derives insights into growing profitability of airlines.",
    image: "/projects/FlySight.png",
    tags: ["Machine Learning", "Data Visualization", "HTML"],
    demoUrl: "#",
    githubUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a couple of my favorite projects. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <h3 className="text-xl font-semibold mb-2 mt-4">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-2 ml-4 mr-4">
                {project.description}
              </p>

              <div className="flex justifiy-between items-center">
                <div className="flex space-x-3">
                  <a 
                    href={project.demoUrl} 
                    className="ml-2 px-1 py-3 text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                  > 
                    <ExternalLink size={20}/> 
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="px-1 py-3 text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                  > 
                    <FaGithub size={20}/> 
                  </a>
                </div>
              </div>
              <div>
                <img src={project.image} alt={project.title} className="w-100 h-50 object-cover transition-transform duration-500 group-hover:scale-110"/>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-1">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};