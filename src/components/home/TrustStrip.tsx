import { Check } from "lucide-react";

const partners = [
  { name: "100+ Hotels", description: "Partner Hotels Across India" },
  { name: "50+ Cities", description: "Pan-India Coverage" },
  { name: "500+ Corporates", description: "Corporate Client Network" },
  { name: "₹10Cr+", description: "Revenue Generated for Partners" },
];

export function TrustStrip() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
            Trusted by Hotels Across India
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((item) => (
            <div key={item.name} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Check className="h-5 w-5 text-secondary" />
                <span className="text-2xl md:text-3xl font-bold text-primary">{item.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
