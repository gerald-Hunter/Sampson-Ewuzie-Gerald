 import { useState } from "react";
 import { Send, Mail, MapPin, Phone, Github, Linkedin, MessageCircle, CheckCircle } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
 
 const contactInfo = [
   {
     icon: Mail,
     label: "Email",
     value: "gerald@example.com", // TODO: Replace with your email
     href: "mailto:gerald@example.com",
   },
   {
     icon: MapPin,
     label: "Location",
     value: "Your City, Country", // TODO: Replace with your location
     href: null,
   },
   {
     icon: Phone,
     label: "Phone",
     value: "+1 234 567 890", // TODO: Replace with your phone
     href: "tel:+1234567890",
   },
 ];
 
 const socialLinks = [
   {
     icon: Github,
     label: "GitHub",
     href: "https://github.com/yourusername", // TODO: Replace
   },
   {
     icon: Linkedin,
     label: "LinkedIn",
     href: "https://linkedin.com/in/yourusername", // TODO: Replace
   },
   {
     icon: MessageCircle,
     label: "WhatsApp",
     href: "https://wa.me/yourphonenumber", // TODO: Replace
   },
 ];
 
 export function Contact() {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setIsSubmitting(true);
 
     // TODO: Implement actual form submission
     // Options:
     // 1. Use a service like Formspree, EmailJS, or Netlify Forms
     // 2. Set up a backend API endpoint
     // 3. Use a serverless function
 
     // Simulated submission delay
     await new Promise((resolve) => setTimeout(resolve, 1000));
 
     setIsSubmitting(false);
     setIsSubmitted(true);
 
     // Reset after 3 seconds
     setTimeout(() => setIsSubmitted(false), 3000);
   };
 
   return (
     <section id="contact" className="section-padding section-alt">
       <div className="container-custom">
         <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-4">
             Get In <span className="text-gradient">Touch</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Have a project in mind or want to chat? Feel free to reach out!
           </p>
         </div>
 
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
           {/* Contact Info */}
           <div className="space-y-8">
             <div>
               <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
               <p className="text-muted-foreground">
                 I'm always open to discussing new projects, creative ideas, 
                 or opportunities to be part of your vision.
               </p>
             </div>
 
             {/* Contact Details */}
             <div className="space-y-4">
               {contactInfo.map((item) => (
                 <div key={item.label} className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                     <item.icon className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-muted-foreground">{item.label}</p>
                     {item.href ? (
                       <a
                         href={item.href}
                         className="font-medium hover:text-primary transition-colors"
                       >
                         {item.value}
                       </a>
                     ) : (
                       <p className="font-medium">{item.value}</p>
                     )}
                   </div>
                 </div>
               ))}
             </div>
 
             {/* Social Links */}
             <div>
               <p className="text-sm text-muted-foreground mb-4">Find me on</p>
               <div className="flex items-center gap-3">
                 {socialLinks.map((link) => (
                   <a
                     key={link.label}
                     href={link.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                     aria-label={link.label}
                   >
                     <link.icon className="h-5 w-5" />
                   </a>
                 ))}
               </div>
             </div>
           </div>
 
           {/* Contact Form */}
           <div className="bg-card p-6 md:p-8 rounded-xl border border-border">
             {isSubmitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-12">
                 <CheckCircle className="h-16 w-16 text-primary mb-4" />
                 <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                 <p className="text-muted-foreground">
                   Thank you for reaching out. I'll get back to you soon!
                 </p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid sm:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <Label htmlFor="name">Name</Label>
                     <Input
                       id="name"
                       name="name"
                       placeholder="Your name"
                       required
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="email">Email</Label>
                     <Input
                       id="email"
                       name="email"
                       type="email"
                       placeholder="your@email.com"
                       required
                     />
                   </div>
                 </div>
 
                 <div className="space-y-2">
                   <Label htmlFor="subject">Subject</Label>
                   <Input
                     id="subject"
                     name="subject"
                     placeholder="What's this about?"
                     required
                   />
                 </div>
 
                 <div className="space-y-2">
                   <Label htmlFor="message">Message</Label>
                   <Textarea
                     id="message"
                     name="message"
                     placeholder="Your message..."
                     rows={5}
                     required
                   />
                 </div>
 
                 <Button
                   type="submit"
                   size="lg"
                   className="w-full"
                   disabled={isSubmitting}
                 >
                   {isSubmitting ? (
                     <>
                       <span className="animate-spin mr-2">⏳</span>
                       Sending...
                     </>
                   ) : (
                     <>
                       <Send className="h-4 w-4 mr-2" />
                       Send Message
                     </>
                   )}
                 </Button>
               </form>
             )}
           </div>
         </div>
       </div>
     </section>
   );
 }