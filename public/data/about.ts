export const aboutMe = {
  description: [
    "CodeX is a coding academy offering tailored courses to help you master programming and thrive in the tech world.",
  ],
  cvPath: "/assets/CodeX Arduino Course ..pdf", // Upload your own CV in /public/assets as CV.pdf
  cvFileNameAfterDownload: "CodeX Course.pdf", // This is what the name of the file is going to be when downloaded
};

export const technicalSkills: Record<string, string[]> = {
  // You can rename the type of skills, it's dynamically rendered. eg: You can change "Programming Languages" -> to just "Languages"
  "Programming Languages": ["JavaScript", "TypeScript", "C#", "C++"],
  "Frontend Development": [
    "React",
    "Next.js",
    "Angular",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind",
    "Chakra UI",
    "Redux Toolkit",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    ".NET",
    "MongoDB",
    "Mongoose",
    "SQL",
    "MySQL",
  ],
  "UI/UX Design": [
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Miro",
    "MockFlow",
  ],
  "Tools & Technologies": [
    "Git",
    "GitHub",
    "Agile (Scrum, Jira, Kanban)",
    "Trello",
  ],
  "Soft Skills": [
    "Presentation",
    "Communication",
    "Professional Demeanor",
    "Leadership",
    "Mentorship",
  ],
};
