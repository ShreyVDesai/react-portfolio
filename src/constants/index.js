import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a enthusiatic professional looking to create impact using AI. During my graduate degree in AI at Northeastern University, I have gained proficiency in cutting-edge, industry ready skills which I applied during my various projects and internships.`;

export const ABOUT_TEXT = `I am an MS in AI student at Northeastern University with strong programming skills, having 4+ years of experience working with programming languages such as Python, R, Java, SQL and C. I have worked on extracting valuable insights using advanced machine learning techniques as part of my 3-year AI and ML honours specialisation programme with IBM. Having done multiple internships, I thrive in a fast-paced work environment. I have learned to be the ideal team member by incorporating adaptability and professionalism into my work ethic. While my education and certifications prove my strong technical foundation, my projects are a testament to my creative mind, problem-solving skills and drive to incorporate the best practices in the industry into my work. As the founder-president of the music club of my college, I have demonstrated strong leadership ability and effective communication skills. This experience along with the various group projects I have done have helped me demonstrate my teamwork and management skills. My hobbies include playing music, singing and staying fit. I have recently developed an interest in the world of finance. I aspire to work as an AI or machine learning engineer at a company which challenges me. My goal is to become someone that a business can look upon to solve problems`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Aug 2024",
    role: "AI Software Engineering Intern",
    company: "Altius Strategic Consulting",
    description: `Led  two projects which used GenAI technologies to automate commercial due diligence and contract analysis. During the 4 months of my internship, I provided POCs, created development cycle timelines and developed the core logic of the applications. I also contributed to the development of a portfolio analysis tool using the MERN stack, pushing it to the testing phase.`,
    technologies: ['Retrival Augmented Generation','Web Scraping','Natural Language Processing',"Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "Jan 2024 - Apr 2024",
    role: "Software Intern",
    company: "Sensigo Inc.",
    description: ` Developed a RAG based GenAI LLM chatbot for car repair, leveraging Python, AWS, JavaScript and 
NLP using large scale multimodal data and customized recommendation algorithm.I also fine-tuned models using PyTorch, transforming them into scalable, efficient web-apps. I collaborated with cross functional teams, documenting and tracking progress using Confluence and Jira`,
    technologies: ["Machine Learning", "Neural Networks", "Generative AI","SQL","AWS","Natural Language Processing"],
  },
  {
    year: "May 2023 - Sep 2023",
    role: "AI/Machine Learning Intern",
    company: "Icon Events & Holidays",
    description: `Spearheaded data analytics initiatives using Python, SQL and Tableau, generating reports to describe and communicate data insights in a clean manner while solving analytical problems which contributed to a 12% increase in profit. As an intern, I identified AI opportunities while understanding product vision & user engagement strategy.I also led multiple diverse cross functional teams to make data-backed decisions for a new marketing plan and web ads increasing number of incoming clients by 20%.`,
    technologies: ["Tableau", "Predictive analysis", "Strategic Communications", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Local Directory Video Transcription",
    image: project1,
    description:
      "Empowering Insights with ffmpeg and OpenAI's Whisper. Part of Ed-Tech initiaves for Hackatra 2024",
    technologies: ["ffmpeg", "OpenAI Whisper", "Audio Transcription"],
  },
  {
    title: "AI-driven Website Keyword Optimization",
    image: project2,
    description:
      "Developed a system employing NLP techniques, including topical modeling and KeyBERT, to dynamically generate SEO-optimized keywords from web content",
    technologies: ["Natural Language Processing", "Transformers", "Topical Modelling", "LLMs"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Real Time 2D Object Recognition",
    image: project4,
    description:
      "Implemented a system that recognizes an object in real time from a given dataset.",
    technologies: ["C++", "OpenCV", "Computer Vision", "Object Recognition"],
  },
];

export const CONTACT = {
  address: "Boston, MA ",
  phoneNo: "+1 (612)850-0389 ",
  email: "desai.shrey@northeastern.edu",
};
