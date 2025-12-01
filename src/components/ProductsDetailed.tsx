import { Settings, Package, Network, Wrench, CheckCircle, Globe, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import machineryImage from "@/assets/machinery.jpg";
import fishnetsImage from "@/assets/fishnets.jpg";
import sparePartsImage from "@/assets/spare-parts.jpg";
import customImage from "@/assets/custom-solutions.jpg";

const ProductsDetailed = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const machineryProducts = [
    { name: "Net Braiding Machines", specs: "High-speed production up to 200 RPM" },
    { name: "Net Extrusion Lines", specs: "HDPE/Nylon processing, 50-500kg/hr capacity" },
    { name: "Twisting Machines", specs: "Multi-strand rope & twine production" },
    { name: "Knotting Equipment", specs: "Automated knotting with precision control" },
  ];

  const sparePartsCategories = [
    { category: "Machine Components", items: "Gears, bearings, shafts, pulleys" },
    { category: "Electronic Parts", items: "Control panels, sensors, PLCs" },
    { category: "Wear Parts", items: "Needles, guides, cutters, dies" },
    { category: "Fishnet Accessories", items: "Floats, sinkers, ropes, connectors" },
  ];

  const fishnetTypes = [
    { type: "Nylon Monofilament Nets", use: "Deep sea fishing, trawling" },
    { type: "HDPE Multifilament Nets", use: "Aquaculture, fish farming" },
    { type: "PE Braided Nets", use: "Commercial fishing, gill nets" },
    { type: "Knotless Nets", use: "Sport fishing, aquaculture" },
  ];

  const exportBenefits = [
    { icon: Globe, text: "Worldwide shipping to 50+ countries" },
    { icon: Shield, text: "Full export documentation & customs support" },
    { icon: TrendingUp, text: "Competitive pricing for bulk orders" },
    { icon: CheckCircle, text: "Quality certification & warranty" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Comprehensive Product Solutions for Global Markets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Export-ready machinery, parts, and fishnets with international quality standards
          </p>
        </div>

        {/* Export Benefits Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          {exportBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-smooth animate-scale-in bg-gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 md:p-6">
                <benefit.icon className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-2 md:mb-3 text-secondary" />
                <p className="text-xs md:text-sm font-medium text-foreground">{benefit.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Product Sections */}
        <Tabs defaultValue="machinery" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8 md:mb-12 h-auto bg-muted p-2">
            <TabsTrigger value="machinery" className="py-2 md:py-3 text-xs md:text-sm flex-col md:flex-row gap-1 md:gap-2">
              <Settings className="h-4 w-4 md:h-5 md:w-5" />
              <span>Machinery</span>
            </TabsTrigger>
            <TabsTrigger value="spare-parts" className="py-2 md:py-3 text-xs md:text-sm flex-col md:flex-row gap-1 md:gap-2">
              <Package className="h-4 w-4 md:h-5 md:w-5" />
              <span>Spare Parts</span>
            </TabsTrigger>
            <TabsTrigger value="fishnets" className="py-2 md:py-3 text-xs md:text-sm flex-col md:flex-row gap-1 md:gap-2">
              <Network className="h-4 w-4 md:h-5 md:w-5" />
              <span>Fishnets</span>
            </TabsTrigger>
            <TabsTrigger value="custom" className="py-2 md:py-3 text-xs md:text-sm flex-col md:flex-row gap-1 md:gap-2">
              <Wrench className="h-4 w-4 md:h-5 md:w-5" />
              <span>Custom</span>
            </TabsTrigger>
          </TabsList>

          {/* Machinery Tab */}
          <TabsContent value="machinery" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 md:mb-4 text-primary">
                  Advanced Fishnet Manufacturing Machinery
                </h3>
                <p className="text-lg text-foreground/80 mb-6">
                  Our state-of-the-art fishnet machinery is engineered for high-volume production with precision and reliability. 
                  Perfect for international buyers seeking to establish or upgrade their manufacturing capabilities.
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="font-heading font-semibold text-xl text-secondary">Product Range:</h4>
                  {machineryProducts.map((product, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                      <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.specs}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-primary text-white mb-6">
                  <CardContent className="p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3">Why Choose Our Machinery?</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>ISO 9001 certified manufacturing process</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Energy-efficient designs reducing operational costs by 30%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Complete installation & training support worldwide</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>2-year comprehensive warranty with lifetime technical support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Export-ready packaging with full documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button onClick={scrollToContact} size="lg" className="bg-accent hover:bg-accent/90">
                    Request Machinery Catalog
                  </Button>
                  <Button onClick={scrollToContact} size="lg" variant="outline">
                    Get Export Quote
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={machineryImage}
                  alt="Fishnet Machinery"
                  className="w-full h-64 md:h-96 lg:h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </TabsContent>

          {/* Spare Parts Tab */}
          <TabsContent value="spare-parts" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div>
                <img
                  src={sparePartsImage}
                  alt="Spare Parts"
                  className="w-full h-64 md:h-96 lg:h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 md:mb-4 text-primary">
                  Genuine Spare Parts & Components
                </h3>
                <p className="text-lg text-foreground/80 mb-6">
                  Maintain optimal performance with our comprehensive range of genuine spare parts. 
                  We supply original equipment parts for all major fishnet machinery brands, ensuring compatibility and longevity.
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="font-heading font-semibold text-xl text-secondary">Available Categories:</h4>
                  {sparePartsCategories.map((category, idx) => (
                    <div key={idx} className="p-4 bg-muted rounded-lg">
                      <p className="font-semibold text-primary mb-1">{category.category}</p>
                      <p className="text-sm text-muted-foreground">{category.items}</p>
                    </div>
                  ))}
                </div>

                <Card className="bg-secondary text-white mb-6">
                  <CardContent className="p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3">International Export Benefits:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Bulk ordering discounts for international buyers (20-40% off)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Express shipping to all major ports worldwide</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Complete customs documentation and HS code classification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Technical datasheets in English, Arabic, French, Spanish</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Minimum order: $500 USD (negotiable for large orders)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Payment terms: LC, TT, or Western Union accepted</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button onClick={scrollToContact} size="lg" className="bg-accent hover:bg-accent/90">
                    Request Parts Catalog
                  </Button>
                  <Button onClick={scrollToContact} size="lg" variant="outline">
                    Bulk Order Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Fishnets Tab */}
          <TabsContent value="fishnets" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 md:mb-4 text-primary">
                  Premium Quality Ready Fishnets
                </h3>
                <p className="text-lg text-foreground/80 mb-6">
                  Export-grade fishnets manufactured with international quality standards. 
                  Ideal for fishing fleets, aquaculture farms, and marine industry applications across the globe.
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="font-heading font-semibold text-xl text-secondary">Product Types:</h4>
                  {fishnetTypes.map((net, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                      <Network className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">{net.type}</p>
                        <p className="text-sm text-muted-foreground">Application: {net.use}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-gradient-accent text-white mb-6">
                  <CardContent className="p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3">Specifications & Standards:</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold mb-1">Material Options:</p>
                        <p>Nylon PA6, HDPE, PE, PP - UV stabilized for extended life</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Mesh Sizes:</p>
                        <p>10mm to 300mm (custom sizes available)</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Thickness Range:</p>
                        <p>0.15mm to 3.0mm diameter filaments</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">International Standards:</p>
                        <p>Compliant with FAO, EU, and IMO fishing gear regulations</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Export Packaging:</p>
                        <p>Compressed bales, moisture-proof wrapping, container optimized</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">MOQ for Export:</p>
                        <p>1 ton (approximately 50-100 nets depending on size)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button onClick={scrollToContact} size="lg" className="bg-accent hover:bg-accent/90">
                    Request Product Samples
                  </Button>
                  <Button onClick={scrollToContact} size="lg" variant="outline">
                    Get Export Pricing
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={fishnetsImage}
                  alt="Fishnets"
                  className="w-full h-64 md:h-96 lg:h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </TabsContent>

          {/* Custom Solutions Tab */}
          <TabsContent value="custom" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div>
                <img
                  src={customImage}
                  alt="Custom Solutions"
                  className="w-full h-64 md:h-96 lg:h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 md:mb-4 text-primary">
                  Custom-Built Fishnet Machinery Solutions
                </h3>
                <p className="text-lg text-foreground/80 mb-6">
                  Need specialized machinery tailored to your unique production requirements? 
                  Our engineering team designs and manufactures custom fishnet machines for international clients seeking competitive advantages.
                </p>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Our Custom Build Process:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-semibold text-primary">Requirements Analysis</p>
                          <p className="text-sm text-muted-foreground">
                            Detailed consultation to understand your production needs, capacity, and specifications
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-semibold text-primary">Engineering & Design</p>
                          <p className="text-sm text-muted-foreground">
                            CAD modeling, technical drawings, and virtual prototype for your approval
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-semibold text-primary">Manufacturing</p>
                          <p className="text-sm text-muted-foreground">
                            Precision manufacturing at our Kudal MIDC facility with quality checkpoints
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                          4
                        </div>
                        <div>
                          <p className="font-semibold text-primary">Testing & Delivery</p>
                          <p className="text-sm text-muted-foreground">
                            Factory acceptance testing, export packing, and worldwide shipping
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                          5
                        </div>
                        <div>
                          <p className="font-semibold text-primary">Installation & Support</p>
                          <p className="text-sm text-muted-foreground">
                            On-site installation, operator training, and lifetime technical assistance
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-white mb-6">
                  <CardContent className="p-6">
                    <h4 className="font-heading font-semibold text-lg mb-3">Recent Custom Projects:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• High-speed monofilament net machine for Middle East client (300 nets/day)</li>
                      <li>• Automated HDPE net production line for African aquaculture farm</li>
                      <li>• Specialized knotless net braiding system for European sport fishing supplier</li>
                      <li>• Multi-layer net extrusion equipment for Southeast Asian manufacturer</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button onClick={scrollToContact} size="lg" className="bg-accent hover:bg-accent/90">
                    Start Custom Project
                  </Button>
                  <Button onClick={scrollToContact} size="lg" variant="outline">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <Card className="mt-16 bg-gradient-hero text-white animate-fade-in">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Ready to Export with AP Engineers?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of satisfied international clients. Get competitive pricing, reliable quality, and expert export support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-white text-primary hover:bg-white/90">
                Request International Quote
              </Button>
              <Button onClick={scrollToContact} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Product Catalog (PDF)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductsDetailed;
