
const Popup = ({showPopup, popupInfo}) => {
 
    const backdropStyle = {
      opacity: () => showPopup.value ? 1 : 0,
      pointerEvents: () => showPopup.value ? 'auto' : 'none',
      transition: 'opacity 0.3s ease'
    };

    const popupStyle = {
      opacity: () => showPopup.value ? 1 : 0,
      translate: () => showPopup.value ? '0 -50%' : '0 0',
      scale: () => showPopup.value ? '1' : '0.95',
      transition: 'all 0.3s ease-out',
      pointerEvents: () => showPopup.value ? 'auto' : 'none'
    };

    return (
        <div>
            <div
                style={backdropStyle}
                className="fixed inset-0 bg-black bg-opacity-50 z-20"
                onClick={() => showPopup.update(false)}
            >
            </div>
            <div style={popupStyle} className="fixed md:w-96 w-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-0 lg:left-auto lg:-translate-x-0 lg:right-5 shadow-lg flex flex-col rounded-xl z-50 bg-white dark:bg-slate-800 transition-colors duration-300">
                <div className="p-6 border-b dark:border-slate-900 duration-300">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-gray-200 transition-colors duration-300">{() => popupInfo.value.head}</h2>
                </div>
                <div className="p-6 h-80 overflow-y-auto scroll-bar text-slate-900 dark:text-gray-200 transition-colors duration-300">
                    {() => popupInfo.value.message}
                </div>
                <div className="p-4 border-t dark:border-slate-900 text-right duration-300">
                    <button
                        onClick={() => showPopup.update(false)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                    Got it!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Popup