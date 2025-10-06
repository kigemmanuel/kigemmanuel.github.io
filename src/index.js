import snapp from "./snapp.js";

// views/section/Navbar.jsx
var Navbar = () => {
  return /* @__PURE__ */ snapp.create("nav", { class: "fixed top-0" }, "NavBar");
};
var Navbar_default = Navbar;

// views/components/Section.jsx
var Section = ({ id, props }) => {
  return /* @__PURE__ */ snapp.create("section", { id: id || "", className: "mt-10 mb-4 mx-4 md:mx-14 mlg:mx-20 lg:mx-44" }, props);
};
var Section_default = Section;

// views/components/Button.jsx
var BtnLink = ({ props, link, label, color = "slate" }) => {
  const colorMap = {
    blue: "bg-blue-500 border-blue-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.blue.500')]",
    red: "bg-red-500 border-red-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.red.500')]",
    slate: "bg-slate-500 border-slate-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.slate.500')]"
  };
  return /* @__PURE__ */ snapp.create("a", { href: link, "aria-label": label, class: colorMap[color] + " text-white border rounded px-10 py-3 text-sm cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px]" }, props);
};

// views/components/Socials.jsx
var Github = ({ className }) => {
  return /* @__PURE__ */ snapp.create("a", { href: "https://github.com/kigemmanuel", "aria-label": "GitHub Profile", target: "_blank", className: "w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors " + className }, /* @__PURE__ */ snapp.create("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ snapp.create("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })));
};
var Facebook = ({ className }) => {
  return /* @__PURE__ */ snapp.create("a", { href: "https://www.facebook.com/kigemmanuel0", "aria-label": "Facebook Profile", target: "_blank", className: "w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors " + className }, /* @__PURE__ */ snapp.create("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ snapp.create("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })));
};
var Gmail = ({ className }) => {
  return /* @__PURE__ */ snapp.create("a", { href: "mailto:kigemmanuel.dev@gmail.com", "aria-label": "Mail Address", className: "w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors " + className }, /* @__PURE__ */ snapp.create("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ snapp.create("path", { d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" })));
};

// views/section/HeroSection.jsx
var HeroSection = () => {
  return /* @__PURE__ */ snapp.create(Section_default, { id: "Hero" }, /* @__PURE__ */ snapp.create("div", { className: "flex w-[100%] flex-col mt-28 md:flex-row-reverse md:justify-between md:items-center md:gap-x-20" }, /* @__PURE__ */ snapp.create("div", { className: "mx-auto shrink-0 mb-14 p-2 backdrop-blur-xl bg-gradient-to-br from-orange-500/30 via-purple-500/70 to-blue-700/50 rounded-full" }, /* @__PURE__ */ snapp.create(
    "img",
    {
      src: "/assets/kigemmanuel.webp",
      alt: "kigemmanuel",
      className: "w-48 h-48 object-cover rounded-full md:mb-0"
    }
  )), /* @__PURE__ */ snapp.create("article", { className: "text-slate-900" }, /* @__PURE__ */ snapp.create("h1", { className: "text-4xl font-bold text-slate-900" }, "Hi, I'm kigemmanuel"), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("p", { className: "font-bold text-slate-500" }, "Software Engineer"), /* @__PURE__ */ snapp.create("p", { className: "mt-5 leading-5" }, "With a strong foundation in both frontend and backend development, I bring ideas to life through clean code and thoughtful design.", /* @__PURE__ */ snapp.create("br", null), /* @__PURE__ */ snapp.create("br", null), "Whether it\u2019s developing modern websites, creating custom frameworks, or automating workflows, I\u2019m passionate about crafting solutions that make a real impact.")))), /* @__PURE__ */ snapp.create("div", { className: "flex flex-wrap gap-4 mt-8  lg:mt-0" }, /* @__PURE__ */ snapp.create(BtnLink, { link: "#Tech-stack", label: "Tech Stack", color: "blue" }, "View my stack"), /* @__PURE__ */ snapp.create(BtnLink, { link: "", label: "Mail Address", color: "slate" }, "Contact me")), /* @__PURE__ */ snapp.create("div", { class: "flex gap-4 mt-8" }, /* @__PURE__ */ snapp.create(Github, { color: "white" }), /* @__PURE__ */ snapp.create(Facebook, { color: "blue" }), /* @__PURE__ */ snapp.create(Gmail, { color: "red" })));
};
var HeroSection_default = HeroSection;

// views/components/Containers.jsx
var TransparentContainer = ({ props, className }) => {
  return /* @__PURE__ */ snapp.create("div", { className: "flex backdrop-blur-xl bg-white/15 rounded-xl items-center p-6 " + className }, /* @__PURE__ */ snapp.create("p", null, props));
};
var FeactureProjectContainer = () => {
  return /* @__PURE__ */ snapp.create("article", { className: "my-2 grid md:grid-cols-2" }, /* @__PURE__ */ snapp.create("div", { className: "mbl:gap-y-4 mbl:rounded-xl mbl:backdrop-blur-lg mbl:px-5 mbl:py-8 mbl:bg-black/10 flex relative order-2 md:order-1 flex-col justify-between" }, /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h2", { className: "text-xs font-bold text-slate-700" }, "Freature Project"), /* @__PURE__ */ snapp.create("h4", { className: "text-xl font-bold text-slate-900" }, "Snapp Frmowrk")), /* @__PURE__ */ snapp.create("div", { className: "text-black md:absolute md:inset-0 md:my-auto md:backdrop-blur-md md:border overflow-hidden md:border-white/30 md:bg-blue-600/10 md:shadow-xl md:py-5 md:px-3 md:rounded-2xl md:translate-y-6 md:w-[120%] md:h-min" }, /* @__PURE__ */ snapp.create("div", { className: "font-light mbl:max-h-48 md:h-28 lg:h-32 pr-2 scroll-bar overflow-y-auto" }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?"))), /* @__PURE__ */ snapp.create("div", { className: "mbl:hidden md:order-2" }, /* @__PURE__ */ snapp.create(
    "img",
    {
      className: "object-cover w-full shadow-md shadow-gray-500 rounded-2xl h-60",
      src: "/assets/snapp.webp",
      alt: "Snapp Framwork",
      loading: "lazy"
    }
  )));
};
var FeactureProjectContainerRight = () => {
  return /* @__PURE__ */ snapp.create("article", { className: "my-8 grid md:gap-4 md:grid-cols-2" }, /* @__PURE__ */ snapp.create("div", { className: "mbl:gap-y-4 mbl:rounded-xl mbl:backdrop-blur-lg mbl:px-5 mbl:py-8 mbl:bg-black/10 flex relative order-2 flex-col md:justify-between" }, /* @__PURE__ */ snapp.create("div", { className: "md:text-right" }, /* @__PURE__ */ snapp.create("h3", { className: "text-xs font-bold text-slate-700" }, "Freature Project"), /* @__PURE__ */ snapp.create("h4", { className: "text-xl font-bold text-slate-900" }, "Snapp Frmowrk")), /* @__PURE__ */ snapp.create("div", { className: "text-black md:absolute md:inset-0 md:my-auto md:backdrop-blur-md md:border md:border-white/30 md:bg-blue-600/10 md:shadow-xl md:py-5 md:px-3 md:rounded-2xl md:translate-y-6 md:-translate-x-[15%] md:w-[120%] md:h-min" }, /* @__PURE__ */ snapp.create("div", { className: "mbl:max-h-48 md:h-28 lg:h-32 pr-2 scroll-bar overflow-y-auto" }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?"))), /* @__PURE__ */ snapp.create("div", { className: "mbl:hidden md:order-1" }, /* @__PURE__ */ snapp.create(
    "img",
    {
      className: "object-cover shadow-md shadow-gray-500 rounded-2xl md:w-full md:h-60",
      src: "/assets/snapp.webp",
      alt: "Snapp Framwork",
      loading: "lazy"
    }
  )));
};
var ListTech = ({ name, data }) => {
  return /* @__PURE__ */ snapp.create("section", { className: "space-y-6" }, /* @__PURE__ */ snapp.create("h3", { className: "text-xl text-black" }, name), /* @__PURE__ */ snapp.create("div", { className: "flex flex-wrap gap-4 mbl:w-[100%] w-[80%]" }, data.map((tech, idx) => /* @__PURE__ */ snapp.create("div", { className: "flex items-center gap-2 w-max bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-lg group " + tech.style }, /* @__PURE__ */ snapp.create("img", { src: tech.icon, alt: tech.name, loading: "lazy", className: "w-5 h-5 mbl:w-4 mbl:h-4 object-contain group-hover:scale-110 transition-transform duration-300" }), /* @__PURE__ */ snapp.create("span", { className: "text-sm font-medium whitespace-nowrap " + tech.textColor }, tech.name)))));
};

// views/section/AboutMe.jsx
var AboutMe = () => {
  return /* @__PURE__ */ snapp.create(Section_default, null, /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h2", { className: "text-3xl font-bold text-slate-900" }, "Work Experience")), /* @__PURE__ */ snapp.create("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-6 my-4" }, /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-red-500" }, /* @__PURE__ */ snapp.create("article", null, "I build complete web applications from front to back using React, NodeJS, and Express, with a strong focus on security, speed, and creating interfaces that users actually enjoy using.")), /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-blue-700" }, /* @__PURE__ */ snapp.create("article", null, "I create sleek, responsive interfaces using React, Snapp, TypeScript, and Tailwind CSS that work flawlessly on any device while keeping the user experience smooth and accessible.")), /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-red-500" }, /* @__PURE__ */ snapp.create("article", null, "I develop robust server systems with NodeJS, Express, and PHP, handling everything from secure user authentication to database management that keeps applications running reliably.")), /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-purple-700" }, /* @__PURE__ */ snapp.create("article", null, "I build practical Telegram applications that integrate payments, send real-time notifications, and make everyday tasks easier for users directly within their favorite messaging app.")), /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-blue-700" }, /* @__PURE__ */ snapp.create("article", null, "I design efficient database systems using MongoDB and MySQL, ensuring your data stays protected with encryption while maintaining quick access and solid performance.")), /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-purple-700" }, /* @__PURE__ */ snapp.create("article", null, "I connect apps to external services like payment processors, social platforms, and cloud tools, making sure data flows securely between different systems without breaking a sweat."))));
};
var AboutMe_default = AboutMe;

// views/section/FeatureProject.jsx
var FeactureProject = () => {
  return /* @__PURE__ */ snapp.create(Section_default, { id: "Feature-project" }, /* @__PURE__ */ snapp.create("h2", { className: "text-3xl font-bold my-4 text-slate-900" }, "Featured Projects"), /* @__PURE__ */ snapp.create("div", { className: "flex flex-col md:gap-y-4" }, /* @__PURE__ */ snapp.create(FeactureProjectContainer, null), /* @__PURE__ */ snapp.create(FeactureProjectContainerRight, null), /* @__PURE__ */ snapp.create(FeactureProjectContainer, null), /* @__PURE__ */ snapp.create(FeactureProjectContainerRight, null)));
};
var FeatureProject_default = FeactureProject;

// views/section/Mindset.jsx
var Mindset = () => {
  return /* @__PURE__ */ snapp.create(Section_default, null, /* @__PURE__ */ snapp.create("div", { class: "mbl:space-y-4 md:flex" }, /* @__PURE__ */ snapp.create("div", { class: "flex gap-x-2" }, /* @__PURE__ */ snapp.create("div", { class: "shrink-0 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ snapp.create("svg", { class: "w-6 h-6 shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ snapp.create("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }))), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h3", { class: "font-semibold text-blue-700" }, "Problem Solver"), /* @__PURE__ */ snapp.create("p", { class: "text-slate-700 text-sm" }, "Turning complex challenges into elegant solutions"))), /* @__PURE__ */ snapp.create("div", { class: "flex gap-x-2" }, /* @__PURE__ */ snapp.create("div", { class: "shrink-0 w-12 h-12 bg-gradient-to-r from-orange-300 to-orange-500 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ snapp.create("svg", { class: "w-6 h-6 shrink-0 text-black", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ snapp.create("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M13 10V3L4 14h7v7l9-11h-7z" }))), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h3", { class: "font-semibold text-orange-600" }, "Digital Innovator"), /* @__PURE__ */ snapp.create("p", { class: "text-slate-700 text-sm" }, "Building the future, one line of code at a time"))), /* @__PURE__ */ snapp.create("div", { class: "flex gap-x-2" }, /* @__PURE__ */ snapp.create("div", { class: "shrink-0 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ snapp.create("svg", { class: "w-6 h-6 shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ snapp.create("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }))), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h3", { class: "text-purple-700 font-semibold" }, "Continuous Learner"), /* @__PURE__ */ snapp.create("p", { class: "text-slate-700 text-sm" }, "Currently mastering Rust and expanding my toolkit")))));
};
var Mindset_default = Mindset;

// views/section/TechStack.jsx
var frontend = [
  { name: "HTML5", textColor: "text-red-400", style: "hover:border-red-400/50 hover:shadow-red-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", textColor: "text-blue-400", style: "hover:border-blue-500/50 hover:shadow-blue-500/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", textColor: "text-yellow-400", style: "hover:border-yellow-400/50 hover:shadow-yellow-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Snapp", textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: "/assets/snapp-transparent.webp" },
  { name: "React", textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
];
var backend = [
  { name: "Node.js", textColor: "text-green-400", style: "hover:border-green-400/50 hover:shadow-green-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", textColor: "text-black-400", style: "hover:border-black/50 hover:shadow-black/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "PHP", textColor: "text-purple-900", style: "hover:border-purple-900/50 hover:shadow-purple-800/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MySQL", textColor: "text-blue-400", style: "hover:border-blue-500/50 hover:shadow-blue-500/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", textColor: "text-green-400", style: "hover:border-green-400/50 hover:shadow-green-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
];
var tools = [
  { name: "Git", textColor: "text-red-400", style: "hover:border-red-400/50 hover:shadow-red-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", textColor: "text-gray-400", style: "hover:border-gray-400/50 hover:shadow-gray-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Windows", textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
  { name: "Vercel", textColor: "text-gray-400", style: "hover:border-gray-400/50 hover:shadow-gray-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "NPM", textColor: "text-red-400", style: "hover:border-red-400/50 hover:shadow-red-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "REST API", textColor: "text-emerald-400", style: "hover:border-emerald-400/50 hover:shadow-emerald-400/40", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" }
];
var mastering = [
  { name: "Rust", textColor: "text-gray-400", style: "hover:border-gray-400/50 hover:shadow-gray-400/20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" }
];
var interest = [
  {
    name: "Blockchain",
    textColor: "text-orange-400",
    style: "hover:border-orange-400/50 hover:shadow-orange-400/20"
  },
  {
    name: "AI",
    textColor: "text-green-400",
    style: "hover:border-green-400/50 hover:shadow-green-400/20"
  },
  {
    name: "Web3",
    textColor: "text-purple-400",
    style: "hover:border-purple-400/50 hover:shadow-purple-400/20"
  },
  {
    name: "DeFi",
    textColor: "text-cyan-400",
    style: "hover:border-cyan-400/50 hover:shadow-cyan-400/20"
  },
  {
    name: "Solidity",
    textColor: "text-gray-400",
    style: "hover:border-gray-400/50 hover:shadow-gray-400/20"
  },
  {
    name: "NFTs",
    textColor: "text-pink-400",
    style: "hover:border-pink-400/50 hover:shadow-pink-400/20"
  }
];
var TechStack = () => {
  return /* @__PURE__ */ snapp.create(Section_default, { id: "Tech-stack" }, /* @__PURE__ */ snapp.create("h2", { className: "text-3xl font-bold my-4 text-slate-900" }, "Tech Stack"), /* @__PURE__ */ snapp.create("div", { className: "md:grid mbl:space-y-8 p-4 pt-8 md:grid-cols-3 rounded-xl bg-black/60 backdrop-blur-lg" }, /* @__PURE__ */ snapp.create(ListTech, { name: "Frontend", data: frontend }), /* @__PURE__ */ snapp.create("div", { className: "mbl:h-[1px] mbl:w-full mbl:mx-auto bg-black md:h-full md:w-[1px] md:mx-auto" }), " ", /* @__PURE__ */ snapp.create(ListTech, { name: "Backend", data: backend }), /* @__PURE__ */ snapp.create("div", { className: "md:mt-8 w-full col-span-3 space-y-4 bg-black/70 p-4 py-6 rounded-xl" }, /* @__PURE__ */ snapp.create("section", { className: "space-y-2" }, /* @__PURE__ */ snapp.create("h3", { className: "text-white" }, "Tools"), /* @__PURE__ */ snapp.create("div", { className: "flex gap-4 flex-wrap" }, tools.map((tool) => /* @__PURE__ */ snapp.create("div", { className: "flex items-center gap-2 w-max bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-lg group " + tool.style }, /* @__PURE__ */ snapp.create("img", { src: tool.icon, alt: tool.name, loading: "lazy", className: "w-4 h-4 object-contain group-hover:scale-110 transition-transform duration-300" }), /* @__PURE__ */ snapp.create("span", { className: "text-xs font-medium whitespace-nowrap " + tool.textColor }, tool.name))), /* @__PURE__ */ snapp.create("div", { className: "flex items-center gap-2 w-max bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-lg group hover:border-gray-400/50 hover:shadow-gray-400/20" }, /* @__PURE__ */ snapp.create("span", { className: "text-xs text-gray-400 font-medium whitespace-nowrap" }, "....ETC")))), /* @__PURE__ */ snapp.create("section", { className: "space-y-2" }, /* @__PURE__ */ snapp.create("h3", { className: "text-red-400" }, "Mastering"), /* @__PURE__ */ snapp.create("div", { className: "flex gap-4 flex-wrap" }, mastering.map((tool) => /* @__PURE__ */ snapp.create("div", { className: "flex items-center gap-2 w-max bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-lg group " + tool.style }, /* @__PURE__ */ snapp.create("img", { src: tool.icon, alt: tool.name, loading: "lazy", className: "w-4 h-4 object-contain group-hover:scale-110 transition-transform duration-300" }), /* @__PURE__ */ snapp.create("span", { className: "text-xs font-medium whitespace-nowrap " + tool.textColor }, tool.name))))), /* @__PURE__ */ snapp.create("section", { className: "space-y-2" }, /* @__PURE__ */ snapp.create("h3", { className: "text-blue-400" }, "Interests"), /* @__PURE__ */ snapp.create("div", { className: "flex gap-4 flex-wrap" }, interest.map((tool) => /* @__PURE__ */ snapp.create("div", { className: "flex items-center gap-2 w-max bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-lg group " + tool.style }, /* @__PURE__ */ snapp.create("span", { className: "text-xs font-medium whitespace-nowrap " + tool.textColor }, tool.name))))))));
};
var TechStack_default = TechStack;

// views/section/Footer.jsx
var Footer = () => {
  return /* @__PURE__ */ snapp.create("div", { className: "bg-black/90 text-gray-400 justify-between mt-10 p-4 md:px-14 mlg:px-20 lg:px-44" }, /* @__PURE__ */ snapp.create("div", { className: "grid py-8 md:space-x-8 mbl:space-y-8 grid-cols-1 md:grid-cols-3" }, /* @__PURE__ */ snapp.create("div", { className: "space-y-3" }, /* @__PURE__ */ snapp.create("h2", { className: "text-2xl text-blue-500 font-bold" }, "kigemmanuel"), /* @__PURE__ */ snapp.create("p", { className: "leading-5 text-sm mbl:max-w-[85%]" }, "Software Engineer passionate about crafting seamless full stack solutions and modern web experiences.", /* @__PURE__ */ snapp.create("br", null), "Creator of Snapp JS Framework.")), /* @__PURE__ */ snapp.create("nav", { className: "space-y-3" }, /* @__PURE__ */ snapp.create("h2", { className: "text-md text-gray-300" }, "Quick Links"), /* @__PURE__ */ snapp.create("ul", { className: "text-sm space-y-1 text-blue-600" }, /* @__PURE__ */ snapp.create("li", null, /* @__PURE__ */ snapp.create("a", { href: "#Feature-project" }, "Feature project")), /* @__PURE__ */ snapp.create("li", null, /* @__PURE__ */ snapp.create("a", { href: "#Tech-stack" }, "Tech stack")))), /* @__PURE__ */ snapp.create("div", { className: "space-y-3" }, /* @__PURE__ */ snapp.create("h2", { className: "text-md text-gray-300" }, "Let's Connect"), /* @__PURE__ */ snapp.create("div", { className: "flex gap-x-2" }, /* @__PURE__ */ snapp.create(Facebook, null), /* @__PURE__ */ snapp.create(Github, null), /* @__PURE__ */ snapp.create(Gmail, null)))));
};
var Footer_default = Footer;

// views/index.jsx
var App = () => {
  return /* @__PURE__ */ snapp.create("<>", null, /* @__PURE__ */ snapp.create("header", null, /* @__PURE__ */ snapp.create(Navbar_default, null)), /* @__PURE__ */ snapp.create("main", null, /* @__PURE__ */ snapp.create(HeroSection_default, null), /* @__PURE__ */ snapp.create(AboutMe_default, null), /* @__PURE__ */ snapp.create(Mindset_default, null), /* @__PURE__ */ snapp.create(FeatureProject_default, null), /* @__PURE__ */ snapp.create(TechStack_default, null)), /* @__PURE__ */ snapp.create("footer", null, /* @__PURE__ */ snapp.create(Footer_default, null)));
};
var SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, App());
