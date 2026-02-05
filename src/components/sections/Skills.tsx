 import { 
   SiHtml5, 
   SiCss3, 
   SiJavascript, 
   SiReact, 
   SiTypescript, 
   SiTailwindcss, 
   SiGithub, 
   SiFigma,
   SiBootstrap 
 } from "react-icons/si";
 
 const skills = [
   { name: "HTML", icon: SiHtml5, color: "#E34F26" },
   { name: "CSS", icon: SiCss3, color: "#1572B6" },
   { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
   { name: "React", icon: SiReact, color: "#61DAFB" },
   { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
   { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
   { name: "GitHub", icon: SiGithub, color: "currentColor" },
   { name: "Figma", icon: SiFigma, color: "#F24E1E" },
   { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
 ];
 
 export function Skills() {
   return (
     <section id="skills" className="section-padding">
       <div className="container-custom">
         <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4">
             My <span className="text-gradient">Skills</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Technologies and tools I work with to bring ideas to life
           </p>
         </div>
 
         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
           {skills.map((skill, index) => (
             <div
               key={skill.name}
               className="skill-badge group flex-col text-center py-6"
               style={{ animationDelay: `${index * 50}ms` }}
             >
               <skill.icon 
                 className="h-10 w-10 mb-3 transition-transform group-hover:scale-110" 
                 style={{ color: skill.color === "currentColor" ? undefined : skill.color }}
               />
               <span className="font-medium text-sm">{skill.name}</span>
             </div>
           ))}
         </div>
 
         {/* Skill Level Indicator */}
         <div className="mt-12 md:mt-16 p-6 bg-card rounded-xl border border-border">
           <div className="flex items-center justify-center gap-2 text-muted-foreground">
             <span className="inline-block w-3 h-3 rounded-full bg-primary" />
             <span className="font-medium">Advanced Level</span>
             <span className="mx-4">•</span>
             <span>Continuously learning and improving</span>
           </div>
         </div>
       </div>
     </section>
   );
 }