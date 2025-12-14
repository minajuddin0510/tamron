import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Tamron Marketing Solutions' payment model?",
    answer: "We operate on a zero upfront cost model. You only pay when you start earning. This means we share the risk with you – our success depends on your success. We charge a percentage of the revenue generated through our marketing efforts.",
  },
  {
    question: "How does the 75% footfall growth guarantee work?",
    answer: "Based on our track record, we guarantee a minimum 75% increase in footfall within the first 6 months. If we don't achieve this target, we continue working for free until we do. Our proven strategies in both digital and on-ground marketing ensure consistent results.",
  },
  {
    question: "What types of hotels do you work with?",
    answer: "We work with all types of hotels – from boutique properties and budget hotels to luxury resorts and business hotels. Our strategies are customized based on your hotel's unique positioning, target audience, and local market conditions.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most of our partner hotels start seeing measurable results within 30-60 days. This includes increased online visibility, more inquiry calls, and higher footfall. Full impact is typically visible within 3-6 months.",
  },
  {
    question: "Do you provide monthly reports?",
    answer: "Yes, absolutely. We provide detailed monthly reports covering all marketing activities, KPIs, booking sources, revenue generated, and ROI analysis. We also schedule monthly review calls to discuss performance and strategy adjustments.",
  },
  {
    question: "What is included in the 360° Marketing Plan?",
    answer: "Our complete marketing plan includes: dedicated marketing manager, digital marketing (social media, SEO, paid ads), on-ground promotions, corporate client acquisition, privilege card program, reputation management, and regular strategy revisions based on performance.",
  },
  {
    question: "How do you acquire corporate clients for hotels?",
    answer: "Our dedicated team conducts monthly visits to corporate offices, travel desks, and businesses in your area. We create customized corporate packages, establish travel desk partnerships, and maintain relationships with HR departments for employee accommodation needs.",
  },
  {
    question: "Can we try a specific service before committing to the full package?",
    answer: "Yes, you can start with any individual service and scale up as you see results. However, our 360° package delivers the best ROI as all marketing channels work together for maximum impact.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, 
            feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-secondary/50 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-primary font-semibold hover:text-secondary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
