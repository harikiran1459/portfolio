import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am an enthusiastic developer with a passion for problem-solving and creating efficient, user-friendly web applications. With experience in building projects using React, Tailwind CSS, and Framer Motion, I specialize in crafting dynamic front-end interfaces. My back-end expertise includes working on machine learning projects and leveraging technologies like Python, NumPy, and Pandas. I strive to apply my skills to deliver impactful solutions that enhance user experiences and drive innovation.`;

export const ABOUT_TEXT = `I am a motivated and skilled developer with a strong foundation in building efficient and user-centric web applications. My experience includes working with modern technologies such as React, Express, Framer Motion, Tailwind CSS, and Node.js. I have honed my skills through hands-on projects, including developing a Tic-Tac-toe game with real-time chat application and a dynamic portfolio website. My journey in development reflects a commitment to learning and tackling challenges with a problem-solving mindset. I thrive in collaborative settings and take pride in delivering impactful solutions. Beyond coding, I enjoy exploring emerging technologies and continuously enhancing my expertise.`;

export const EXPERIENCES = [
  {
    year: "Jun 2023 - Jul 2023",
    role: "Intern",
    company: "Skillvertex",
    description: `Designed and implemented a machine learning model to classify emails as spam or not spam. Preprocessed large datasets by tokenizing, removing stopwords, and vectorizing text data. Built an ensemble model combining multiple sequential models, improving classification accuracy`,
    technologies: ["Numpy", "Tensorflow", "Keras", "Pandas"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Cervical Spine Fracture Detection",
    image: project1,
    description:
      " Worked on Image classification and developed a CNN model to predict spine fractures from CT Scans. Introduced data preprocessing techniques like rotation, resizing, cropping to help reduce the noise. Conducted evaluation using metrics such as precision and accuracy to assess the model’s performance.",
    technologies: ["Numpy", "Tensorflow", "Keras", "Pandas", "Python"],
  },
  {
    title: " Scene Text Recognition",
    image: project2,
    description:
      " Developed and implemented a CRNN model, to effectively recognize and transcribe text in diverse scenes. Conducted evaluations of the model’s performance, using metrics such as WER and CER to evaluate its effectiveness in recognizing text. Demonstrated proficiency in implementing state-of-the-art models like Puigcerver and FLOR to significantly boost the accuracy.",
    technologies: ["Numpy", "Tensorflow", "Keras", "Pandas", "Python"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "framer-motion"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Bank Colony, Tadepalligudem, India-534101 ",
  phoneNo: "+91 93909 91459 ",
  email: "harikiran05271@gmail.com",
};
