import { ListTech } from '../components/Containers';
import Section from '../components/Section'

  const frontend = [
    { name: 'HTML5', textColor: "text-red-400", style: "hover:border-red-400/50 hover:shadow-red-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', textColor: "text-blue-400", style: "hover:border-blue-500/50 hover:shadow-blue-500/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', textColor: "text-yellow-400", style: "hover:border-yellow-400/50 hover:shadow-yellow-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Snapp', textColor: "text-blue-800", style: "hover:border-blue-800/50 hover:shadow-blue-800/20", icon: '/assets/snapp-transparent.png' },
    { name: 'React', textColor: "text-blue-400", style: "hover:border-blue-400/50 hover:shadow-blue-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
  ];

  const backend = [
    { name: 'Node.js', textColor: "text-green-400", style: "hover:border-green-400/50 hover:shadow-green-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', textColor: "text-black-400", style: "hover:border-black/50 hover:shadow-black/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'PHP', textColor: "text-purple-800", style: "hover:border-purple-800/50 hover:shadow-purple-800/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'MySQL', textColor: "text-blue-400", style: "hover:border-blue-500/50 hover:shadow-blue-500/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', textColor: "text-green-400", style: "hover:border-green-400/50 hover:shadow-green-400/20", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
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

const TechStack = () => {
    return (
        <Section id="Tech-stack">
          <h2 className="text-3xl font-bold my-4">Tech Stack</h2>
          <div className='md:grid mbl:space-y-8 p-8 md:grid-cols-3 rounded-xl bg-black/60 backdrop-blur-lg'>
            <ListTech name="Frontend" data={frontend} />
            <div className='mbl:h-[1px] mbl:w-full mbl:mx-auto bg-black md:h-full md:w-[1px] md:mx-auto'></div> {/* line */}
            <ListTech name="Backend" data={backend} />
          </div>
        </Section>
    )
}

export default TechStack