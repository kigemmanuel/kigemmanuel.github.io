import { Facebook, Github, Gmail } from "../components/Socials"

const Footer = () => {
    return (
        <div className="bg-black/90 text-gray-400 justify-between mt-10 p-4 md:px-14 mlg:px-20 lg:px-44">
            <div className="grid py-8 md:space-x-8 mbl:space-y-8 grid-cols-1 md:grid-cols-3">
                <div className="space-y-3">
                    <h2 className="text-2xl text-blue-500 font-bold">kigemmanuel</h2>
                    <p className="leading-5 text-sm mbl:max-w-[85%]">
                        Software Engineer passionate about crafting seamless full stack solutions and modern web experiences.
                        <br />
                        Creator of Snapp JS Framework.
                    </p>
                </div>
                <nav className="space-y-3">
                    <h2 className="text-md text-gray-300">Quick Links</h2>
                    <ul className="text-sm space-y-1 text-blue-600">
                        <li><a href="#Feature-project">Feature project</a></li>
                        <li><a href="#Tech-stack">Tech stack</a></li>
                    </ul>
                </nav>
                <div className="space-y-3">
                    <h2 className="text-md text-gray-300">Let's Connect</h2>
                    <div className="flex gap-x-2">
                        <Facebook />
                        <Github />
                        <Gmail />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer