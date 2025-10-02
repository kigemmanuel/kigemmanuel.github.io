import { FeactureProjectContainer, FeactureProjectContainerRight } from "../components/Containers"
import Section from "../components/Section"

const FeactureProject = () => {
    return (
        <Section>
            <h2 className="text-3xl font-bold my-4">Featured Projects</h2>
            <div className="flex flex-col md:gap-y-4">
                <FeactureProjectContainer />
                <FeactureProjectContainerRight />
                <FeactureProjectContainer />
                <FeactureProjectContainerRight />
            </div>
        </Section>
    )
}

export default FeactureProject