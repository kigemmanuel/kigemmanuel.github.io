import Section from "../components/Section"
import { BtnLink } from "../components/Button"
import { Github, Facebook, Gmail } from "../components/Socials"

// Use class not className so i can easily put it on my html file!
const HeroSection = () => {
    return (
      <Section id="Hero">
        <div class="flex w-[100%] flex-col mt-28 md:flex-row-reverse md:justify-between md:items-center md:gap-x-20">
          <div class="mx-auto shrink-0 mb-14 p-2 backdrop-blur-xl bg-gradient-to-br from-orange-500/30 via-purple-500/70 to-blue-700/50 rounded-full">
            <img 
              src="/assets/kigemmanuel.webp"
              alt="kigemmanuel"
              class="w-48 h-48 object-cover rounded-full md:mb-0" 
            />
          </div>
          <article class="text-slate-900">
            <h1 class="text-4xl font-bold text-slate-900">Hi, I'm kigemmanuel</h1>
            <div>
              <p class="font-bold text-slate-700">Software Engineer</p>
              <p class="mt-5 leading-5">
                With a strong foundation in both frontend and backend development, I bring ideas to life through clean code and thoughtful design.
                <br /><br />
                Whether it’s developing modern websites, creating custom frameworks, or automating workflows, I’m passionate about crafting solutions that make a real impact.
              </p>
            </div>
          </article>
        </div>

        <div className="flex flex-wrap gap-4 mt-8  lg:mt-0">
          <BtnLink link="#Tech-stack" label="Tech Stack" color="blue">View my stack</BtnLink>
          <BtnLink link="mailto:kigemmanuel.dev@gmail.com" label="Mail Address" color="slate">Contact me</BtnLink>
        </div>

        <div class="flex gap-4 mt-8">
          <Github color="white" />
          <Facebook color="blue" />
          <Gmail color="red" />
        </div>
      </Section>
    )
}

export default HeroSection