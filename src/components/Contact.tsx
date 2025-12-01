import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Satara, Maharashtra", "India"],
    },
    {
      icon: MapPin,
      title: "Manufacturing Plant",
      details: ["Kudal MIDC", "Maharashtra, India"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-9926202282 / +91-8830101938", "WhatsApp Available"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["apenginerring83@gmail.com", "export@apengineers.com"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your requirements? Contact us for quotes, inquiries, or custom solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
                <Textarea
                  placeholder="Your Message / Requirements *"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="w-full bg-orange-500 text-white"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-600">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4">
                  Export Inquiries Welcome
                </h3>
                <p className="mb-4">
                  We specialize in international exports with complete documentation support, competitive pricing, and reliable shipping to all major ports worldwide.
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white bg-transparent"
                >
                  Learn More About Exports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;