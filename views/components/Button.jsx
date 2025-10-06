
const BtnLink = ({props, link, label, color = "slate"}) => {

    const colorMap = {
        blue: "bg-blue-500 border-blue-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.blue.500')]",
        red: "bg-red-500 border-red-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.red.500')]",
        slate: "bg-slate-500 border-slate-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.slate.500')]", 
    };

    return (
        <a href={link} aria-label={label} class={colorMap[color] + " text-white border rounded px-10 py-3 text-sm cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px]"}>
            {props}
        </a>
    )
}


export { BtnLink }