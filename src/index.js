import snapp from "../snapp.js";

// views/section/Navbar.jsx
var Navbar = () => {
  return /* @__PURE__ */ snapp.create("nav", { class: "fixed top-0" }, "NavBar");
};
var Navbar_default = Navbar;

// views/components/Section.jsx
var Section = ({ id, props }) => {
  return /* @__PURE__ */ snapp.create("section", { id, className: "mt-12 mx-14 md:mx-16 lg:mx-44 " }, props);
};
var Section_default = Section;

// views/components/Button.jsx
var BtnLink2 = ({ props, link, color = "black" }) => {
  const colorMap = {
    blue: "bg-blue-500 border-blue-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.blue.500')]",
    red: "bg-red-500 border-red-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.red.500')]",
    black: "bg-black border-black-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.black')]"
  };
  return /* @__PURE__ */ snapp.create("a", { href: link, class: colorMap[color] + " text-white border rounded px-10 py-3 text-sm cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px]" }, props);
};

// views/components/Socials.jsx
var Github = () => {
  return /* @__PURE__ */ snapp.create("a", { href: "https://github.com/kigemmanuel", target: "_blank", className: "text-black hover:text-black/50 transition-colors" }, /* @__PURE__ */ snapp.create("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ snapp.create("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })));
};
var Facebook = () => {
  return /* @__PURE__ */ snapp.create("a", { href: "https://www.facebook.com/kigemmanuel0", target: "_blank", className: "text-blue-600 hover:text-blue-600/50 transition-colors" }, /* @__PURE__ */ snapp.create("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ snapp.create("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })));
};
var Gmail = () => {
  return /* @__PURE__ */ snapp.create("a", { href: "mailto:kigemmanuel.dev@gmail.com", className: "text-red-600 hover:text-red-600/50 transition-colors" }, /* @__PURE__ */ snapp.create("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ snapp.create("path", { d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" })));
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
  )), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h2", { className: "text-4xl font-bold" }, "Hi, I'm kigemmanuel"), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("p", { className: "font-bold" }, "Software Engineer"), /* @__PURE__ */ snapp.create("p", { className: "mt-5 leading-5" }, "With a strong foundation in both frontend and backend development, I bring ideas to life through clean code and thoughtful design.", /* @__PURE__ */ snapp.create("br", null), /* @__PURE__ */ snapp.create("br", null), "Whether it\u2019s developing modern websites, creating custom frameworks, or automating workflows, I\u2019m passionate about crafting solutions that make a real impact.")))), /* @__PURE__ */ snapp.create("div", { className: "flex flex-wrap gap-4 mt-8  lg:mt-0" }, /* @__PURE__ */ snapp.create(BtnLink2, { link: "", color: "blue" }, "View my stack"), /* @__PURE__ */ snapp.create(BtnLink2, { link: "" }, "Contact me")), /* @__PURE__ */ snapp.create("div", { class: "flex gap-4 mt-8" }, /* @__PURE__ */ snapp.create(Github, { color: "white" }), /* @__PURE__ */ snapp.create(Facebook, { color: "blue" }), /* @__PURE__ */ snapp.create(Gmail, { color: "red" })));
};
var HeroSection_default = HeroSection;

// views/components/Containers.jsx
var TransparentContainer = ({ props, className }) => {
  return /* @__PURE__ */ snapp.create("div", { className: "flex backdrop-blur-xl bg-white/15 rounded-xl items-center p-6 " + className }, /* @__PURE__ */ snapp.create("p", null, props));
};
var FeactureProjectContainer = () => {
  return /* @__PURE__ */ snapp.create("div", { className: "my-8 grid md:gap-4 md:grid-cols-2" }, /* @__PURE__ */ snapp.create("div", { className: "flex relative flex-col justify-between" }, /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h4", null, "Freature Project"), /* @__PURE__ */ snapp.create("h2", null, "Snapp Frmowrk")), /* @__PURE__ */ snapp.create("div", { className: "absolute inset-0 my-auto backdrop-blur-md border border-white/30 bg-white/10 shadow-xl p-5 rounded-2xl md:translate-y-4 md:w-[120%] md:h-min" }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?"), /* @__PURE__ */ snapp.create("div", null, "Icon SVG")), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create(
    "img",
    {
      className: "object-cover rounded-2xl md:w-full md:h-60",
      src: "/assets/snapp.png",
      alt: "Snapp Framwork"
    }
  )));
};

// views/section/AboutMe.jsx
var AboutMe = () => {
  return /* @__PURE__ */ snapp.create(Section_default, null, /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h3", { className: "text-3xl font-bold" }, "Work Experience")), /* @__PURE__ */ snapp.create("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-6 my-4" }, /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-red-500" }, "I build complete web applications from front to back using React, NodeJS, and Express, with a strong focus on security, speed, and creating interfaces that users actually enjoy using."), /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-blue-700" }, "I create sleek, responsive interfaces using React, Snapp, TypeScript, and Tailwind CSS that work flawlessly on any device while keeping the user experience smooth and accessible."), /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-red-500" }, "I develop robust server systems with NodeJS, Express, and PHP, handling everything from secure user authentication to database management that keeps applications running reliably."), /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-purple-500" }, "I build practical Telegram applications that integrate payments, send real-time notifications, and make everyday tasks easier for users directly within their favorite messaging app."), /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-orange-500" }, "I design efficient database systems using MongoDB and MySQL, ensuring your data stays protected with encryption while maintaining quick access and solid performance."), /* @__PURE__ */ snapp.create(TransparentContainer, { className: "text-purple-500" }, "I connect apps to external services like payment processors, social platforms, and cloud tools, making sure data flows securely between different systems without breaking a sweat.")));
};
var AboutMe_default = AboutMe;

// views/section/FeatureProject.jsx
var FeactureProject = () => {
  return /* @__PURE__ */ snapp.create(Section_default, null, /* @__PURE__ */ snapp.create("h2", { className: "text-3xl font-bold" }, "Featured Projects"), /* @__PURE__ */ snapp.create(FeactureProjectContainer, null));
};
var FeatureProject_default = FeactureProject;

// views/index.jsx
var App = () => {
  return /* @__PURE__ */ snapp.create("<>", null, /* @__PURE__ */ snapp.create(Navbar_default, null), /* @__PURE__ */ snapp.create(HeroSection_default, null), /* @__PURE__ */ snapp.create(AboutMe_default, null), /* @__PURE__ */ snapp.create(FeatureProject_default, null));
};
var SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, App());
