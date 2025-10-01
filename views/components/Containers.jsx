
const TransparentContainer = ({props, className}) => {
    return (
        <div className={"flex relative backdrop-blur-xl bg-white/15 rounded-xl items-center p-6 " + className}>
            <p>{props}</p>
        </div>
    )
}

export { TransparentContainer }