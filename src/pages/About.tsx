import { Link } from "react-router-dom";
import { Target, Eye, Heart, Lightbulb, BarChart, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team.jpg";
import teamVikram from "@/assets/team-vikram.jpg";
import teamPriya from "@/assets/team-priya.jpg";
import teamRahul from "@/assets/team-rahul.jpg";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent practices and honest communication in all partnerships.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed with measurable outcomes in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly evolving our methods with latest marketing trends.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "Your success is our success – we grow together.",
  },
];

const differentiators = [
  "Zero upfront cost – performance-based revenue sharing model",
  "AI-driven marketing analytics and campaign optimization",
  "Dedicated on-ground team for physical promotions",
  "Comprehensive monthly reporting with ROI tracking",
  "75% footfall growth guarantee within 6 months",
  "Customized strategies based on your hotel's unique needs",
];

const team = [
  {
    name: "Amit Tamta",
    role: "Managing Director",
    description: "Building scalable solutions and long-term business values",
    image: teamVikram,
  },
  {
    name: "Sourav Singh",
    role: "Head of Operations",
    description: "Expert in hotel partnerships",
    image: teamPriya,
  },
  {
    name: "Suhail Khan",
    role: "Project Head",
    description: "Ensuring seamless project delivery and operational efficiency",
    image: teamRahul,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About <span className="text-secondary">Tamron</span>
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed">
              India's leading hotel marketing & promotion company, 
              dedicated to helping hotels grow their business through 
              innovative and result-driven marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Who We <span className="text-secondary">Are</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tamron Marketing Solutions is a specialized hospitality marketing 
                  company founded with a vision to transform how hotels approach 
                  marketing and customer acquisition.
                </p>
                <p>
                  With years of experience in the hospitality industry, we understand 
                  the unique challenges hotels face in today's competitive market. 
                  Our team combines deep industry knowledge with cutting-edge 
                  marketing techniques to deliver results that matter.
                </p>
                <p>
                  We believe in partnerships, not transactions. Our unique zero 
                  upfront cost model ensures that we're fully invested in your 
                  success – because we only succeed when you do.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={teamImage}
                alt="Tamron Marketing Solutions team collaborating"
                className="rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-primary p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm font-medium">Partner Hotels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary text-primary-foreground p-10 rounded-2xl">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To empower hotels of all sizes with world-class marketing solutions 
                that drive measurable growth, without the burden of upfront investment. 
                We're committed to making professional hotel marketing accessible and 
                result-oriented.
              </p>
            </div>
            <div className="bg-background border border-border p-10 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted hotel marketing partner, known for 
                innovation, integrity, and delivering exceptional ROI. We envision 
                a future where every hotel, regardless of size, has access to 
                premium marketing expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core <span className="text-secondary">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-2xl border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What Makes Us <span className="text-secondary">Different</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Unlike traditional marketing agencies, we operate on a partnership 
                model that aligns our interests with yours. Here's what sets us apart:
              </p>
              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-2xl p-10 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart className="h-10 w-10 text-primary" />
              </div>
              <p className="text-5xl font-bold text-primary-foreground mb-2">75%</p>
              <p className="text-primary-foreground/80 text-lg mb-6">
                Guaranteed Footfall Growth
              </p>
              <p className="text-primary-foreground/70 text-sm">
                If we don't deliver, we work for free until we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our <span className="text-secondary">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to your hotel's success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto mb-8">
            Join 100+ hotels across India who trust Tamron Marketing Solutions 
            for their growth needs.
          </p>
          <Link to="/contact">
            <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
