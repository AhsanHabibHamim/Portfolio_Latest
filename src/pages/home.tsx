import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/use-typewriter";
import { Counter } from "@/components/ui/counter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Server, Database, Settings, Code, Layers, ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  const typewriterText = useTypewriter([
    "Backend Developer",
    "FastAPI Specialist",
    "Python Engineer",
    "API Architect"
  ]);

  return (
    <>
      <Helmet>
        <title>Ahsan Habib Hamim | Best FastAPI Developer in Bangladesh</title>
        <meta name="description" content="I build fast, scalable backend systems and APIs using Python & FastAPI. Government certified in Full Stack Web Development." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              Available for Backend Projects
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Ahsan Habib Hamim
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="h-10 md:h-12 flex items-center">
              <h2 className="text-2xl md:text-3xl font-medium text-secondary">
                {typewriterText}<span className="animate-pulse">|</span>
              </h2>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I build fast, scalable backend systems and APIs using Python & FastAPI. Government certified in Full Stack Web Development. Passionate about clean architecture and competitive programming.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md px-8">
                  Hire Me <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="/assets/resume.pdf" download className="inline-block">
                <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary font-medium rounded-md px-8">
                  Download CV ↓
                </Button>
              </a>
              <a href="https://linkedin.com/in/ahsanhabibhamim" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="mailto:ahsanhabibhamim@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Email">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto md:ml-auto"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20"></div>
            <div className="relative rounded-xl bg-[#0D1117] border border-border shadow-2xl overflow-hidden flex flex-col h-[350px]">
              {/* Title Bar */}
              <div className="h-10 bg-[#161B22] border-b border-border flex items-center px-4 shrink-0">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 text-center font-mono text-xs text-muted-foreground mr-12">
                  portfolio.py
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-5 font-mono text-sm md:text-base leading-relaxed overflow-hidden">
                <div className="text-muted-foreground mb-4"># Backend Developer Portfolio</div>
                <div><span className="text-[#FF7B72]">@app.get</span><span className="text-[#A5D6FF]">("/api/v1/users/&#123;user_id&#125;")</span></div>
                <div><span className="text-[#FF7B72]">async def</span> <span className="text-[#D2A8FF]">get_user</span>(</div>
                <div className="pl-8"><span className="text-[#FFA657]">user_id</span>: <span className="text-[#79C0FF]">int</span>,</div>
                <div className="pl-8"><span className="text-[#FFA657]">db</span>: <span className="text-[#79C0FF]">AsyncSession</span> = <span className="text-[#D2A8FF]">Depends</span>(<span className="text-[#A5D6FF]">get_db</span>)</div>
                <div>):</div>
                <div className="pl-4">user = <span className="text-[#FF7B72]">await</span> UserService.<span className="text-[#D2A8FF]">fetch</span>(db, user_id)</div>
                <div className="pl-4"><span className="text-[#FF7B72]">return</span> &#123;<span className="text-[#A5D6FF]">"status"</span>: <span className="text-[#A5D6FF]">"success"</span>, <span className="text-[#A5D6FF]">"data"</span>: user&#125;<span className="w-2 h-4 inline-block bg-muted-foreground/60 align-middle ml-1 animate-pulse"></span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/0 md:divide-border/50 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-baseline">
                <Counter to={3} />+
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-baseline">
                <Counter to={15} />+
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects Delivered</div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-baseline">
                <Counter to={10} />+
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">APIs Built</div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2 flex items-baseline">
                Govt.
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Certified Developer</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="md:col-span-4 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                <div className="w-full h-full bg-card rounded-full border-4 border-background overflow-hidden">
                  <img
                    src="/assets/profile.jpg"
                    alt="Ahsan Habib Hamim"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="md:col-span-8 flex flex-col gap-6"
            >
              <h3 className="text-primary font-medium tracking-wider uppercase text-sm">About Me</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Building the backbone of the web</h2>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I am a passionate backend developer specializing in Python and FastAPI. My expertise lies in designing and building RESTful APIs, optimizing database queries, and implementing robust authentication systems.
                </p>
                <p>
                  With a solid foundation in C/C++, Data Structures, and Algorithms from my background in competitive programming, I write code that is not only clean but highly performant. I am a Government Certified Full Stack Web Developer in Bangladesh, bringing a holistic understanding of how systems interact from the database to the UI.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-card border border-border rounded-md px-4 py-2 text-sm font-medium">
                  <span>🏛️</span> Govt. Certified Developer
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-md px-4 py-2 text-sm font-medium">
                  <span>🐍</span> Python Expert
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-md px-4 py-2 text-sm font-medium">
                  <span>⚡</span> FastAPI Specialist
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-md px-4 py-2 text-sm font-medium">
                  <span>🗄️</span> PostgreSQL & Redis
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-md px-4 py-2 text-sm font-medium">
                  <span>🐳</span> Docker & DevOps
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-md px-4 py-2 text-sm font-medium">
                  <span>🔒</span> API Security (OAuth, JWT)
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-md px-4 py-2 text-sm font-medium">
                  <span>🔁</span> Real-time & WebSockets
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-medium text-lg">
                  View Full Resume <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-card/30 relative border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h3 className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Technical Arsenal</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Server className="w-6 h-6" />,
                title: "Backend Development",
                skills: ["Python", "FastAPI", "Django", "REST API", "WebSockets", "Async Programming"],
                proficiency: 95
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Databases & Storage",
                skills: ["PostgreSQL", "MySQL", "SQLite", "Redis", "SQLAlchemy", "Alembic"],
                proficiency: 85
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "DevOps & Tools",
                skills: ["Docker", "Git", "GitHub", "Linux", "Postman", "VS Code", "Vercel"],
                proficiency: 80
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Programming & Algorithms",
                skills: ["C", "C++", "Data Structures", "Algorithms", "Competitive Programming"],
                proficiency: 90
              },
            ].map((category, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                }}
                className="bg-card/50 backdrop-blur-md border border-border rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
                
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">{category.title}</h3>
                
                <ul className="space-y-2 mb-8">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
                
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-background">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* MERN Stack */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="bg-card/50 backdrop-blur-md border border-border rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center mb-6 relative z-10">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">MERN Stack</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["Node.js", "Express", "React", "MongoDB", "REST APIs", "JWT Auth"].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/30 rounded-md text-xs font-medium">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Frontend Development */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
              className="bg-card/50 backdrop-blur-md border border-border rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
              <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-lg flex items-center justify-center mb-6 relative z-10">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-purple-500/10 text-purple-300 border border-purple-500/30 rounded-md text-xs font-medium">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* CMS & Platforms */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } }}
              className="bg-card/50 backdrop-blur-md border border-border rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors"></div>
              <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mb-6 relative z-10">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">CMS & Platforms</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["WordPress", "Shopify", "Framer", "Elementor", "WooCommerce", "Theme Dev"].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-md text-xs font-medium">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="mt-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-md border border-border rounded-xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Layers className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">Full Stack Expertise</h3>
                  <p className="text-muted-foreground text-sm">Complete end-to-end development solutions</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["HTML5", "CSS3", "JavaScript", "TypeScript", "Git & Version Control", "RESTful APIs", "SQL", "NoSQL"].map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Portfolio</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="border-border text-foreground hover:bg-card">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FastAPI Auth System",
                description: "JWT authentication & authorization with refresh tokens, role-based access control.",
                tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
                impact: "Handles 10,000+ API requests/day",
                icon: <Settings className="w-8 h-8" />
              },
              {
                title: "E-Commerce Backend API",
                description: "Full REST API for e-commerce with product, cart, order management, and payments.",
                tags: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Stripe"],
                impact: "Processes 500+ orders/day",
                icon: <Database className="w-8 h-8" />
              },
              {
                title: "Real-time Chat API",
                description: "WebSocket-based messaging backend with chat room management and presence.",
                tags: ["FastAPI", "WebSockets", "Redis Pub/Sub", "PostgreSQL"],
                impact: "Supports 1,000+ concurrent connections",
                icon: <Server className="w-8 h-8" />
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                }}
                className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(99,102,241,0.15)] hover:border-primary/50"
              >
                <div className="h-48 bg-gradient-to-br from-background to-card relative p-6 border-b border-border flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-300 z-10 shadow-lg">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-xs font-mono text-secondary mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                      Impact: {project.impact}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-background border border-border rounded text-xs text-muted-foreground font-mono">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <Button variant="default" size="sm" className="flex-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-none">
                      <ExternalLink className="w-4 h-4 mr-2" /> Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-border hover:bg-card">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-card/30 relative border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Writing</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Latest Articles</h2>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="border-border text-foreground hover:bg-card">
                Read All Posts <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Building Production-Ready FastAPI Apps: A Complete Guide", cat: "FastAPI", time: "12 min read" },
              { title: "PostgreSQL Performance Optimization for Backend Developers", cat: "Backend Architecture", time: "8 min read" },
              { title: "JWT Authentication in FastAPI — Best Practices 2025", cat: "Security", time: "10 min read" }
            ].map((post, i) => (
              <motion.article 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="h-40 bg-background border-b border-border p-6 flex items-end relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 px-2 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded border border-primary/20">
                    {post.cat}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                  <div className="mt-auto flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-mono">{post.time}</span>
                    <Link href="/blog/example" className="text-primary font-medium flex items-center group-hover:underline">
                      Read <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="max-w-3xl mx-auto text-center bg-card/80 backdrop-blur-md border border-border rounded-2xl p-10 md:p-16 shadow-2xl"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Ready to build something exceptional?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              I'm currently open to backend development projects, API consulting, and freelance work. Let's discuss how I can help bring your ideas to life with solid engineering.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md px-8 h-12 text-lg">
                  Hire Me
                </Button>
              </Link>
              <Link href="/projects" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-border hover:bg-card font-medium rounded-md px-8 h-12 text-lg">
                  View My Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
