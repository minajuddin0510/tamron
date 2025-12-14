import { 
  DollarSign, 
  TrendingUp, 
  Globe, 
  Building2, 
  CreditCard, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "No Upfront Cost",
    description: "Pay Only When You Earn – zero-risk partnership model",
  },
  {
    icon: TrendingUp,
    title: "75% Footfall Growth",
    description: "Guaranteed results with our proven marketing strategies",
  },
  {
    icon: Globe,
    title: "Digital + On-Ground",
    description: "Complete 360° promotional coverage for maximum impact",
  },
  {
    icon: Building2,
    title: "Corporate Acquisition",
    description: "Access to high-value corporate clients and partnerships",
  },
  {
    icon: CreditCard,
    title: "Privilege Card Program",
    description: "Build loyal customer base with exclusive rewards",
  },
  {
    icon: Users,
    title: "Dedicated Support Team",
    description: "Personal marketing executives for your hotel",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose <span className="text-secondary">Tamron?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver measurable results with our unique risk-free model. 
            Your success is our success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-background rounded-2xl border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
