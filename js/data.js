/* ==========================================================================
   data.js — เก็บข้อมูล Portfolio ทั้งหมดไว้ที่เดียว แก้ตรงนี้ที่เดียวพอ
   ========================================================================== */

const profileData = {
  fullName: "ศราวุฒิ ชินภักดี",
  firstName: "ศราวุฒิ",
  lastName: "ชินภักดี",
  nickname: "เจเจ",
  age: 20,
  roles: [
    "IT Student",
    "Aspiring Full-Stack Developer",
    "Lifelong Learner",
  ],
  education: "ปวส. 1",
  major: "เทคโนโลยีสารสนเทศ",
  majorEn: "Information Technology",
  school: "วิทยาลัยอาชีวศึกษาร้อยเอ็ด",
  careerGoal: "Full-Stack Developer",
  motto: "พรุ่งนี้ต้องเก่งกว่าเมื่อวาน",
  heroDescription:
    "ผมกำลังเรียนรู้และพัฒนาทักษะด้าน Programming, Web Development และ AI เพื่อก้าวไปสู่การเป็น Full-Stack Developer",
  aboutText:
    "ผมเป็นนักศึกษาเทคโนโลยีสารสนเทศที่มีความสนใจด้านการเขียนโปรแกรม การพัฒนาเว็บไซต์ และเทคโนโลยี AI ผมชอบเรียนรู้สิ่งใหม่ ๆ และนำความรู้มาสร้างเป็นโปรเจกต์จริง",
  goalText:
    "เป้าหมายของผมคือการพัฒนาทักษะให้สามารถสร้าง Web Application ได้ตั้งแต่ Frontend ไปจนถึง Backend, Database และ Deployment",
  profileImage: "assets/profile.jpg",
};

const journeySteps = [
  "student",
  "learning",
  "building_projects",
  "improving_skills",
  "full_stack_developer",
];

const socialLinks = [
  { name: "Instagram", handle: "j4njayy_", url: "https://instagram.com/j4njayy_", icon: "instagram" },
  { name: "Facebook", handle: "Sarawut", url: "https://facebook.com/sarawutJjx", icon: "facebook" },
  { name: "GitHub", handle: "sarawutchinpakdee-prog", url: "https://github.com/sarawutchinpakdee-prog", icon: "github" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

/* icon = key ที่ map ไปยัง SVG ใน script.js (ICONS) */
const skillGroups = [
  {
    category: "Frontend",
    icon: "layout",
    items: [
      { name: "HTML", icon: "file" },
      { name: "CSS", icon: "palette" },
      { name: "JavaScript", icon: "braces" },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    items: [
      { name: "Python", icon: "terminal" },
      { name: "PHP", icon: "file" },
      { name: "Node.js", icon: "hexagon" },
    ],
  },
  {
    category: "Database",
    icon: "database",
    items: [
      { name: "MySQL", icon: "database" },
      { name: "SQL", icon: "table" },
    ],
  },
  {
    category: "Tools",
    icon: "wrench",
    items: [
      { name: "Git", icon: "branch" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "code" },
      { name: "Linux", icon: "terminal" },
    ],
  },
  {
    category: "Other",
    icon: "sparkles",
    items: [
      { name: "Microsoft Office", icon: "file" },
      { name: "Canva", icon: "pen" },
      { name: "Photoshop", icon: "image" },
    ],
  },
];

/* เพิ่ม Project ใหม่ได้ง่าย ๆ โดย copy object ด้านล่างแล้วแก้ข้อมูล */
const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "เว็บไซต์ Portfolio ส่วนตัวสำหรับนำเสนอประวัติ ทักษะ และผลงาน",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Student Management System",
    description: "ระบบจัดการข้อมูลนักเรียน บันทึกและค้นหาข้อมูลได้สะดวก",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "",
    demoUrl: "projects/student-management-system/index.html",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Movie App",
    description: "เว็บไซต์แนะนำและดูข้อมูลภาพยนตร์ ออกแบบด้วย Tailwind CSS",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    image: "",
    demoUrl: "projects/movie-app/index.html",
    githubUrl: "#",
  },
];

const educationData = [
  { school: "โรงเรียนเสลภูมิพิทยาคม", detail: "แผนการเรียน วิทยาศาสตร์-คณิตศาสตร์", period: "มัธยมศึกษาตอนปลาย" },
  { school: "วิทยาลัยอาชีวศึกษาร้อยเอ็ด", detail: "ปวส. 1 สาขาเทคโนโลยีสารสนเทศ", period: "ปัจจุบัน" },
];

const interestsData = [
  { icon: "bot", emoji: "🤖", title: "AI", description: "Artificial Intelligence" },
  { icon: "code", emoji: "💻", title: "Programming", description: "Programming & Software Development" },
  { icon: "globe", emoji: "🌐", title: "Web Development", description: "Frontend & Backend Development" },
  { icon: "rocket", emoji: "🚀", title: "Space", description: "Space & Future Technology" },
  { icon: "gamepad", emoji: "🎮", title: "E-Sport", description: "Gaming & E-Sport" },
  { icon: "trending", emoji: "📈", title: "Investing", description: "Learning about Investment & Financial Markets" },
];
