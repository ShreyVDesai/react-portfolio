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
    title: "Financial Analysis Bot",
    image: project1,
    description:
      "Developed a financial analysis chatbot using ChatGPT’s API for Fortune 500 companies. \n Integrated SEC’s EDGAR API to ensure the latest and accurate information using the companies’ 10-Q reports. \n Implemented sentiment analysis on upper management’s press release for more humanized context.",
    technologies: ["LLMs", "Financial Analysis", "ChatGPT"],
  },
  {
    title: "Audio Descriptive Generation for the Visually Impaired",
    image: project1,
    description:
      "Developed a GenAI tool for the visually impaired, increasing access in educational, artistic and other domains. Created a Flask-based frontend web application and integrated the system with it. Conducted interviews and usability tests with real-world users from non-profits like Enabling Access.",
    technologies: ["LLMs", "Flask", "Access Tool"],
  },
  {
    title: "Onboarding Chatbot for New Employees",
    image: project1,
    description:
      "Developed an onboarding LLM chatbot for new employees for the GMG Summer of Code hackathon. Employed langchain to retrieve references from company policy documents to generate accurate textual answers. Implemented a simplistic user interface facilitating efficient onboarding to reduce the workload of HR employees ",
    technologies: ["RAG", "Langchain", "React"],
  },
  {
    title: "Disaster Tweet Classification",
    image: project1,
    description:
      "Built a classification model to identify disaster tweets using NLP models with TF-IDF and Bag of Words (BoW) features. Applied text preprocessing techniques including tokenization, stemming, lemmatization, and sentiment analysis to improve model performance. Optimized model with a soft Voting Classifier and hyperparameter tuning, achieving high accuracy and robust results through cross-validation.",
    technologies: ["NLP", "Logisitic Regression", "TFIDF", "SVM", "Naïve Bayes"],
  },
  {
    title: "Local Directory Video Transcription",
    image: project1,
    description:
      "Developed a video transcription tool integrating ffmpeg and OpenAI's Whisper for accurate speech-to-text conversion. Submitted project in Hackatra 2024, showing innovation in automating video transcription for educational use cases. Implemented scalable solution with low barrier entry across various platforms using Python.  ",
    technologies: ["ffmpeg", "OpenAI Whisper", "Audio Transcription"],
  },
  {
    title: "AI-driven Website Keyword Optimization",
    image: project2,
    description:
      "Developed a system employing NLP techniques, to generate SEO-optimized keywords from web content using nltk. Integrated a word2vec model to assess semantic alignment between generated & defined keywords for better relevance. Compared multiple models, optimizing website keyword generation using diverse techniques. ",
    technologies: ["BERT", "Topical modelling", "RAKE","Transformers"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Photo Editor in Java",
    image: project3,
    description:
      "Developed a photo editor in Java using design concepts like command design pattern to ensure code reusability. Conducted thorough unit testing using jUnit and documentation, following industry’s best practices. Leveraged Java Swing to implement a modular frontend, building an end-to-end application. ",
    technologies: ["Design Patterns", "jUnit", "jSwing"],
  },
  {
    title: "Pool Table Simulator",
    image: project3,
    description:
      "Leveraged OOP concepts in Java to create a pool table simulator including physics concepts like collisions. Applied Model-View-Controller architecture and double dispatch to maximize code cohesiveness and reusability. Created documentation and conducted regular code reviews, adhering to best software development practices. ",
    technologies: ["Object Oriented Programming", "Model-View-Controller", "Java"],
  },
  {
    title: "Skin Cancer Detection",
    image: project3,
    description:
      "Collaborated in developing an innovative system for skin cancer detection, utilizing the HAM 10000 dataset. Employed CNNs using TensorFlow & transfer learning, optimizing performance through hyperparameter tuning. Implemented an intuitive UI for medical professionals, facilitating efficient analysis of diagnostic results.",
    technologies: ["CNNs", "Image Processing", "Transfer Learning"],
  },
  {
  title: "Augmented Reality using C++",
  image: project3,
  description:
    "Developed a system employing AR techniques for marker-based AR to display objects on a chessboard. Integrated ARUCO and SIFT markers as alternative marker options for the system. Constructed an end-to-end system from camera calibration to feature detection & displaying shape on the system. ",
  technologies: ["Marker-baser AR", "ARUCO", "SIFT"],
  },
  {
    title: "Real Time 2D Object Recognition",
    image: project4,
    description:
      "Constructed a system that recognizes an object in real time from a given training dataset using C++. Employed various techniques such as image segmentation, histogram, edge detection and a distance metric to calculate the most similar image to the given image to classify and recognize the object. Extended the project to recognize emotions from face pictures using python and Haar Cascades.",
    technologies: ["C++", "OpenCV", "Computer Vision", "Object Recognition"],
  },
  {
    title: "Anoma-Li: An anomaly detection library",
    image: project4,
    description:
      "Developed Anoma-Li, an anomaly detection package featuring K-Means, Isolation Forest, K-NN, and MAD algorithms. Engineered a solution for dataset creation, outlier detection, and anomaly visualization in various graph formats. Enhanced capabilities by integrating multiple detection methods, providing users with flexible anomaly detection tools. ",
    technologies: ["KMeans, KNN, Outlier Detection"],
  },
  {
    title: "Forest Fire Detection using CNNs",
    image: project4,
    description:
      "Developed a system employing CNNs to raise an alarm if a given image of a forest has a forest fire. Performed hyperparameter tuning and data augmentation to eliminate bias and choose a ‘best fit’ model. Incorporated early stopping and dropout layers to prevent overfitting.",
    technologies: ["CNNs", "Hyperparameter tuning", "Early Stopping"],
  },
  {
    title: "Wind Energy Prediction",
    image: project4,
    description:
      "Engineered advanced ML regressor algorithms, time series and LSTM models for precise wind energy forecasting, significantly enhancing power grid stability and reliability. Authored and presented a research paper at AIST 2022, published by IEEE, demonstrating cutting-edge time series forecasting techniques in renewable energy. Leveraged Python to develop AI-driven solutions for predictive wind power analysis, enabling efficient power balancing and proactive energy management. ",
    technologies: ["LSTMs", "Time Series Analysis", "Regression", "Data Cleaning"],
  },
];

export const CONTACT = {
  address: "Boston, MA ",
  phoneNo: "+1 (612)850-0389 ",
  email: "desai.shrey@northeastern.edu",
};
