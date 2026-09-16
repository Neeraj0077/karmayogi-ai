import type { Competency, Course, Question } from "../types";

export const competencies: Competency[] = [
  {
    name: "Statistical Analysis",
    current: 82,
    required: 85,
    category: "Statistical",
  },
  {
    name: "Survey Design",
    current: 76,
    required: 80,
    category: "Statistical",
  },
  {
    name: "Python",
    current: 42,
    required: 75,
    category: "Technical",
  },
  {
    name: "SQL",
    current: 48,
    required: 70,
    category: "Technical",
  },
  {
    name: "AI / ML",
    current: 31,
    required: 60,
    category: "Technical",
  },
  {
    name: "GIS",
    current: 45,
    required: 65,
    category: "Technical",
  },
  {
    name: "Data Visualization",
    current: 68,
    required: 75,
    category: "Technical",
  },
  {
    name: "Cybersecurity",
    current: 55,
    required: 65,
    category: "Digital Governance",
  },
];

export const courses: Course[] = [
  {
    id: 1,
    title: "Python for Data Analysis",
    provider: "iGOT Karmayogi",
    duration: "8 Hours",
    level: "Intermediate",
    match: 94,
    skill: "Python",
    description:
      "Build practical Python skills for statistical and data analysis.",
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    provider: "iGOT Karmayogi",
    duration: "12 Hours",
    level: "Intermediate",
    match: 91,
    skill: "AI / ML",
    description:
      "Learn fundamental machine learning concepts and applications.",
  },
  {
    id: 3,
    title: "SQL for Data Management",
    provider: "iGOT Karmayogi",
    duration: "6 Hours",
    level: "Beginner",
    match: 87,
    skill: "SQL",
    description:
      "Learn SQL for efficient government data management and analysis.",
  },
  {
    id: 4,
    title: "GIS for Official Statistics",
    provider: "NSSTA",
    duration: "5 Days",
    level: "Intermediate",
    match: 82,
    skill: "GIS",
    description:
      "Understand spatial data and GIS applications in official statistics.",
  },
];

export const questions: Question[] = [
  {
    id: 1,
    question:
      "Which sampling technique divides a population into homogeneous subgroups?",
    options: [
      "Simple Random Sampling",
      "Stratified Sampling",
      "Cluster Sampling",
      "Systematic Sampling",
    ],
    answer: 1,
    explanation:
      "Stratified sampling divides the population into homogeneous groups called strata.",
  },
  {
    id: 2,
    question: "Which language is widely used for statistical data analysis?",
    options: ["HTML", "Python", "CSS", "XML"],
    answer: 1,
    explanation:
      "Python is widely used for data analysis, statistics and machine learning.",
  },
  {
    id: 3,
    question: "What does SQL primarily help with?",
    options: [
      "Image editing",
      "Database management",
      "Video editing",
      "Graphic design",
    ],
    answer: 1,
    explanation:
      "SQL is primarily used to query, manage and manipulate relational databases.",
  },
  {
    id: 4,
    question: "Which technology is commonly used for spatial data analysis?",
    options: ["GIS", "SMTP", "HTML", "FTP"],
    answer: 0,
    explanation:
      "GIS is specifically designed for storing, analyzing and visualizing geographic information.",
  },
  {
    id: 5,
    question: "AI stands for:",
    options: [
      "Automated Internet",
      "Artificial Intelligence",
      "Advanced Integration",
      "Applied Information",
    ],
    answer: 1,
    explanation:
      "AI stands for Artificial Intelligence.",
  },
];