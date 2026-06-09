import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Database, Server, Settings, Code, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "FastAPI Auth System",
    category: "Backend",
    description: "Robust JWT authentication & authorization system with refresh tokens and role-based access control.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 2,
    title: "E-Commerce Backend API",
    category: "Full Stack",
    description: "Complete e-commerce REST API handling product catalogs, shopping carts, order processing, and Stripe payments.",
    tags: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Stripe"],
    icon: <Database className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Real-time Chat API",
    category: "API",
    description: "High-performance WebSocket messaging backend supporting multiple chat rooms and live user presence.",
    tags: ["FastAPI", "WebSockets", "Redis Pub/Sub", "PostgreSQL"],
    icon: <Server className="w-6 h-6" />
  },
  {
    id: 4,
    title: "URL Shortener Service",
    category: "Open Source",
    description: "High-performance URL shortening service with analytics tracking and custom alias support.",
    tags: ["FastAPI", "Redis", "PostgreSQL", "Docker"],
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Task Management API",
    category: "API",
    description: "RESTful task & project management API with complex querying, filtering, and team collaboration features.",
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT"],
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Blog REST API",
    category: "Open Source",
    description: "Full-featured blog backend with CMS capabilities, draft management, and tag-based filtering.",
    tags: ["FastAPI", "PostgreSQL", "Alembic", "Redis"],
    icon: <Database className="w-6 h-6" />
  },
  {
    id: 7,
    title: "Rate Limiter Middleware",
    category: "Open Source",
    description: "Pluggable, highly configurable rate limiting middleware for FastAPI applications using Redis sliding windows.",
    tags: ["Python", "FastAPI", "Redis", "Docker"],
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 8,
    title: "Database Migration Tool",
    category: "Backend",
    description: "CLI tool for streamlined PostgreSQL migration management, wrapping Alembic with developer-friendly commands.",
    tags: ["Python", "PostgreSQL", "Alembic", "Click"],
    icon: <Server className="w-6 h-6" />
  }
];

const categories = ["All", "Backend", "API", "Full Stack", "Open Source"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    project => activeFilter === "All" || project.category.includes(activeFilter)
  );

  return (
    <>
      <Helmet>
        <title>Projects | Ahsan Habib Hamim — FastAPI Developer Bangladesh</title>
        <meta name="description" content="Explore my portfolio of backend systems, REST APIs, and open-source tools built with Python and FastAPI." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Selected Works</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of backend architectures, scalable APIs, and open-source tools I've built to solve complex engineering challenges.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category 
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(99,102,241,0.4)]" 
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(99,102,241,0.15)] hover:border-primary/50"
                >
                  <div className="h-48 bg-[#0D1117] relative p-6 border-b border-border flex items-center justify-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors"></div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-300 z-10 shadow-lg">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors pr-4">{project.title}</h3>
                      <span className="px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded border border-primary/20 whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-background border border-border rounded text-[11px] text-muted-foreground font-mono">{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4 border-t border-border/50">
                      <Button variant="default" size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 border-none font-medium">
                        <ExternalLink className="w-4 h-4 mr-2" /> Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 border-border hover:bg-card font-medium text-foreground">
                        <Github className="w-4 h-4 mr-2" /> GitHub
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found for this category.</p>
              <Button 
                variant="link" 
                onClick={() => setActiveFilter("All")}
                className="text-primary mt-2"
              >
                Clear filters
              </Button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
