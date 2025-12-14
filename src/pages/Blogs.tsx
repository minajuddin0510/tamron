import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import breakfastImage from "@/assets/breakfast-guests.jpg";
import corporateImage from "@/assets/corporate-meeting.jpg";
import heroImage from "@/assets/hero-hotel.jpg";
import teamImage from "@/assets/team.jpg";

const blogPosts = [
  {
    id: "small-hotels-increase-bookings",
    title: "How Small Hotels Can Increase Bookings Without Extra Investment",
    excerpt: "Discover proven strategies that small and boutique hotels can implement immediately to boost occupancy rates without spending extra on marketing budgets.",
    author: "Vikram Singh",
    date: "December 8, 2025",
    readTime: "5 min read",
    image: heroImage,
    category: "Strategy",
  },
  {
    id: "digital-marketing-hotels-2025",
    title: "Why Digital Marketing Is Essential for Hotels in 2025",
    excerpt: "The hospitality landscape has changed dramatically. Learn why hotels that embrace digital marketing are outperforming their competitors and how you can too.",
    author: "Priya Mehta",
    date: "December 5, 2025",
    readTime: "7 min read",
    image: teamImage,
    category: "Digital Marketing",
  },
  {
    id: "corporate-clients-profitable",
    title: "Corporate Clients — The Most Profitable Segment for Hotels",
    excerpt: "Corporate travelers represent the highest-value segment for hotels. Here's how to attract and retain corporate clients for consistent revenue.",
    author: "Rahul Verma",
    date: "December 1, 2025",
    readTime: "6 min read",
    image: corporateImage,
    category: "Business",
  },
  {
    id: "retain-hotel-guests",
    title: "10 Powerful Ways to Retain Hotel Guests",
    excerpt: "Guest retention is more cost-effective than acquisition. Explore ten proven techniques to turn first-time visitors into loyal, repeat customers.",
    author: "Vikram Singh",
    date: "November 28, 2025",
    readTime: "8 min read",
    image: breakfastImage,
    category: "Guest Experience",
  },
];

export default function BlogsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our <span className="text-secondary">Blog</span>
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed">
              Insights, strategies, and tips to help your hotel thrive in today's 
              competitive hospitality market.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/blogs/${blogPosts[0].id}`} className="block group">
            <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4 w-fit">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-10">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                to={`/blogs/${post.id}`}
                className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Get the latest hotel marketing insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-secondary"
            />
            <button className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:shadow-gold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
