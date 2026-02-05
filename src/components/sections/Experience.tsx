 import { Briefcase, Calendar } from "lucide-react";
 
 // Experience data - TODO: Replace with your actual experience
 const experiences = [
   {
     id: 1,
     role: "Senior Frontend Developer",
     company: "Tech Innovations Inc.",
     location: "Remote",
     period: "2023 - Present",
     description: [
       "Lead development of responsive web applications using React and TypeScript",
       "Collaborate with design team to implement pixel-perfect UI components",
       "Mentor junior developers and conduct code reviews",
       "Optimize application performance and improve load times by 40%",
     ],
     current: true,
   },
   {
     id: 2,
     role: "Frontend Developer",
     company: "Digital Solutions Ltd.",
     location: "Hybrid",
     period: "2022 - 2023",
     description: [
       "Developed and maintained multiple client-facing web applications",
       "Implemented responsive designs using Tailwind CSS and Bootstrap",
       "Integrated RESTful APIs and managed state with React Query",
       "Participated in agile development processes and sprint planning",
     ],
     current: false,
   },
   {
     id: 3,
     role: "Junior Web Developer",
     company: "Creative Agency Co.",
     location: "On-site",
     period: "2021 - 2022",
     description: [
       "Built interactive websites using HTML, CSS, and JavaScript",
       "Assisted in UI/UX design decisions and prototyping in Figma",
       "Maintained and updated existing client websites",
       "Learned modern frameworks and best practices",
     ],
     current: false,
   },
 ];
 
 export function Experience() {
   return (
     <section id="experience" className="section-padding">
       <div className="container-custom">
         <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4">
             Work <span className="text-gradient">Experience</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             My professional journey and career milestones
           </p>
         </div>
 
         <div className="max-w-3xl mx-auto">
           {/* Timeline */}
           <div className="relative">
             {/* Timeline line */}
             <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
 
             {experiences.map((exp, index) => (
               <div
                 key={exp.id}
                 className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                   index % 2 === 0 ? "md:flex-row-reverse" : ""
                 }`}
               >
                 {/* Timeline dot */}
                 <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1.5 md:-translate-x-2 mt-1.5 ring-4 ring-background">
                   {exp.current && (
                     <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                   )}
                 </div>
 
                 {/* Content */}
                 <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                   <div className="bg-card p-6 rounded-xl border border-border card-hover">
                     {/* Header */}
                     <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                       <div>
                         <h3 className="text-lg font-bold">{exp.role}</h3>
                         <p className="text-primary font-medium">{exp.company}</p>
                       </div>
                       {exp.current && (
                         <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                           Previous
                         </span>
                       )}
                     </div>
 
                     {/* Meta */}
                     <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                       <div className="flex items-center gap-1">
                         <Calendar className="h-4 w-4" />
                         {exp.period}
                       </div>
                       <div className="flex items-center gap-1">
                         <Briefcase className="h-4 w-4" />
                         {exp.location}
                       </div>
                     </div>
 
                     {/* Description */}
                     <ul className="space-y-2">
                       {exp.description.map((item, i) => (
                         <li key={i} className="text-sm text-muted-foreground flex gap-2">
                           <span className="text-primary mt-1.5">•</span>
                           {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>
 
                 {/* Empty space for alternating layout */}
                 <div className="hidden md:block flex-1" />
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 }