"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

type PortfolioData = {
  portfolio_image: string;
  portfolio_title: string;
  portfolio_github_link?: string;
  portfolio_tags: string[];
};

const portfolioData: PortfolioData[] = [
  {
    portfolio_image:
      "https://github.com/user-attachments/assets/ba255144-2370-451b-9726-f4253cdd0ee5",
    portfolio_title: "ChronoDB",
    portfolio_github_link: "https://github.com/Daan-Krol/ChronoDB",
    portfolio_tags: ["Java", "Desktop App"],
  },
  {
    portfolio_image:
      "https://github.com/user-attachments/assets/b991898e-5284-4de8-91d4-38d9eda9a81f",
    portfolio_title: "Plantliefhebbers",
    portfolio_github_link: "https://github.com/Daan-Krol/PlantLiefhebbers",
    portfolio_tags: ["React", ".NET" , "Typescript", "Javascript", "C#", "HTML", "CSS", "Azure", "SQL"],
  },
];

const Portfolio = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="bg-background py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-8 sm:gap-12 justify-center items-center w-full">
          {/* Heading */}
          <div className="flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-8 duration-700 ease-in-out">
            {/* Badge */}
            {/* <Badge
              variant={"outline"}
              className="py-1 px-3 text-sm font-normal h-7"
            >
              Portfolio
            </Badge> */}
            {/* Heading */}
            <div className="max-w-xs sm:max-w-2xl mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-4xl font-semibold">
                My Projects
              </h2>
              <h3 className="text-foreground text-sm sm:text-xl font-regular">
                (so far)
              </h3>
            </div>
          </div>
          {/* portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-7 md:gap-y-8 w-full">
            {portfolioData.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                //variants={cardVariants}
                className="group"
              >
                <Card className="p-0 ring-0 overflow-hidden shadow-none border-0">
                  <CardContent className="p-0 flex flex-col gap-3">
                    <div className="relative aspect-auto overflow-hidden rounded-2xl">
                      <a href={item.portfolio_github_link || "#"} target="_blank" rel="noopener noreferrer">
                        <img
                          src={item.portfolio_image}
                          alt={item.portfolio_title}
                          width={"100%"}
                          height={370}
                          className="rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-1">
                      <a
                        href="#"
                        className="text-foreground text-2xl font-medium tracking-tighter w-fit"
                      >
                        {item.portfolio_title}
                      </a>
                      {item.portfolio_github_link && (
                        <a
                          href={item.portfolio_github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                        >
                          View on GitHub
                        </a>
                      )}
                      <div className="flex flex-wrap gap-3">
                        {item.portfolio_tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-sm font-normal px-3 py-1 h-7"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
