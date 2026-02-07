import { ArrowLeft, Rocket, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";

export default function ComingSoon() {
  const [searchParams] = useSearchParams();
  const projectName = searchParams.get("project") || "This Project";
  const type = searchParams.get("type") || "demo"; // 'demo' or 'code'

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated Icon */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-teal-400 rounded-full flex items-center justify-center animate-pulse">
            <Rocket className="h-12 w-12 text-primary-foreground" />
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-br from-primary to-teal-400 rounded-full opacity-20 animate-ping" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Coming Soon</span>
        </h1>

        {/* Project Name */}
        <div className="inline-block px-4 py-2 bg-accent rounded-full mb-6">
          <span className="text-sm font-medium text-accent-foreground">
            {projectName} — {type === "code" ? "Source Code" : "Live Demo"}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          {type === "code" 
            ? "The source code for this project is being prepared for public release. Stay tuned for the GitHub repository!"
            : "This project is currently under development. The live demo will be available soon!"}
        </p>

        {/* Features Coming */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h3 className="font-semibold mb-4 flex items-center justify-center gap-2">
            <Bell className="h-4 w-4 text-primary" />
            What to Expect
          </h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            {type === "code" ? (
              <>
                <li>✓ Clean, well-documented code</li>
                <li>✓ Setup instructions</li>
                <li>✓ Contributing guidelines</li>
              </>
            ) : (
              <>
                <li>✓ Full interactive demo</li>
                <li>✓ Responsive design showcase</li>
                <li>✓ Feature walkthrough</li>
              </>
            )}
          </ul>
        </div>

        {/* Back Button */}
        <Button asChild variant="outline" size="lg">
          <Link to="/#projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
}
