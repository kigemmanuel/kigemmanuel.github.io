export default function TechStack() {
  const frontend = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
  ];

  const backend = [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
  ];

  const tools = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
    { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { name: 'REST API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Tech <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with to bring ideas to life</p>
        </div>

        {/* Main Content - Single Container */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
          
          {/* Frontend & Backend Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            
            {/* Frontend */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
                <h3 className="text-2xl font-bold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {frontend.map((tech, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-lg px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white font-medium whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
                <h3 className="text-2xl font-bold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {backend.map((tech, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 rounded-lg px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white font-medium whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Environment */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded"></div>
              <h3 className="text-2xl font-bold text-white">Tools & Environment</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {tools.map((tech, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 rounded-lg px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 group"
                >
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-medium whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}