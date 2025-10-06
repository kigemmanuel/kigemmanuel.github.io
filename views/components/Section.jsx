
const Section = ({id, props}) => {

    return (
        <section id={id || ""} className="mt-10 mb-4 mx-4 md:mx-14 mlg:mx-20 lg:mx-44">
            {props}
        </section>
    )

}

export default Section