import { Code, User, LibraryBig } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Computer Science Major Student
            </h3>

            <p className="text-muted-foreground">
            I’m a dedicated and versatile third year Computer Science student at NC State University with hands-on experience in full-stack development, machine learning, and data analysis. 
            My projects range from building intelligent predictors using Python and scikit-learn to developing responsive web applications for my local Chinese School with Node.js and MongoDB. 
            I thrive in collaborative environments where I can bridge backend logic with real-world functionality, as seen in my work at the Liquid Rocketry Lab and during various independent projects.
            </p>

            <p className="text-muted-foreground"> 
            Beyond my technical pursuits, I bring strong organizational and leadership skills from my roles in student associations and youth swim coaching. 
            Whether managing a fundraiser, organizing a charity gala, or teaching swimming lessons, I approach each challenge with a solutions-oriented mindset and a passion for helping others grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="button">
                {" "}
                Contact Me
              </a>
              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Top Areas </h4>
                  <p className="text-muted-foreground">
                    Dataflow management, database interaction, backend structuring, and data analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Interests/Hobbies </h4>
                  <p className="text-muted-foreground">
                    Sports analysis, video games, cooking, bowling, pickleball, and LEGO's. 
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LibraryBig className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Involvement </h4>
                  <p className="text-muted-foreground">
                    President of Vietnamese Student Association, member of Programming Team for Liquid Rocketry Lab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};