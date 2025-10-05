import Section from "../components/Section";
import { TransparentContainer } from "../components/Containers";


const AboutMe = () => {
    return (
        <Section>
            <div>
                <h3 className="text-3xl font-bold">Work Experience</h3>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 my-4">
                <TransparentContainer className="text-red-500">
                    <article>
                        I build complete web applications from front to back using React, NodeJS, and Express, with a strong focus on security, speed, and creating interfaces that users actually enjoy using.
                    </article>
                </TransparentContainer>
                <TransparentContainer className="text-blue-700">
                    <article>
                        I create sleek, responsive interfaces using React, Snapp, TypeScript, and Tailwind CSS that work flawlessly on any device while keeping the user experience smooth and accessible.
                    </article>
                </TransparentContainer>
                <TransparentContainer className="text-red-500">
                    <article>
                        I develop robust server systems with NodeJS, Express, and PHP, handling everything from secure user authentication to database management that keeps applications running reliably.
                    </article>
                </TransparentContainer>
                <TransparentContainer className="text-purple-700">
                    <article>
                        I build practical Telegram applications that integrate payments, send real-time notifications, and make everyday tasks easier for users directly within their favorite messaging app.
                    </article>
                </TransparentContainer>
                <TransparentContainer className="text-blue-700">
                    <article>
                        I design efficient database systems using MongoDB and MySQL, ensuring your data stays protected with encryption while maintaining quick access and solid performance.
                    </article>
                </TransparentContainer>
                <TransparentContainer className="text-purple-700">
                    <article>
                        I connect apps to external services like payment processors, social platforms, and cloud tools, making sure data flows securely between different systems without breaking a sweat.
                    </article>
                </TransparentContainer>
            </div>
        </Section>
    )
}

export default AboutMe;