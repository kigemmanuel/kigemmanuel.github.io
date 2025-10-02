import Section from "../components/Section"
import { BtnLink, BtnLink2 } from "../components/Button"
import { Github, Facebook, Gmail } from "../components/Socials"

const HeroSection = () => {
    return (
      <Section id="Hero">
        <div className="flex w-[100%] flex-col mt-28 md:flex-row-reverse md:justify-between md:items-center md:gap-x-20">
          <div className="mx-auto shrink-0 mb-14 p-2 backdrop-blur-xl bg-gradient-to-br from-orange-500/30 via-purple-500/70 to-blue-700/50 rounded-full">
            <img 
              src="/assets/kigemmanuel.webp"
              alt="kigemmanuel"
              className="w-48 h-48 object-cover rounded-full md:mb-0" 
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold">Hi, I'm kigemmanuel</h2>
            <div>
              <p className="font-bold">Software Engineer</p>
              <p className="mt-5 leading-5">
                With a strong foundation in both frontend and backend development, I bring ideas to life through clean code and thoughtful design.
                <br /><br />
                Whether it’s developing modern websites, creating custom frameworks, or automating workflows, I’m passionate about crafting solutions that make a real impact.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8  lg:mt-0">
          <BtnLink2 link="" color="blue">View my stack</BtnLink2>
          <BtnLink2 link="" >Contact me</BtnLink2>
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