
const TransparentContainer = ({props, className}) => {
    return (
        <div className={"flex backdrop-blur-xl bg-white/15 rounded-xl items-center p-6 " + className}>
            <p>{props}</p>
        </div>
    )
}

const FeactureProjectContainer = () => {
    return (
        <article className="my-2 grid md:grid-cols-2">
            <div className="mbl:gap-y-4 mbl:rounded-xl mbl:backdrop-blur-lg mbl:px-5 mbl:py-8 mbl:bg-black/10 flex relative order-2 md:order-1 flex-col justify-between">
                <div>
                    <h2 className="text-xs font-bold text-slate-700">Freature Project</h2>
                    <h4 className="text-xl font-bold text-slate-900">Snapp Frmowrk</h4>
                </div>
                <div className="text-black md:absolute md:inset-0 md:my-auto md:backdrop-blur-md md:border overflow-hidden md:border-white/30 md:bg-blue-600/10 md:shadow-xl md:py-5 md:px-3 md:rounded-2xl md:translate-y-6 md:w-[120%] md:h-min">
                    <div className="font-light pr-2 line-clamp-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?
                    </div>
                </div>
            </div>
            <div className="mbl:hidden md:order-2">
                <img 
                    className="object-cover w-full shadow-md shadow-gray-500 rounded-2xl h-60"
                    src="/assets/snapp.webp"
                    alt="Snapp Framwork"
                    loading="lazy"
                />
            </div>
        </article>
    )
}

const FeactureProjectContainerRight = () => {
    return (
        <article className="my-8 grid md:gap-4 md:grid-cols-2">
            <div className="mbl:gap-y-4 mbl:rounded-xl mbl:backdrop-blur-lg mbl:px-5 mbl:py-8 mbl:bg-black/10 flex relative order-2 flex-col md:justify-between">
                <div className="md:text-right">
                    <h3 className="text-xs font-bold text-slate-700">Freature Project</h3>
                    <h4 className="text-xl font-bold text-slate-900">Snapp Frmowrk</h4>
                </div>
                <div className="text-black md:absolute md:inset-0 md:my-auto md:backdrop-blur-md md:border md:border-white/30 md:bg-blue-600/10 md:shadow-xl md:py-5 md:px-3 md:rounded-2xl md:translate-y-6 md:-translate-x-[15%] md:w-[120%] md:h-min">
                    <div className="pr-2 line-clamp-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo exercitationem, consectetur mollitia veniam sapiente quia quae quidem fugiat ad adipisci soluta odio quibusdam harum eligendi tempore amet quam rerum?
                    </div>
                </div>
            </div>
            <div className="mbl:hidden md:order-1">
                <img 
                    className="object-cover shadow-md shadow-gray-500 rounded-2xl md:w-full md:h-60"
                    src="/assets/snapp.webp"
                    alt="Snapp Framwork"
                    loading="lazy"
                />
            </div>
        </article>
    )
}

const ListTech = ({name, data}) => {
    return (
        <section className='space-y-6'>
          <h3 className='text-xl text-black'>{name}</h3>
          <div className='flex flex-wrap gap-4 mbl:w-[100%] w-[80%]'>
          {data.map((tech, idx) => (
            <div className={"flex items-center gap-2 w-max bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-lg group " + tech.style}>
              <img src={tech.icon} alt={tech.name} loading="lazy" className="w-5 h-5 mbl:w-4 mbl:h-4 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span className={"text-sm font-medium whitespace-nowrap " + tech.textColor}>{tech.name}</span>
            </div>
          ))}
          </div>
        </section>
    )
}

export { 
    TransparentContainer, 
    FeactureProjectContainer, 
    FeactureProjectContainerRight,
    ListTech
 }