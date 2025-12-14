import { Link } from "react-router-dom";
import { ArrowRight, Megaphone, Globe2, Palette, Building, CreditCard, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Megaphone,
    title: "Hotel Marketing & Promotions",
    description: "On-ground campaigns, flyers, corporate tie-ups, and footfall growth strategies.",
    link: "/services#hotel-marketing",
  },
  {
    icon: Globe2,
    title: "Digital Marketing",
    description: "Social media, paid ads, SEO, content marketing & online reputation management.",
    link: "/services#digital-marketing",
  },
  {
    icon: Palette,
    title: "Branding & Graphic Design",
    description: "Logo design, menus, brochures, brand kits, and visual identity creation.",
    link: "/services#branding",
  },
  {
    icon: Building,
    title: "Corporate Client Acquisition",
    description: "Monthly corporate visits, travel desk partnerships, and corporate packages.",
    link: "/services#corporate",
  },
  {
    icon: CreditCard,
    title: "Privilege Card Program",
    description: "Repeat bookings, referral rewards, seasonal offers, and CRM integration.",
    link: "/services#privilege-card",
  },
  {
    icon: BarChart3,
    title: "360° Marketing Plan",
    description: "Complete marketing solutions with dedicated manager and monthly reports.",
    link: "/services#360-marketing",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our <span className="text-secondary">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Comprehensive hotel marketing solutions tailored to drive bookings 
              and maximize your revenue.
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline" className="group">
              View All Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group block p-6 bg-card rounded-2xl border border-border hover:border-secondary hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
