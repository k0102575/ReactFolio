import emoji from "react-easy-emoji";

export const greeting = {
  username: "김승민",
  title: "안녕하세요 김승민입니다.",
  subTitle: "",
  role: "Frontend Developer",
  resumeLink: "",
  view: true,
};

export const socialMediaLinks = {
  github: "https://github.com/k0102575",
  linkedin: "www.linkedin.com/in/k0102575",
  email: "k0102575.dev@gmail.com",
};

export const skills = {
  title: emoji("I Can Do ⚡"),
  subTitle: "subtitle for skill",
  describeSkills: [
    emoji("✔ HTML5, Javascript, CSS3"),
    emoji("✔ React"),
    emoji("✔ Graphql"),
    emoji("✔ Amazon AWS"),
    emoji("✔ Spring Boot"),
    emoji("✔ Jquery"),
    emoji("✔ Mysql"),
  ],
  view: true,
};

export const experience = {
  title: "Work Experience",
  lists: [
    {
      date: "2020.05~",
      company: "energyX",
      role: "Frontend Developer",
    },
    {
      date: "2020.02~2020.04",
      company: "코디더매니저",
      role: "Backend Developer",
    },
    {
      date: "2018.03~2019.10",
      company: "Triplet",
      role: "Web Developer",
    },
  ],
  view: true,
};

export const openSourceProjects = {
  title: emoji("Open Source Projects 💻"),
  view: false,
};

export const projects = {
  title: emoji("Projects 💻"),
  subTitle: "",
  lists: [
    {
      title: "스터디",
      desc: "개인 스터디",
      url: "https://github.com/rare-idiots/study/issues?q=",
    },
    {
      title: "ARMU",
      desc: "학원이수 프로젝트",
      url: "https://github.com/k0102575/ARMU",
    },
  ],
  view: true,
};

export const achievements = {
  title: emoji("Achievements And Certifications 🏆"),
  subTitle: "subtitle for achievement",
  lists: [
    {
      img: require("./assets/sad-icon.png"),
      alt: "I'm sad..",
      title: "There is no Achievement...😥",
      desc: "I'll try harder!",
    },
    {
      img: require("./assets/sad-icon.png"),
      alt: "I'm sad..",
      title: "There is no Certification...😥",
      desc: "I'll try harder!",
    },
  ],
  view: false,
};

export const blogs = {
  title: emoji("My Blogs 📰"),
  subTitle: "",
  lists: [
    {
      title: "개인 블로그",
      desc: "",
      url: "https://k0102575.github.io/",
    },
  ],
  view: true,
};

export const contactInfo = {
  title: "Contact To Me! 📞",
  subTitle: "",
  introduce: "",
  view: true,
};
