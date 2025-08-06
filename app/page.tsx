"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  MapPin,
  Calendar,
} from "lucide-react";
import { ResumeDownload } from "@/components/resume-download";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Vue.js", "Nuxt.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "GraphQL"],
    },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "Figma"] },
    {
      category: "Mobile",
      items: ["Flutter"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/ecommerce.jpeg",
      tech: ["React.js", "Node.js", "Sequelize", "PostgreSQL", "Paypal"],
      github: "#",
      live: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Pre-donation form prefill system with health data input, user information management, and admin dashboard for donor tracking.",
      image: "/medlaos.jpg",
      tech: ["React.js", "Flutter"],
      github: "#",
      live: "#",
    },
    {
      title: "Merchant dashboard",
      description:
        "E-commerce merchant portal with real-time order tracking, inventory control, product listings, and revenue analytics.",
      image: "/ant.jpg",
      tech: ["React.js", "redux toolkit"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Online lottery platform with ticket purchasing, real-time availability, and admin dashboard for draw and sales management.",
      image: "/daofa.jpg",
      tech: ["Nest.js", "Flutter", "React.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Move inovation",
      description:
        "Charging tracking app with session monitoring, usage history, and real-time status updates for electric vehicle charging.",
      image: "/move.jpg",
      tech: ["Python", "FastAPI", "OpenAI", "React"],
      github: "#",
      live: "#",
    },
  ];

  const experience = [
    {
      title: "Frontend developer",
      company: "Iquri Tech",
      period: "SEPTEMBER 2021 - DECEMBER 2023",
      location: "Vientiane",
      description:
        "Built responsive web applications using React and TypeScript, collaborated with design team to implement UIs.",
    },
    {
      title: "Frontend Developer",
      company: "Atcode",
      period: "JANUARY 2024 - JANUARY 2025",
      location: "Vientiane",
      description:
        "Built responsive web applications using React and TypeScript, collaborated with design team to implement UIs.",
    },
    {
      title: "Backend Developer",
      company: "Laolaolab ICT Solutions",
      period: "FEBRUARY 2025 – PRESENT",
      location: "Vientiane",
      description:
        "Developed and maintained API, learned modern backend technology practices and agile methodologies.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white"
            >
              {"<Keonakhone />"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex space-x-8"
            >
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? "text-purple-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {section}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 h-96"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-purple-400">
              <AvatarImage
                src="/bank.jpg"
                className="w-full h-full object-cover"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Keonakhone Nunthaboud
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-8"
          >
            Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            Passionate about creating beautiful, functional, and user-centered
            digital experiences. I bring ideas to life through code and design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div {...scaleOnHover}>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div {...scaleOnHover}>
              <ResumeDownload />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white"
                >
                  <Icon className="h-6 w-6" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 text-slate-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-purple-600 mx-auto"
            ></motion.div>
          </motion.div>
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className=" text-center text-2xl font-semibold text-white mb-6">
                Hello! I'm Keonakhone, a passionate developer based in
                Vientiane.
              </h3>
              <p className="text-center text-slate-300 mb-6 leading-relaxed">
                With over 2 years of experience in web development, I specialize
                in creating modern, responsive applications that provide
                exceptional user experiences. I'm constantly learning new
                technologies and best practices to stay at the forefront of web
                development.
              </p>
              {/* <p className="text-slate-300 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new coffee shops,
                hiking in the Bay Area, or contributing to open-source projects.
                I believe in writing clean, maintainable code and collaborating
                effectively with cross-functional teams.
              </p> */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {["Problem Solver", "Team Player", "Continuous Learner"].map(
                  (badge, index) => (
                    <motion.div
                      key={badge}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-slate-800 text-slate-300"
                      >
                        {badge}
                      </Badge>
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-1"
              >
                <img
                  src="/images/developer-workspace.png"
                  alt="Modern developer workspace with dual monitors and clean setup"
                  className="rounded-lg w-full h-auto"
                />
              </motion.div>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-purple-600 mx-auto"
            ></motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-center">
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="outline"
                            className="border-purple-600 text-purple-400"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-purple-600 mx-auto"
            ></motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 overflow-hidden group hover:border-purple-600 transition-colors h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    {/* <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-center pb-4"
                    >
                      <div className="flex space-x-2">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" variant="secondary">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" variant="secondary">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div> */}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="outline"
                            className="border-slate-600 text-slate-300"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-purple-600 mx-auto"
            ></motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-900/50 border-slate-700">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-white text-xl">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-purple-400 text-lg font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-slate-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-slate-400 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-purple-600 mx-auto mb-8"
            ></motion.div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12 justify-center mx-auto"
          >
            {[
              { icon: Mail, title: "Email", info: "keonakhone1998@gmail.com" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 text-center">
                  <CardContent className="pt-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <contact.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-white font-semibold mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-slate-400">{contact.info}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-8 px-6 border-t border-slate-800"
      >
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Keonakhone Developer. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
