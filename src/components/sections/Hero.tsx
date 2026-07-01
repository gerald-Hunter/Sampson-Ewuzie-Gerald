 import { ArrowDown, Github, Linkedin, MessageCircle } from "lucide-react";
 import { Button } from "@/components/ui/button";
import profile  from "@/assets/Profile.png";
 
 export function Hero() {
   const handleScrollToContact = () => {
     document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
   };
 
   const handleScrollToProjects = () => {
     document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
   };
 
   return (
     <section
       id="home"
       className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
     >
       {/* Background gradient decoration */}
       <div className="absolute inset-0 -z-10">
         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float animation-delay-300" />
       </div>
 
       <div className="container-custom">
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
           {/* Text Content */}
           <div className="flex-1 text-center lg:text-left">
             <p className="text-primary font-medium mb-4 animate-fade-in">
               Hello, I'm
             </p>
             
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
               Gerald
               <span className="block text-gradient pb-3 mt-2">Software Engineer</span>
             </h1>
             
             <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up animation-delay-200">
               Frontend Developer & UI/UX Designer crafting beautiful, 
               user-centered digital experiences with modern technologies.
             </p>
 
             {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
               <Button
                 size="lg"
                 onClick={handleScrollToContact}
                 className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
               >
                 Get In Touch
               </Button>
               <Button
                 variant="outline"
                 size="lg"
                 onClick={handleScrollToProjects}
                 className="w-full sm:w-auto"
               >
                 View My Work
               </Button>
             </div>
 
             {/* Social Links */}
             <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
               <a
                 href="https://github.com/gerald-hunter"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 text-muted-foreground hover:text-primary transition-colors"
                 aria-label="GitHub"
               >
                 <Github className="h-6 w-6" />
               </a>
               <a
                 href="https://linkedin.com/in/chimaobi-sampson-97b041384"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 text-muted-foreground hover:text-primary transition-colors"
                 aria-label="LinkedIn"
               >
                 <Linkedin className="h-6 w-6" />
               </a>
               <a
                 href="https://wa.me/2349048006847?text=Hello%2C%20I%E2%80%99m%20interested%20in%20your%20work%20and%20would%20like%20to%20discuss%20a%20project.%20My%20name%20is%20________."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 text-muted-foreground hover:text-primary transition-colors"
                 aria-label="Hey i'm Gerald Chat me on WhatsApp"
               >
                 <MessageCircle className="h-6 w-6" />
               </a>
             </div>
           </div>
 
           {/* Profile Image Placeholder */}
           <div className="flex-shrink-0 animate-scale-in animation-delay-200 pb-10">
             <div className="relative">
               {
                /* TODO: Replace this placeholder with your profile image
                 
                 How to add your image:
                 1. Add your image file to src/assets/ folder (e.g., profile.jpg)
                 2. Import it at the top of this file: import profileImg from "@/assets/profile.jpg"
                 3. Replace the placeholder div below with: */
                    <img 
                      src={profile} 
                      alt="Gerald - Software Engineer" 
                      className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
                    />
               }
               
               {/* Decorative ring */}
               <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "20s" }} />
             </div>
           </div>
         </div>
 
         {/* Scroll indicator */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
           <a
             href="#about"
             onClick={(e) => {
               e.preventDefault();
               document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
             }}
             className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
           >
             <span className="hidden lg:block text-sm mb-2">Scroll Down</span>
             <ArrowDown className="hidden lg:block h-5 w-5" />
           </a>
         </div>
       </div>
     </section>
   );
 }