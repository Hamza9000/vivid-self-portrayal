import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 90 },
        { name: "PHP", level: 80 },
        { name: "JavaScript", level: 70 },
      ]
    },
    {
      title: "Web Frameworks",
      icon: Wrench,
      skills: [
        { name: "Django", level: 85 },
        { name: "Flask", level: 88 },
        { name: "Laravel", level: 75 },
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 90 },
        { name: "Git", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "PyCharm", level: 85 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Team Collaboration", level: 88 },
        { name: "Database Design", level: 80 },
        { name: "Authentication", level: 85 },
      ]
    }
  ];

  const technologies = [
    "Python", "Django", "Flask", "PHP", "MySQL", "SQLite", "Git", "VS Code", 
    "PyCharm", "Firebase", "Gemini API", "Groq API", "REST APIs", "Backend Development"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical skills and proficiency levels in various technologies and frameworks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-gradient-card hover:bg-gradient-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;