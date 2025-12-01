import { Award, Factory, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: Factory,
      title: "State-of-the-Art Facility",
      description: "Modern MIDC plant in Kudal equipped with advanced machinery",
    },
    {
      icon: Award,
      title: "ISO Certified",
      description: "Quality assured with international certifications and standards",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled workforce led by experienced industry professionals",
    },
    {
      icon: TrendingUp,
      title: "Export Ready",
      description: "Serving global markets with timely delivery and support",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            About AP Engineers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the industry in fishnet machinery manufacturing with innovation, quality, and global reach
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-heading font-bold mb-6 text-primary">
              Our Legacy of Excellence
            </h3>
            <p className="text-lg text-foreground/80 mb-4">
              Under the leadership of <strong>Mr. Pradip Barge</strong>, AP Engineers has established itself as a trusted name in the fishnet machinery industry. With our headquarters in Satara and a modern manufacturing facility at Kudal MIDC, we combine traditional craftsmanship with cutting-edge technology.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Our commitment to quality, innovation, and customer satisfaction has enabled us to expand our reach globally, serving clients across the Middle East, Africa, Southeast Asia, and Europe.
            </p>
            <p className="text-lg text-foreground/80">
              From standard machinery to custom-built solutions, we provide comprehensive support throughout the entire lifecycle of our products, ensuring our clients achieve optimal performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-smooth border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h4 className="font-heading font-semibold mb-2 text-primary">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
