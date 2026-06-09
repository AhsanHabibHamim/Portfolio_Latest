import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, CheckCircle2, Github, Linkedin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Hire Me | Ahsan Habib Hamim — FastAPI Developer Bangladesh</title>
        <meta name="description" content="Get in touch for backend development projects, API consulting, or freelance opportunities." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <h3 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Get in Touch</h3>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Let's build something robust together.</h1>
            <p className="text-lg text-muted-foreground">
              I'm currently accepting new freelance projects and consulting opportunities. Whether you need a high-performance API or a complete backend overhaul, I'm here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm h-full flex flex-col">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Contact Information</h2>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href="mailto:ahsanhabibhamim@gmail.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                        ahsanhabibhamim@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-lg font-medium text-foreground">
                        Bangladesh 🇧🇩
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500/10 text-green-500 text-sm font-medium border border-green-500/20 mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Currently accepting new projects
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">Connect on social media</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/ahsanhabibhamim" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all hover:scale-105" aria-label="GitHub">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/ahsanhabibhamim" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all hover:scale-105" aria-label="LinkedIn">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm relative overflow-hidden">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Message Sent!</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-8">
                      Thank you for reaching out. I'll get back to you as soon as possible, usually within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="border-border hover:bg-background"
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-muted-foreground">Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="bg-background border-border focus-visible:ring-primary h-12" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" className="bg-background border-border focus-visible:ring-primary h-12" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Project Inquiry / API Consulting" className="bg-background border-border focus-visible:ring-primary h-12" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell me about your project, timeline, and requirements..." 
                                className="bg-background border-border focus-visible:ring-primary min-h-[160px] resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-12"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
