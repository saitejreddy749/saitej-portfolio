// Edit this file to update the public content of the portfolio.
// Project descriptions are based on Saitej's CV; add links only after verifying them.
export const profile = {
  name: 'Saitej Akavaram',
  initials: 'SA',
  location: 'Invercargill, New Zealand',
  email: 'saitejakavaram@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sai-tej-akavaram-00594132b/',
  photo: 'profile-photo.png',
  tagline: 'I build useful software from complex ideas.',
  introduction:
    'I’m an Information Technology postgraduate working across software development, applied AI and data-driven products. I enjoy turning unclear problems into practical, testable tools.',
  about:
    'My work spans React interfaces, APIs, intelligent document search and data workflows. I care about making a system understandable to the people who use it, and maintainable for the people who build it.',
};

export const focusAreas = [
  {
    number: '01',
    title: 'Build the product',
    description: 'Connect clean interfaces to useful APIs and reliable data flows.',
  },
  {
    number: '02',
    title: 'Apply AI carefully',
    description: 'Explore retrieval, matching and prediction where they solve a real problem.',
  },
  {
    number: '03',
    title: 'Test the outcome',
    description: 'Check quality, edge cases and performance before calling a prototype done.',
  },
];

export const projects = [
  {
    number: '01',
    label: 'Applied AI · Document search',
    title: 'AI-Powered Document Knowledge Assistant',
    description:
      'A document search and question-answering application designed to return answers with source links. The project brings together a React interface, API workflows, document ingestion and vector search.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Azure OpenAI', 'PostgreSQL / pgvector'],
  },
  {
    number: '02',
    label: 'Data engineering · Matching',
    title: 'Automotive Parts Catalogue Intelligence',
    description:
      'A workflow for cleaning supplier catalogues, identifying duplicate parts and matching vehicle fitment. An evaluation dashboard compares data and model quality using error analysis and retrieval metrics.',
    technologies: ['React', 'Python', 'FastAPI', 'scikit-learn', 'PostgreSQL / pgvector'],
  },
  {
    number: '03',
    label: 'Academic project · IoT',
    title: 'Electric Mobility Recharge Management',
    description:
      'An academic charging management system exploring IoT monitoring, charging-demand prediction and a cloud-connected dashboard to make usage and availability easier to understand.',
    technologies: ['IoT', 'Machine learning concepts', 'Data dashboards'],
  },
  {
    number: '04',
    label: 'Campus project · Web app',
    title: 'Student Attendance Management System',
    description:
      'An internal web application for faculty to record class and lab attendance. Daily reports show each student’s attendance rate and when future absences could affect eligibility.',
    technologies: ['Web application', 'Reporting', 'Data management'],
  },
];

export const skills = [
  { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'] },
  { title: 'Web & APIs', items: ['React', 'Node.js', 'Express', 'FastAPI', 'REST APIs'] },
  { title: 'AI & Data', items: ['Azure OpenAI', 'RAG', 'Embeddings', 'PostgreSQL', 'pgvector', 'scikit-learn'] },
  { title: 'Cloud & Delivery', items: ['Azure', 'Docker', 'GitHub Actions', 'CI/CD', 'Testing'] },
];

export const education = [
  {
    degree: 'Master of Information Technology',
    school: 'Southern Institute of Technology',
    detail: 'Invercargill, New Zealand',
    date: 'Expected December 2027',
  },
  {
    degree: 'Bachelor of Technology · Computer Science and Engineering',
    school: 'Sri Indu College of Engineering and Technology',
    detail: 'Hyderabad, India',
    date: 'Completed April 2025',
  },
];
