import leader from "../assets/leadership-svgrepo-com.svg";
import problemSolving from "../assets/solution-bulb-concept-svgrepo-com.svg";
import upChart from "../assets/line-chart-svgrepo-com.svg";
import goal from "../assets/aim-svgrepo-com.svg";
import chartGoal from "../assets/analytics-svgrepo-com (1).svg";

export const experiences = [
  {
    title: "Principal Software Engineer",
    company: "mPokket",
    bg: { bg: "#000", primary: "#FFFFFF", secondary: "#CCCCCC" },
    // icon: "👨‍🏫", // Represents leadership and technical mentoring.
    icon: leader,
    highlights: [
      "Pioneered Micro Frontend architecture with Single SPA for modular UI.",
      "Published TypeScript-supported UI components on NPM for organization-wide use.",
      "Defined coding standards and streamlined Merge Request processes.",
      "Led UI team in cross-functional collaboration and workflow improvements.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Aerchain (Agillos E-Commerce Pvt Ltd)",
    bg: "white",
    // icon: "📚", // Represents building and managing reusable libraries.
    icon: problemSolving,
    bg: { bg: "#fff", primary: "#000000", secondary: "#CCCCCC" },
    highlights: [
      "Developed a scalable, reusable component library for product consistency.",
      "Improved code quality through rigorous reviews and best practices.",
      "Spearheaded complex UI solutions, mentoring junior developers.",
      "Actively involved in recruitment, conducting technical interviews.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Infilect Technologies Pvt Ltd",

    bg: { bg: "#000", primary: "#FFFFFF", secondary: "#CCCCCC" },
    // icon: "📊", // Represents data-focused development and performance.
    icon: upChart,
    highlights: [
      "Built high-performance React data-visualizer for ML projects.",
      "Boosted product performance by 70% through optimization.",
      "Implemented analytics across platforms for better insights.",
      "Integrated ELK stack for real-time monitoring and debugging.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Innoventes Technologies Pvt Ltd (Client: PhonePe)",
    company: "Digital Fusion Trips Pvt Ltd",
    bg: { bg: "#000", primary: "#FFFFFF", secondary: "#CCCCCC" },

    width: 38,
    icon: chartGoal,
    highlights: [
      "Developed REST APIs in Node.js for seamless backend interactions.",
      "Built reusable UI components for a consistent user experience.",
      "Automated CI/CD with Jenkins and Docker, improving deployment.",
    ],
  },
  {
    title: "UI/UX Developer",
    bg: { bg: "#fff", primary: "#000000", secondary: "#CCCCCC" },
    // icon: "🎨", // Represents UI/UX design and creativity.
    icon: goal,
    highlights: [
      "Conducted user research to create detailed personas.",
      "Designed engaging UI in React.js, focusing on usability.",
      "Enhanced visuals with tools like Photoshop and Illustrator.",
    ],
  },
];
