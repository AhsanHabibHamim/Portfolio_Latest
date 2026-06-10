import { Link } from "wouter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit group">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-foreground">
                Ahsan Habib Hamim
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Backend Developer specializing in Python and FastAPI. Building fast, scalable, and secure systems.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Open to freelance work
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/certificates" className="text-muted-foreground hover:text-primary transition-colors">Certificates</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/ahsanhabibhamim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="GitHub">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/ahsanhabibhamim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ahsanhabibhamim@gmail.com" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Email">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Ahsan Habib Hamim. Built with passion for clean backend architecture.
          </p>
        </div>
      </div>
    </footer>
  );
}
