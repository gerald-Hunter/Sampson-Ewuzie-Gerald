 import { useState, useEffect } from "react";
 import { Menu, X, Moon, Sun } from "lucide-react";
 import { useTheme } from "@/contexts/ThemeContext";
 import { Button } from "@/components/ui/button";
 
 const navLinks = [
   { href: "#home", label: "Home" },
   { href: "#about", label: "About" },
   { href: "#skills", label: "Skills" },
   { href: "#projects", label: "Projects" },
   { href: "#experience", label: "Experience" },
   { href: "#contact", label: "Contact" },
 ];
 
 export function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const { theme, toggleTheme } = useTheme();
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const handleNavClick = (href: string) => {
     setIsOpen(false);
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border"
           : "bg-transparent backdrop-blur-md"
       }`}
     >
       <div className="container-custom">
         <div className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
           <a
             href="#home"
             onClick={(e) => {
               e.preventDefault();
               handleNavClick("#home");
             }}
             className="text-xl font-bold text-foreground hover:text-primary transition-colors"
           >
             Gerald<span className="text-primary">.</span>
           </a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-1">
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 onClick={(e) => {
                   e.preventDefault();
                   handleNavClick(link.href);
                 }}
                 className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent"
               >
                 {link.label}
               </a>
             ))}
             
             {/* Theme Toggle */}
             <Button
               variant="ghost"
               size="icon"
               onClick={toggleTheme}
               className="ml-2"
               aria-label="Toggle theme"
             >
               {theme === "light" ? (
                 <Moon className="h-5 w-5" />
               ) : (
                 <Sun className="h-5 w-5" />
               )}
             </Button>
           </div>
 
           {/* Mobile Menu Button */}
           <div className="flex items-center gap-2 md:hidden">
             <Button
               variant="ghost"
               size="icon"
               onClick={toggleTheme}
               aria-label="Toggle theme"
             >
               {theme === "light" ? (
                 <Moon className="h-5 w-5" />
               ) : (
                 <Sun className="h-5 w-5" />
               )}
             </Button>
             
             <Button
               variant="ghost"
               size="icon"
               onClick={() => setIsOpen(!isOpen)}
               aria-label="Toggle menu"
             >
               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
             </Button>
           </div>
         </div>
 
         {/* Mobile Navigation */}
         <div
           className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
             isOpen ? "max-h-96 pb-4" : "max-h-0"
           }`}
         >
           <div className="flex flex-col gap-1 pt-2">
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 onClick={(e) => {
                   e.preventDefault();
                   handleNavClick(link.href);
                 }}
                 className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-accent"
               >
                 {link.label}
               </a>
             ))}
           </div>
         </div>
       </div>
     </nav>
   );
 }