
import snapp from '../../src/snapp'
import ThemeIcon from '../components/ThemeIcon'

const Navbar = () => {

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const themeDark = snapp.dynamic(prefersDark)

  const updateTheme = () => {
      if (themeDark.value)
        return document.documentElement.classList.add('dark');
      
      if (!themeDark.value)
        return document.documentElement.classList.remove('dark');
  }

  // updateTheme() 

    return (
      <nav className="fixed top-0 w-full z-50" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between backdrop-blur-2xl bg-white/70 dark:bg-slate-900/70 border border-white/20 dark:border-white/10 duration-300 shadow-xl p-2 px-4 mt-3 rounded-xl mb-4 mx-4 md:mx-14 mlg:mx-20 lg:mx-44">
          <div className='flex items-center'>
            <a href="#" className="text-lg text-slate-900 dark:text-gray-100 transition-colors duration-300" aria-label="Home">kigemmanuel</a>
          </div>
          <div className='flex gap-x-2 items-center'>
            <div>
              <ThemeIcon themeDark={themeDark} updateTheme={updateTheme} />
            </div>
            <a 
              href="https://github.com/kigemmanuel"
              target="_blank"
              aria-label="GitHub profile" 
              title="Visit GitHub"
              className="flex text-center bg-gray-200 p-2 rounded-full"
            >
              <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
