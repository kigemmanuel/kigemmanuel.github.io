
const TransparentContainer = ({props, className}) => {
    return (
        <div className={"flex backdrop-blur-xl bg-white/15 rounded-xl items-center p-6 " + className}>
            <p>{props}</p>
        </div>
    )
}

const FeactureProjectContainer = () => {
    return (
        <div className="my-8 grid md:gap-4 md:grid-cols-2">
            <div className="flex relative flex-col justify-between">
                <div>
                    <h4>Freature Project</h4>
                    <h2>Snapp Frmowrk</h2>
                </div>
                <div className="absolute inset-0 my-auto backdrop-blur-md border border-white/30 bg-white/10 shadow-xl p-5 rounded-2xl md:translate-y-4 md:w-[120%] md:h-min">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?
                </div>
                <div>
                    Icon SVG
                </div>
            </div>
            <div>
                <img 
                    className="object-cover rounded-2xl md:w-full md:h-60"
                    src="/assets/snapp.png"
                    alt="Snapp Framwork"
                />
            </div>
        </div>
    )
}

export { TransparentContainer, FeactureProjectContainer }