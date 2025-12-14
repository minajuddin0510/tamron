import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-gold-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Ready to Grow Your Hotel Business?
        </h2>
        <p className="text-primary/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Partner with Tamron Marketing Solutions and start seeing results without any upfront investment. 
          Let's discuss how we can help your hotel thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="xl" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
              Book Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="xl" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
