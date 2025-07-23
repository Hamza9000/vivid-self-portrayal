import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Languages, User } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and journey in software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground mb-2">BSCS - Computer Science</p>
              <p className="text-xs text-muted-foreground">Govt Graduate College Khanpur</p>
              <p className="text-xs text-muted-foreground">8th Semester • CGPA: 3.08</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Certifications</h3>
              <p className="text-sm text-muted-foreground mb-1">Python for Everybody</p>
              <p className="text-sm text-muted-foreground">Django Crash Course</p>
              <p className="text-xs text-muted-foreground mt-2">Coursera & learworm.com</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Languages className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Languages</h3>
              <p className="text-sm text-muted-foreground mb-1">English (Intermediate)</p>
              <p className="text-sm text-muted-foreground">Urdu (Fluent)</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Punjab, Pakistan</p>
              <p className="text-xs text-muted-foreground mt-2">+92 326 2559724</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;