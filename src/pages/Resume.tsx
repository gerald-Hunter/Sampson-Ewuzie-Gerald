import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Mail, MapPin, Globe, Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Navigation Bar - Hidden in print */}
      <div className="print:hidden sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container-custom py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
          <Button onClick={handlePrint} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Resume Container */}
      <div className="container-custom py-8 print:py-0">
        <div className="max-w-[8.5in] mx-auto bg-white text-black shadow-lg print:shadow-none">
          {/* Resume Content */}
          <div className="p-8 md:p-10 print:p-6 space-y-5">
            
            {/* Header */}
            <header className="text-center border-b-2 border-gray-800 pb-3">
              <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wider">
                Sampson-Ewuzie Chimaobi Gerald
              </h1>
              <p className="text-xs text-gray-600 mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Abuja, Nigeria
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  sampsonchimaobi24@gmail.com
                </span>
                <span>•</span>
                <a 
                  href="https://geraldpersonalportfolio-three.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-gray-900 underline"
                >
                  Portfolio
                </a>
                <span>•</span>
                <a 
                  href="https://github.com/gerald-hunter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-gray-900 underline"
                >
                  GitHub
                </a>
                <span>•</span>
                <a 
                  href="https://linkedin.com/in/chimaobi-sampson-97b041384" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-gray-900 underline"
                >
                  LinkedIn
                </a>
              </p>
            </header>

            {/* Objective */}
            <section>
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
                Objective
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed">
                Frontend-focused Software Engineering student seeking an internship to build production-ready 
                web interfaces and contribute to real-world projects.
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
                Skills
              </h2>
              <div className="text-xs text-gray-700 grid grid-cols-1 gap-1">
                <p>
                  <span className="font-semibold">Frontend:</span>{" "}
                  HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, Bootstrap
                </p>
                <p>
                  <span className="font-semibold">Tools:</span>{" "}
                  Git, GitHub, VS Code, Figma
                </p>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
                Experience
              </h2>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-gray-900">Frontend Development Intern</h3>
                  <span className="text-xs text-gray-600 font-medium">Helpman Organization</span>
                </div>
                <ul className="text-xs text-gray-700 mt-1.5 space-y-1 list-disc list-outside ml-4">
                  <li>Built and maintained responsive UI components using HTML, CSS, and JavaScript</li>
                  <li>Improved page load performance and cross-browser compatibility</li>
                  <li>Collaborated with designers to translate mockups into functional interfaces</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
                Projects
              </h2>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-gray-900">Furniture E-Commerce Website</h3>
                  <span className="text-xs text-gray-600">HTML, CSS, JavaScript</span>
                </div>
                <ul className="text-xs text-gray-700 mt-1.5 space-y-1 list-disc list-outside ml-4">
                  <li>Developed a fully responsive product catalog with filtering and sorting functionality</li>
                  <li>Implemented mobile-first design achieving consistent UX across all devices</li>
                  <li>Optimized images and assets for fast load times</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-400 pb-1 mb-2">
                Education
              </h2>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">B.Sc. Software Engineering</h3>
                  <p className="text-xs text-gray-600">Veritas University, Abuja</p>
                </div>
                <span className="text-xs text-gray-600 font-medium">Expected 2027</span>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
