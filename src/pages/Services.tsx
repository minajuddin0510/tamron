import { Link } from "react-router-dom";
import { 
  Megaphone, 
  Globe2, 
  Palette, 
  Building, 
  CreditCard, 
  BarChart3, 
  Check,
  ArrowRight,
  TrendingUp,
  Users,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import corporateImage from "@/assets/corporate-meeting.jpg";

const services = [
  {
    id: "hotel-marketing",
    icon: Megaphone,
    title: "Hotel Marketing & Promotions",
    description: "Comprehensive on-ground marketing campaigns designed to increase your hotel's visibility and footfall in the local market.",
    features: [
      "Strategic flyer distribution in corporate areas",
      "Local business tie-ups and partnerships",
      "Event promotions and seasonal campaigns",
      "Outdoor advertising and signage",
      "Direct marketing to target audiences",
      "Referral program management",
    ],
  },
  {
    id: "digital-marketing",
    icon: Globe2,
    title: "Digital Marketing",
    description: "Full-spectrum digital marketing services to establish your hotel's online presence and drive direct bookings.",
    features: [
      "Social media management (Facebook, Instagram, LinkedIn)",
      "Paid advertising (Google Ads, Facebook Ads)",
      "Search Engine Optimization (SEO)",
      "Content marketing and blog management",
      "Online reputation management",
      "Email marketing campaigns",
    ],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Graphic Design",
    description: "Create a memorable brand identity that resonates with your target audience and sets you apart from competitors.",
    features: [
      "Logo design and brand identity",
      "Menu design and printing",
      "Marketing brochures and collateral",
      "Room cards and in-hotel materials",
      "Social media graphics",
      "Complete brand guidelines",
    ],
  },
  {
    id: "corporate",
    icon: Building,
    title: "Corporate Client Acquisition",
    description: "Dedicated efforts to build relationships with corporate clients and secure high-value business bookings.",
    features: [
      "Monthly corporate office visits",
      "Travel desk partnerships",
      "Customized corporate packages",
      "HR department relationships",
      "Conference and event tie-ups",
      "Corporate loyalty programs",
    ],
  },
  {
    id: "privilege-card",
    icon: CreditCard,
    title: "Privilege Customer Card Program",
    description: "Build a loyal customer base with our exclusive privilege card program that drives repeat bookings.",
    features: [
      "Custom privilege card design",
      "Tiered reward system",
      "Referral bonus program",
      "Seasonal and festival offers",
      "CRM integration",
      "Customer engagement campaigns",
    ],
  },
  {
    id: "360-marketing",
    icon: BarChart3,
    title: "Complete 360° Marketing Plan",
    description: "Our most comprehensive package combining all services with dedicated management and guaranteed results.",
    features: [
      "Dedicated marketing manager",
      "Combined digital + offline strategy",
      "Monthly performance reports",
      "Regular strategy revisions",
      "Priority support",
      "75% footfall growth guarantee",
    ],
    featured: true,
  },
];

const caseStudies = [
  {
    hotel: "Grand Palace Hotel",
    location: "Delhi NCR",
    results: [
      { metric: "Footfall Increase", value: "82%" },
      { metric: "Revenue Growth", value: "45%" },
      { metric: "Corporate Clients", value: "150+" },
    ],
  },
  {
    hotel: "Heritage Inn",
    location: "Jaipur",
    results: [
      { metric: "Online Bookings", value: "120%" },
      { metric: "Social Followers", value: "10K+" },
      { metric: "Repeat Guests", value: "65%" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed">
              Comprehensive hotel marketing solutions designed to drive bookings, 
              increase revenue, and build lasting customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 ${service.featured ? 'bg-gradient-to-r from-primary to-navy-light rounded-3xl p-8 md:p-12' : ''}`}
              >
                <div className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      service.featured 
                        ? 'bg-secondary' 
                        : 'bg-secondary/10'
                    }`}>
                      <service.icon className={`h-8 w-8 ${service.featured ? 'text-primary' : 'text-secondary'}`} />
                    </div>
                    <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${service.featured ? 'text-primary-foreground' : 'text-primary'}`}>
                      {service.title}
                    </h2>
                    <p className={`text-lg mb-6 ${service.featured ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {service.description}
                    </p>
                    {service.featured && (
                      <div className="mb-6 p-4 bg-secondary/20 rounded-xl">
                        <p className="text-primary-foreground font-semibold">
                          🎯 Most Popular Choice — Get all services in one comprehensive package
                        </p>
                      </div>
                    )}
                    <Link to="/contact">
                      <Button 
                        variant={service.featured ? "hero" : "gold"} 
                        className={service.featured ? "" : ""}
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                    <div className={`rounded-2xl p-6 ${service.featured ? 'bg-primary-foreground/10' : 'bg-card border border-border'}`}>
                      <h4 className={`text-lg font-semibold mb-4 ${service.featured ? 'text-primary-foreground' : 'text-primary'}`}>
                        What's Included:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              service.featured ? 'bg-secondary' : 'bg-secondary/20'
                            }`}>
                              <Check className={`h-3 w-3 ${service.featured ? 'text-primary' : 'text-secondary'}`} />
                            </div>
                            <span className={service.featured ? 'text-primary-foreground/90' : 'text-foreground'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && !service.featured && (
                  <div className="border-b border-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Success <span className="text-secondary">Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real results from our partner hotels across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study) => (
              <div
                key={study.hotel}
                className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 relative">
                  <img
                    src={corporateImage}
                    alt={`${study.hotel} success story`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-primary-foreground">
                    <h3 className="text-xl font-bold">{study.hotel}</h3>
                    <p className="text-primary-foreground/80">{study.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result) => (
                      <div key={result.metric} className="text-center">
                        <p className="text-2xl font-bold text-secondary">{result.value}</p>
                        <p className="text-xs text-muted-foreground">{result.metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Our Services <span className="text-secondary">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Data-Driven Approach</h3>
              <p className="text-muted-foreground">
                Every strategy is backed by market research and analytics for maximum impact.
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Dedicated Team</h3>
              <p className="text-muted-foreground">
                A personal marketing manager and on-ground team focused on your hotel's success.
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                100+ partner hotels with an average 75% increase in footfall within 6 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Hotel's Marketing?
          </h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto mb-8">
            Get a free consultation and customized marketing plan for your hotel.
          </p>
          <Link to="/contact">
            <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
