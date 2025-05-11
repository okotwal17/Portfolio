import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import { 
  mobile, 
  backend, 
  creator, 
  web, 
  javascript, 
  typescript, 
  html, 
  css, 
  reactjs, 
  tailwind,  
} from "../assets";

import java from "../assets/tech/java.png";
import python from "../assets/tech/python.png";
import django from "../assets/tech/django.png";
import flutterflow from "../assets/tech/flutterflow.png";
import xperience from "../assets/company/xperience.png";
import classCalendar from "../assets/company/classCalendar.png";
import algebraiDemo from "../assets/algebraiDemo.png";
import classCal from "../assets/classCal.png";
import techdeal from "../assets/techdeal.png";



export { 
  java, 
  python,
  django,
  flutterflow,
  classCalendar,
  xperience
};


console.log("Java Icon Path:", java);
console.log("Python Icon Path:", python);


export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Mobile App Developer",
    icon: web,
  },
  {
    title: "STEM Education Advocate",
    icon: mobile,
  },
  {
    title: "Tech Entrepreneur",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FlutterFlow",
    icon: flutterflow,
  },
];

const experiences: TExperience[] = [
  {
    title: "Computer Science Consulting & Curriculum Development Intern",
    companyName: "Xperience Coding LLC",
    icon: xperience,  // replace with appropriate icon
    iconBg: "#383E56",  // Darker background color for Xperience
    date: "Jun 2024 – Jul 2024",
    points: [
      "Developed STEM camp curricula for approximately 50 students, covering topics such as Web Development, Programming, and Robotics, integrating tools like HTML, CSS, and basic JavaScript.",
      "Initiated outreach to local businesses, providing pro bono tech services that resulted in the creation of a virtual tour for Lakeview Fitness using basic web development tools.",
      "Coordinated and managed various tech projects, producing detailed technical specifications, wireframes, and project timelines to ensure smooth execution."
    ],
  },
  {
    title: "Co-President of Education",
    companyName: "Xperience Coding LLC",
    icon: xperience,  // replace with appropriate icon
    iconBg: "#383E56",  // Darker background color for Xperience
    date: "Aug 2024 – Present",
    points: [
      "Spearheaded the design and implementation of coding curricula for K-5 students, utilizing Scratch and Python to build interactive learning modules and exercises.",
      "Developed hands-on, age-appropriate lesson plans and coding activities to teach programming concepts such as loops, conditionals, and algorithms.",
      "Taught coding camps, adapting instruction to various skill levels, ensuring students gained practical experience with fundamental coding languages and tools.",
      "Collaborated with board members to iteratively improve the curriculum, incorporating feedback and optimizing the learning experience for students."
    ],
  },
  {
    title: "Chief Technology Officer (CTO)",
    companyName: "classCalendar LLC",
    icon: classCalendar,  // replace with appropriate icon
    iconBg: "#E6DEDD",  // Lighter background color for classCalendar
    date: "May 2024 – Present",
    points: [
      "Co-founded classCalendar LLC and led the development of a full-stack task and assignment management app, featuring avatar customization and a rewards system to enhance user engagement.",
      "Designed and implemented both front-end and back-end components using FlutterFlow, Dart, Firebase, and Avataars API, contributing to 100K+ lines of code for a seamless, fully integrated app.",
      "Accepted into the Apple Developer Program, with the app set for App Store release soon, strengthening expertise in full-stack development, app deployment, team leadership, and user experience design."
    ],
  },
  

];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Coming soon!",
    name: "Mr. Adam Lueken",
    designation: "Founder",
    company: "XP Coding",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGqZw5Usffsrg/profile-displayphoto-shrink_200_200/B4DZPgN99IHYAk-/0/1734633578711?e=1750291200&v=beta&t=eEOFafBqnKmjNhgKu-CBvKMusJiEctYGUxUMsnunndM",
  },
];

const projects: TProject[] = [
  {
    name: "Algebr.ai",
    description:
      "Created an AI-powered algebra learning app using ChatGPT API for personalized practice questions. Developed a full-stack platform with HTML, CSS, JavaScript, and Django, winning 1st place in the Math Division at the D128 STEAM Showcase.",
    tags: [
      {
        name: "gptapi",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: algebraiDemo,
    sourceCodeLink: "https://github.com/okotwal17/Algebr.ai",
  },
  {
    name: "classCalendar",
    description:
      "Co-founded classCalendar LLC and developed a full-stack task management app with avatar customization and rewards. Built the app using FlutterFlow, Dart, Firebase, and Avataars API, contributing 100K+ lines of code. Accepted into the Apple Developer Program, with the app soon launching on the App Store.",
    tags: [
      {
        name: "flutterflow",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: classCal,
    sourceCodeLink: "https://classcalendarapp.com/",
  },
  {
    name: "Tech Deals Scraper",
    description:
      "A full-stack application that lets users search for tech products and find the best prices across multiple websites (eBay, Newegg, and B&H Photo Video).",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: techdeal,
    sourceCodeLink: "https://github.com/okotwal17/TechDealsScraper?tab=readme-ov-file",
  },
];

export { services, technologies, experiences, testimonials, projects };
