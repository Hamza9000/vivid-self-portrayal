import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, Brain, FileText, Plane, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Tourism Management System",
      description: "A comprehensive web-based tourism system with booking and enquiry features. Built with PHP and MySQL to handle tourist bookings, destination management, and customer inquiries.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      icon: Plane,
      features: [
        "Booking system for tours and packages",
        "Customer enquiry management",
        "Destination catalog with detailed information",
        "Admin panel for tour management"
      ]
    },
    {
      title: "Flask AI Chatbot",
      description: "An intelligent chatbot application built with Flask, integrated with Firebase authentication and powered by Google's Gemini API for natural language processing.",
      technologies: ["Python", "Flask", "Firebase", "Gemini API", "HTML", "CSS"],
      icon: Bot,
      features: [
        "Firebase user authentication",
        "Real-time chat interface",
        "Gemini AI integration for responses",
        "User session management"
      ]
    },
    {
      title: "AI Invoice Analyzer",
      description: "A sophisticated PDF invoice analyzer powered by AI that extracts key information and calculates taxes automatically. Built with Flask and AI processing capabilities.",
      technologies: ["Python", "Flask", "AI/ML", "PDF Processing", "Tax Calculation"],
      icon: FileText,
      features: [
        "PDF invoice upload and processing",
        "AI-powered data extraction",
        "Automatic tax calculations",
        "Structured data output"
      ]
    },
    {
      title: "FlaskLogo - AI MCQs Generator",
      description: "Django-style application using Flask that generates multiple-choice questions using Groq API. Supports multiple languages and subjects with offline quiz capabilities.",
      technologies: ["Python", "Flask", "Groq API", "SQLite", "Offline Support"],
      icon: Brain,
      features: [
        "Multi-language question generation",
        "Subject-specific MCQs",
        "Offline quiz downloads",
        "Topic-based question queries",
        "User-friendly interface"
      ]
    },
    {
      title: "PDF Merger Tool",
      description: "A web-based PDF manipulation tool similar to iLovePDF. Allows users to upload PDFs, edit page ranges, split documents, and download results with an intuitive interface.",
      technologies: ["Python", "Flask", "PDF Processing", "File Management"],
      icon: FileText,
      features: [
        "PDF upload and merging",
        "Page range editing",
        "Document splitting",
        "User-friendly download system"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in backend development, AI integration, and web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;