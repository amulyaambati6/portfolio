// All portfolio content lives here, so the site can be updated without touching components.
// Only add facts that are true and verifiable. Leave a field empty ("" or []) to hide it.

import covidShot from "../assets/projects/covid-dashboard.jpg";
import peerShot from "../assets/projects/peer-tutoring.jpg";
import passwordShot from "../assets/projects/password-checker.jpg";

export const profile = {
  name: "Amulya Ambati",
  shortName: "Amulya",
  positioning: [
    "Computer Science",
    "Data Analytics",
    "Artificial Intelligence",
    "Digital Technology",
  ],
  location: "Nice, France",
  availability: "Open to technical internships from March 2027",
  intro:
    "Computer Science Engineering student at Mahindra University, currently on the Digital Tech Year at Centrale Méditerranée in Nice. I like turning data into clear, interactive tools that help people make decisions.",

  email: "amulyaambati6@gmail.com",
  github: "https://github.com/amulyaambati6",
  // TODO: add your LinkedIn profile URL, e.g. "https://www.linkedin.com/in/your-handle/"
  linkedin: "",
  // Put your CV in /public with this file name. Until it exists, the site
  // shows "CV available on request" instead of a broken download.
  resumeFile: "Amulya_Ambati_CV.pdf",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science Engineering student at Mahindra University in India, spending 2026–2027 on the Digital Tech Year at Centrale Méditerranée in Nice, France.",
    "My interests sit where computer science meets real decisions: data analytics and data processing, applied artificial intelligence, data visualisation and interactive dashboards, and technology that solves business problems.",
    "I enjoy the part of a project where messy information becomes something people can explore, and I care about making that experience clear and well designed.",
  ],
  interests: [
    "Applied AI",
    "Data analytics",
    "Data processing",
    "Data visualisation",
    "Interactive dashboards",
    "Business-oriented technology",
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Telugu", level: "Native" },
    { name: "French", level: "Beginner (A1)" },
  ],
};

export const education = [
  {
    institution: "Centrale Méditerranée",
    place: "Nice, France",
    programme: "Digital Tech Year",
    period: "2026 – 2027",
    details: [
      "Project-based year focused on digital technology, data and teamwork.",
      "Team project: COVID-19 Global Economic Impact Dashboard (see Projects).",
    ],
  },
  {
    institution: "Mahindra University",
    place: "Hyderabad, India",
    programme: "Bachelor's degree, Computer Science Engineering",
    period: "Expected 2027",
    details: ["Relevant coursework: Deep Neural Networks."],
  },
];

export const skills = [
  {
    group: "Programming",
    items: ["Python", "Java", "C / C++", "JavaScript", "SQL"],
  },
  {
    group: "Data & Analytics",
    items: ["Pandas", "Plotly", "Streamlit", "SciPy", "MySQL"],
  },
  {
    group: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    group: "Digital & Design",
    items: ["Canva", "Meta Ads Manager", "Content creation"],
  },
];

export const projects = [
  {
    title: "COVID-19 Global Economic Impact Dashboard",
    tagline: "Multi-page interactive dashboard · Team of 4 · Centrale Méditerranée",
    image: covidShot,
    imageAlt:
      "Economic Growth page of the COVID-19 dashboard, with GDP growth KPI cards and a line chart per country",
    description:
      "How did COVID-19 affect the global economy? The dashboard compares seven countries (United States, India, France, China, Brazil, Germany, Rwanda) using World Bank GDP growth, unemployment and inflation alongside COVID-19 cases, deaths and government-response stringency.",
    highlights: [
      "Pages for economic growth, labour market, inflation, pandemic & policy response, country comparisons and key findings",
      "Shared country and year filters, consistent country colours across every chart",
      "Exploratory correlations with multiple-testing correction, and stated limitations",
      "Bonus MySQL schema and load scripts; automated tests for data and app pages",
    ],
    role: "My role: visualisation, design, testing and integration.",
    tech: ["Python", "Pandas", "Plotly", "Streamlit", "SciPy", "MySQL"],
    repo: "https://github.com/amulyaambati6/covid-economic-impact-dashboard",
    live: "https://covid-economic-impact-dashboard.streamlit.app",
  },
  {
    title: "Peer-to-Peer Tutoring Platform",
    tagline: "Team project · Frontend",
    image: peerShot,
    imageAlt:
      "Dashboard of the tutoring platform showing upcoming sessions, mentor picks and a points card",
    description:
      "A web platform concept that connects students with peer mentors. The frontend is a multi-page prototype covering the main student journeys.",
    highlights: [
      "Pages for login with role selection, dashboard, mentor search, session booking, all sessions and a doubt board",
      "Dark mode with a saved preference, toast notifications and a messaging widget UI",
      "A teammate added an Express and MongoDB endpoint for booking sessions",
    ],
    role: "My role: frontend development.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/amulyaambati6/Peer2Peer-Platform",
    live: "",
  },
  {
    title: "Password Strength Checker",
    tagline: "Browser-based security tool",
    image: passwordShot,
    imageAlt:
      "Password Strength Checker with a strength bar, requirement checklist and estimated crack time",
    description:
      "Gives real-time feedback while a password is typed, scoring it and explaining how to make it stronger.",
    highlights: [
      "Checks length, upper and lower case, digits and special characters",
      "Pattern detection: penalises letters-only, digits-only and repeated characters",
      "Estimates brute-force crack time from character-set size and length",
      "Strength meter, suggestions list and show/hide password toggle",
    ],
    role: "",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/amulyaambati6/Password-Strength-Checker",
    live: "",
  },
];

// Only roles you can stand behind. Add internships, societies, volunteering
// or events here in the same format; the section updates automatically.
export const experience = [
  {
    title: "Visualisation, Design, Testing & Integration",
    org: "COVID-19 dashboard team (4 members), Centrale Méditerranée",
    period: "Oct 2026",
    points: [
      "Owned the dashboard's visual design and chart styling.",
      "Integrated team members' data, analysis and page work into one app and tested it.",
      "Added the bonus MySQL database layer.",
    ],
  },
  {
    title: "Frontend Developer",
    org: "Peer-to-peer tutoring platform team",
    period: "2026",
    points: [
      "Contributed to the multi-page frontend prototype within a team that split frontend and backend work.",
    ],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
