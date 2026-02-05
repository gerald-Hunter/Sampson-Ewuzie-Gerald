 import { Github, Linkedin, MessageCircle, Heart } from "lucide-react";
 
 const socialLinks = [
   {
     href: "https://github.com/gerald-hunter",
     icon: Github,
     label: "GitHub",
   },
   {
     href: "https://linkedin.com/in/chimaobi-sampson-97b041384", 
     icon: Linkedin,
     label: "LinkedIn",
   },
   {
     href: "https://wa.me/+234 904 800 6847",
     icon: MessageCircle,
     label: "WhatsApp",
   },
 ];
 
 export function Footer() {
   const currentYear = new Date().getFullYear();
 
   return (
     <footer className="bg-card border-t border-border">
       <div className="container-custom py-8 md:py-12">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           {/* Logo & Copyright */}
           <div className="text-center md:text-left">
             <a href="#home" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
               Gerald<span className="text-primary">.</span>
             </a>
             <p className="mt-2 text-sm text-muted-foreground">
               © {currentYear} Gerald. All rights reserved.
             </p>
           </div>
 
           {/* Social Links */}
           <div className="flex items-center gap-4">
             {socialLinks.map((link) => (
               <a
                 key={link.label}
                 href={link.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent"
                 aria-label={link.label}
               >
                 <link.icon className="h-5 w-5" />
               </a>
             ))}
           </div>
 
           {/* Made with love */}
           <p className="flex items-center gap-1 text-sm text-muted-foreground">
             Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Gerald
           </p>
         </div>
       </div>
     </footer>
   );
 }