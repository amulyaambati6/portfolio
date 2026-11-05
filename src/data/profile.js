// All portfolio content lives here, so the site can be updated without touching components.
// Only add facts that are true and verifiable. Leave a field empty ("" or []) to hide it.

import covidGrowth from "../assets/projects/covid-dashboard.jpg";
import covidHome from "../assets/projects/covid-home.jpg";
import covidCompare from "../assets/projects/covid-compare.jpg";
import covidFindings from "../assets/projects/covid-findings.jpg";
import covidPolicy from "../assets/projects/covid-policy.jpg";
import peerDashboard from "../assets/projects/peer-tutoring.jpg";
import peerLogin from "../assets/projects/peer-login.jpg";
import peerMentors from "../assets/projects/peer-mentors.jpg";
import peerBooking from "../assets/projects/peer-booking.jpg";
import peerDoubts from "../assets/projects/peer-doubts.jpg";
import passwordMedium from "../assets/projects/password-checker.jpg";
import passwordWeak from "../assets/projects/password-weak.jpg";
import passwordStrong from "../assets/projects/password-strong.jpg";

export const profile = {
  name: "Amulya Ambati",
  firstName: "Amulya",
  lastName: "Ambati",
  positioning: [
    "Computer Science",
    "Data Analytics",
    "Artificial Intelligence",
    "Digital Technology",
  ],
  location: "Nice, France",
  availability: "Available for a 6-month internship · March–August 2027",
  headline: "I turn messy data into clear, interactive tools people can explore.",
  intro:
    "Computer Science Engineering student at Mahindra University, on the Digital Tech Year at Centrale Méditerranée in Nice. Looking for an internship in France in data analytics, applied AI or digital technology.",

  email: "amulyaambati6@gmail.com",
  github: "https://github.com/amulyaambati6",
  linkedin: "https://www.linkedin.com/in/amulya-ambati/",
  // Put your CV in /public with this file name. Until it exists, the site
  // shows "Request my CV by email" instead of a broken download.
  resumeFile: "Amulya_Ambati_CV.pdf",
};

// Short, true figures shown under the hero.
export const stats = [
  { value: "7", label: "countries compared in my COVID-19 economics dashboard" },
  { value: "9", label: "interactive pages in that dashboard, live on Streamlit" },
  { value: "6", label: "months of availability, March to August 2027" },
  { value: "4", label: "languages: English, Hindi, Telugu and French" },
];

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
    { name: "French", level: "Elementary (A2)" },
  ],
};

export const education = [
  {
    institution: "Centrale Méditerranée",
    place: "Nice, France",
    programme: "Digital Tech Year (Bac+4 level)",
    period: "Sep 2026 – present",
    details: [
      "Project-based year focused on digital technology, data and teamwork.",
      "Internship agreement (convention de stage) provided by the school.",
      "Team project: COVID-19 Global Economic Impact Dashboard.",
    ],
  },
  {
    institution: "Mahindra University",
    place: "Hyderabad, India",
    programme: "B.E. Computer Science Engineering · CGPA 7.49/10",
    period: "Aug 2023 – expected 2027",
    details: [
      "Relevant coursework: Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Optimization Techniques for AI, Deep Neural Networks, Quantum Computing & Quantum Machine Learning.",
    ],
  },
  {
    institution: "Kendriya Vidyalaya, NTPC Ramagundam",
    place: "Telangana, India",
    programme: "CBSE Class XII · 90.2%",
    period: "2022 – 2023",
    details: [],
  },
];

export const skills = [
  { group: "Programming", items: ["Python", "Java", "C / C++", "JavaScript", "SQL"] },
  { group: "Data & Analytics", items: ["Pandas", "Plotly", "Streamlit", "SciPy", "MySQL"] },
  { group: "Web Development", items: ["HTML", "CSS", "JavaScript", "React"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code"] },
  {
    group: "Digital Marketing & Design",
    items: ["Meta Ads Manager", "Content planning", "Social media campaigns", "Canva"],
  },
];

export const projects = [
  {
    slug: "covid-dashboard",
    title: "COVID-19 Global Economic Impact Dashboard",
    short: "COVID-19 Economic Impact",
    tagline: "Data storytelling · Team of 4 · Centrale Méditerranée",
    image: covidGrowth,
    imageAlt:
      "Economic Growth page of the COVID-19 dashboard, with GDP growth KPI cards and a line chart per country",
    summary:
      "A multi-page interactive dashboard on how COVID-19 affected the economies of seven countries, combining World Bank indicators with pandemic and policy data.",
    tech: ["Python", "Pandas", "Plotly", "Streamlit", "SciPy", "MySQL"],
    repo: "https://github.com/amulyaambati6/covid-economic-impact-dashboard",
    live: "https://covid-economic-impact-dashboard.streamlit.app",
    caseStudy: {
      meta: [
        { label: "Role", value: "Visualisation, design, testing & integration" },
        { label: "Team", value: "4 students" },
        { label: "When", value: "October 2026" },
        { label: "Context", value: "Data storytelling project, Centrale Méditerranée" },
      ],
      question: "How did COVID-19 impact the global economy?",
      overview: [
        "The dashboard compares seven countries (the United States, India, France, China, Brazil, Germany and Rwanda) using World Bank GDP growth, unemployment and inflation for 2018–2024, alongside COVID-19 cases, deaths and government-response stringency for 2020–2022.",
        "The brief suggested Plotly Dash; the team got approval to build it with Streamlit instead, with every chart an interactive Plotly figure. It is deployed on Streamlit Community Cloud.",
      ],
      contribution: [
        "Visual design and chart styling across the app.",
        "Integrating the team's data preparation, analysis and page work into one app.",
        "Testing: the project's automated checks cover app pages, filters, analysis, processed data and findings.",
        "The bonus MySQL database: schema, load scripts, example queries and an ER diagram.",
      ],
      process: [
        { step: "Collect", text: "World Bank indicators, COVID-19 cases and deaths, government stringency index." },
        { step: "Clean & merge", text: "Coverage checks and yearly / monthly merged datasets for the seven countries." },
        { step: "Analyse", text: "Exploratory analysis, trends, correlations with a multiple-testing correction." },
        { step: "Visualise", text: "Nine pages with shared filters and fixed country colours on every chart." },
        { step: "Test & ship", text: "Automated tests, MySQL bonus layer, deployment to Streamlit Cloud." },
      ],
      features: [
        "Pages for economic growth, labour market, inflation, pandemic & policy response, country comparisons and key findings",
        "Country and year filters that persist across pages",
        "Each country keeps the same colour and marker on every chart",
        "Interpretation notes and data limitations on every page",
      ],
      findings: [
        { figure: "−3.3%", text: "Median GDP growth in 2020, down from 2.6% in 2019, before rebounding to 6.9% in 2021." },
        { figure: "6 of 7", text: "economies contracted in 2020; China kept growing." },
        { figure: "+4.4 pts", text: "the largest rise in unemployment from 2019 to 2020, in the United States." },
        { figure: "6.9%", text: "median inflation in 2022: prices rose fastest after the shock, not during it." },
      ],
      findingsNote:
        "Descriptive results for these seven countries only, not causal estimates. Figures from the project's findings summary.",
      gallery: [
        { src: covidHome, alt: "Dashboard home page with the research question and navigation cards" },
        { src: covidFindings, alt: "Key Findings page summarising results by theme" },
        { src: covidCompare, alt: "Country Comparisons page ranking GDP growth in 2020" },
        { src: covidPolicy, alt: "Pandemic & Policy Response page with deaths and stringency figures" },
      ],
    },
  },
  {
    slug: "peer-tutoring",
    title: "Peer-to-Peer Tutoring Platform",
    short: "Peer Tutoring Platform",
    tagline: "Web platform prototype · Team project · Frontend",
    image: peerDashboard,
    imageAlt:
      "Dashboard of the tutoring platform showing upcoming sessions, mentor picks and a points card",
    summary:
      "A web platform concept that connects students with peer mentors for tutoring sessions and doubt solving. I worked on the multi-page frontend prototype.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/amulyaambati6/Peer2Peer-Platform",
    live: "",
    caseStudy: {
      meta: [
        { label: "Role", value: "Frontend development" },
        { label: "Team", value: "Student team, split into frontend and backend" },
        { label: "When", value: "Jan – June 2026" },
        { label: "Stack", value: "HTML, CSS, JavaScript" },
      ],
      question: "How can students find the right peer mentor and get unstuck faster?",
      overview: [
        "The platform idea connects students with peer mentors for one-to-one or group sessions, plus a shared board for posting and answering doubts.",
        "The frontend is a multi-page prototype that walks through the main student journeys with sample data. A teammate added an Express and MongoDB endpoint for booking sessions.",
      ],
      contribution: [
        "Frontend development of the prototype's pages and interactions.",
      ],
      process: [
        { step: "Sign in", text: "Login screen with a choice between the student and mentor role." },
        { step: "Dashboard", text: "Upcoming sessions, mentor picks, points and tabs for sessions, doubts and learning path." },
        { step: "Find", text: "Mentor search with subject, rating and sort filters." },
        { step: "Book", text: "Session booking form: date, time, duration, type, subject and mentor." },
        { step: "Ask", text: "Doubt board to browse, search and answer questions." },
      ],
      features: [
        "Dark mode with a saved preference",
        "Toast notifications and a messaging widget UI",
        "Avatar menu, tabs and keyboard shortcuts",
        "Consistent component styling across six pages",
      ],
      scopeNote:
        "The project's planning document describes a larger roadmap (payments, recommendations, mobile). This case study covers only what is implemented in the repository.",
      gallery: [
        { src: peerLogin, alt: "Login page with student and mentor role selection" },
        { src: peerMentors, alt: "Find Mentors page with filters and mentor cards" },
        { src: peerBooking, alt: "Book a Session form" },
        { src: peerDoubts, alt: "Doubt Board with questions and answer buttons" },
      ],
    },
  },
  {
    slug: "password-checker",
    title: "Password Strength Checker",
    short: "Password Strength Checker",
    tagline: "Browser-based security tool",
    image: passwordMedium,
    imageAlt:
      "Password Strength Checker with a strength bar, requirement checklist and estimated crack time",
    summary:
      "Real-time feedback while a password is typed: a strength score, pattern checks, a brute-force crack-time estimate and suggestions to improve it.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/amulyaambati6/Password-Strength-Checker",
    live: "",
    caseStudy: {
      meta: [
        { label: "Type", value: "Client-side web tool" },
        { label: "Stack", value: "HTML, CSS, JavaScript" },
        { label: "Runs", value: "Entirely in the browser" },
      ],
      question: "Can a password checker explain why a password is weak, not just say it?",
      overview: [
        "As you type, the checker scores the password from 0 to 100, ticks off each requirement, estimates how long a brute-force attack would take, and lists concrete suggestions.",
        "Nothing is sent anywhere: all checks run in the browser.",
      ],
      contribution: [],
      process: [
        { step: "Requirements", text: "Length ≥ 8, uppercase, lowercase, digit, special character: 20 points each." },
        { step: "Length bonus", text: "+10 at 12 characters and another +10 at 16." },
        { step: "Pattern penalties", text: "−10 for letters only, digits only, or a character repeated 3+ times." },
        { step: "Crack time", text: "Character-set size raised to the length, at a billion guesses per second." },
        { step: "Feedback", text: "Weak / Okay / Good / Perfect, plus targeted suggestions." },
      ],
      features: [
        "Live requirement checklist",
        "Colour-coded strength meter",
        "Show / hide password toggle",
        "Dismissible suggestions panel",
      ],
      demo: true,
      gallery: [
        { src: passwordWeak, alt: "Checker showing a weak password with suggestions" },
        { src: passwordStrong, alt: "Checker showing a strong password with all requirements met" },
      ],
    },
  },
];

// Grouped experience. Only roles you can stand behind; add new ones in the
// same format and the section updates automatically. "points" can be empty.
export const experience = [
  {
    group: "Work experience",
    items: [
      {
        title: "Marketing Intern (part-time)",
        org: "Joy International School · India",
        period: "Dec 2025 – Feb 2026",
        points: [
          "Supported brand development and outreach.",
          "Worked with Meta Ads Manager campaigns and reviewed performance insights to inform marketing decisions.",
        ],
      },
      {
        title: "Digital Marketing Intern",
        org: "DigiWok Media · India",
        period: "Jun – Jul 2025",
        points: [
          "Wrote blog content and contributed to social media campaigns.",
          "Supported content planning, ideation and execution.",
        ],
      },
    ],
  },
  {
    group: "Leadership & activities",
    items: [
      {
        title: "Social Media Head",
        org: "7 Screens Media Club",
        period: "2025 – present",
        points: [],
      },
      {
        title: "Social Media Head & Organising Committee Member",
        org: "French Club · Etincelle Fest",
        period: "2024 – 2025",
        points: [],
      },
      {
        title: "Marketing & Social Media Coordinator",
        org: "Erudite Literature Club · Quill Fest",
        period: "2024 – 2025",
        points: [],
      },
    ],
  },
];

export const navLinks = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
