import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import project screenshots
import taskflowImg from "@/assets/taskflow-screenshot.jpg";
import shopeaseImg from "@/assets/shopease-screenshot.jpg";
import devconnectImg from "@/assets/devconnect-screenshot.jpg";
import weatherlensImg from "@/assets/weatherlens-screenshot.jpg";

// Project data - TODO: Replace with your actual projects
const projects = [
  {
    id: 1,
    title: "TaskFlow",
    description:
      "A collaborative project management dashboard that helps teams organize tasks, track progress, and meet deadlines efficiently. Features real-time updates and intuitive drag-and-drop functionality.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/yourusername/taskflow", // TODO: Replace with your URL
    liveUrl: "https://taskflow-demo.vercel.app", // TODO: Replace with your URL
    image: taskflowImg,
  },
  {
    id: 2,
    title: "ShopEase",
    description:
      "A modern e-commerce landing page with responsive design, product showcases, and smooth animations. Built with vanilla technologies for optimal performance and accessibility.",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/yourusername/shopease", // TODO: Replace with your URL
    liveUrl: "https://shopease-demo.vercel.app", // TODO: Replace with your URL
    image: shopeaseImg,
  },
  {
    id: 3,
    title: "DevConnect",
    description:
      "A developer networking platform where programmers can connect, share projects, and collaborate. Features include user profiles, project showcases, and real-time messaging.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/devconnect", // TODO: Replace with your URL
    liveUrl: "https://devconnect-demo.vercel.app", // TODO: Replace with your URL
    image: devconnectImg,
  },
  {
    id: 4,
    title: "WeatherLens",
    description:
      "A real-time weather visualization application with beautiful UI, location-based forecasts, and interactive charts. Integrates multiple weather APIs for accurate data.",
    techStack: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/weatherlens", // TODO: Replace with your URL
    liveUrl: "https://weatherlens-demo.vercel.app", // TODO: Replace with your URL
    image: weatherlensImg,
  },
];
 
 export function Projects() {
   return (
     <section id="projects" className="section-padding section-alt">
       <div className="container-custom">
         <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4">
             Featured <span className="text-gradient">Projects</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             A selection of my recent work showcasing my skills and experience
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
           {projects.map((project, index) => (
             <article
               key={project.id}
               className="group bg-card rounded-xl border border-border overflow-hidden card-hover"
               style={{ animationDelay: `${index * 100}ms` }}
             >
              {/* Project Image */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
 
               {/* Project Content */}
               <div className="p-6">
                 <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                   {project.title}
                 </h3>
                 <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                   {project.description}
                 </p>
 
                 {/* Tech Stack */}
                 <div className="flex flex-wrap gap-2 mb-6">
                   {project.techStack.map((tech) => (
                     <span
                       key={tech}
                       className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                     >
                       {tech}
                     </span>
                   ))}
                 </div>
 
                {/* Links */}
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        to={`/coming-soon?project=${encodeURIComponent(project.title)}&type=code`}
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link
                        to={`/coming-soon?project=${encodeURIComponent(project.title)}&type=demo`}
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
               </div>
             </article>
           ))}
         </div>
 
         {/* View More Link - Optional */}
         <div className="text-center mt-12">
           <Button variant="outline" size="lg" asChild>
             <a
               href="https://github.com/gerald-hunter"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2"
             >
               <Github className="h-5 w-5" />
               View More on GitHub
             </a>
           </Button>
         </div>
       </div>
     </section>
   );
 }