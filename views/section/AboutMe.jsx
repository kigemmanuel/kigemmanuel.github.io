import Section from "../components/Section";
import { TransparentContainer } from "../components/Containers";


const AboutMe = () => {
    return (
        <Section>
            <div>
                <h3 className="text-3xl font-bold Preahvihear">Work Experience</h3>
            </div>
            <div className="Preahvihear grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
                <TransparentContainer className="text-red-500">
                    I build complete web applications from front to back using React, NodeJS, and Express, with a strong focus on security, speed, and creating interfaces that users actually enjoy using.
                </TransparentContainer>
                <TransparentContainer className="text-blue-700">
                    I create sleek, responsive interfaces using React, Snapp, TypeScript, and Tailwind CSS that work flawlessly on any device while keeping the user experience smooth and accessible.
                </TransparentContainer>
                <TransparentContainer className="text-red-500">
                    I develop robust server systems with NodeJS, Express, and PHP, handling everything from secure user authentication to database management that keeps applications running reliably.
                </TransparentContainer>
                <TransparentContainer className="text-purple-500">
                    I build practical Telegram applications that integrate payments, send real-time notifications, and make everyday tasks easier for users directly within their favorite messaging app.
                </TransparentContainer>
                <TransparentContainer className="text-orange-500">
                    I design efficient database systems using MongoDB and MySQL, ensuring your data stays protected with encryption while maintaining quick access and solid performance.
                </TransparentContainer>
                <TransparentContainer className="text-purple-500">
                    I connect apps to external services like payment processors, social platforms, and cloud tools, making sure data flows securely between different systems without breaking a sweat.
                </TransparentContainer>
            </div>
        </Section>
    )
}

export default AboutMe;