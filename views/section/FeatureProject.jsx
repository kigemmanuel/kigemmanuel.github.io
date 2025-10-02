import { FeactureProjectContainer } from "../components/Containers"
import Section from "../components/Section"

const FeactureProject = () => {
    return (
        <Section>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <FeactureProjectContainer />
        </Section>
    )
}

export default FeactureProject