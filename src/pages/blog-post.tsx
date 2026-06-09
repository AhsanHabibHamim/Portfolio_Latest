import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { scrollYProgress } = useScroll();
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => setScaleX(latest));
  }, [scrollYProgress]);

  return (
    <>
      <Helmet>
        <title>Building Production-Ready FastAPI Apps | Ahsan Habib Hamim</title>
        <meta name="description" content="Learn how to structure, secure, and deploy robust FastAPI applications for enterprise environments with modern best practices." />
      </Helmet>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Back to all articles
          </Link>

          {/* Article Header */}
          <header className="mb-12 border-b border-border pb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded border border-primary/20">
                FastAPI
              </span>
              <span className="text-sm font-mono text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> 12 min read
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building Production-Ready FastAPI Apps: A Complete Guide
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center font-serif font-bold text-sm">
                    AH
                  </div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Ahsan Habib Hamim</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1.5 font-mono mt-0.5">
                    <Calendar className="w-3.5 h-3.5" /> Oct 15, 2024
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground font-medium mr-2">Share:</span>
                <Button variant="outline" size="icon" className="w-9 h-9 rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-9 h-9 rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-9 h-9 rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sticky TOC Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 relative">
              <div className="sticky top-32">
                <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-foreground mb-4">Table of Contents</h4>
                <nav className="flex flex-col gap-3 border-l border-border/50 pl-4">
                  <a href="#introduction" className="text-sm text-primary font-medium border-l-2 border-primary -ml-[17px] pl-4">Introduction</a>
                  <a href="#project-structure" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Optimal Project Structure</a>
                  <a href="#dependency-injection" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dependency Injection</a>
                  <a href="#database-session" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Database Session Management</a>
                  <a href="#error-handling" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Global Error Handling</a>
                  <a href="#conclusion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Conclusion</a>
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-9 prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:font-mono prose-code:text-secondary prose-code:bg-secondary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
              
              <p id="introduction" className="text-xl leading-relaxed">
                FastAPI has taken the Python backend world by storm, offering exceptional performance, automatic interactive documentation, and a developer experience that is hard to beat. However, the framework's unopinionated nature means developers are left to make architectural decisions themselves.
              </p>
              
              <p>
                In this guide, I'll walk you through the architecture I use to build production-ready FastAPI applications that are scalable, maintainable, and easy to test. This isn't about writing a simple "Hello World" app—it's about structuring a real-world enterprise system.
              </p>

              <h2 id="project-structure">Optimal Project Structure</h2>
              
              <p>
                A flat project structure becomes unmanageable quickly. For production apps, I strictly adhere to a domain-driven or modular architecture.
              </p>

              <div className="my-8 rounded-xl overflow-hidden bg-[#0D1117] border border-border">
                <div className="h-10 bg-[#161B22] border-b border-border flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="ml-4 text-xs font-mono text-muted-foreground">Directory Structure</div>
                </div>
                <pre className="p-4 overflow-x-auto text-sm font-mono text-muted-foreground leading-loose">
<span className="text-white">app/</span>
├── <span className="text-secondary">api/</span>
│   ├── dependencies/
│   └── routes/
├── <span className="text-secondary">core/</span>
│   ├── config.py
│   └── security.py
├── <span className="text-secondary">db/</span>
│   ├── database.py
│   └── migrations/
├── <span className="text-secondary">models/</span>
├── <span className="text-secondary">schemas/</span>
└── <span className="text-secondary">services/</span>
                </pre>
              </div>

              <p>
                This separation of concerns is crucial. <code>routes</code> handle HTTP mechanics, <code>schemas</code> handle Pydantic validation, <code>models</code> represent database tables, and <code>services</code> contain the actual business logic. Never put business logic directly in your route handlers.
              </p>

              <h2 id="database-session">Database Session Management</h2>
              
              <p>
                Improper database session management is the #1 cause of connection leaks in FastAPI apps. The best practice is to yield sessions from a dependency.
              </p>

              <div className="my-8 rounded-xl overflow-hidden bg-[#0D1117] border border-border">
                <div className="h-10 bg-[#161B22] border-b border-border flex items-center px-4">
                  <span className="text-xs font-mono text-muted-foreground">db/database.py</span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
<span className="text-[#FF7B72]">from</span> sqlalchemy.ext.asyncio <span className="text-[#FF7B72]">import</span> AsyncSession, create_async_engine
<span className="text-[#FF7B72]">from</span> sqlalchemy.orm <span className="text-[#FF7B72]">import</span> sessionmaker

engine = <span className="text-[#D2A8FF]">create_async_engine</span>(settings.DATABASE_URL, echo=True)
AsyncSessionLocal = <span className="text-[#D2A8FF]">sessionmaker</span>(
    engine, class_=AsyncSession, expire_on_commit=<span className="text-[#79C0FF]">False</span>
)

<span className="text-[#FF7B72]">async def</span> <span className="text-[#D2A8FF]">get_db</span>() -{'>'}AsyncGenerator[AsyncSession, <span className="text-[#79C0FF]">None</span>]:
    <span className="text-[#FF7B72]">async with</span> <span className="text-[#D2A8FF]">AsyncSessionLocal</span>() <span className="text-[#FF7B72]">as</span> session:
        <span className="text-[#FF7B72]">try</span>:
            <span className="text-[#FF7B72]">yield</span> session
            <span className="text-[#FF7B72]">await</span> session.<span className="text-[#D2A8FF]">commit</span>()
        <span className="text-[#FF7B72]">except</span> <span className="text-[#79C0FF]">Exception</span>:
            <span className="text-[#FF7B72]">await</span> session.<span className="text-[#D2A8FF]">rollback</span>()
            <span className="text-[#FF7B72]">raise</span>
        <span className="text-[#FF7B72]">finally</span>:
            <span className="text-[#FF7B72]">await</span> session.<span className="text-[#D2A8FF]">close</span>()
                </pre>
              </div>

              <p>
                By using an async context manager and yielding, we ensure that sessions are always cleanly closed or rolled back if an exception occurs during the request lifecycle, preventing catastrophic connection pool exhaustion.
              </p>

              <h2 id="error-handling">Global Error Handling</h2>
              
              <p>
                Don't scatter <code>try/except</code> blocks catching domain exceptions in every route. Define custom domain exceptions and register global exception handlers on the FastAPI app instance. This keeps your route handlers pristine and ensures consistent error response structures across your entire API.
              </p>

              <hr className="my-12 border-border" />
              
              <p className="italic text-sm text-muted-foreground">
                In my next article, we'll dive into advanced Pytest patterns for FastAPI, including async database fixtures and factory boy integration.
              </p>

            </article>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <section className="py-20 bg-card/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Link href="/blog/jwt-authentication-fastapi" className="group flex flex-col bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-3 block">Security</span>
              <h4 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">JWT Authentication in FastAPI — Best Practices 2025</h4>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">Implementing secure stateless authentication with access/refresh token rotation and blocklists.</p>
              <div className="text-primary font-medium text-sm flex items-center mt-auto">
                Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link href="/blog/postgresql-performance-optimization" className="group flex flex-col bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-3 block">Backend Architecture</span>
              <h4 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">PostgreSQL Performance Optimization</h4>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">Deep dive into indexing strategies, query planning, and connection pooling.</p>
              <div className="text-primary font-medium text-sm flex items-center mt-auto">
                Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}
