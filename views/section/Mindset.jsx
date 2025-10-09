import Section from '../components/Section'


const Mindset = () => {
    return (
        <Section>
            <div class="mbl:space-y-4 md:flex">
                <div class="flex gap-x-2">
                    <div class="shrink-0 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h3 class="font-semibold text-blue-700 dark:text-blue-400 transition-colors duration-300">Problem Solver</h3>
                        <p class="text-sm text-slate-700 dark:text-gray-400 transition-colors duration-300">Turning complex challenges into elegant solutions</p>
                    </div>
                </div>
                <div class="flex gap-x-2">
                    <div class="shrink-0 w-12 h-12 bg-gradient-to-r from-orange-300 to-orange-500 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 shrink-0 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                        <h3 class="font-semibold text-orange-600 dark:text-orange-500 transition-colors duration-300">Digital Innovator</h3>
                        <p class="text-sm text-slate-700 dark:text-gray-400 transition-colors duration-300">Building the future, one line of code at a time</p>
                    </div>
                </div>
                <div class="flex gap-x-2">
                    <div class="shrink-0 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <div>
                        <h3 class="font-semibold text-purple-700 dark:text-purple-500 transition-colors duration-300">Continuous Learner</h3>
                        <p class="text-sm text-slate-700 dark:text-gray-400 transition-colors duration-300">Currently mastering Rust and expanding my toolkit</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Mindset

