import { useParams, Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import breakfastImage from "@/assets/breakfast-guests.jpg";
import corporateImage from "@/assets/corporate-meeting.jpg";
import heroImage from "@/assets/hero-hotel.jpg";
import teamImage from "@/assets/team.jpg";

const blogContent: Record<string, {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: string[];
}> = {
  "small-hotels-increase-bookings": {
    title: "How Small Hotels Can Increase Bookings Without Extra Investment",
    excerpt: "Discover proven strategies that small and boutique hotels can implement immediately to boost occupancy rates without spending extra on marketing budgets.",
    author: "Amit Tamta",
    date: "December 8, 2025",
    readTime: "5 min read",
    image: heroImage,
    category: "Strategy",
    content: [
      "In today's competitive hospitality landscape, small hotels often feel overwhelmed by the marketing budgets of large chains. However, the good news is that effective marketing doesn't always require massive investments. Here are proven strategies that can help your hotel increase bookings without breaking the bank.",
      "## 1. Optimize Your Online Presence",
      "Your website is your digital storefront. Ensure it's mobile-friendly, loads quickly, and showcases your property's unique features. Use high-quality images and compelling descriptions that highlight what makes your hotel special.",
      "## 2. Leverage Social Media Organically",
      "You don't need paid ads to build a following. Share behind-the-scenes content, guest stories (with permission), local tips, and special moments that capture your hotel's personality. Consistency is key – post regularly and engage with your audience.",
      "## 3. Build Local Partnerships",
      "Partner with local businesses, restaurants, and attractions. Cross-promotion costs nothing but can significantly expand your reach. Consider package deals that benefit both parties.",
      "## 4. Encourage and Manage Reviews",
      "Positive reviews are free marketing gold. Actively encourage satisfied guests to leave reviews on Google, TripAdvisor, and booking platforms. Respond professionally to all reviews – both positive and negative.",
      "## 5. Email Marketing",
      "Build an email list and stay in touch with past guests. Send personalized offers, local event updates, and seasonal promotions. Email marketing has one of the highest ROIs of any marketing channel.",
      "## The Tamron Advantage",
      "At Tamron Marketing Solutions, we understand the challenges small hotels face. That's why we offer our zero upfront cost model – you only pay when you see results. Contact us to learn how we can help your hotel grow.",
    ],
  },
  "digital-marketing-hotels-2025": {
    title: "Why Digital Marketing Is Essential for Hotels in 2025",
    excerpt: "The hospitality landscape has changed dramatically. Learn why hotels that embrace digital marketing are outperforming their competitors and how you can too.",
    author: "Sourav Singh",
    date: "December 5, 2025",
    readTime: "7 min read",
    image: teamImage,
    category: "Digital Marketing",
    content: [
      "The way travelers discover, research, and book hotels has fundamentally changed. In 2025, digital presence isn't just nice to have – it's essential for survival. Here's why digital marketing should be at the core of your hotel's growth strategy.",
      "## The Shift to Digital Discovery",
      "Over 80% of travelers now research hotels online before booking. If your hotel doesn't appear in search results or has a weak social media presence, you're invisible to a vast majority of potential guests.",
      "## Direct Bookings Save Money",
      "OTA commissions can eat into your profits significantly. A strong digital marketing strategy helps drive direct bookings through your website, saving you 15-25% on commission fees.",
      "## Social Proof Matters More Than Ever",
      "Today's travelers trust peer reviews and social media content more than traditional advertising. Managing your online reputation and maintaining active social profiles is crucial.",
      "## Targeted Advertising",
      "Unlike traditional advertising, digital marketing allows precise targeting. You can reach specific demographics, interests, and even travelers who have previously shown interest in your area.",
      "## Measurable Results",
      "Every digital marketing effort can be tracked and measured. This allows you to understand what works, optimize your spending, and continuously improve your results.",
      "## Getting Started",
      "Don't know where to begin? Tamron Marketing Solutions offers comprehensive digital marketing services specifically designed for hotels. Our team handles everything from social media to SEO, allowing you to focus on what you do best – hospitality.",
    ],
  },
  "corporate-clients-profitable": {
    title: "Corporate Clients — The Most Profitable Segment for Hotels",
    excerpt: "Corporate travelers represent the highest-value segment for hotels. Here's how to attract and retain corporate clients for consistent revenue.",
    author: "Suhail Khan",
    date: "December 1, 2025",
    readTime: "6 min read",
    image: corporateImage,
    category: "Business",
    content: [
      "Corporate travelers are often overlooked by smaller hotels, but they represent one of the most profitable and reliable guest segments. Here's why you should prioritize corporate client acquisition and how to do it effectively.",
      "## Why Corporate Clients Are Valuable",
      "Corporate guests typically book longer stays, make repeat visits, and are less price-sensitive than leisure travelers. They also tend to book during weekdays when hotels often have lower occupancy.",
      "## Building Corporate Relationships",
      "Start by identifying businesses in your area that might need accommodation for employees, clients, or events. Reach out to HR departments, travel managers, and office administrators with personalized proposals.",
      "## Creating Corporate Packages",
      "Develop attractive corporate packages that include amenities business travelers value: reliable WiFi, workspace, early check-in/late check-out options, and possibly meal plans. Consider offering flexible cancellation policies.",
      "## Travel Desk Partnerships",
      "Connect with corporate travel desks and travel management companies. These relationships can bring consistent booking volume and long-term partnerships.",
      "## Conference and Event Hosting",
      "If you have meeting facilities, market them actively. Corporate events can fill rooms and generate significant F&B revenue. Consider package deals for event + accommodation.",
      "## Our Corporate Acquisition Program",
      "Tamron Marketing Solutions has a dedicated team that specializes in corporate client acquisition. We conduct monthly corporate visits, establish travel desk partnerships, and help you create compelling corporate packages. Contact us to learn more.",
    ],
  },
  "retain-hotel-guests": {
    title: "10 Powerful Ways to Retain Hotel Guests",
    excerpt: "Guest retention is more cost-effective than acquisition. Explore ten proven techniques to turn first-time visitors into loyal, repeat customers.",
    author: "Vikram Singh",
    date: "November 28, 2025",
    readTime: "8 min read",
    image: breakfastImage,
    category: "Guest Experience",
    content: [
      "Acquiring a new customer costs 5-7 times more than retaining an existing one. For hotels, building guest loyalty isn't just about providing good service – it requires a strategic approach to guest experience and engagement.",
      "## 1. Personalize the Experience",
      "Remember guest preferences and acknowledge returning guests. Simple touches like remembering their room preference or favorite newspaper can make a lasting impression.",
      "## 2. Create a Loyalty Program",
      "Implement a rewards program that offers tangible benefits. Our Privilege Card Program helps hotels build structured loyalty systems with tiered rewards and referral bonuses.",
      "## 3. Exceed Expectations",
      "Look for opportunities to surprise and delight guests. A room upgrade, complimentary amenity, or personalized welcome note costs little but creates memorable experiences.",
      "## 4. Follow Up Post-Stay",
      "Send a thank-you email after checkout. Ask for feedback and make it easy for satisfied guests to leave reviews. This keeps your hotel top-of-mind.",
      "## 5. Special Occasion Recognition",
      "Track guest birthdays and anniversaries. Send personalized offers or small gifts. These gestures show you care and encourage celebration bookings.",
      "## 6. Consistent Quality",
      "Nothing damages loyalty faster than inconsistent experiences. Ensure every stay meets your quality standards through proper training and quality checks.",
      "## 7. Easy Booking Process",
      "Make it simple for guests to book directly. Offer member-only rates and benefits that make direct booking more attractive than OTAs.",
      "## 8. Address Issues Promptly",
      "How you handle problems matters more than avoiding them entirely. Empower staff to resolve issues quickly and generously.",
      "## 9. Stay Connected",
      "Maintain communication between stays through email newsletters, social media, and personalized offers. Share local events, seasonal promotions, and hotel updates.",
      "## 10. Create Community",
      "Host events or create spaces that encourage guests to connect with your hotel and each other. A hotel that feels like a community naturally encourages return visits.",
    ],
  },
};

const relatedPosts = [
  { id: "small-hotels-increase-bookings", title: "How Small Hotels Can Increase Bookings" },
  { id: "digital-marketing-hotels-2025", title: "Digital Marketing for Hotels in 2025" },
  { id: "corporate-clients-profitable", title: "Corporate Clients — Most Profitable Segment" },
  { id: "retain-hotel-guests", title: "10 Ways to Retain Hotel Guests" },
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogContent[id] : null;

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Post Not Found</h1>
          <Link to="/blogs">
            <Button variant="outline">Back to Blogs</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 lg:h-[500px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {post.content.map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-foreground/80 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground">Share this article:</span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-muted rounded-full hover:bg-secondary hover:text-primary transition-colors" aria-label="Share on Facebook">
                      <Facebook className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-muted rounded-full hover:bg-secondary hover:text-primary transition-colors" aria-label="Share on Twitter">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-muted rounded-full hover:bg-secondary hover:text-primary transition-colors" aria-label="Share on LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Related Posts */}
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    {relatedPosts.filter(p => p.id !== id).slice(0, 3).map((relatedPost) => (
                      <li key={relatedPost.id}>
                        <Link
                          to={`/blogs/${relatedPost.id}`}
                          className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-primary p-6 rounded-2xl text-center">
                  <h3 className="text-lg font-semibold text-primary-foreground mb-3">
                    Need Help With Your Hotel Marketing?
                  </h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Get a free consultation from our experts.
                  </p>
                  <Link to="/contact">
                    <Button variant="hero" size="sm">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}
