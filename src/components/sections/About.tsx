 import { Code2, Palette, Lightbulb, Users } from "lucide-react";
 
 const highlights = [
   {
     icon: Code2,
     title: "Clean Code",
     description: "Writing maintainable, scalable code that stands the test of time",
   },
   {
     icon: Palette,
     title: "UI/UX Design",
     description: "Creating intuitive interfaces with exceptional user experiences",
   },
   {
     icon: Lightbulb,
     title: "Problem Solver",
     description: "Turning complex challenges into elegant, simple solutions",
   },
   {
     icon: Users,
     title: "Team Player",
     description: "Collaborating effectively to deliver outstanding results",
   },
 ];
 
 export function About() {
   return (
     <section id="about" className="section-padding section-alt">
       <div className="container-custom">
         <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4">
             About <span className="text-gradient">Me</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Get to know the person behind the code
           </p>
         </div>
 
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Text Content */}
           <div className="space-y-6">
             <p className="text-lg text-muted-foreground leading-relaxed">
               {/* TODO: Replace with your own bio */}
               I'm Gerald, a passionate <span className="text-foreground font-medium">Frontend Developer</span> and{" "}
               <span className="text-foreground font-medium">UI/UX Designer</span> with a keen eye for detail 
               and a love for creating seamless digital experiences.
             </p>
             
             <p className="text-lg text-muted-foreground leading-relaxed">
               With expertise in modern web technologies like React, TypeScript, and Tailwind CSS, 
               I bridge the gap between design and development to build products that are not only 
               beautiful but also functional and accessible.
             </p>
             
             <p className="text-lg text-muted-foreground leading-relaxed">
               When I'm not coding, you can find me exploring new design trends, contributing to 
               open-source projects, or sharing knowledge with the developer community.
             </p>
 
             {/* Quick Stats */}
             <div className="grid grid-cols-3 gap-4 pt-6">
               <div className="text-center p-4 bg-card rounded-lg border border-border">
                 <div className="text-3xl font-bold text-primary">4+</div>
                 <div className="text-sm text-muted-foreground">Projects</div>
               </div>
               <div className="text-center p-4 bg-card rounded-lg border border-border">
                 <div className="text-3xl font-bold text-primary">2+</div>
                 <div className="text-sm text-muted-foreground">Years Exp</div>
               </div>
               <div className="text-center p-4 bg-card rounded-lg border border-border">
                 <div className="text-3xl font-bold text-primary">10+</div>
                 <div className="text-sm text-muted-foreground">Tech Stack</div>
               </div>
             </div>
           </div>
 
           {/* Highlights Grid */}
           <div className="grid sm:grid-cols-2 gap-4">
             {highlights.map((item, index) => (
               <div
                 key={item.title}
                 className="group p-6 bg-card rounded-xl border border-border card-hover"
                 style={{ animationDelay: `${index * 100}ms` }}
               >
                 <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                   <item.icon className="h-6 w-6 text-primary" />
                 </div>
                 <h3 className="font-semibold mb-2">{item.title}</h3>
                 <p className="text-sm text-muted-foreground">{item.description}</p>
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 }