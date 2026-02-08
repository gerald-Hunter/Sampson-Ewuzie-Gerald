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
          <div className="p-8 md:p-12 print:p-8 space-y-6">
            
            {/* Header */}
            <header className="text-center border-b border-gray-300 pb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                Sampson-Ewuzie Chimaobi Gerald
              </h1>
              <p className="text-sm text-gray-600 mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Apo Resettlement, Nigeria
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  sampsonchimaobi24@gmail.com
                </span>
              </p>
              <p className="text-sm text-gray-600 mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <a 
                  href="https://geraldpersonalportfolio-three.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-gray-900 transition-colors"
                >
                  <Globe className="h-3 w-3" />
                  Portfolio
                </a>
                <a 
                  href="https://github.com/gerald-hunter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-gray-900 transition-colors"
                >
                  <Github className="h-3 w-3" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/chimaobi-sampson-97b041384" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="h-3 w-3" />
                  LinkedIn
                </a>
              </p>
            </header>

            {/* Professional Summary */}
            <section>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
                Professional Summary
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Software Engineering Student (200 Level) with a strong focus on frontend development. 
                Skilled in building responsive, user-friendly web interfaces using modern frontend technologies. 
                Seeking a Frontend Development Internship to apply technical skills, gain real-world experience, 
                and grow as a frontend engineer.
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
                Technical Skills
              </h2>
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <span className="font-semibold">Languages & Technologies:</span>{" "}
                  HTML, CSS, Bootstrap, JavaScript, TypeScript, Tailwind CSS, React
                </p>
                <p>
                  <span className="font-semibold">Tools:</span>{" "}
                  Git, GitHub
                </p>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
                Experience
              </h2>
              <div>
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-gray-900">Frontend Intern</h3>
                  <span className="text-xs text-gray-600">Helpman Organization</span>
                </div>
                <ul className="text-sm text-gray-700 mt-2 space-y-1 list-disc list-outside ml-4">
                  <li>Assisted in developing and maintaining frontend components for web applications</li>
                  <li>Worked with HTML, CSS, and JavaScript to improve user interfaces and enhance user experience</li>
                  <li>Collaborated with team members on internship tasks and contributed to project deliverables</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
                Projects
              </h2>
              <div>
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-gray-900">Furniture Website</h3>
                  <span className="text-xs text-gray-600">HTML, CSS, JavaScript</span>
                </div>
                <ul className="text-sm text-gray-700 mt-2 space-y-1 list-disc list-outside ml-4">
                  <li>Built a responsive frontend website displaying furniture products for users to browse and select for ordering</li>
                  <li>Focused on clean UI design, structured layouts, and mobile responsiveness</li>
                  <li>Implemented interactive features using JavaScript for improved user experience</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
                Education
              </h2>
              <div className="flex flex-wrap justify-between items-baseline">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">B.Sc. Software Engineering</h3>
                  <p className="text-sm text-gray-600">Veritas University, Abuja, Nigeria</p>
                </div>
                <span className="text-xs text-gray-600">200 Level (In Progress)</span>
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
