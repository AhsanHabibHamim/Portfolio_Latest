import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Award, Sparkles, Medal, Layers, ArrowUpRight, FileText } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const certificates = [
  {
    title: "Python Programming",
    organization: "Uniathena Learning Academy",
    description: "Python fundamentals, problem solving, and application development.",
    date: "2024",
    img: "/assets/python_basic.jpg",
    full: "/assets/python_basic.jpg",
  },
  {
    title: "Web Design & Development",
    organization: "UY Lab IT",
    description: "HTML, CSS, JavaScript, responsive design, and modern web development.",
    date: "2025",
    img: "/assets/Web%20Design%20.jpg",
    full: "/assets/Web%20Design%20.jpg",
  },
  {
    title: "Web Design & Development for Freelancing",
    organization: "NSDA Government Certified",
    description: "Professional web development and freelancing skills.",
    date: "2025",
    img: "/assets/nsda.jpg",
    full: "/assets/nsda.jpg",
  },
  {
    title: "Python Django",
    organization: "Eassy Coding Academy",
    description: "Backend development, APIs, databases, and full-stack applications.",
    date: "2024",
    img: "/assets/python_django.jpg",
    full: "/assets/python_django.jpg",
  },
  {
    title: "Digital Marketing",
    organization: "Marketing Essentials",
    description: "SEO, social media marketing, content strategy, and online advertising.",
    date: "2024",
    img: "/assets/Digital%20Marketing.jpg",
    full: "/assets/Digital%20Marketing.jpg",
  },
  {
    title: "Cyber Security",
    organization: "Google Organization",
    description: "Security fundamentals, network protection, and cybersecurity best practices.",
    date: "2024",
    img: "/assets/Cyber%20Sequrity.jpg",
    full: "/assets/Cyber%20Sequrity.jpg",
  },
  {
    title: "Machine Learning",
    organization: "skill.jobs",
    description: "Data analysis, machine learning algorithms, and AI fundamentals.",
    date: "2024",
    img: "/assets/Mashine%20Learing%20basics.jpg",
    full: "/assets/Mashine%20Learing%20basics.jpg",
  },
  {
    title: "Project Management (HP)",
    organization: "HP",
    description: "Project planning, team collaboration, leadership, and execution.",
    date: "2024",
    img: "/assets/Project%20Management.jpg",
    full: "/assets/Project%20Management.jpg",
  },
];

function CertificatePromo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mt-12 rounded-3xl border border-border bg-gradient-to-br from-background/50 via-card/70 to-background/50 p-8 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="font-serif text-3xl font-bold text-foreground">Portfolio-ready certificate presentation</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Uniform, cropped previews with lazy-loading and a responsive full-image modal on click. Optimized for desktop, tablet and mobile — professional and ready for recruiters.
          </p>
          <ul className="mt-4 text-sm text-muted-foreground space-y-2">
            <li>• Consistent 3-column grid with intelligent cropping</li>
            <li>• Lazy-loaded thumbnails for faster page load</li>
            <li>• Click to open high-quality full image in a modal</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Share Details</Button>
          </Link>
          <a href="/assets/resume.pdf" download>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary">Download Resume</Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openHandler = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      setActiveIndex(customEvent.detail);
      setOpen(true);
    };

    document.addEventListener("openCertificateDialog", openHandler as EventListener);
    return () => document.removeEventListener("openCertificateDialog", openHandler as EventListener);
  }, []);

  const activeCertificate = activeIndex !== null ? certificates[activeIndex] : null;

  return (
    <>
      <Helmet>
        <title>Ahsan Habib Hamim | Certificates & Achievements</title>
        <meta
          name="description"
          content="An elegant, responsive gallery of professional certificates with local image preview modals and consistent card layout."
        />
      </Helmet>

      <section className="relative min-h-[100dvh] pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),transparent_45%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-3 rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" /> Featured Certificates
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Certificates & Achievements
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A polished, responsive certificate gallery built for professional presentation and consistent local image previews.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-6 shadow-lg">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Trusted Achievements</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every credential is presented in a consistent card layout and opens in a responsive Drive preview modal.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-6 shadow-lg">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/10 text-secondary mb-4">
                <Medal className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Modern Visual Balance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Uniform aspect ratios, subtle hover motion, and clean spacing ensure the gallery remains premium across devices.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-6 shadow-lg">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Local Image Support</h2>
              <p className="text-muted-foreground leading-relaxed">
                Clicking a preview opens the full certificate image in a responsive modal. All images are loaded from the local assets folder for reliability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certificates.map((certificate, index) => {
              const thumb = certificate.img;
              const openCertificate = (e?: React.MouseEvent) => {
                if (e) e.stopPropagation();
                setActiveIndex(index);
                setOpen(true);
              };

              return (
                <article
                  key={certificate.title}
                  className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-border bg-card/70 shadow-2xl transition-all hover:-translate-y-1 hover:shadow-2xl/30"
                  onClick={openCertificate}
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
                      {thumb ? (
                        <img
                          src={thumb}
                          alt={`${certificate.title} thumbnail`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-lg shadow-primary/10">
                            <FileText className="h-7 w-7" />
                          </div>
                          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-3">Certificate preview</p>
                          <h3 className="text-xl font-semibold text-white leading-tight">{certificate.title}</h3>
                        </div>
                      )}

                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-slate-950/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); openCertificate(); }}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
                        >
                          View Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-semibold uppercase tracking-[0.24em] text-primary">{certificate.organization}</span>
                      <span>{certificate.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{certificate.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{certificate.description}</p>
                    <Button
                      onClick={(e) => { e.stopPropagation(); openCertificate(); }}
                      variant="outline"
                      className="w-full justify-center"
                    >
                      View Certificate
                    </Button>
                  </div>
                </article>
              );
            })}
          </motion.div>

          <CertificatePromo />
        </div>
      </section>

      <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
        <DialogContent className="max-w-6xl w-full h-[85vh] p-0 overflow-hidden sm:rounded-3xl">
          {activeCertificate ? (
            <div className="flex h-full flex-col bg-background">
                <div className="flex flex-col gap-4 border-b border-border px-6 py-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <DialogTitle className="text-xl sm:text-2xl">{activeCertificate.title}</DialogTitle>
                  <DialogDescription className="mt-2 text-sm text-muted-foreground">
                    {activeCertificate.organization} · {activeCertificate.description}
                  </DialogDescription>
                </div>
                <a
                  href={activeCertificate.full}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
                >
                  Click Here to View Full Image
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="relative flex-1 bg-slate-950/90 flex items-center justify-center">
                <img
                  src={activeCertificate.full}
                  alt={activeCertificate.title}
                  loading="lazy"
                  className="max-h-full w-full object-contain"
                />
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
