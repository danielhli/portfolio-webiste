import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast"
import { useState } from "react";

export const ContactSection = () => {

  const {toast} = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message, I'll get back to you soon."
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id ="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx--auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out if you have any questions or want to discuss something!
        </p>

        <div className="grid gird-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" /> {" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a 
                    href="mailto:danielli4821@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    danielli4821@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" /> {" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a 
                    href="tel:+19847898230"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (984) 789-8230
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" /> {" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cary, NC
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center"> 
                <a 
                  href="https://www.linkedin.com/in/daniel-li-nc/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://www.instagram.com/daniel.li.12/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100051376715488"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://github.com/danielhli"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shaodw-xs" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                > 
                  Your Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"
                  placeholder="Daniel Li..."
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                > 
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"
                  placeholder="youremail@gmail.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                > 
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden resize-none"
                  placeholder="Hello, I'd like to talk bout.."
                />
              </div>

              <button 
                type="submit" 
                disable={isSubmitting}
                className={cn("button w-full flex items-center justify-center gap2"       
              )}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} className="pl-0.75"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};