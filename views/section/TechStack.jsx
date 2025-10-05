import { ListTech } from '../components/Containers';
import Section from '../components/Section'

  const frontend = [
    { name: 'HTML5', textColor: "text-red-400", style: "hover:border-red-400/50 hover:shadow-red-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', textColor: "text-blue-400", style: "hover:border-blue-500/50 hover:shadow-blue-500/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', textColor: "text-yellow-400", style: "hover:border-yellow-400/50 hover:shadow-yellow-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Snapp', textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: '/assets/snapp-transparent.webp' },
    { name: 'React', textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
  ];

  const backend = [
    { name: 'Node.js', textColor: "text-green-400", style: "hover:border-green-400/50 hover:shadow-green-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', textColor: "text-black-400", style: "hover:border-black/50 hover:shadow-black/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'PHP', textColor: "text-purple-900", style: "hover:border-purple-900/50 hover:shadow-purple-800/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'MySQL', textColor: "text-blue-400", style: "hover:border-blue-500/50 hover:shadow-blue-500/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', textColor: "text-green-400", style: "hover:border-green-400/50 hover:shadow-green-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
  ];

  const tools = [
    { name: 'Git', textColor: "text-red-400", style: "hover:border-red-400/50 hover:shadow-red-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', textColor: "text-gray-400", style: "hover:border-gray-400/50 hover:shadow-gray-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Windows', textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
    { name: 'Vercel', textColor: "text-gray-400", style: "hover:border-gray-400/50 hover:shadow-gray-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
    { name: 'NPM', textColor: "text-red-400", style: "hover:border-red-400/50 hover:shadow-red-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { name: 'REST API', textColor: "text-emerald-400", style: "hover:border-emerald-400/50 hover:shadow-emerald-400/40", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' }
  ];

  const mastering = [
    { name: 'Rust', textColor: "text-gray-400", style: "hover:border-gray-400/50 hover:shadow-gray-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg' }
  ]

  const interest = [
    { 
      name: 'Blockchain', 
      textColor: "text-orange-400", 
      style: "hover:border-orange-400/50 hover:shadow-orange-400/20", 
    },
    { 
      name: 'AI', 
      textColor: "text-green-400", 
      style: "hover:border-green-400/50 hover:shadow-green-400/20", 
    },
    { 
      name: 'Web3', 
      textColor: "text-purple-400", 
      style: "hover:border-purple-400/50 hover:shadow-purple-400/20", 
    },
    { 
      name: 'DeFi', 
      textColor: "text-cyan-400", 
      style: "hover:border-cyan-400/50 hover:shadow-cyan-400/20", 
    },
    { 
      name: 'Solidity', 
      textColor: "text-gray-400", 
      style: "hover:border-gray-400/50 hover:shadow-gray-400/20", 
    },
    { 
      name: 'NFTs', 
      textColor: "text-pink-400", 
      style: "hover:border-pink-400/50 hover:shadow-pink-400/20", 
    }
  ]

const TechStack = () => {
    return (
        <Section id="Tech-stack">
          <h2 className="text-3xl font-bold my-4">Tech Stack</h2>
          <div className='md:grid mbl:space-y-8 p-8 px-6 md:grid-cols-3 rounded-xl bg-black/60 backdrop-blur-lg'>
            <ListTech name="Frontend" data={frontend} />
            <div className='mbl:h-[1px] mbl:w-full mbl:mx-auto bg-black md:h-full md:w-[1px] md:mx-auto'></div> {/* line */}
            <ListTech name="Backend" data={backend} />
            
            <div className='md:mt-8 w-full col-span-3 space-y-4 bg-black/70 p-4 py-6 rounded-lg'>
              <section className='space-y-2'>
                <h3 className='text-white'>Tools</h3>
                <div className='flex gap-4 flex-wrap'>
                  {tools.map(tool => (
                  <div className={"flex items-center gap-2 w-max bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-lg group " + tool.style}>
                    <img src={tool.icon} alt={tool.name} loading="lazy" className="w-4 h-4 object-contain group-hover:scale-110 transition-transform duration-300" />
                    <span className={"text-xs font-medium whitespace-nowrap " + tool.textColor}>{tool.name}</span>
                  </div>
                  ))}
                  <div className="flex items-center gap-2 w-max bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-lg group hover:border-gray-400/50 hover:shadow-gray-400/20">
                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">....ETC</span>
                  </div>
                </div>
              </section>
              <section className='space-y-2'>
                <h3 className='text-red-400'>Mastering</h3>
                <div className='flex gap-4 flex-wrap'>
                  {mastering.map(tool => (
                  <div className={"flex items-center gap-2 w-max bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-lg group " + tool.style}>
                    <img src={tool.icon} alt={tool.name} loading="lazy" className="w-4 h-4 object-contain group-hover:scale-110 transition-transform duration-300" />
                    <span className={"text-xs font-medium whitespace-nowrap " + tool.textColor}>{tool.name}</span>
                  </div>
                  ))}
                </div>
              </section>
              <section className='space-y-2'>
                <h3 className='text-blue-400'>Interests</h3>
                <div className='flex gap-4 flex-wrap'>
                  {interest.map(tool => (
                  <div className={"flex items-center gap-2 w-max bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-lg group " + tool.style}>
                    <span className={"text-xs font-medium whitespace-nowrap " + tool.textColor}>{tool.name}</span>
                  </div>
                  ))}
                </div>
              </section>
            </div>

          </div>
        </Section>
    )
}

export default TechStack