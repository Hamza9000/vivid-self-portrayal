import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-glow rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Available for Internship
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hamza <span className="text-primary-glow">Aslam</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-white/90">
            <span className="block mb-2">Backend Developer</span>
            <span className="text-primary-glow">Python | Django | Flask | PHP</span>
          </div>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed">
            Motivated and enthusiastic backend developer seeking an internship opportunity to apply and enhance my skills in 
            Python, Django, Flask, and PHP. Eager to join a dynamic development team and gain real-world experience in software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:hamzaaslam9000@gmail.com" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;