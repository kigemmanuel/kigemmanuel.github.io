

const BtnLink = ({props, link, className}) => {
    return (
        <a href={link} class={"bg-gradient-to-r text-black px-8 py-3 rounded-xl font-semibold shadow-md shadow-gray-600 transition-all " + className}>
            {props}
        </a>
    )
}

const BtnLink2 = ({props, link, label, color = "black"}) => {

    const colorMap = {
        blue: "bg-blue-500 border-blue-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.blue.500')]",
        red: "bg-red-500 border-red-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.red.500')]",
        black: "bg-black border-black-500 shadow-[4px_4px_0_0_theme('colors.white'),4px_4px_0_1px_theme('colors.black')]",
    };

    return (
        <a href={link} aria-label={label} class={colorMap[color] + " text-white border rounded px-10 py-3 text-sm cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px]"}>
            {props}
        </a>
    )
}


export {BtnLink, BtnLink2}