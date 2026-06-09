import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Calendar, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Button } from "react-day-picker";

const articles = [
  {
    id: 1,
    title: "Building Production-Ready FastAPI Apps: A Complete Guide",
    slug: "building-production-ready-fastapi-apps",
    category: "FastAPI",
    excerpt: "Learn how to structure, secure, and deploy robust FastAPI applications for enterprise environments with modern best practices.",
    date: "Oct 15, 2024",
    readTime: "12 min read"
  },
  {
    id: 2,
    title: "PostgreSQL Performance Optimization for Backend Developers",
    slug: "postgresql-performance-optimization",
    category: "Backend Architecture",
    excerpt: "Deep dive into indexing strategies, query planning, and connection pooling to make your database layer lightning fast.",
    date: "Sep 28, 2024",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "JWT Authentication in FastAPI — Best Practices 2025",
    slug: "jwt-authentication-fastapi",
    category: "FastAPI",
    excerpt: "Implementing secure stateless authentication with access/refresh token rotation, blocklists, and role-based access control.",
    date: "Sep 10, 2024",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Why I Chose FastAPI Over Django REST Framework",
    slug: "fastapi-vs-django-rest-framework",
    category: "Python",
    excerpt: "A technical comparison of async capabilities, performance benchmarks, and developer experience between the two frameworks.",
    date: "Aug 22, 2024",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Data Structures Every Backend Developer Must Know",
    slug: "data-structures-backend-developers",
    category: "Competitive Programming",
    excerpt: "From B-Trees in databases to Hash Maps in caching: how fundamental data structures power modern backend infrastructure.",
    date: "Aug 05, 2024",
    readTime: "15 min read"
  }
];

const categories = ["All", "FastAPI", "Python", "Backend Architecture", "APIs", "Competitive Programming", "Career"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Blog | Ahsan Habib Hamim — Python & FastAPI Insights</title>
        <meta name="description" content="Technical articles, tutorials, and insights on Python, FastAPI, backend architecture, and competitive programming." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Technical Journal</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Thoughts, tutorials, and deep dives into backend engineering, Python, system architecture, and building reliable APIs.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"
          >
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category 
                      ? "bg-primary/20 text-primary border border-primary/50" 
                      : "bg-transparent border border-border text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64 lg:w-80 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border focus-visible:ring-primary h-11"
              />
            </div>
          </motion.div>

          {/* Article Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => (
                <motion.article
                  layout
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <Link href={`/blog/${article.slug}`} className="block h-48 bg-[#0D1117] border-b border-border p-6 flex items-end relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded border border-primary/30 backdrop-blur-md">
                      {article.category}
                    </span>
                  </Link>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</div>
                      <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</div>
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link href={`/blog/${article.slug}`} className="text-primary font-medium flex items-center group-hover:underline text-sm mt-auto w-fit">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-24 bg-card/30 border border-border border-dashed rounded-xl">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-serif text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We couldn't find any articles matching your current search criteria. Try adjusting your filters.
              </p>
              <Button 
                variant="outline" 
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="mt-6 border-border"
              >
                Clear all filters
              </Button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
